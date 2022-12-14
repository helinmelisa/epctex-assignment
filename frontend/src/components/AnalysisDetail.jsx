import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getAnalysisDetail } from "../actions/analysis";

const AnalysisDetail = ({ match, history, location }) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    
    const currentAnalysis = useSelector(state => state.analysis.currentAnalysis);

    useEffect(() => {
       dispatch(getAnalysisDetail(id));
    }, [dispatch])

    return (
    <div>
        <h1>Results of {currentAnalysis?.url} </h1>
        <h5>Page Count: {currentAnalysis?.pageCount}</h5>
        <div>
            {currentAnalysis?.technologies}
        </div>
    </div>
  )
}

export default AnalysisDetail;