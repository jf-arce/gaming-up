export const ItemListContainer = props =>{
    return(
        <section className="flex justify-center items-center h-screen bg-hero-banner bg-no-repeat bg-cover bg-center">
            <h1 className="font-bold text-slate-100 text-2xl icon text-center xl:text-4xl">{props.greeting}</h1>
        </section>
    )
}