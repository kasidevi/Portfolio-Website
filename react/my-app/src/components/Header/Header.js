import React from 'react';
class Header extends React.Component {

    render() {
        return (<div className={`${this.props.changeThemeLight} header`}>
        <h3>Where in the world?</h3>
        <span className='light-mode' onClick={this.props.onChangeTheme}>{this.props.selectedTheme?'☾ Light Mode':' ☾ Dark Mode'}</span>
        </div>);
    }
}

export { Header };
