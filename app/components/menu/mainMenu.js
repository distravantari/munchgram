import React from 'react'

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
          <li><a href="#">Hot Deals (Promo)</a></li>
          <li><a href="#">Food</a></li>
          <li><a href="#">Resto</a></li>
          <li><a href="#">Hot News</a></li>
          <li><a href="#">Recipes</a></li>
          <li><a href="#">New Opening</a></li>

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
