import Head from "next/head";
import { useState } from "react";

import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { MdOutlineDarkMode } from "react-icons/md";
import { DiJavascript1, DiReact, DiGit } from "react-icons/di";
import { FaVuejs, FaLaravel, FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

import mainAvatar from "../public/main-avatar.svg";
import contact from "../public/contact.svg";
import laptop from "../public/laptop.svg";

import web1 from "/public/web1.png";
import web2 from "/public/web2.png";
import web3 from "/public/web3.png";
import web4 from "/public/web4.png";

import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Vinicius Modesto - Front-end Developer </title>
        <meta name="description" content="Seja Bem-vindo!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 duration-200">
        <section className="min-h-[70vh]">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Vinicius Modesto</h1>
            <ul className="flex items-center">
              <li>
                <MdOutlineDarkMode
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl duration-100"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="./Curriculo.pdf"
                  download={"Vinicius Modesto - Front-end Developer.pdf"}
                >
                  Currículo
                </a>
              </li>
            </ul>
          </nav>
          <div className="justify-evenly w-full items-center md:flex ">
            <div className="mx-auto rounded-full w-60 h-60 relative overflow-hidden mt-20 md:h-96 md:w-96 ">
              <Image
                src={mainAvatar}
                layout="fill"
                objectFit="cover"
                alt="Avatar em memoji"
              />
            </div>
            <div className="text-center p-10 py-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl dark:duration-100">
                Vinicius Modesto
              </h2>
              <h3 className="text-2xl py-2 dark:text-white md:text-3xl dark:duration-100">
                Front-end Developer.
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                Olá! Me chamo Vinicius e atuo como desenvolvedor front-end. Caso
                precise entrar em contato, redes sociais abaixo:
              </p>
              <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                <a
                  href="https://www.linkedin.com/in/vinicius-modesto96/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:contrast-200 duration-150"
                >
                  {" "}
                  <AiFillLinkedin />{" "}
                </a>
                <a
                  href="https://github.com/vmc36"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:contrast-200 duration-150"
                >
                  <AiFillGithub />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-32">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Sobre Mim:</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Atualmente moro em Umuarama-PR, tenho 26 anos.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Sou uma pessoa altamente motivada em resolver problemas e aprender
              coisas novas. Tenho facilidade de adaptação a ambientes e
              situações diferentes no trabalho em equipe. No total tenho 3 anos
              de experiência em atendimento ao cliente. Também possuo facilidade
              com inglês (escrita e leitura). Estou sempre buscando
              oportunidades para crescer profissionalmente e contribuir de
              maneira positiva para a empresa onde trabalho.
            </p>
          </div>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">
              Experiência Profissional:
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Atuei como desenvolvedor Front-end na Sia.Com Informática por 1
              ano e 6 meses, com designers e outros desenvolvedores criando, ou
              na manutenção de sites responsivos e de fácil navegação.
              <br /> Sou graduado em Sistemas de Informação pela Unipar - 2018.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Também durante 2 anos na Sia.com atuei como analista de suporte
              para os Sistemas SmartCom e Smartpharmacy.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={laptop} width={100} height={100} alt="laptop emoji" />
              <h3 className="text-lg font-medium pt-8 pb-2  ">Experiência:</h3>
              <p className="py-2">
                Como desenvolvedor front-end, aqui uma lista de ferramentas que
                já trabalhei ou possuo experiência:
              </p>
              <div className="flex items-center justify-center space-x-1">
                <DiJavascript1 />
                <p className="text-gray-800 py-1">JavaScript</p>{" "}
              </div>
              <div className="flex items-center justify-center space-x-1">
                <FaVuejs />
                <p className="text-gray-800 py-1">VueJS</p>
              </div>

              <div className="flex items-center justify-center space-x-1">
                <DiReact />
                <p className="text-gray-800 py-1">React</p>
              </div>
              <div className="flex items-center justify-center space-x-1">
                <DiGit />
                <p className="text-gray-800 py-1">Git</p>
              </div>
              <div className="flex items-center justify-center space-x-1">
                <SiTailwindcss />
                <p className="text-gray-800 py-1">TailwindCss</p>
              </div>
              <div className="flex items-center justify-center space-x-1">
                <FaFigma />
                <p className="text-gray-800 py-1">Figma</p>
              </div>
              <div className="flex items-center justify-center space-x-1">
                <FaLaravel />
                <p className="text-gray-800 py-1">Laravel</p>
              </div>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={contact} width={100} height={100} alt="meu memoji" />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Contato:</h3>
              <p className="py-2">
                Caso queira entrar em contato, segue meu email e redes sociais!
              </p>
              <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                <a
                  href="mailto:viniciusmodesto.dev@gmail.com"
                  className="hover:contrast-200 duration-150"
                >
                  <AiOutlineMail />
                </a>
                <a
                  href="https://www.linkedin.com/in/vinicius-modesto96/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:contrast-200 duration-150"
                >
                  {" "}
                  <AiFillLinkedin />{" "}
                </a>
                <a
                  href="https://github.com/vmc36"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:contrast-200 duration-150"
                >
                  <AiFillGithub />
                </a>
              </div>
            </div>
          </div>
          <section>
            <h3 className="text-3xl py-1 dark:text-white">
              Alguns Projetos Pessoais:
            </h3>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap ">
              <div
                className="basis-1/3 flex-1 floatEffect-1 transition-all "
                title="Projeto NaTrave, bolão feito para a copa de 2022 no Catar."
              >
                <a
                  href="https://pickem-worldcup.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    className="rounded-lg object-cover"
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                    src={web1}
                    alt="Projeto NaTrave, bolão feito para a copa de 2022 no Catar."
                  />
                </a>
              </div>
              <div
                className="basis-1/3 flex-1 floatEffect-2 transition-all"
                title="Cadastro de usuário utilizando o Local Storage."
              >
                <a
                  href="https://webuserapplication.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    className="rounded-lg object-cover"
                    width={"30%"}
                    height={"30%"}
                    layout="responsive"
                    src={web2}
                    alt="Cadastro de usuário utilizando o Local Storage"
                  />
                </a>
              </div>
              <div
                className="basis-1/3 flex-1 floatEffect-3 transition-all"
                title="Border Radius Previewer."
              >
                <a
                  href="https://border-radius-previewer-vmc36.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    className="rounded-lg object-cover"
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                    src={web3}
                    alt="Border Radius Previewer."
                  />
                </a>
              </div>
              <div
                className="basis-1/3 flex-1 floatEffect-4 transition-all"
                title="Consulta temperatura da cidade baseada na localização do usuário."
              >
                <a
                  href="https://current-weather-api.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    className="rounded-lg object-cover"
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                    src={web4}
                    alt="Consulta temperatura da cidade baseada na localização do usuário."
                  />
                </a>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
