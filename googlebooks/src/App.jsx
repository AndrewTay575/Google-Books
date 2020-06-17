import React, {useState} from 'react';
import {InputGroup, Input, InputGroupAddon, Button} from 'reactstrap'
import './App.css';

function App() {
  const {maxResults, setMaxResults} = useState(10)
  const {startIndex, setStartIndex} = useState(1)
  const {query, setQuery} = useState(' ')
  const mainheader = () => {
    return (
      <div classname = 'main-image d-flex justify-content-center align-items-center flex-column'>
        {/* Overlay */}
        <div classname = "filter"></div>
        <h1 classname = 'display-2 text-center text-white mb-3' style = {{zIndex: 2}}>
          Google Books
        </h1>
        <div style = { { width:'60%', zIndex: 2} }>
          <InputGroup size = '1g' classname = 'mb-3'>
            <Input placeholder = 'Book Search' value = { query } onChange={ e=> setQuery(e.target.value) } /> 
            <InputGroupAddon addonType = 'append'>
            <Button color = 'secondary' onClick = {handleSubmit}>
              <i className = 'fas fa-search'></i>
            </Button>
          </InputGroupAddon>
          </InputGroup>
          <div className = "d-flex text-white justify-content-center">
            <FormGroup className = 'ml-5'>
              <Label for = 'maxResults'>Max Results</Label>
              <Input type= 'number' id = 'maxResults' placeholder = 'Max Results' value = {maxResults} onChange={ e=> setMaxResults(e.target.value) }/>
            </FormGroup>
            <FormGroup className = 'ml-5'>
              <Label for = 'startIndex'>Start Index</Label>
              <Input type= 'number' id = 'startIndex' placeholder = 'Start Index' value = {startIndex} onChange={ e=> setStartIndex(e.target.value) }/>
            </FormGroup>  
          </div>
          
        </div>
      </div>
    )
  }
  return (
    <div >
      {mainheader()}
    </div>
  ); 
}

export default App;
