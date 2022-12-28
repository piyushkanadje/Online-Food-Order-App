import { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage  from "../../assests/meals.jpg";
import HeaderCartButton from "../UI/HeaderCartButton";

const Header = () =>{
    return (
        <Fragment> 
          <header className={classes.header}> 
            <h1>FoodExpress</h1>
             <HeaderCartButton />
          </header>
          <div className={classes['main-image']}>
           <img src={mealsImage} alt='A Table full of delicious food' />
          </div>
        </Fragment>
    );
}

export default Header;