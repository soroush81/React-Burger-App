import React, {useState} from 'react';
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import burgerIngredient from '../../components/Burger/BurgerIngredient/BurgerIngredient';
// import { useState } from 'react/cjs/react.production.min';
const BurgerBuilder = (props) => {
    const [ingredients,setIngredients] = React.useState({salad:1,bacon:1,cheese:2,meat:2});
    
    return (
    <Auxiliary>
        <div>
            <Burger ingredients={ingredients} />
        </div>
        <div>
            Build Controls
        </div>
    </Auxiliary>
    );
};

export default BurgerBuilder;
