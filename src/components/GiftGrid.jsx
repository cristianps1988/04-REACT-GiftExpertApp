import { getGifts } from "../helpers/getGifts"
import { useEffect } from "react"

const GiftGrid = ({ category }) => {

    useEffect(() => {
        getGifts(category)
    }, [])

    return (
        <div>
            <h3>{category}</h3>
            <p>Hola</p>
        </div>
    )
}

export default GiftGrid
