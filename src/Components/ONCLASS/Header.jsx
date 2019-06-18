import React from 'react'

export default function Header() {

    let title = 'Dat 09';

    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                {/* Brand/logo */}
                <a className="navbar-brand" href="#">{title}</a>
                {/* Links */}
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link 1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link 2</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link 3</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
