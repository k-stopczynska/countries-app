import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import ThemeContext from '../contexts/theme-context';
import classes from './Header.module.css';

const Header = () => {

    const themeCtx = useContext(ThemeContext);

return (
    <React.Fragment>
        <header className={classes.header}>
            <h1 className={classes.main__heading}>Where in the world?</h1>
            <button onClick={themeCtx.onChange} className={`${themeCtx.lightMode ? classes.lightMode : ''}`}><FontAwesomeIcon icon={faSun} />Light Mode</button>
        </header>
    </React.Fragment>
)
}

export default Header;