import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import Image from "next/image";


export default function Home() {
    return (
     <main className="bg-white">
      
      <Card>     
        <div className="bg-gradient-to-r from-gray-400 to-blue-200" >                 
        <ul className="flex items-center justify-center gap-2 p-2 text-black p-1  ">
        
        <li><a href="/" className="  rounded p-2">Inicio</a></li>
        <li><a href="/blog " className="  rounded p-2">Blog</a></li>
        <li><a href="/" className="  rounded p-2">Projetos</a></li>
        <li><a href="/" className="  rounded p-2">Contato</a></li>
  
        </ul>
        
        </div>
      </Card>

      <div className=" flex flex-col items-center  rounded bg-gradient-to-r from-white-600 to-white-800 p-5 gap-2">
    <h2 className="font-bold">Fale com nossos analistas.</h2>
    <p className="flex bg-yellow-200 rounded p-1">Deixe seu contato!</p>
    <form className="flex gap-2 p-5">
        <input placeholder="Digite seu melhor e-mail" className="outline-none rounded bg-gray-100 p-1" type="text" title="email" alt="Digite seu melhor e-mail."></input>
        <input placeholder="Digite seu telefone" className=" outline-none rounded bg-gray-100 p-1" type="phone" title="phone" alt="Digite seu melhor telefone."></input>
        <input placeholder="Escreva sua mensagem" className="  outline-none rounded bg-gray-100 p-1" type="text" title="text" alt="Fale conosco!."></input>
        <button className="outline-none  p-2 font-bold text-gray-700 bg-gradient-to-r from-gray-200 to-blue-200 rounded" type="submit" title="button" >Confirmar!</button>
    </form>
    <Image src="/images/mktvector.jpg" alt="Image" className="m-auto  flex object-cover" width={900} height={700}/>
</div>



<footer>
    <div className="flex justify-center gap-2 p-2 bg-gray-200">

    <Card>
          <CardFooter>
            <p>Entre em contato!</p>
          </CardFooter>
    </Card>

    </div> 
</footer>

    </main>
    );
}
