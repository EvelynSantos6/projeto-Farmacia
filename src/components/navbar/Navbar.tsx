import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			bg-pink-400 text-white'>
            
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold">Projeto Tech Farma</Link>

                    <div className='flex - gap-4'>
                        Cadastrar categoria
                        Listar Categoria
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar