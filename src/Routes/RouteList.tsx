import { useRoutes } from 'react-router-dom'
import { AlbumItemComponent } from '../components/AlbumItemComponent';
import { Album } from '../Pages/Album';
import { HomeGalery } from '../Pages/HomeGalery';
import { Photo } from '../Pages/Photo';


export const RouteList = () => {
    
    return useRoutes([
        { path: '/', element: <HomeGalery /> },
        { path: '/album/:id', element: <Album/> },
        { path: '/photo/:id', element: <Photo /> }
    ]);

}