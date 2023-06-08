import { GiftItem } from './'
import useFetchGifts from "../hooks/useFetchGifts"

export const GiftGrid = ({ category }) => {
    const { imagenes, isLoading } = useFetchGifts(category)
    return (
        <div>
            <h3>{category}</h3>
            {isLoading && <h2>Cargando</h2>}
            <div className="card-grid">
                {imagenes.map((imagen) => (
                    <GiftItem key={imagen.id} {...imagen} />
                )
                )}
            </div>
        </div>
    )
}

