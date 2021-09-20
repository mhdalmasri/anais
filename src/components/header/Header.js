import React, { Component } from 'react';
import classNames from 'classnames';
import { NavLink, withRouter } from 'react-router-dom';
import { connect, actions } from '../../js/Store';
import MediaQuery from '../../js/MediaQuery';
import { ROUTES } from '../../js/config';
import Button from '../common/button/Button';

class Header extends Component {

    componentDidMount() {
        this.unlisten = this.props.history.listen(() => {
            actions.toggleMenu(false);
        });
    }

    componentWillUnmount() {
        this.unlisten();
    }

    onMenuClick = () => {
        actions.toggleMenu();
    }

    render() {
        const { isMenuVisible } = this.props;

        return (
            <header className={classNames('b-header', { 'is-menu-visible': isMenuVisible })}>
                <MediaQuery match="medium down">
                    <Button isSecondary className="button-menu" onClick={this.onMenuClick}>Menu</Button>
                </MediaQuery>
                <ul className="nav-list">
                    <li className="nav-item">
                        <NavLink to={ROUTES.home} exact className="nav-link" activeClassName="is-active">Home</NavLink>
                    </li>
                </ul>
            </header>
        );
    }
}

export default connect(({ isMenuVisible }) => ({ isMenuVisible }))(withRouter(Header));
