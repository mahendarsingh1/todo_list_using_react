import React, { useState } from "react";
import Heading from './Heading';
import Lists from './Lists';
import Form from './Form'


function App() {

  const [arr, setArr] = useState([]);

  function handleSubmit(inp) {
    setArr(prev => [...prev, inp])
  }

  function deleteList(id) {
    setArr(prev => prev.filter((item, i) => i !== id))
  }

  return (
    <div className="container">
      <Heading />
      <Form onSubmit={handleSubmit} />
      <Lists array={arr} delete={deleteList} />
    </div>
  );
}

export default App;
