import React from 'react';
import Header from '../elements/Header/Header';
import Home from '../Home/Home';
import NotFound from '../elements/NotFound/NotFound';
import Movie from '../Movie/Movie';

import {
    BrowserRouter as Router,
    Route,
    Switch} from 'react-router-dom';


const App = () =>{


        return(
            <Router>
                <React.Fragment>
                    <Header/>
                    <Switch>
                        <Route path='/' component={Home} exact />
                        <Route path='/:movieId' component={Movie} />
                        <Route component={NotFound} />  {/*If none of above routes found than it will show this NotFound component.*/} 
                   
                    </Switch>
                </React.Fragment>
            </Router>
        );
    }


export default App;
