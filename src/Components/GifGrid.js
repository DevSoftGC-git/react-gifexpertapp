import React from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../Helpers/getGifs';


export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    const { data:images, loading } = useFetchGifs( category );


    
    // useEffect( () => {
    //     getGifs( category ).then( setImages )
    // }, [ category ]);

    return (
        <>
            <h3>{ category }</h3>

            { loading && <p>Loading</p> }

            <div className="card-grid">
                
                <ol>
                    {
                        images.map( img => (

                            <GifGridItem 
                                key={img.id}
                                { ...img }
                            />

                        ))
                    }
                </ol>
            </div>
        </>
    )
}
