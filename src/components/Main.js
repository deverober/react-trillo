import hotel1 from '../img/hotel-1.jpg'
import hotel2 from '../img/hotel-2.jpg'
import hotel3 from '../img/hotel-3.jpg'
import Details from './Details'


import Gallery from './Gallery'
import HotelOverview from './HotelOverview'

export default function Main() {
    const hotels = [
        {
            image: hotel1,
            altTxt: 'hotel 1'
        },
        {
            image: hotel2,
            altTxt: 'hotel 2'
        },
        {
            image: hotel3,
            altTxt: 'hotel 3'
        }
    ]

    return (
        <main>
            <Gallery hotels={hotels} />

            <HotelOverview
                hotelName={'Hotel Las Palms'}
                numberOfStars={5}
                location={"Albufeira, Portugal"}
                averageRating={"8.6"}
                totalVotes={'429'}
            />

            <Details />

            <div className='cta'>
                <h2 className='cta__book-now'>Good news! We have 4 free rooms for your selected dates</h2>
                <button className='btn'>
                    <span className='btn__visible'>Book now</span>
                    <span className='btn__invisible'>Only 4 rooms left</span>
                </button>
            </div>

        </main>
    )
}