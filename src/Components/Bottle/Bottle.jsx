import './Bottle.css'
const Bottle = ({bottle,handleAddToCart}) => {
    const {name,price,img,seller,stock}=bottle;
    return (
        <div className="bottle">
            <img src={img} alt="" />
            <h3>Name : {name}</h3>            
            <p>Seller : {seller}</p>
            <p>Price : {price}</p>
            <p>Stock : {stock}</p>
            <button onClick={()=>handleAddToCart(bottle)}>Purchase</button>            
        </div>
    );
};

export default Bottle;