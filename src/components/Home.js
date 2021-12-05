import React from "react";

function Home() {
    return (
        <div>
            <div className="add-to-cart">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg"/>

            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://cdn.vox-cdn.com/thumbor/YFnb9mlx_bEgPzQHjvvLAY0QRc0=/0x0:2040x1360/920x613/filters:focal(877x866:1203x1192):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66397697/akrales_181019_3014_0770.0.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>I-Phone</span>
                    <span>Price: $1000</span>
                </div>
                <div className="btn-wrapper item">
                    <button> Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home