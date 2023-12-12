import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const name ="SAME NGUYEN";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 React.createElement("h1",{style:{textAlign:"center"}},name)
);


