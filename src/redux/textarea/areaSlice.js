import { createSlice } from "@reduxjs/toolkit";

export const areaSlice = createSlice({
  name: "textarea",
  initialState: {
    items: [{ title: "Her şey burda", color:"yellow"},{title:"Burda dedik daaa", color:"black"}],
  },
  reducers: {
      addText:(state,action)=>{
          state.items.push(action.payload)
    
      },
      getTexts:(state,action)=>{
          state.items=action.payload
          
      }
  },
});
export default areaSlice.reducer;
export const {addText,getTexts}=areaSlice.actions;
