import { Link } from 'react-router-dom';

export const Filter = () => {
  return (
    <div className='min-h-screen w-[25%] flex flex-col justify-start gap-16 bg-gray-50 p-6 shadow-lg'>
        <div>
            <h3 className='text-2xl text-indigo-600 font-black'><strong>Marca</strong></h3>
            <ul className='mt-4 flex flex-col gap-2 text-base text-gray-500'>
                <li>
                    <Link to='/category/monitores'>Logitech</Link>
                </li>
                <li>
                    <Link to='/category/monitores'>Hyperex</Link>
                </li>
                <li>
                    <Link to='/category/monitores'>Corsar</Link>
                </li>
                <li>
                    <Link to='/category/monitores'>Samsung</Link>
                </li>
            </ul>
        </div>
        <div>
            <h3 className='text-2xl text-indigo-600 font-black'><strong>Categorias</strong></h3>
            <ul className='mt-4 flex flex-col gap-2 text-base text-gray-500'>
                <li>
                    <Link to='/category/teclados'>Teclados</Link>
                </li>
                <li>
                    <Link to='/category/mouse'>Mouse</Link>
                </li>
                <li>
                    <Link to='/category/monitores'>Monitores</Link>
                </li>
                <li>
                    <Link to='/category/auriculares'>Auriculares</Link>
                </li>
                <li>
                    <Link to='/category/pc'>Computadoras</Link>
                </li>
                <li>
                    <Link to='/category/all'>Todos</Link>
                </li>
            </ul>
        </div>
        <div>
        <h3><strong>Precio</strong></h3>
        </div>
    </div>
  )
}
