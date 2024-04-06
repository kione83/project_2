import react from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import images from '../images';

//we want to create image cards for each image in the images folder

const Item = () => {
    return(
        <div id="item-container">
            {images.map((image, index) => {
                return (
                    <div key={index} className="item">
                        <img src={image} alt="item" />
                    </div>
                )
            })}
        </div>
    )
}

export default Item;
