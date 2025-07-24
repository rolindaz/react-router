import { NavLink } from "react-router-dom"

export default function NavBar() {

    const navLinks = [
        {
            id: 1,
            path: '/',
            text: 'Home'
        },
        {
            id: 2,
            path: '/products',
            text: 'Products'
        },
        {
            id: 3,
            path: '/about-us',
            text: 'About Us'
        }
    ]

    return (
        <header>
            <div className="container p-3 d-flex justify-content-between align-items-center">
                <div className="logo">
                    <img src="../../logo.jpg" alt="Logo" />
                </div>
                <div className="navLinks">
                    <ul className="list-unstyled d-flex column-gap-5 m-0">
                        {
                            navLinks.map((link) => {
                                return (
                                    <li key={link.id}>
                                        <NavLink className="text-decoration-none text-black" to={link.path}>
                                            {link.text}
                                        </NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </header>
    )
}