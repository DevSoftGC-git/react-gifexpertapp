import React, { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Nueve']);

    // Añadimos un nuevo elemento al arreglo a traves de setCategories
    // const handleAdd = () => {
    //     setCategories( [...categories, 'Júpiter'] );
    // }

    return(

        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                { 
                    // categories.map( category => {
                    //     return <li key={ category }> { category } </li>
                    // })

                    categories.map( category => (
                        <GifGrid
                            key={ category }
                            category={ category }
                        />
                    ))
                    
                }
            </ol>
        </>

    )
};