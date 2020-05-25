import React from 'react';
import logo from './logo.svg';
import './App.css';


const welcome = {
  greeting: "Hello",
  title: "Cosmo"
};

const arr = [1,2,3,4,5];

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];
function App() {
  
  return (
    <div>
        <h1>
        {welcome.greeting} {welcome.title}
        </h1>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" />

        <h2>Array:</h2>
        <ul>
          { list.map((item) =>  <li key={item.objectID}><a href={item.url}>{item.author}</a></li>) }
        </ul>

        <ul>
          X: { list.map((item) =>  null) }
        </ul>

        <List />

    </div>
  );
}

const List = () => 
  list.map( item => (
      <div key={item.objectID}>x
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </div>
  ));

export default App;
