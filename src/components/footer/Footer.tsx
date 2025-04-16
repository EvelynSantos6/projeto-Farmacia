import { LinkedinLogo } from '@phosphor-icons/react'
function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-pink-400 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Projeto Tech Farma | Copyright: {data}
                        </p>
                    <p className='text-lg'>Entre em contato
                    </p>
                    <div className='flex gap-2'>
	                    <a href="https://www.linkedin.com/in/evelyn-santos-devti/" target="_blank">
    	                <LinkedinLogo size={32} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Footer