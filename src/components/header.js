import React from 'react'

function Header() {
    // const navigate = useNavigate()
    // console.log(localStorage.getItem('role'))
      return (
          <header>
        
              <nav className="nav">
                  <div className='img'>
                  <img 
                  src= "../viz.logo.png"
                  />
                  </div>
                  <ul className="nav-items">
                      <li><a>Home</a></li>
                      <li><a>Works</a></li>
                      <li><a>About me</a></li>
                      </ul>
                    <div className='button' ><h3>LET'S TALK</h3>
                      </div>
              </nav>
          </header>
      )
   }
   export default Header;