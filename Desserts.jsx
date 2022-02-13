import React, { useState, useEffect } from 'react'
import axios from './axios.mjs'
import Fooddata from './Fooddata'
import Navbar from './Navbar'
import Checkout from './Checkout'
import Total from './Total'

export default function Desserts() {
    return (
        <main>
            <Navbar />
            <h1 className="ital">Desserts</h1>
            <div className="italian_section">
                <div className="italian_main">
                    {Fooddata.map((item) => {
                        return (
                            item.category === "Desserts" && <div className="card2">
                                <img src={item.imgsrc} alt={item.imgsrc} className="menu" />
                                <h1 className="name">{item.title}</h1>
                                <p className="desc">{item.desc}</p>
                                <h3 className="price">Rs {item.price}</h3>
                                <button className="add" onClick={async() => {
                                   await axios.post('/cart', {
                                        imgsrc : item.imgsrc,
                                        title  : item.title,
                                        desc   : item.desc,
                                        price  : item.price,
                                    })
                                }}>Add to Cart</button>
                            </div>
                        )
                    })}
                </div>
                <div className="cards_total">
                <div className="main_total">
                        <Checkout />
                    <Total />
                </div>
            </div>
            </div>

        </main>
    )
}

