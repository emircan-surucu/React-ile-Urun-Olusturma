// modal pencerenin açık veya kapalı durumunu yönetir.
import { createSlice } from '@reduxjs/toolkit'

//Başlangıç durumu.(Pencere kapalıdır.)
const initialState = {
  modal: false
}

//slice bir uygulamanın durumunu yönetmek için
//createSlice fonksiyonu kullanılarak bir slice oluşturulur. Bu fonksiyon oto olarak action ve reducer'ı oluşturur
export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    // Bu eylem modal pencerenin açık veya kapalı olduğunu tersine çevirmek için kullanılır.
    modalFunc: (state) => {
        state.modal = !state.modal
    }
  }
})

export const {modalFunc} = modalSlice.actions

export default modalSlice.reducer