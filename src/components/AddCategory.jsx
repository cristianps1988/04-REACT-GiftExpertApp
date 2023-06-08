import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
    const [textValue, setTextValue] = useState('')

    const onIputChange = (e) => {
        setTextValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (textValue.trim().length <= 1) return

        //onAddCategory(categories => [textValue, ...categories])
        onNewCategory(textValue.trim())
        setTextValue('')
    }



    return (
        <form
            onSubmit={onSubmit}
        >
            <input
                type="text"
                placeholder="Buscar gifs"
                value={textValue}
                onChange={onIputChange}
            />
        </form>
    )
}

