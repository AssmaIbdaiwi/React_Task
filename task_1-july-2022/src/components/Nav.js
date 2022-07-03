import React from 'react';

function Nav ()  {
 

    return (
    

<nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
  <a class="navbar-brand" href="/">Navbar</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
    <a class="nav-link" href="/">Home </a>
      </li>
      <li class="nav-item">
  <a class="nav-link" href="/View">Movies Detail</a>
      </li>
      <li class="nav-item">
    <a class="nav-link" href="About">About us</a>
      </li>
      
      <li class="nav-item">
    <a class="nav-link" href="Search">Search Movies</a>
      </li>
    </ul>

</nav>


  )
}
export default Nav;