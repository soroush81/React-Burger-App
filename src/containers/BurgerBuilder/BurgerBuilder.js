import React from 'react';
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
const BurgerBuilder = (props) => (
    <Auxiliary>
        <div>
            <Burger />
        </div>
        <div>
            Build Controls
        </div>
    </Auxiliary>
);

export default BurgerBuilder;
