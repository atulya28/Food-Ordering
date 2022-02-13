import React, { useState, useEffect } from 'react'
import axios from './axios.mjs'
import delete1 from './delete.png'

export default function Checkout() {
    const [count, setCount] = useState(1)
    const [food, setFood] = useState([])
    let price_ = 0

    useEffect(() => {
        axios.get('/cart').then((res) => {
            setFood(res.data)
        })

        for (let i = 0; i < food.length; i++) {
            price_ = price_ + eval((food[i].price) * count)
        }
        localStorage.setItem("subtotal", price_)
    }, [food])

    return (
        <>
            <div className="chk" id='check'>
                {food.map((items) => {
                    return (
                        <>
                            <div className="chk2" id='check'>
                                <img src={items.imgsrc} className="menu2" />
                                <h3 className="name2">{items.title}</h3>
                                <p className="desc2">{items.desc}</p>
                                <button className="dec" onClick={async () => {
                                        await axios.delete('/cart/' + items._id)

                                }}><img className='del' src ={delete1} /></button>
                                <h4 className="price2">Rs {items.price * count}</h4>
                            </div>

                        </>
                    )
                })}
            </div>
        </>
    )
}
