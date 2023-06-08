import { useEffect, useState } from "react"
import { getGifts } from "../helpers/getGifts"

const useFetchGifts = (category) => {

    const [imagenes, setImagenes] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifts(category)
        setImagenes(newImages)
        setIsLoading(false)
    }

    useEffect(() => {
        getImages()
    }, [])

    return {
        imagenes,
        isLoading
    }
}

export default useFetchGifts
