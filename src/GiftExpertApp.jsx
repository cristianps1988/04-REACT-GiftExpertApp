import AddCategory from './components/AddCategory.jsx'
import { useState } from "react"
import GiftGrid from './components/GiftGrid.jsx'

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState([])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GiftExpertApp</h1>
            <AddCategory onNewCategory={onAddCategory} />
            {categories.map(category => (
                <GiftGrid key={category} category={category} />)
            )}
        </>
    )
}

