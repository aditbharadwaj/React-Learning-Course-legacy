import React from 'react';
import burgrLogo from '../../assets/images/burger-logo.png'
import classes from './Logo.css'

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgrLogo} alt="MyBurger" />
    </div>
);



export default logo;