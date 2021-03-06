import React from 'react';

const list = [
  {
    title: 'React',
    url: 'http://reactjs.org/',
    author: 'Jordan Walke',
    nus_comments: 3,
    point: 4,
    objectID: 0,
},
{
title:'Redux',
url:'https://redux.js.org/',
author:'Dan Abramov, Andrew Clark',
num_comments: 2,
points:5,
objectID:1,
}
];
const welcome = {
  greeting: 'Hey',
 title: 'React',
}

const App = () =>  {
  const stories = [ ... ];

    const [search, setSearchTerm] = React.useState('');

    const handleChange = event => { 
      setSearchTerm(event.target.value);
    };

  return (
    <div>
      <h1> My Hacker Stories </h1>

      <label htmlFor='Search'> Search: </label>
      <input id='search' type='text' onChange={handleChange} />

      <p>
        Searching for <strong>{searchTerm}</strong>.
      </p>
      
      <hr />

      <List list={stories}/>
    </div>
  ); 
}; 

    const List = props => 
      props.list.map(item =>(
          <div key ={item.objectID}>
            <span>
              <a href= {item.url}>{item.item} </a>
            </span>
            <span>{item.author} </span>
            <span>{item.num_comments} </span>
            <span>{item.points} </span>
      </div>
     ));