import GalleryItem from "./GalleryItem";

export default function Gallery({ hotels }) {
    return (
        <div className="gallery">
            {
                hotels.map((hotel, index) => <GalleryItem key={index} image={hotel.image} altTxt={hotel.altTxt} />)
            }
        </div>
    )
}