import { useState,useEffect } from 'react';
import getData from '../../services/getData'
import getCategoryData from '../../services/getCategoryData'
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = props =>{
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();

    useEffect(()=>{
        const dataFunction = categoryId ? getCategoryData : getData

        dataFunction(categoryId)
            .then(data => setProducts(data)); 
    },[categoryId])

    return(
        <section className="flex flex-col items-center min-h-screen p-12 gap-12">
            <h1 data-aos="fade-down" className="font-bold text-slate-100 text-2xl icon text-center xl:text-4xl relative">{props.greeting}</h1>
            <ItemList products={products}/>
        </section>
    )
}