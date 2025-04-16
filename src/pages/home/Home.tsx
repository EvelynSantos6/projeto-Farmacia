import ListaCategoria from "../../components/listaCategorias/ListaCategoria"

function Home() {
   return (
      <>
         <div className="bg-pink-400 flex justify-center">
            <div className='container grid grid-cols-2 text-white'>
                  <div className="flex flex-col gap-4 items-center justify-center py-4">
                     <h2 className='text-5xl font-bold'>
                        Tech Farmacia
                     </h2>
                     <p className='text-xl'>
                        Cuidar da sua saúde é a nossa prioridade
                     </p>

                     <div className="flex justify-around gap-4">
                        </div>
                     </div>
                  </div>

                  <div className="flex justify-center ">
                     <img
                        src="https://i.postimg.cc/sXrh495B/farmaceutico-minusculo-com-pilulas-e-vitaminas-ilustracao-vetorial-plana-medicos-prescrevendo-antibi.png"
                        alt="Imagem Página Home"
                        className='w-2/3'
                     />
            </div>
         </div>
         <ListaCategoria />
      </>
   )
}

export default Home