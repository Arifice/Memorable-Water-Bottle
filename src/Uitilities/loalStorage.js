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
export {adToLocalstorage,getStoredCart}
