import { Link } from "react-router-dom"
import {Album} from '../types/TypeAlbum';

type Props = {
    id: number;
    title: string;

}

export const AlbumItemComponent = ({ id, title }: Props) => {

    return (
            <Link className='linkAlbums' to={`album/${id}`}>
                <div key={id} title={title} className='itemContentHome'> {title} </div>
            </Link>
    )

}