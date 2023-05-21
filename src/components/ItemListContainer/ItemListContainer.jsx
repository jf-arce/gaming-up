import { ItemList } from './ItemList';

export const ItemListContainer = props =>{
    return(
        <section className="flex flex-col items-center min-h-screen p-12 gap-12">
            <h1 data-aos="fade-down" className="font-bold text-slate-100 text-2xl icon text-center xl:text-4xl relative">{props.greeting}</h1>
            <ItemList/>
        </section>
    )
}