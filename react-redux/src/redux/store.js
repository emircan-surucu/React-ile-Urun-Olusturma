//Bu kod Toolkit kullanarak bir Redux store oluşturur. Redux store, uygulamanızın durumunu yönetmek için kullanılır ve birden fazla veri kesiti (slice) üzerinde çalışabilir. 
import { configureStore } from '@reduxjs/toolkit'
//Bu slicelar store'un farklı parçalarını temsil eder
import dataSlice from './dataSlice'
import modalSlice from './modalSlice'

//Yapılandırma nesnesi
export const store = configureStore({
  //Store'un durumunu yöneten reducer'ları belirtir
  reducer: {
    data: dataSlice,
    modal: modalSlice
  },
})