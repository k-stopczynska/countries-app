import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import classes from './Header.module.css';

const Header = () => {
return (
    <React.Fragment>
        <header className={classes.header}>
            <h1 className={classes.main__heading}>Where in the world?</h1>
            <button className={classes.button__switch}><FontAwesomeIcon icon={faSun} />Light Mode</button>
        </header>
    </React.Fragment>
)
}

export default Header;