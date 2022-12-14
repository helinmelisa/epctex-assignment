import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const AnalysisCard = ({id,url,status}) => {
  return (
    <div>
      <Card>
      <a
          className="underline text-sm sm:text-base"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {url}
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