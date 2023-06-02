import { useState,useEffect } from 'react';
import getData from '../../services/getData'
import getCategoryData from '../../services/getCategoryData'
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { Filter } from '../Filter/Filter';

export const ItemListContainer = props =>{
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();

    useEffect(()=>{
        const dataFunction = categoryId ? getCategoryData : getData

        dataFunction(categoryId)
            .then(data => setProducts(data)); 
    },[categoryId])

    return(
        <section className="flex min-h-screen py-10 m-auto gap-3 max-w-[1280px]">
            <Filter/>
            <ItemList products={products}/>
        </section>
    )
}