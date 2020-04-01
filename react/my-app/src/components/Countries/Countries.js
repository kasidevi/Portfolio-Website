import React from 'react';
import CountryCard from '../CountryCard/CountryCard.js';
let displayProperties = {
    display: 'flex',
    flexWrap: 'wrap',
};
class Countries extends React.Component {
    render() {
        return <div style={displayProperties}>{this.props.countries.map(item => <div><CountryCard eachCountryCard={item} selectedTheme={this.props.selectedTheme} changeThemeLight={this.props.changeThemeLight}/></div>)}</div>;
    }
}
export { Countries };
