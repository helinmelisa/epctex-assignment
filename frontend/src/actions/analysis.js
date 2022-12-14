import * as api from "../api/http";
import * as types from "./types";

export const getAnalysis = () => async (dispatch) => {
   try {
     const { data } = await api.getAnalysis();
     dispatch({
        type: types.GET_ANALYSIS,
        payload: data,
     })
   } catch (error) {
     console.log(error);
   }
};

export const getAnalysisDetail = (id) => async (dispatch) => {
  try {
    const { data } = await api.getAnalysisDetail(id);
    dispatch({
       type: types.GET_ANALYSIS_DETAIL,
       payload: data,
    })
  } catch (error) {
    console.log(error);
  }
};

export const createAnalysis = (analysis) => async (dispatch) => {
    try {
        const { data } = await api.createAnalysis(analysis);
        dispatch({
        type: types.CREATE_ANALYSIS,
        payload: data
        })
    } catch (error) {
        console.log(error);
    }
};

