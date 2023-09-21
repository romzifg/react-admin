import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name: 'global',
    initialState: {
        menuDisplay: '',
        isDark: false,
        sideIsActive: 'dashboard_menu',
    },
    reducers: {
        changeMenuDisplay: (state, action) => {
            state.menuDisplay = action.payload
        },
        changeDarkTheme: (state, action) => {
            state.isDark = action.payload
        },
        changeSideActive: (state, action) => {
            state.sideIsActive = action.payload
        }
    }
})

export const { changeMenuDisplay, changeDarkTheme, changeSideActive } = globalSlice.actions
export default globalSlice.reducer