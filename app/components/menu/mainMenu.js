import React from 'react'
import { Link } from 'react-router'

class mainMenu extends React.Component{
  constructor(props,context){
    super(props)
    context.router
  }

  render(){

    return(
      <nav className="clearfix" id="menu">
        <a href="" id="menu-button"><i className="fa fa-bars"></i></a>
        <ul className="menu col-md-9 list-inline">
          <li><Link to='/promo/'>Hot Deals (Promo)</Link></li>
          <li><Link to='/food/'>Food</Link></li>
          <li><Link to='/resto/'>Resto</Link></li>
          <li><Link to='/news/'>Hot News</Link></li>
          <li><Link to='/recipes/'>Recipes</Link></li>
          <li><Link to='/new-opening/'>New Opening</Link></li>

        </ul>
        <form className="form-search col-md-3 pull-right">
          <div className="input-group">
            <input type="text" className="search-query form-control" placeholder="Search here" />
                <span className="input-group-btn">
                  <button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
                </span>
            </div>
        </form>
      </nav>
    )
  }
}

export default mainMenu
