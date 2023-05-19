import { ItemList } from './ItemList';

export const ItemListContainer = props =>{
    return(
        <section className="flex flex-col items-center h-screen p-12 gap-12">
            <h1 className="font-bold text-slate-100 text-2xl icon text-center xl:text-4xl">{props.greeting}</h1>
            <ItemList/>
        </section>
    )
}