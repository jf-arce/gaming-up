import { Link, useParams } from 'react-router-dom';


export const OrderConfirm = () => {
    const {orderId} = useParams();
  return (
    <div className='min-h-screen bg-gray-200'>
        <div className='flex flex-col py-10 m-auto gap-5 max-w-[1280px] justify-center items-center bg-white' data-aos="fade-up">
            <h1 className='text-center md:text-5xl text-3xl'>¡Gracias por tu compra!</h1>
            <p className='text-center md:text-xl text-lg'>Este es tu comprobante de compra: {orderId}</p>
            <div className='mt-10'>
                <Link to="/" className="btn text-center">Volver al inicio</Link>
            </div>
            <div className="max-w-[1180px] mx-auto p-10">
                <picture>
                    <img src="https://gaming-city.com.ar/static/home-banner-secundario.jpg?v=1345393324" alt="" className="rounded-sm"/>
                </picture>
            </div>
        </div>
    </div>
  )
}
