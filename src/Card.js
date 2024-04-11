import React from 'react'

function Card(){

    let products = {
        "soda":[
            {
                name: "pepsi",
                price: 1.99,
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Pepsi_2023.svg/1200px-Pepsi_2023.svg.png"
            },
            {
                name: "coke",
                price: 1.99,
                image: "https://www.allrecipes.com/thmb/8TZ8GpqK9b2O-Zv7wAJSmkPGf1k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-coca-cola-logo-4x3-02edef9a3b03456b9c8fb5525eea0537.jpg"
            },
            {
                name: "7up",
                price: 1.99,
                image: "https://kittieskitchen.com/wp-content/uploads/2021/05/7_Up_Logo.png"
            },
            {
                name: "sprite",
                price: 1.99,
                image: "https://seeklogo.com/images/S/sprite-logo-0FD1748C65-seeklogo.com.png"
            },
            {
                name: "fanta",
                price: 1.99,
                image: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Fanta_2023.svg"
            },
            {
                name: "mountain dew",
                price: 1.99,
                image: "https://tee-luv.com/cdn/shop/products/39029FLAT_1200x1200.jpg?v=1585741395"
            },
            {
                name: "dr pepper",
                price: 1.99,
                image: "https://www.tshaonline.org/images/handbook/entries/DD/dr_pepper_logo.jpg"
            },
            {
                name: "root beer",
                price: 1.99,
                image: "https://upload.wikimedia.org/wikipedia/commons/0/06/A%26W_Root_Beer_logo.svg"
            },
            {
                name: "mug",
                price: 1.99,
                image: "https://mariasofcarney.online/cdn/shop/products/image_grande.png?v=1613519823"
            }
            // "7up",
            // "sprite",
            // "fanta",
            // "mountain dew",
            // "dr pepper",
            // "root beer",
            // "mug",

        ]
    }
    return(
        <div>
            <h1>Products</h1>
             <div id='parent-container' >
            
                {products.soda.map((soda, index) => (
            <div className='product-card' key={index}><img className="soda-image" src={soda.image}/><span className='soda-price'>${soda.price}</span></div>
         ))}
        </div>
        </div>
    )
}


export default Card