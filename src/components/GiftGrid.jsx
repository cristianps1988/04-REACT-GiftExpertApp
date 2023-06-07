import { getGifts } from "../helpers/getGifts"
import { useEffect, useState } from "react"
import GiftItem from "./GiftItem"

const GiftGrid = ({ category }) => {
    const [imagenes, setImagenes] = useState([])

    const getImages = async () => {
        const newImages = await getGifts(category)
        setImagenes(newImages)
    }

    useEffect(() => {
        getImages()
    }, [])

    return (
        <div>
            <h3>{category}</h3>
            <div className="card-grid">
                {imagenes.map((imagen) => (
                    <GiftItem key={imagen.id} {...imagen} />
                )
                )}
            </div>
        </div>
    )
}

export default GiftGrid
