import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name: 'global',
    initialState: {
        menuDisplay: '',
        isDark: false
    },
    reducers: {
        changeMenuDisplay: (state, action) => {
            state.menuDisplay = action.payload
        },
        changeDarkTheme: (state, action) => {
            state.isDark = action.payload
        }
    }
})

export const { changeMenuDisplay, changeDarkTheme } = globalSlice.actions
export default globalSlice.reducer