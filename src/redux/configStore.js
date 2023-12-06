// tạo ra storage để lưu trữ dữ liệu
import { configureStore } from '@reduxjs/toolkit'
import BaiTapDatVeReducer from './reducer/BaiTapDatVeReducer'
// store là kho lưu trữ chứa các reducer con
export const store = configureStore({

    reducer: {
        BaiTapDatVeReducer
    }
})