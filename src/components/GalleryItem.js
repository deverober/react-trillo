export default function GalleryItem({ image, altTxt }) {
    return (
        <figure className="gallery__item">
            <img src={image} alt={altTxt} className="gallery__photo" />
        </figure>
    )
}