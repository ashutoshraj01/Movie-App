import React, {Component} from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

class Header extends Component{

    render(){
        return(
            <div className='rmdb-header'>
                <div className='rmdb-header-content'>
                     <Link to='/'> {/*---Link just work similar to href tag in html } & 'to' for defining the path */}
                        <img className='rmdb-logo' src='./images/reactMovie_logo.png' alt="Logo not available" />
                        </Link>
                        <Link to='/'>
                        <img className='rmdb-tmdb-logo' src='./images/a.png' alt="Logo not available" />
                        </Link>
                        {/* <img className='rmdb-tmdb-logo' src='./images/tmdb_logo.png' alt='img not available'/> */}
                </div>
            </div>
        );
    }
}
export default Header;