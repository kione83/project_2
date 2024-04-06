import react from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';
import Item from './Item';

const Main = () => {

    return(
        <div id="main-container">
           //insert the first item from Item.js here
            <Item />

        </div>
    )
}
