import React, { useState } from 'react';
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import burgerIngredient from '../../components/Burger/BurgerIngredient/BurgerIngredient';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}
const BurgerBuilder = (props) => {
    const [ingredients, setIngredients] = React.useState({ salad: 0, bacon: 0, cheese: 0, meat: 0 });
    const [totalPrice, setTotalPrice] = React.useState(4);
    const [purchaseable, setPurchaseable] = React.useState(false);
    const [purchasing, setPurchasing] = React.useState(false);
    const [loading, setLoading] = React.useState(false);


    const updatePurchaseState = (ingredients) => {


        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);
        setPurchaseable(sum > 0);
        console.log(purchaseable);
    }
    const addIngredientHandler = (type) => {
        const oldCount = ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredient = { ...ingredients };
        updatedIngredient[type] = updatedCount;
        setIngredients(updatedIngredient);

        const newPrice = totalPrice + INGREDIENT_PRICES[type];
        setTotalPrice(newPrice);
        updatePurchaseState(updatedIngredient);
    }

    const removeIngredientHandler = (type) => {
        const oldCount = ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredient = { ...ingredients };
        updatedIngredient[type] = updatedCount;
        setIngredients(updatedIngredient);

        const newPrice = totalPrice - INGREDIENT_PRICES[type];
        setTotalPrice(newPrice);
        updatePurchaseState(updatedIngredient);
    }

    const purchaseHandler = () => {
        setPurchasing(true);
        console.log('pur:' + purchasing);
    }

    const purchaseCancelHandler = () => {
        setPurchasing(false);
    }

    const purchaseContinueHandler = () => {
        setLoading(true);
        const order = {
            ingredients: ingredients,
            price: totalPrice,
            customer: {
                name: 'soodeh ebrahimi',
                address: {
                    street: 'pasdaran st',
                    zipcode: '1661919111',
                    Country: 'US'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
            .then(response => {
                setLoading(false);
                setPurchasing(false);
            })
            .catch(error => {
                setLoading(false);
                setPurchasing(false);
            });

    }


    const disabledInfo = {
        ...ingredients
    };
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = <OrderSummary ingredients={ingredients}
        purchaseCanceled={purchaseCancelHandler}
        purchaseContinued={purchaseContinueHandler}
        totalPrice={totalPrice}></OrderSummary>;
    if (loading) {
        orderSummary = <Spinner />

    }
    return (
        <React.Fragment>
            <Modal show={purchasing} ModalClosed={purchaseCancelHandler}>
                {orderSummary}
            </Modal>
            <Burger ingredients={ingredients} />
            <BuildControls
                ingredientAdded={addIngredientHandler}
                ingredientRemoved={removeIngredientHandler}
                purchasable={purchaseable}
                disabled={disabledInfo}
                price={totalPrice}
                ordered={purchaseHandler} />
        </React.Fragment >
    );
};

export default WithErrorHandler(BurgerBuilder, axios);