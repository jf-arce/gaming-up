import { useState,useEffect } from 'react';
import { getData, getCategoryData } from '../../services/firebaseConfig';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { Filter } from '../Filter/Filter';
import { Loader } from '../Loader/Loader';

export const ItemListContainer = () =>{
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();

    useEffect(()=>{
        const dataFunction = categoryId ? getCategoryData : getData 

        dataFunction(categoryId)
            .then(data => setProducts(data)); 
    },[categoryId]);

    if (products.length === 0) return <Loader/>

    return(
        <section className="flex flex-col md:flex-row min-h-screen pb-10 md:py-10 m-auto gap-3 max-w-[1280px]">
            <Filter/>
            <ItemList products={products}/>
        </section>
    )
}