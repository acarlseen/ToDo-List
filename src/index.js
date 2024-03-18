import React from 'react';
import ReactDOM from 'react-dom/client'; // might want to delete '/client'
import App from './App';

// Below is the default syntax from creating a React project

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// Below is the Coding Temple version
// it works the same, but is likely out of date for best practices
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);