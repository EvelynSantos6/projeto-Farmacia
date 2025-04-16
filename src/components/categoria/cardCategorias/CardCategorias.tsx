import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria';


interface CardCategoriasProps {
    categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriasProps) {
    return (
        <div className='border-4 border-fuchsia-800 rounded-2xl p-6 flex flex-col items-center gap-4'>
            <h2 className='text-fuchsia-600 text-xl font-bold text-center'>
            </h2>
            <p className='text-gray-700 text-center'>
                {categoria.descricao}
            </p>

            <div className='flex'>
                <Link to={`/editarCategoria/${categoria.id}`}
	                className='bg-green-300 hover:bg-blue-400 text-black font-semibold
                    px-4 py-2 rounded-lg border border-black'>
	                <button>Editar</button>
                </Link>

                <Link to={`/deletarCategoria/${categoria.id}`} 
	                className='bg-red-500 hover:bg-red-600 text-white font-semibold 
                    px-4 py-2 rounded-lg border border-black'>
	                <button>Deletar</button>
                </Link>

            </div>

        </div>
    )
}

export default CardCategorias;