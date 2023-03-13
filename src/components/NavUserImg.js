export default function NavUserImg({ user_image, user_name }) {
    return (
        <div className='user-nav__user'>
            <img className='user-nav__user-photo' src={user_image} alt='profile pic of user' />
            <span className='user-nav__user-name'>{user_name}</span>
        </div>
    )
}