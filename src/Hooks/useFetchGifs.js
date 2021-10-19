// Los Hooks No necesitan importar React

import { useState, useEffect } from 'react';
import { getGifs } from '../Helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        // Llama al Helper getGifs
        getGifs( category )
            .then( imgs => {

                setstate({
                    data: imgs,
                    loading: false
                });
                
            });
        
    }, [category]);

    return state; // { data:[], loading: true};

}