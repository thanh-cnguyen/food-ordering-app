import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-item"]}>
      {[props.items.map((item) => <li>{item.name}</li>)]}
    </ul>
  );
  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total</span>
        <span>$35.52</span>
      </div>
      <div className={classes.action}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order Now</button>
      </div>
    </div>
  );
};

export default Cart;
