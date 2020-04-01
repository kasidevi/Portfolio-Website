import React from 'react';
import { IoIosSearch } from 'react-icons/io';
class SearchCountry extends React.Component {
    render() {
        return (<div>
      <label className={this.props.changeThemeLight}><span className='search-bar-color'><IoIosSearch/></span>
      <input className={`${this.props.changeThemeLight} border-radius`} type='text' placeholder='Search for a country...' onChange={this.props.onChangeSearchText}/>
      </label>
      </div>);
    }
}
export { SearchCountry };
