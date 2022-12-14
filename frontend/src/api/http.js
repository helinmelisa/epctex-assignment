import axios from "axios";
const apiEndpoint = "http://localhost:5000/analysis";

export const getAnalysis = async () => await axios.get(apiEndpoint);

export const getAnalysisDetail = async (id) => 
   await axios.get(`${apiEndpoint}${id}`);

export const createAnalysis = async (analysis) => await axios.post(apiEndpoint,analysis);