import React, { useState } from 'react';
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import burgerIngredient from '../../components/Burger/BurgerIngredient/BurgerIngredient';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
const BurgerBuilder = (props) => {
    const [ingredients, setIngredients] = React.useState({ salad: 0, bacon: 0, cheese: 0, meat: 0 });

    return ( 
    <Auxiliary>
        <div>
            <Burger ingredients = { ingredients } /> 
        </div> 
        <div>
            <BuildControls />
        </div> 
    </Auxiliary >
    );
};

export default BurgerBuilder;