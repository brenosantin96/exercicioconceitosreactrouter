import { useEffect, useState } from 'react';
import { getAlbums } from '../api/api';
import {Album} from '../types/TypeAlbum';
import '../index.css';
import { AlbumItemComponent } from '../components/AlbumItemComponent';



export const HomeGalery = () => {

    const [albums, setAlbums] = useState<Album[]>([]); //mto importante essa linha. estou pegando um array de Albums
    useEffect(() => { getInfoAlbums(); }, []);


    const getInfoAlbums = async () => {
        let infoAlbums = await getAlbums();
        console.log(infoAlbums);
        setAlbums(infoAlbums);
    }


    return (
        <div className='contentHome'>
            {albums.map((item, index) => (<AlbumItemComponent key={index} id={item.id} title={item.title} />)) }
        </div>
    )
}