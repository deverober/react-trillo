export default function NavIconBox({ SvgImg, numberOfNotifications }) {
    return (
        <div className='user-nav__icon-box'>
            {SvgImg}
            <span className='user-nav__notification'>{numberOfNotifications}</span>
        </div>
    )
}