import React from 'react';
import './SearchBar.css';
import FontAwesome from 'react-fontawesome';

class SearchBar extends React.Component{

    state={
        value:''
    }
    timeout =null;
    doSearch = (event)=>{
        this.setState({
            value:event.target.value, // everytime key is presed inside input field, it will set here state value
            
        })
        clearTimeout(this.timeout);  //  we are using Timeout method to control the serach becoz we dont want out search operation to perform for every single key press thats we will wait for half(500s) seconds. 
        this.timeout = setTimeout(() =>{
            this.props.callback(this.state.value);
        },500); 
    }

    render(){
        return(
            <div className='rmdb-searchbar'>
                <div className='rmdb-searchbar-content'>
                        <FontAwesome className='rmdb-fa-search' name='search' size='2x' />
                    <input 
                        type='text'
                        className='rmdb-searchbar-input'
                        placeholder='Search'
                        onChange={this.doSearch}
                        value={this.state.value}
                        />
                </div>
            </div>
        );
    }
}
export default SearchBar;