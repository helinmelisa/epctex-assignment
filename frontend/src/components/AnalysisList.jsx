import React , { useState } from 'react';
import { useSelector } from 'react-redux';
import AnalysisCard from './AnalysisCard';

const AnalysisList = () => {

  const analysis = useSelector(state => state.analysis.analysis);
  
  return (
    <>
     {analysis.length > 0 && 
          analysis.map((item) => (
         <div key={item?.id}>
            <AnalysisCard {...item} />
          </div>
     ))}
    </>
  )
}

export default AnalysisList;