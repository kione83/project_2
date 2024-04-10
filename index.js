let products = {
    "soda":[
        "pepsi",
        "coke",
        "7up"
    ]
    }
    

function renderCard(){
    return(
        <div className="product-card">
            {products["soda"].values}
        </div>
    )
}


let cards = () => products.map(renderCard)
