import React from 'react';
import { withRouter } from "react-router-dom";

class CountryCard extends React.Component {
    navigateLink = () => {
        let { history } = this.props;
        history.push(`/country-dashboard-app/details/${this.props.eachCountryCard.alpha3Code}`);
    }
    render() {
        return (
            <div  onClick={this.navigateLink} className={`${this.props.changeThemeLight} each-country`}>
          <img className='image' src={this.props.eachCountryCard.flag} alt={this.props.eachCountryCard.altSpelling} />
          <div className='each-country-child'> 
          <h4>{this.props.eachCountryCard.name}</h4>
          <p><b>Population: </b>{this.props.eachCountryCard.population}</p>
          <p><b>Region: </b>{this.props.eachCountryCard.region}</p>
          <p><b>Capital: </b>{this.props.eachCountryCard.capital}</p>
          </div>
        </div>);
    }
}
export default withRouter(CountryCard);
