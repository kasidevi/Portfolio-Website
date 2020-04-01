import React from 'react';
import { SearchCountry } from '../SearchCountry/SearchCountry.js';
import { SelectRegion } from '../SelectRegion/SelectRegion.js';

class CountriesFilterBar extends React.Component {
    render() {
        return (<div className='search-select-country'>
        <SearchCountry onChangeSearchText={this.props.onChangeSearchText} 
                       searchText={this.props.searchText} 
                       selectedTheme={this.props.selectedTheme}
                       changeThemeLight={this.props.changeThemeLight}/>
        <SelectRegion onChangeSelectedRegion={this.props.onChangeSelectedRegion}
                      regionOptions={this.props.regionOptions}
                      selectedRegion={this.props.selectedRegion}
                      selectedTheme={this.props.selectedTheme}
                      changeThemeLight={this.props.changeThemeLight}/>
        
        </div>);
    }
}
export { CountriesFilterBar };
