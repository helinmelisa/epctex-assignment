import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import AnalysisList from './AnalysisList';

const AnalysisCard = (data) => {


  return (
    <div>
      <Card>
      <a
          className="underline text-sm sm:text-base"
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.url}
        </a>
        <div>
          <div className="ml-auto relative">
          <Link to={'/analysis/:{id}'}>
           View More
          </Link>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default AnalysisCard;