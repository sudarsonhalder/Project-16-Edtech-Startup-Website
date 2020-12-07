import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (<>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>  
    <div className='container-fluid nav bg'>
        <div className='row'>
            <div className='col-10 mx-auto'>
        <nav className="navbar navbar-expand-lg navbar-light ">
            <NavLink className="navbar-brand" to="/">Edtech</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <NavLink 
                        activeclassName="menu_active" exact className="nav-link"
                        aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink  activeclassName="menu_active" className="nav-link" to="/Liveclasses">Live Classes</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeclassName="menu_active" className="nav-link" to="/Course">Courses</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeclassName="menu_active" className="nav-link" to="/Book">Books</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeclassName="menu_active" className="nav-link" to="/Board">Boards</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeclassName="menu_active" className="nav-link" to="/Exam">Exams</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
        </div>
    </div>
    </>
    )
}
export default Navbar;
