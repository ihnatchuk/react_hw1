import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState =
    {
        cars: [],
        carForUpdate: null,
        loading: null,
        errors: null

    };

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await carService.getAll()
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, thunkAPI) => {
        try {
            await carService.create(car)
            thunkAPI.dispatch(getAll())

        } catch (e) {
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const deleteById = createAsyncThunk(
    'carSlice/deleteById',
    async ({id}, thunkAPI) => {
        try {
            await carService.delete(id)
            thunkAPI.dispatch(getAll())

        } catch (e) {
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id,car}, thunkAPI) => {
        try {
            await carService.update(id,car)
            thunkAPI.dispatch(getAll())

        } catch (e) {
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
)



const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate:(state, action)=>{
            state.carForUpdate=action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
})

const {reducer: carReducer, actions:{setCarForUpdate}} = carSlice;

const carActions = {
    getAll,
    create,
    deleteById,
    setCarForUpdate,
    updateById
}

export {
    carReducer,
    carActions
}