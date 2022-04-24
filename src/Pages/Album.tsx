import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getOneAlbum, getPhotosAlbum } from '../api/api';
import { PhotoItemComponent } from '../components/PhotoItemComponent';
import { Album as AlbumType } from '../types/TypeAlbum';
import { Photo } from '../types/TypePhoto';


export const Album = () => {

    const navigate = useNavigate();
    const params = useParams();
    const [photos, setPhotos] = useState<Photo[]>();
    const [album, setInfoAlbum] = useState<AlbumType>();

    useEffect(() => { getAlbumInfoApi() }, [])
    useEffect(() => { if (album !== undefined) { setPhotosInAlbum() } }, [album])

    const getAlbumInfoApi = async () => {
        if (params.id) {
            let infoAlbum = await getOneAlbum(parseInt(params.id));
            setInfoAlbum(infoAlbum);
        }
    }

    const setPhotosInAlbum = async () => {
        if (params.id) {
            let infoPhotos = await getPhotosAlbum(parseInt(params.id));
            console.log(infoPhotos);
            setPhotos(infoPhotos);
        }

    }

    const handleBackButton = () => {
        navigate('/');
    }


    return (
        <div>
            <button className="buttonBack" onClick={handleBackButton}>Voltar</button>

            {album &&
                <div className='titleAlbum'>
                    {album.title}
                </div>}
            <div>
                {photos && <div className='containerPhotosAlbum'>
                    {photos.map((item, index) => (<div className='boxImg'><PhotoItemComponent key={index} data={item} /></div>))}

                </div>}
            </div>
        </div>
    )
}