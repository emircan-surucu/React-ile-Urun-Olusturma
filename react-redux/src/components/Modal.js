import {GrClose} from "react-icons/gr"
import { useDispatch } from "react-redux"
import { modalFunc } from "../redux/modalSlice";


const Modal = ({title, content, btnText, btnFunc}) => {

    const dispatch = useDispatch();

    return (
    <div className='fixed top-0 left-0 bottom-0 right-0 w-full h-screen flex items-center justify-center'>
        <div className='w-1/3 bg-white shadow-lg rounded-md p-4'>
            <div className='border-b py-3 flex items-center justify-between'>
                <div className='text-2xl'>{title}</div>
                {/*Kapatma işlevi onClick olayı ile tetiklenir ve modalFunc işlevi Redux store'a gönderilir. */}
                <GrClose size={24} onClick={() => dispatch(modalFunc())}/>
            </div>
            {content}
            {/* Modal içeriği, content prop'u ile dışarıdan gelir ve modal pencerenin ana içeriğini temsil eder.*/}
        </div>
    </div>
  )
}

export default Modal