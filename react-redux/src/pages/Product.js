import { useDispatch, useSelector } from "react-redux"
import ProductCard from "../components/ProductCard"
import Modal from "../components/Modal"
import Input from "../components/Input"
import Button from "../components/Button"
import { useEffect, useState } from "react"
import { createDataFunc, updateDataFunc } from "../redux/dataSlice"
import { modalFunc } from "../redux/modalSlice"
import { useLocation, useNavigate } from "react-router-dom"

const Product = () => {

    const {modal} = useSelector(state => state.modal) //redux store'dan modal durumunu alır. Bu durum, modal penceresinin açık veya kapalı olduğunu kontrol eder.
    const {data, keyword} = useSelector(state => state.data)//redux store'dan data ve keyword durumlarını alır. data, ürün verilerini içerirken keyword, arama terimini temsil eder.
    const dispatch = useDispatch()
    const location = useLocation() // mevcut URL yi alır.
    const navigate = useNavigate() // Sayfa yönlendirme işlevi
    const [productInfo, setProductInfo] = useState({name: "", price: "", url: ""}) // Ürün bilgilerini saklamak için bir yerel durum değişkeni oluşturulur. Başlangıçta, boş bir ürün bilgisiyle başlar.


    //Giriş alanlarının veya dosya yüklemesinin değerleri değiştiğinde çalışan bir işleve sahiptir.
    const onChangeFunc = (e, type) => {

        if(type == "url") {
            setProductInfo(prev => ({...prev, [e.target.name]: URL.createObjectURL(e.target.files[0])}))
        }else{
            setProductInfo(prev => ({...prev, [e.target.name]: e.target.value}))
        }
    }

    let loc = location?.search.split("=")[1] //URL'den alınan loc değeri eğer varsa belirli bir ürünü güncellemek amacıyla kullanılır.

    //loc değeri değiştiğinde çalışır. loc değeriyle eşleşen ürün bilgilerini productInfoya yükler
    useEffect(() => {

        if(loc){
            setProductInfo(data.find(dt=> dt.id == loc))
        }
    },[loc])


    // Ürün Eklemek için kullanılır.
    const buttonFunc = () => {

        {/*Bu eylem Store'a güncel ürün bilgilerini gönderir ve modal penceresini kapatır.*/}
        dispatch(createDataFunc({...productInfo, id: data.length +1}))
        dispatch(modalFunc());
    }


    //Ürün Güncellemek için kullanılır.
    const buttonUpdateFunc = () => {
        {/*Store'a güncel ürün bilgilerini gönderir, modal penceresini kapatır ve anasayfaya yönlendirir. */}
        dispatch(updateDataFunc({...productInfo, id: loc}))
        dispatch(modalFunc());
        navigate("/")
    } 

    // Modal içeriğini temsil eder.
    const contentModal = (
        <>
            <Input value={productInfo.name} type={"text"} placeholder={"Ürün Ekle"} name={"name"} id={"name"} onChange={e => onChangeFunc(e, "name")}/>
            <Input value={productInfo.price} type={"text"} placeholder={"Fiyat Ekle"} name={"price"} id={"price"} onChange={e => onChangeFunc(e, "price")}/>
            <Input type={"file"} placeholder={"Resim Seç"} name={"url"} id={"url"} onChange={e => onChangeFunc(e, "url")}/>
            <Button btnText={loc ? "Ürün Güncelle" : "Ürün Oluştur"} onClick={loc ? buttonUpdateFunc : buttonFunc}/>
        </>
    )

    // keyword değerine göre filtrelenmiş ürünleri içerir.
    const filteredItems = data.filter(dt => dt.name.toLowerCase().includes(keyword))



    //Ürün kartları filteredItems kullanılarak listelenir. Her bir ürün ProductCard tarafından temsil edilir.
  return (
    <div>
        <div className="flex items-center flex-wrap">
            {
                filteredItems?.map((dt,i) => (
                    <ProductCard key={i} dt={dt}/>
                ))
            }
        </div>
        {/*Modal durumu true ise Modal görüntülenir. Modal içeriği contentModal tarafından sağlanır ve başlık ayarlanır.*/}
      {modal && <Modal content={contentModal} title={ loc ? "Ürün Güncelle" : "Ürün Oluştur"}/>}
    </div>
  )
}

export default Product
