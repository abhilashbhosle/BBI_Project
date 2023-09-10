import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    data:[],
    loading:false,
    error:null,
    car_detail:{}
}

export const get_data=createAsyncThunk('data/car_manufacturers',async ()=>{
    try{
        const response=await axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json')
        return response.data
    }catch(error){
        throw error
    }
})
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    cardetail: (state,action) => {  
        state.car_detail=action.payload
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(get_data.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(get_data.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(get_data.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const {cardetail} = dataSlice.actions
export default dataSlice.reducer;








