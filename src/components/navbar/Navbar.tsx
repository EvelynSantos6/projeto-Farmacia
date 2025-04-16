import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			bg-pink-400 text-white'>
            
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold">Projeto Tech Farma</Link>

                    <div className='flex - gap-4'>
                        <Link to='/categorias' className='hover:underline'>Listar Categoria</Link>
                        <Link to='/cadastrar' className='hover:underline'>Cadastrar Categoria</Link>                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar