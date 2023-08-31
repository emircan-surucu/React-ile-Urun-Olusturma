// Redux store ve buraya erişmek için kullanılan actionsları tanımlayan bir slice oluşturur.

import { createSlice } from '@reduxjs/toolkit'

// Başlangıç durumu
const initialState = {
  data: [],
  keyword: ""
}

//createSlice fonksiyonu kullanarak bir redux veri kesiti oluşturulur. Bu fonksiyon oto olarak eylemleri ve reducer'ı oluşturur
export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    // Yeni bir veri oluşturmak için kullanılır. Mevcut state.data dizisine action.payload eklenir.
    createDataFunc: (state, action) => {
        state.data = [...state.data, action.payload]
    },
    // Verileri sıralamak için kullanılır. action.payload değerine göre verileri asc veya desc sırayla sıralar.
    sortingDataFunc: (state, action) => {
        state.data = [...state.data.sort((a,b) => action.payload == "asc" ? a.price - b.price : action.payload == "desc" ? b.price - a.price : null)]
    },
    // Veriyi silmek için kullanılır. action.payload olarak verilen id değerine sahip veriyi state.data dizisinden filtreler.
    deleteDataFunc: (state, action) => {
        state.data = [...state.data.filter(dt => dt.id != action.payload)]
    },
    // Veriyi güncellemek için kullanılır. action.payload olarak verilen yeni veri ilgili id'ye sahip veri ile değiştirilir.
    updateDataFunc: (state, action) => {
        state.data = [...state.data.map(dt => dt.id != action.payload.id ? ({...dt, ...action.payload}) : dt)]
    },
    // Anahtar kelime araması yapmak için kullanılır. action.payload olarak gelen anahtar kelimeyi state.keyword alanına atar
    searchDataFunc: (state, action) => {
        state.keyword = action.payload
    }
  }
})

export const {createDataFunc, sortingDataFunc, deleteDataFunc, updateDataFunc, searchDataFunc} = dataSlice.actions

export default dataSlice.reducer