import { Link } from 'react-router-dom'

function CardCategorias () {
    return (
        <div className='p-10 grid flex-col rounded-4xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-purple-500 text-white font-bold text-2xl'>Categorias
            </header>
            <p className='p-8 text-3xl bg-slate-100 h-full'>Remédios</p>

            <div className="flex">
                <Link to='' 
                    className='w-full text-slate-100 bg-green-400 hover:bg-indigo-800 
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to='' className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
                    flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardCategorias;