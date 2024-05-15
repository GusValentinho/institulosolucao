import Image from "next/image";

 

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

 


export default function Home() {
  return (
   <main className="bg-white">
    
    <Card>     
      <div className="bg-gradient-to-r from-gray-400 to-blue-200" >                 
      <ul className="flex items-center justify-center gap-2 p-2">
      
      <li><a href="/" className="  rounded p-2">Inicio</a></li>
      <li><a href="/blog " className="  rounded p-2">Blog</a></li>
      <li><a href="/" className="  rounded p-2">Projetos</a></li>
      <li><a href="/contato" className="  rounded p-2">Contato</a></li>

      </ul>
      
      </div>
    </Card>


    <Image src="/images/mixmkt.png" alt="Image" className="m-auto  flex object-cover" width={900} height={700}/>

<CardContent >


  <h1 className="flex flex-wrap justify-center p-10 font-bold">Você sabe o que é MIX de Marketing? Neste guia aprenderemos como aplica-lo ao Marketing Digital!</h1>

 <div className="flex ml-40 mr-40 flex-wrap gap-5">
 <p>Hoje o mundo está conectado como nunca antes, e o Marketing Digital emerge como a ferramenta indispensável para desbloquear o potencial máximo da sua marca. Vamos explorar como o MIX de Marketing pode ser aplicado a esse contexto digital para maximizar os resultados das suas estratégias. </p>


<p>O Mix de Marketing, também conhecido como os 4Ps do Marketing, é um conceito fundamental que abrange os elementos essenciais utilizados por uma empresa para promover e comercializar seus produtos ou serviços de maneira eficaz. Esses elementos, representados pelos "4Ps", são produto, preço, praça e promoção.</p>

<Image src="/images/mktvector.jpg" alt="Image" className="m-auto  flex object-cover" width={500} height={400}/>

<p>O <span className="font-bold">"Produto"</span> refere-se ao próprio bem ou serviço oferecido pela empresa. Isso engloba suas características físicas, atributos, qualidade, design, embalagem e qualquer valor agregado que o torna único no mercado.
</p>

<p>O <span className="font-bold">"Preço"</span> diz respeito ao valor monetário atribuído ao produto ou serviço. A determinação do preço leva em consideração uma variedade de fatores, como custos de produção, concorrência, percepção de valor do cliente e objetivos de lucro da empresa.</p>

<p>A <span className="font-bold">"Praça"</span> ou "Distribuição" refere-se aos canais pelos quais o produto ou serviço é disponibilizado aos consumidores. Isso abrange desde a escolha dos pontos de venda físicos até a distribuição online, passando pela logística e estratégias de entrega.</p>

<p>Por fim, a <span className="font-bold">"Promoção"</span> engloba todas as atividades de comunicação e marketing destinadas a informar, persuadir e lembrar os consumidores sobre o produto ou serviço. Isso inclui publicidade, relações públicas, promoções de vendas, marketing de conteúdo, marketing de influência e outras táticas de comunicação.</p>

<p>O Mix de Marketing é uma ferramenta estratégica poderosa que permite às empresas ajustar e coordenar esses elementos de forma a criar uma oferta que atenda às necessidades dos clientes, se destaque da concorrência e alcance os objetivos organizacionais.</p>


 </div>
  
<div className="flex ml-40 mr-40 flex-wrap gap-5">
<p></p>
<p>Veja os resultados obtidos ao equilibrar os 4Ps de forma integrada e alinhada com as demandas do mercado, as empresas podem desenvolver estratégias de marketing eficazes que impulsionam o sucesso e o crescimento sustentável do negócio.</p>

<p><span className="font-bold">Alcance Global:</span> Com o Marketing Digital, você pode alcançar um público global instantaneamente, sem fronteiras geográficas limitantes. Através de campanhas online bem direcionadas, sua mensagem pode chegar a pessoas em diferentes partes do mundo, ampliando assim o alcance da sua marca. Por este motivo é importante entender qual a sua Praça!</p>

    
<p><span className="font-bold">Maior Interatividade:</span> Uma das grandes vantagens do Marketing Digital é a interatividade. Você pode se envolver diretamente com seu público-alvo por meio de redes sociais, blogs, e-mails e outros canais digitais. Essa interação permite que você compreenda melhor as necessidades e preferências do seu público, criando assim um relacionamento mais próximo e personalizado. Estes pontos podem ser desenvolvidos através da Promoção.</p> 

<p>
<span className="font-bold">Mensuração de Resultados:</span> Ao contrário do marketing tradicional, o Marketing Digital oferece a capacidade de mensurar com precisão os resultados das suas campanhas. Você pode acompanhar métricas como tráfego do site, taxa de conversão, engajamento nas redes sociais e muito mais. Isso permite que você avalie o desempenho das suas estratégias e faça ajustes em tempo real para otimizar os resultados e o Produto, se necessário!
</p>

<p><span className="font-bold">Custo-Eficiência:</span> Em relação ao Preço o Marketing Digital pode ser muito mais econômico do que o marketing tradicional. Com ferramentas como anúncios online, e-mail marketing e marketing de conteúdo, você pode alcançar um grande número de pessoas a um custo muito menor do que seria possível com anúncios em mídia tradicional, como televisão ou rádio.</p>
</div>

<div className=" flex flex-col items-center  rounded bg-gradient-to-r from-white  to-blue-100 p-5 gap-2">
    <h2>Receba nossos conteúdos exclusivos em seu e-mail.</h2>
    <p className="flex bg-yellow-200 rounded p-1">Quero me inscrever!</p>
    <form className="flex gap-2 p-5">
        <input placeholder="Digite seu melhor e-mail" className="rounded bg-gray-100 p-1" type="text" title="email" alt="Digite seu melhor e-mail."></input>
        <button className="p-2 font-bold text-gray-700 bg-gradient-to-r from-gray-200 to-blue-200 rounded" type="submit" title="button" >Confirmar!</button>
    </form>
    <Image src="/images/mailinglist.png" alt="Image" className=" rounded object-cover" width={300} height={200}/>
</div>
   
</CardContent>
  


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
