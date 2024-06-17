import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  abcd: "", 
  number: 10
 
};

export const themeSlice = createSlice({  
  name: "theme",  

  initialState: initialStateValue,   
  reducers: { 
    changeTextColor: (state, action) => {  
      state.color = action.payload;  
    },  

    changeNumber: state => {
      state.number += 1
    },

    toogleChange: (state, action) => {  
      state.toogle = action.payload;  
    }, 

  },  
});  


export const { changeTextColor, changeNumber, toogleChange } = themeSlice.actions; 

export default themeSlice.reducer; 