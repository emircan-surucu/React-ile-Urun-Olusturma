//Web sayfasının üst kısmı

import {IoMdAddCircle} from "react-icons/io"
import { useDispatch } from "react-redux"
import { modalFunc } from "../redux/modalSlice"
import { searchDataFunc, sortingDataFunc } from "../redux/dataSlice"

const Header = () => {

    const dispatch = useDispatch() //redux store'a eylemler göndermek için kullanılır.

  return (
    <div className="flex items-center justify-center gap-10 bg-pink-900 text-white px-4 py-3 text-center h-20">
      <div className="text-3xl font-serif">ÜRÜN EKLEME UYGULAMASI</div>
      <div className="flex items-center gap-5">
        <div className="text-black">
            <select onChange={e => dispatch(sortingDataFunc(e.target.value))} className="h-10 rounded-lg font-bold bg-slate-300" name="" id="">
                <option value="asc">ARTAN</option>
                <option value="desc">AZALAN</option>
            </select>
        </div>
        <div>
            <input onChange={e => dispatch(searchDataFunc(e.target.value))} className="h-10 rounded-lg px-4 text-black font-bold bg-slate-300" type="text" placeholder="Arama Yapınız.."/>
        </div>
        <div onClick={() => dispatch(modalFunc())} className="bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
            <IoMdAddCircle size={60}/>
        </div>
      </div>
    </div>
  )
}

export default Header
