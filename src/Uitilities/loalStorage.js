const getStoredCart=()=>{
    const storedString=localStorage.getItem('cart');
    if(storedString){
        return JSON.parse(storedString);
    }
    return [];
}
const saveCartToLocalStorage=cart=>{
    const cartStringify=JSON.stringify(cart);
    localStorage.setItem('cart',cartStringify);
}
const adToLocalstorage= id =>{
    const cart=getStoredCart();
    cart.push(id);
    saveCartToLocalStorage(cart);
}
const removeCartFromLocalStorage=id=>{
    const cart=getStoredCart();
    // removing every id
    const remainingCart=cart.filter(idx=>idx !==id);
    saveCartToLocalStorage(remainingCart);
}
export {adToLocalstorage,getStoredCart,removeCartFromLocalStorage}
