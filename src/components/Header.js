import logo from '../img/logo.png'
import { ReactComponent as MagnifyingGlass } from '../img/SVG/magnifying-glass.svg'
import { ReactComponent as Bookmark } from '../img/SVG/bookmark.svg'
import { ReactComponent as Chat } from '../img/SVG/chat.svg'
import user_image from '../img/user.jpg'
import NavIconBox from './NavIconBox'
import NavUserImg from './NavUserImg'

export default function Header() {
    return (
        <header>
            <img src={logo} alt="trillo logo" className='logo' />

            <form action='#' className='search'>
                <input type="text" className='search__input' placeholder='Search hotels' />
                <button className='search__button'>
                    <div className='search__icon'>
                        <MagnifyingGlass />
                    </div>
                </button>
            </form>

            <nav className='user-nav'>
                <NavIconBox SvgImg={<Bookmark />} numberOfNotifications={'7'} />
                <NavIconBox SvgImg={<Chat />} numberOfNotifications={'13'} />
                <NavUserImg user_image={user_image} user_name={'Jonas'} />
            </nav>
        </header>
    )
}