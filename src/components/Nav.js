import { ReactComponent as House } from '../img/SVG/home.svg'
import { ReactComponent as Airplane } from '../img/SVG/aircraft-take-off.svg'
import { ReactComponent as Key } from '../img/SVG/key.svg'
import { ReactComponent as Map } from '../img/SVG/map.svg'

import NavLink from './NavLink'

export default function Nav() {
    const links = [
        {
            SvgImg: <House />,
            url: '#home',
            content: 'Home'
        },
        {
            SvgImg: <Airplane />,
            url: '#flights',
            content: 'Flight'
        },
        {
            SvgImg: <Key />,
            url: '#car-rental',
            content: 'Car rental'
        },
        {
            SvgImg: <Map />,
            url: '#tours',
            content: 'Tours'
        },
    ]

    return (
        <nav className="sidebar">
            <ul className="side-nav">
                {
                    links.map((link, index) => {
                        return (
                            <NavLink {...link} key={index} />
                        )
                    })
                }
            </ul>
            <div className='legal'>
                &copy; 2017 by trillo. All rights reserved.
            </div>
        </nav>
    )
}