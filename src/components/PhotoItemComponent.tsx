import { Link } from "react-router-dom"
import { Photo, Photo as TypePhoto } from '../types/TypePhoto';

type Props = {
    data: Photo;
}

export const PhotoItemComponent = ({ data }: Props) => {

    return (
        <Link to={`/photo/${data.id}`}>
            <img className='imgPhotoAlbum' src={data.url}></img>    
        </Link>
    )

}