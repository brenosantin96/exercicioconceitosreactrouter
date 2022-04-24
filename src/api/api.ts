import axios from 'axios'

const BASE = "https://jsonplaceholder.typicode.com";

export const getAlbums = async () => {
    const response = await axios.get(`${BASE}/albums`);

    return response.data;
}

export const getOneAlbum = async (id: number) => {

    const response = await axios.get(`${BASE}/albums/${id}`);
    return response.data;

}

export const getPhotosAlbum = async (id: number) => {

    const response = await axios.get(`${BASE}/albums/${id}/photos`);
    return response.data;

}

export const getOnePhoto = async (id: number) => {

    const response = await axios.get(`${BASE}/photos/${id}`);
    return response.data;

}