import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import './SideDrawer.css';
import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
    let attachedClasses = ["SideDrawer", "Close"];
    if (props.open) {
        attachedClasses = ["SideDrawer", "Open"]
    }
    return (
        <Auxiliary>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <Logo height="50px" marginBottom="32px" />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxiliary>
    );

}


export default SideDrawer