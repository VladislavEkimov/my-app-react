import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Novosibirsk_Metro_logo.svg/1200px-Novosibirsk_Metro_logo.svg.png" alt=""/>
        </header>
    )
};

export default Header;