import React, { Component } from "react";
import Button from 'react-bootstrap/Button';

class UrlComponent extends Component {
  state = {
    URL: "",
    isTrueVal: false
  };
  urlPatternValidation = URL => {
    const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');    
    return regex.test(URL);
  };
  changeUrl = event => {
    const { value } = event.target;
    const isTrueVal = !value || this.urlPatternValidation(value);
    this.setState({
      URL: value,
      isTrueVal
    });
  };
  onSubmit = () => {
    const { URL } = this.state;
    console.log("Here is the site url: ", URL);
  };
  render() {
    const { isTrueVal, URL } = this.state;
    return (
      <div className="text-center">
        <div className="mb-3 mt-5">
            <h1><strong>Silverlight</strong></h1>
        </div>
       <div>
       <form>
         <div className="d-grid" size="lg">
         <input
            className="me-5 ms-5 mt-1"
            id="URL"
            type="text"
            name="URL"
            placeholder="URL want to be checked"
            value={URL}
            onChange={this.changeUrl}
          />
         </div>
          <div className="d-grid mb-3 me-5 ms-5 mt-2">
          <Button 
          variant="primary" 
          size="lg"
          onClick={this.onSubmit} 
          disabled={!isTrueVal}>
            Analyse
          </Button>
          </div>
        </form>
       </div>
      </div>
    );
  }
}

export default UrlComponent;