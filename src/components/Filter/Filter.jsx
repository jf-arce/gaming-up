import { Link } from 'react-router-dom';

export const Filter = () => {
  return (
    <div className='md:min-h-screen md:w-[25%] flex flex-col justify-start gap-16 bg-gray-50 p-6 shadow-lg'>
        <div className='flex flex-col justify-center items-center md:items-start'>
            <h3 className='text-2xl text-indigo-600 font-black'><strong>Categorias</strong></h3>
            <ul className='mt-4 flex flex-col gap-2 text-base text-gray-500'>
                <li className='text-center md:text-start'>
                    <Link to='/category/teclados'>Teclados</Link>
                </li>
                <li className='text-center md:text-start'>
                    <Link to='/category/mouse'>Mouse</Link>
                </li>
                <li className='text-center md:text-start'>
                    <Link to='/category/monitores'>Monitores</Link>
                </li>
                <li className='text-center md:text-start'>
                    <Link to='/category/auriculares'>Auriculares</Link>
                </li>
                <li className='text-center md:text-start'>
                    <Link to='/category/pc'>Computadoras</Link>
                </li>
                <li className='text-center md:text-start'>
                    <Link to='/category/all'>Todos</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
