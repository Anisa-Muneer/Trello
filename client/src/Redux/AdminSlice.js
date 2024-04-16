import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    adminInfo: {},
};

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setAdmindetails: (state, action) => {
            state.adminInfo = action.payload.adminInfo
        },
        Logoutdetails: (state, action) => {
            state.adminInfo = {}
        }
    }
})

export const {

    setAdmindetails,
    Logoutdetails

} = adminSlice.actions;

export default adminSlice.reducer;