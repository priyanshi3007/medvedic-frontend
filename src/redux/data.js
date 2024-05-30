import { createSlice } from "@reduxjs/toolkit"

const Data = createSlice({
    name: "Render",
    initialState: {
        Render: {
            Name:'name',
            Email:'email Address',
            Mobile:'mobile Number',
            Age:'age',
            Dob:'dob',
            Height:'height',
            Weight:'weight',
            Result:{
                "MedicineName": "Loading",
                "MainIngredients": "Loading",
                "CommonlyUsedforDiseases": "Loading",
                "AlternateAllopathicDrugName": "Loading",
                "HomeRemedies": "Loading",
                "Dosage": "Loading",
                "DietChart": "Loading",
                "YogaNames": "Loading"
            },
            mname:"Loading"
        }
    },
    reducers: {
        addData: (state, action) => {
            state.Render = action.payload.Data;
        }
    }
})

export const { addData } = Data.actions;
export default Data.reducer;