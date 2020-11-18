import React from 'react';

const welcome = {
  greeting: 'Hey',
 title: 'React',
}
function App() {
  return (
    <div className="App">
      <h1> Hello World</h1>
      <label htmlFor='search'>Search: </label>
      <input id='Search' type='text'/>
    </div>
  );
}

export default App;
