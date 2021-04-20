import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import moduleName from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';


const OrderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li>
                <span style={{ textTransform: 'capitalize' }}>
                    {igKey}
                </span> :
                    {props.ingredients[igKey]}
            </li>
        });

    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A Delicious Burger With  The Following Ingredients</p>
            <ul>{ingredientsSummary}</ul>
            <p>Continue To Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Auxiliary>
    );

}
export default OrderSummary;
