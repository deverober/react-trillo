import { ReactComponent as LocationPin } from '../img/SVG/location-pin.svg'
import StarIcon from './StarIcon'


export default function HotelOverview({ hotelName, numberOfStars, location, averageRating, totalVotes }) {
    return (
        <div className='overview'>
            <h1 className='overview__heading'>
                {hotelName}
            </h1>

            <div className='overview__stars'>
                {
                    Array(numberOfStars).fill(true).map((_, index) => <StarIcon key={index} />)
                }
            </div>


            <div className='overview__location'>
                <div className='overview__icon-location'>
                    <LocationPin />
                </div>
                <button className='btn-inline'>{location}</button>
            </div>

            <div className='overview__rating'>
                <div className='overview__rating-average'>{averageRating}</div>
                <div className='overview__rating-count'>{totalVotes} votes</div>
            </div>
        </div>
    )
}