import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Home() {
  const [url, setUrl] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [list,setList] = useState([]);

  const validateUrl=(url)=>{
    const regEx=
    /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
    return regEx.test(url);
  };

  const handleOnChange=(e) => {
    setUrl(e.target.value);
    setIsValid(validateUrl(e.target.value));
  };


  const handleAnalyse=(e)=> {
    e.preventDefault();
    const data = {url}
    if(url) {
      setList((ls) => [...ls,data])
      setUrl("")
  
    }
  };

  return (
    <div className="home-container text-center">
        <div className="mb-3 mt-5">
            <h1><strong>Silverlight</strong></h1>
        </div>
       <div>
       <form>
         <div className="d-grid" size="lg">
         <input
            className="me-5 ms-5 mt-1"
            id="url"
            type="text"
            label="URL"
            placeholder="URL want to be checked"
            value={url}
            onChange={handleOnChange}
          />
         </div>
          <div className="d-grid mb-3 me-5 ms-5 mt-2">
          <Button 
          variant="primary" 
          size="lg"
          onClick={handleAnalyse}
          disabled={!isValid}
          >
            Analyse
          </Button>
          </div>
        </form>
       <div>
       <h2 className="mt-12 text-lg font-semibold mb-4">Analysis Targets</h2>
       <div>
       {list.map((el) =>  {
        return(
          <div className="flex bg-slate-300 mb-2 p-4">
            <div className="flex">
            <a href={el.url} target="_blank">
                {el.url}
            </a>
                <div className="ml-auto">View More</div>
            </div>
          </div>
        )
       }
          )}
       </div>
       </div>
       </div>
      </div>
  )
  
}


export default Home;