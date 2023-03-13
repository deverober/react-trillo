export default function NavLink({ SvgImg, url, content }) {
    return (
        <li className="side-nav__item">
            <a href={url} className="side-nav__link">
                <div className="side-nav__content-container">
                    <div className="side-nav__icon">
                        {SvgImg}
                    </div>
                    <span>{content}</span>
                </div>
            </a>
        </li>
    )
}