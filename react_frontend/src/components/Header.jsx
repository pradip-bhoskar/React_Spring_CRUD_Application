import React from 'react'
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <nav class="navbar navbar-light bg-light navbar-expand-sm">
        <a href="#" class="navbar-brand">ReactSpring</a>
        {/* <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
                    <span class="navbar-toggler-icon"></span>
                </button> */}

        <div class="navbar-collapse collapse" id="navbar" >
          <ul class="navbar-nav">
            <li class="nav-item" style={{cursor: 'pointer',color:'blue'}} onClick={() => navigate('/add-employee') }>Add Employee</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header;

