import { useEffect, useState } from "react"
import { Photo as PhotoType } from "../types/TypePhoto"
import { getOnePhoto } from '../api/api'
import { useParams, useNavigate } from "react-router-dom"

export const Photo = () => {

    const navigate = useNavigate();
    const params = useParams();
    const [photo, setPhoto] = useState<PhotoType>()

    useEffect(() => { getPhotoInfo() }, [])


    const getPhotoInfo = async () => {
        if (params.id) {
            let response = await getOnePhoto(parseInt(params.id));
            setPhoto(response);
        }

    }

    const handleBackButton = () => {
        navigate(-1);
    }


    return (
        <div>
            <button className="buttonBack" onClick={handleBackButton}>Voltar</button>
            {photo && <div className="titlePhotoBig">
                {photo.title}
                <div className="boxPhotoBig"> <img src={photo.url} alt="" /> </div>
            </div>}
        </div>
    )
}