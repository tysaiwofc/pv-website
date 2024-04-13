import Image from "next/image";
import NavBar from '@/components/NavBar/layout'
import Link from 'next/link'
import { FiExternalLink } from "react-icons/fi";
import { MdVerified } from "react-icons/md";
export default function Home() {
  return (
    <>
      <NavBar />
      <main className="pt-20 overflow-y-auto">
      <div className="bg-black w-full mt-4 p-4 flex flex-row ">
        <Link href="https://discord.gg/mQgFvnUaUJ" className="p-2 rounded flex flex-row max-w-2xl w-full">
            <Image src="/ju-icon.png" width={120} height={120} className="rounded-md hover:opacity-70 border-2 border-pink-500"></Image>
            <div className="ml-4">
            <p className="font-bold flex flex-row items-center gap-2 mt-2">Jujuba <MdVerified /></p>
            <p className="mt-2 text-slate-300">Jujuba é um bot feito para o discord, com a intenção de moderar comunidades do discord com os melhores recursos, criada em 2021 por Tysaiw.</p>
       
            </div>
        </Link>
        <Link href="https://discord.gg/2uGFtGfpP6" className="p-2 rounded flex flex-row max-w-2xl w-full">
            <Image src="/luckky.png" width={120} height={120} className="rounded-md hover:opacity-70 border-2 border-yellow-500"></Image>
            <div className="ml-4">
            <p className="font-bold flex flex-row items-center gap-2 mt-2">Luckky <MdVerified /></p>
            <p className="mt-2 text-slate-300">A Luckky. é uma loja para quem gosta de algo que misture emoções e cores, pode escolher entre algo sério, ou algo divertido. O nosso objetivo é mostrar a melhor face do seu produto, criada em agosto de 2022 por liftzera.</p>
       
            </div>
        </Link>
      </div>
      </main>
    </>
  );
}