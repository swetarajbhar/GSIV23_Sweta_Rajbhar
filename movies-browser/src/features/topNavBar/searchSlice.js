import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API_URLS from '../../constants/API_URLS';
import axios from "axios";

const initialState = {
  searchValue: "",
  movieData: [],
  isLoading: false,
  error: null,
  page: 1,
  totalPages: 0,
};

const params = { api_key: "5ed97102244a2891b686b35648affdfa" };

export const searchMovies = createAsyncThunk(
  "movies/searchMovies",
  async (queryObj) => {
    const { page, searchValue } = queryObj;
    if (page !== "") params.page = page;
    if (searchValue !== "") params.query = searchValue;
    const res = await axios(`${API_URLS.BASE_URL}${API_URLS.MOVIE_SEARCH}`, {
      params,
    });
    const data = {
      list: res.data?.results ?? [],
      totalPages: res.data?.total_pages ?? 0,
    };
    return data;
  }
);

export const fetchAllMovies = createAsyncThunk(
  "movies/fetchAllMovies",
  async (page = 1) => {
    if (page !== "") params.page = page;
    const res = await axios(`${API_URLS.BASE_URL}${API_URLS.MOVIE_LIST}`, {
      params,
    });
    const data = (await res.data?.results) ?? [];
    const totalPages = res.data?.total_pages ?? 0;
    return { data, totalPages }; // Return both data and totalPages
  }
);


export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    onSearchChange: (state, action) => {
      state.searchValue = action.payload;
      state.page = 1;
      state.movieData = [];
    },
    incrementPage: (state) => {
      if (state.totalPages >= state.page) state.page = state.page + 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchMovies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(searchMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      if (state.page === 1) {
        state.movieData = action.payload;
        state.movieData = action.payload.list;
        state.totalPages = action.payload.totalPages;
      } else {
        state.movieData = [ ...state.movieData, ...action.payload.list,];
      }
    });
    builder.addCase(searchMovies.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // fetch all data
    builder.addCase(fetchAllMovies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movieData = [...state.movieData, ...action.payload.data];
      state.totalPages = action.payload.totalPages; // Update totalPages with action.payload.totalPages
    });
    builder.addCase(fetchAllMovies.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

// Action creators are generated for each case reducer function
export const { onSearchChange, incrementPage } = searchSlice.actions;

export default searchSlice.reducer;
