

function Menu() {

    return (
        <nav className="w-full h-20 justify-end items-center px-6 hidden lg:flex">
            <ul className="flex gap-4">
                <li><a href="#" className='text-gray-300 hover:text-[#cf0022] text-lg'>Home</a></li>
                <li><a href="#service" className='text-gray-300 hover:text-[#cf0022] text-lg'>Serviços</a></li>
                <li><a href="#about" className='text-gray-300 hover:text-[#cf0022] text-lg'>Sobre</a></li>
                <li><a href="#portfolio" className='text-gray-300 hover:text-[#cf0022] text-lg'>Porfólio</a></li>
                <li><a href="#contact" className='text-gray-300 hover:text-[#cf0022] text-lg'>contato</a></li>
            </ul>
        </nav>
    )

}


export default Menu