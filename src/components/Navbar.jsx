import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => 
{
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">                    
        <div className="container-fluid">            
            <a className="navbar-brand" to="/index" >
                News
            </a>
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link" to="/topheadlines" >
                        Top-Headlines
                    </NavLink>
                    <NavLink className="nav-item nav-link" to="/search" >
                        News Search
                    </NavLink>
                </div>
            </div>
        </div>
    </nav>
  )
}
