/* eslint-disable react/jsx-no-target-blank */
import Image from 'next/image'
import { Desktop, DeviceMobileSpeaker, Layout, List } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { MenuLeft } from '../components/MenuLeft'
import Menu from '../components/Menu'
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollTop, setScrollMenuTop] = useState(false)

  useEffect(() => {
    AOS.init({
      once: true
    })

    function menuTop() {

      if (window.scrollY > 100) {
        setScrollMenuTop(true)
      } else {
        setScrollMenuTop(false)
      }
    }

    window.addEventListener("scroll", menuTop)

  }, [])

  return (
    <>
      {/* HEADER */}
      <header className={`bg-neutral-900 items-center px-6 h-20 flex w-full ${scrollTop && 'fixed z-10'}`}>

        <div>
          <Image src="/images/logo.png" width={40} height={40} alt=""></Image>
        </div>

        <div className={`flex w-full justify-end lg:hidden ${isMenuOpen && 'hidden'}`}>
          <List size={32} color="#fff" onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>

        <Menu />

      </header>

    {/* Background quando o menu aside ta aberto */}
      <div onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${isMenuOpen && 'w-full h-full fixed z-10 top-0 bg-[#000000bd]'}`}></div>

      <MenuLeft isMenuOpen={isMenuOpen} onMenuToggle={setIsMenuOpen} />

      {/* HERO */}
      <section className="h-[600px]">

        <div className="flex h-full flex-col lg:flex-row">

          <div className="md:w-full h-full flex items-center justify-around">
            <div className="flex flex-col md:w-10/12 lg:w-6/12">
              <h1 className="text-white text-4xl text-center lg:text-7xl font-black "> <span className="text-[#cf0022]">Bem-Vindo</span>, Eu sou  <br /> Edson lima fullstack <br /> developer</h1>
              <p className="text-1xl text-center lg:text-2xl text-gray-200 my-6 px-5">Projetos, tecnologias e um pouco sobre mim e minha carreira de dev você vai encontrar aqui, se precisar é so chamar 🙂 </p>
            </div>
            <div className="hidden lg:flex">
              <Image src="/images/bg-01.svg" alt="" width={500} height={500} />
            </div>
          </div>

        </div>
      </section>

      {/* SOBRE */}
      <section className="mb-24" id='about'>
        <div className="w-full flex flex-col justify-center items-center my-20" data-aos="fade-up" data-aos-duration="2000">
          <p className="text-gray-200 text-4xl md:text-6xl block title font-semibold">Sobre <span className="text-[#cf0022]">Mim</span></p>
          <span className='border border-gray-700 w-20 mt-3'></span>
        </div>
        <figure className="m-4 md:w-9/12 md:m-auto flex-col md:flex md:flex-col lg:flex-row md:p-0 rounded-xl bg-neutral-900" data-aos="fade-up" data-aos-duration="2000">
          <img className="w-full lg:w-1/3 rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none" src="/images/perfil.jpg" alt="" />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <p className="text-lg font-medium text-gray-400 leading-9 p-3">
              Graduado em Analises e desenvolvimento de sistemas, atualmente
              trabalho com desenvolvimento web com javascript, gosto de aprender
              novas tecnologias mas sempre com foco no React e Node. Tenho alguns
              hobbies como tocar violão amante do rock n roll e estou sempre buscando
              melhorias tanto como pessoa e profissional.
            </p>
            <div>

              <span className="text-gray-200 text-2xl lg:text-left font-bold text-center block mb-5">Tecnologias</span>
              <ul className="flex gap-4 justify-center lg:justify-start">
                <li><Image src="/images/react-2.svg" width="60" height="60" alt="" /></li>
                <li><Image src="/images/nodejs-icon.svg" width="60" height="60" alt="" /></li>
                <li className="mb-5"><Image src="/images/tailwindcss.svg" width="60" height="60" alt="" /></li>
              </ul>
            </div>

          </div>
        </figure>
      </section>

      {/* SERVIÇOS */}
      <section id="service" className="bg-neutral-900 grid md:grid-cols-3 gap-10 px-5 md:px-16" >
        <div className="w-full flex flex-col justify-center col-span-full items-center  my-20" data-aos="fade-up" data-aos-duration="2000">
          <p className="text-gray-200 text-4xl md:text-6xl block mt-10 title font-semibold">Meus <span className="text-[#cf0022]">Serviços</span></p>
          <span className='border border-gray-700 w-28 mt-3'></span>
        </div>
        <div className="bg-[#222222] rounded-xl p-3 flex flex-col items-center md:text-left" data-aos="fade-up" data-aos-duration="2000">
          <Layout color="#cf0022" size={50} className="mb-5" />
          <span className="text-2xl text-gray-200 mb-4 inline-block">Site institucional</span>
          <p className="text-gray-400">
            Site completo com mais de uma página<br />
            ideal para empresas, escolas, academias etc.
          </p>
        </div>
        <div className="bg-[#222222] rounded-xl p-3 flex flex-col items-center md:text-left" data-aos="fade-up" data-aos-duration="2000">
          <Desktop color="#cf0022" size={50} className="mb-5" />
          <span className="text-2xl text-gray-200 mb-4 inline-block">Sistemas</span>
          <p className="text-gray-400">
            Sistemas de diferentes areas <br />
            sendo possivel cadastradar editar e excluir
            dados.
          </p>
        </div>
        <div className="bg-[#222222] rounded-xl p-3 flex flex-col items-center md:text-left" data-aos="fade-up" data-aos-duration="2000">
          <DeviceMobileSpeaker color="#cf0022" size={50} className="mb-5" />
          <span className="text-2xl text-gray-200 mb-4 inline-block">Landing pages</span>
          <p className="text-gray-400">
            Site com apenas uma página muito<br />
            ultilizada para vender um producto especifico.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="bg-neutral-900 grid grid-cols-1 md:grid-cols-3 gap-10 md:px-16 px-5 pb-20" >
        <div className="w-full col-span-full flex flex-col justify-center items-center mb-20 " data-aos="fade-up" data-aos-duration="2000">
          <p className="text-gray-200 text-4xl md:text-6xl title font-semibold block mt-28">Meu <span className="text-[#cf0022]">Portfólio</span></p>
          <span className='border border-gray-700 w-28 mt-3'></span>
        </div>

        <div className="relative " data-aos="fade-up" data-aos-duration="2000">
          <div className="absolute hover:flex hover:flex-col group hover:bg-[#00000091] rounded-lg transition duration-300 w-full h-full justify-center items-center mb-5">
            <Link href="https://blogdev.edsonlimaweb.com.br/">
              <a type="button" target="_blank" className="text-white hidden group-hover:block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Ver</a>
            </Link>
            <p className="hidden group-hover:block text-white text-2xl p-3">Blog</p>
          </div>

          <img src="/images/blog.png" className="rounded-lg  h-64 w-full" alt="" />

        </div>

        <div className="relative " data-aos="fade-up" data-aos-duration="2000">
          <div className="absolute hover:flex hover:flex-col group hover:bg-[#00000091] rounded-lg transition duration-300 w-full h-full justify-center items-center mb-5">
            <Link href="https://blog-admin-livid-iota.vercel.app/">
              <a type="button" target="_blank" className="text-white hidden group-hover:flex bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Ver</a>
            </Link>
            <p className=" hidden group-hover:block text-white text-2xl p-3">Admin Dark</p>
          </div>
          <img src="/images/admin.png" className="rounded-lg  h-64 w-full" alt="" />
        </div>
      </section>

      {/* Brienfing */}
      <section className="grid md:grid-cols-4 gap-10 md:px-16 px-5">
        <div className="w-full col-span-full flex flex-col justify-center items-center mb-20 " data-aos="fade-up" data-aos-duration="2000">
          <p className="text-gray-200 text-4xl md:text-6xl title font-semibold block mt-28">Processo <span className="text-[#cf0022]">de criação</span></p>
          <span className='border border-gray-700 w-28 mt-3'></span>
        </div>

        <div className="bg-[#222222] rounded-xl p-5 flex items-center md:items-start flex-col text-center md:text-left " data-aos="fade-up" data-aos-duration="2000">
          <span className="flex text-neutral-600 text-8xl font-bold italic">01</span>
          <p className="text-white text-2xl my-3">Briefing</p>
          <p className="text-gray-400">Entendimento da proposta, objetivos e funcionalidades do projeto.</p>
          <span className='border border-[#cf0022] w-20 mt-3 block'></span>
        </div>

        <div className="bg-[#222222] rounded-xl p-5 flex items-center md:items-start flex-col text-center md:text-left " data-aos="fade-up" data-aos-duration="2000">
          <span className="flex text-neutral-600 text-8xl font-bold italic">02</span>
          <p className="text-white text-2xl my-3">Criação</p>
          <p className="text-gray-400">Layout gráfico, UX/UI design, programação e estruturação.</p>
          <span className='border border-[#cf0022] w-20 mt-3 block'></span>
        </div>

        <div className="bg-[#222222] rounded-xl p-5 flex items-center md:items-start flex-col text-center md:text-left" data-aos="fade-up" data-aos-duration="2000">
          <span className="flex text-neutral-600 text-8xl font-bold italic">03</span>
          <p className="text-white text-2xl my-3">Analise</p>
          <p className="text-gray-400">Feedback do cliente, alteração no layout, imagens, textos e etc.</p>
          <span className='border border-[#cf0022] w-20 mt-3 block'></span>
        </div>

        <div className="bg-[#222222] rounded-xl p-5 flex items-center md:items-start flex-col text-center md:text-left" data-aos="fade-up" data-aos-duration="2000">
          <span className="flex text-neutral-600 text-8xl font-bold italic">04</span>
          <p className="text-white text-2xl my-3">Publicação</p>
          <p className="text-gray-400">Revisão e publicação do projeto. Análise de acessos e desempenho.</p>
          <span className='border border-[#cf0022] w-20 mt-3 block'></span>
        </div>
      </section>

      {/* Dobra */}
      <section className="bg-neutral-900 mt-16 md:px-16 px-5 py-10">
        <div className="flex flex-col lg:flex-row items-center text-center lg:text-left justify-around">
          <h2 className="text-4xl lg:text-5xl text-gray-200 font-bold py-8">Vamos começar um <br /> projeto juntos?</h2>
          <div>
            <p className="text-gray-400 text-xl mb-8">Clique no botão abaixo e faça seu orçamento <br /> é rápido, prático e totalmente grátis</p>
            <a target="_blank" href="https://api.whatsapp.com/send?phone=5588993022038&text=Ol%C3%A1%2C%20preciso%20de%20um%20or%C3%A7amento!" className="mt-5 text-white bg-gradient-to-br from-pink-500 to-orange-400 cursor-pointer focus:outline-none  rounded-lg text-lg px-8 py-4 text-center mr-2 mb-2">Orçamento grátis</a>
          </div>
        </div>

      </section>


      {/* Contatos */}
      <section id='contact' className="px-5 md:px-16">
        <div className="w-full col-span-full flex flex-col justify-center mb-10 ">
          <p className="text-gray-200 text-4xl md:text-6xl title font-semibold block mt-28">Meus <span className="text-[#cf0022]">contatos</span></p>
          <span className='border border-gray-700 w-28 mt-3'></span>
        </div>
        <ul className="flex gap-4">
          <li><a href="https://github.com/edsonlima95" target="_blank"><Image src="/images/git.svg" width="50" height="50" alt="" /></a></li>
          <li><a href="https://www.linkedin.com/in/edson-lima-a96045154/" target="_blank"><Image src="/images/linkedin.svg" width="50" height="50" alt="" /></a></li>
          <li><a href="https://www.facebook.com/edsonlima95/" target="_blank"><Image src="/images/facebook.svg" width="50" height="50" alt="" /></a></li>
          <li><a href="https://www.instagram.com/edsonlima95/" target="_blank"><Image src="/images/instagram.svg" width="50" height="50" alt="" /></a></li>
        </ul>
      </section>

      <footer className="flex justify-center py-5 bg-neutral-900 mt-20">
        <span className="text-gray-500">Feito com ❤️ por mim</span>
      </footer>
    </>
  )
}

export default Home
