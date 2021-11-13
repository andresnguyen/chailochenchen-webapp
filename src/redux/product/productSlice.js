import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApi from "../../api/productApi";

export const getAll = createAsyncThunk("product/getAll", async (payload, { dispatch }) => {
  try {
    setIsLoading(true);
    const { data, pagination } = await productApi.getAll({
      ...payload,
      limit: 10000,
    });
    dispatch(setIsLoading(false));
    return data;
  } catch (error) {
    dispatch(setIsLoading(false));
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    products: [],
    product: {},
    isLoading: true,
  },
  reducers: {
    logout(state) {},
    setIsLoading(state, action) {
      console.log(action);
      state.isLoading = action.payload;
    },
  },
  extraReducers: {
    [getAll.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const { logout, setIsLoading } = actions;
export default reducer;
