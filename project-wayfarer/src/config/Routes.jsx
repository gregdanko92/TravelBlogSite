import React from 'react';
import HomePage from '../pages/HomePage';
import CitiesIndexPage from '../pages/CitiesIndexPage';
import ArticlePage from '../pages/ArticlePage';
import CityShowPage from '../pages/CityShowPage';
import { Switch, Route } from 'react-router-dom';


function Routes(){
    return(
        <Switch>

        <Route path='/' exact component={HomePage}/>
          
        <Route path='/cities' component={CitiesIndexPage} />
    
        <Route path='/cities/:id' component={CityShowPage} />

        <Route path='/cities/:id/:id' component={ArticlePage} />
        
      </Switch>
        
    )
}

export default Routes;