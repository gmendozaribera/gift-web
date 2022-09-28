import { useState } from 'react';
// import { AddCategory } from './components/AddCategory';
// import { GifGrid } from './components/GifGrid';
import {AddCategory, GifGrid} from './components';
export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["one punch", "Saitama"]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }
    return (
        <>

            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            {/* <AddCategory setCategories={setCategories}/> */}
            <AddCategory onNewCategory={onAddCategory} />


            {/* Listado de Gif */}
            {/* Muestra la lista de gategorias */}
            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }


            {/* gif Item */}
        </>
    )
}