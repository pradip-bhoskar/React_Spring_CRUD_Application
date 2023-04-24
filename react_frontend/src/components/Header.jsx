import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (

            <nav class="navbar navbar-light bg-light navbar-expand-sm">
                <a href="#" class="navbar-brand">ReactSpring</a>
                {/* <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
                    <span class="navbar-toggler-icon"></span>
                </button> */}

                <div class="navbar-collapse collapse" id="navbar" >
                    <ul class="navbar-nav">
                        <li class="nav-item"><a href="#" class="nav-link">Add Employee</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
