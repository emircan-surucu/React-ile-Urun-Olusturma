//ürünleri listeleyen kısım

import { useState } from "react"
import {BiDotsHorizontal} from "react-icons/bi"
import { useDispatch } from "react-redux"
import { deleteDataFunc, updateDataFunc } from "../redux/dataSlice"
import { modalFunc } from "../redux/modalSlice"
import { useNavigate } from "react-router-dom"

const ProductCard = ({dt}) => {

    const [openEdit, setOpenEdit] = useState(false)//ürün kartının üzerine tıklanıp tıklanmadığı
    const dispatch = useDispatch() // Redux store'a eylemler göndermek için kullanılır.
    const navigate = useNavigate() // Belli URL'lere yönlendirme

    //Güncelle seçeneğine tıklandığında çalışır.
    const updateFunc = () => {
        dispatch(modalFunc())//Modal penceresini açmak için modalFunc Redux'a gönderilir.
        setOpenEdit(false) //Düzenleme seçenekleri kapatılır
        navigate(`/?update${dt?.id}`) //URL güncellenir
        //dispatch(updateDataFunc(dt));
    }

  return (
    <div className="w-[200px] h-[200px] relative rounded-md m-2">
      <img src={dt?.url} className="w-full h-full absolute rounded-2xl"/>
        <div className="absolute left-0 bottom-0 bg-green-900 text-white rounded-2xl w-full px-2 text-center justify-center flex items-center">
            <div className="text-lg font-semibold ">{dt?.name}</div>
            <div className="mx-2">{dt?.price}$</div>
        </div>
        <div onClick={() => setOpenEdit(!openEdit) } className="absolute top-0 right-2">
            <BiDotsHorizontal color="black" size={30}/>
        </div>
        {
            openEdit && (
                <div className="bg-blue-700 border-white text-white font-bold absolute top-5 right-2 p-2 text-sm">
                    <div onClick={() => dispatch(deleteDataFunc(dt?.id))} className="cursor-pointer">Sil</div>
                    <div onClick={updateFunc} className="cursor-pointer">Güncelle</div>
                </div>
            )
        }
    </div>
    
  )
}

export default ProductCard
