import user1Photo from '../img/user-1.jpg'
import user2Photo from '../img/user-2.jpg'
import Description from './Description'
import UserReview from './UserReview'


export default function Details() {
    return (
        <div className='detail'>
            <Description />

            <div className='user-reviews'>
                <UserReview
                    text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.'
                    photo={user1Photo}
                    name='Nick Smith'
                    date='Feb 23rd, 2017'
                    rating='7.8'
                />

                <UserReview
                    text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.'
                    photo={user2Photo}
                    name='Mary Thomas'
                    date='Sep 13th, 2017'
                    rating='9.3'
                />

                <button className='btn-inline'>Show all <span>&rarr;</span></button>
            </div>
        </div>
    )
}