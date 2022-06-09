import { Browsers, House, Laptop, PhoneCall, X } from "phosphor-react"

type Aside = {
    isMenuOpen: boolean,
    onMenuToggle: (param: boolean) => void
}

export function MenuLeft({ isMenuOpen, onMenuToggle }: Aside) {
    
    return (
        <aside className={`fixed z-20 w-64 top-0 h-full ${isMenuOpen ? 'left-0 duration-1000' : '-left-80 duration-1000'}`} aria-label="Sidebar">
            <div className="overflow-y-auto  py-4 px-3 h-full bg-neutral-800">
                <ul className="space-y-2">
                    <li className="flex justify-end">
                        <X size={40} color="white" onClick={() => onMenuToggle(!isMenuOpen)}/>
                    </li>
                    <li>
                        <a onClick={() => onMenuToggle(!isMenuOpen)} href="#" className="flex items-center p-2 text-base font-normal rounded-lg text-gray-200 hover:bg-neutral-700">
                            <span className="ml-3 flex items-center gap-2"><House size={20} /> Home</span>
                        </a>
                    </li>
                    <li>
                        <a id="#service" onClick={() => onMenuToggle(!isMenuOpen)} href="#service" className="flex items-center p-2 text-base font-normal rounded-lg text-gray-200 hover:bg-neutral-700">
                            <span className="ml-3 flex items-center gap-2"><Laptop size={20} />Serviços</span>
                        </a>
                    </li>
                    <li>
                        <a onClick={() => onMenuToggle(!isMenuOpen)} href="#portfolio" className="flex items-center p-2 text-base font-normal rounded-lg text-gray-200 hover:bg-neutral-700">
                            <span className="ml-3 flex items-center gap-2"><Browsers size={20} />Potfólio</span>
                        </a>
                    </li>
                    <li>
                        <a onClick={() => onMenuToggle(!isMenuOpen)} href="#contact" className="flex items-center p-2 text-base font-normal rounded-lg text-gray-200 hover:bg-neutral-700">
                            <span className="ml-3 flex items-center gap-2"><PhoneCall size={20} />Contato</span>
                        </a>
                    </li>
                </ul>
            </div>

        </aside>

    )
}
