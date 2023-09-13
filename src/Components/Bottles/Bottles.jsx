import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { adToLocalstorage, getStoredCart, removeCartFromLocalStorage } from "../../Uitilities/loalStorage";
import Cart from "../Caart/Cart";

const Bottles = () => {
    const [bottles,setBottles]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('Bottle.json')
        .then(res=>res.json())
        .then(data=>setBottles(data));
    },[])
    useEffect(()=>{
        console.log('called the useEffect',bottles.length);
        if(bottles.length){
            const storedCart=getStoredCart();
            console.log(storedCart,bottles);
            const saveCart=[];
            for(const id of storedCart){
                console.log(id);
                const bottle=bottles.find(bottle=>bottle.id===id)
                saveCart.push(bottle);
            }
            console.log('save carat',saveCart);
            setCart(saveCart);
        }
    },[bottles])
    // console.log(bottles);
    const handleAddToCart=bottle=>{
        const newCart=[...cart,bottle];
        setCart(newCart);
        console.log(bottle);
        adToLocalstorage(bottle.id);
    }
    const handleRemoveFromCart=id=>{
        // visual cart remove
        const remainingCart=cart.filter(bottle=>bottle.id !==id);
        setCart(remainingCart);
        // local storage remove
        removeCartFromLocalStorage(id);

    }
    return (
        <div>
            <h2>Bottles are avialable :{bottles.length} </h2>
            <Cart cart={cart} key={cart.id} 
            handleRemoveFromCart={handleRemoveFromCart}></Cart>

            
            <div className="bottle-container">
                {
                    bottles.map(bottle=><Bottle key={bottle.id}
                        handleAddToCart={handleAddToCart} 
                        bottle={bottle}></Bottle>)
                }                
            </div>
        </div>
    );
};

export default Bottles;