import Image from "next/image";

import {
  Menubar,
 
  MenubarMenu,
 
  MenubarTrigger,
} from "@/components/ui/menubar"


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function Home() {
  return (
   <main className="bg-white">
    
    <Card>     
      <div className="bg-gradient-to-r from-gray-400 to-blue-200" >                 
      <ul className="flex items-center justify-center gap-2 p-2 text-black p-1  ">
      
      <li><a href="/" className="  rounded p-2">Inicio</a></li>
      <li><a href="/blog " className="  rounded p-2">Blog</a></li>
      <li><a href="/" className="  rounded p-2">Projetos</a></li>
      <li><a href="/contato" className="  rounded p-2">Contato</a></li>

      </ul>
      
      </div>
    </Card>

    <div>
      <Card className="flex flex-col justify-items-center text-center p-10   ">
        <CardHeader>
          <CardTitle>Marketing Digital é Marketing para WEB</CardTitle>
          <CardDescription>O conhecimento de marketing fornece a base para entender o comportamento do consumidor, segmentação de mercado e posicionamento de marca.</CardDescription>
          
        </CardHeader>

        <Image src="/images/bannerint.png" alt="Image" className="m-auto  flex object-cover" width={900} height={700}/>

        <CardContent >
        

          <h1 className="flex flex-wrap gap-10 justify-center p-10 font-bold">Maximize Sua Presença Online com Marketing Digital!</h1>
          <p className="p-10">Hoje o mundo está conectado, o <span className="text-blue-600">Marketing Digital </span>é a chave para desbloquear o potencial completo da sua marca. Ao aplicar estratégias digitais eficazes, você não apenas alcança um público mais amplo, mas também cria conexões significativas com consumidores em potencial. Veja alguns benefícios que o Marketing Digital pode trazer para sua empresa, produto ou serviço.</p>
           
            <div className="text-start p-10 flex flex-wrap gap-10 ">
                

                



                <p><span className="font-bold">Alcance Global:</span> Com o marketing digital, as fronteiras geográficas se tornam irrelevantes. Sua marca pode ser descoberta por clientes em qualquer parte do mundo, aumentando exponencialmente seu mercado potencial.</p>

                <p><span className="font-bold">Segmentação Precisa:</span> As ferramentas digitais permitem que você direcione suas campanhas para o público certo, baseado em dados demográficos, interesses e comportamento. Isso significa que cada real investido é otimizado para atrair os clientes mais propensos a se engajar com sua marca.</p>

                <p><span className="font-bold">Análise em Tempo Real:</span> O marketing digital oferece a vantagem de analisar o desempenho das suas campanhas em tempo real. Isso permite ajustes rápidos e informados, garantindo que suas estratégias estejam sempre alinhadas com os objetivos da empresa.
                </p>

                <p><span className="font-bold">Custo-Efetividade:</span> Comparado com métodos tradicionais, o marketing digital é notavelmente mais acessível, oferecendo um retorno sobre o investimento muito mais atraente. Mesmo com um orçamento limitado, é possível criar campanhas impactantes que geram resultados significativos.</p>

                <p><span className="font-bold">Engajamento do Cliente:</span> As plataformas digitais facilitam a interação direta com o cliente, criando um diálogo que pode fortalecer a lealdade à marca. Responder a comentários, resolver dúvidas e celebrar feedbacks são todos aspectos que humanizam sua marca e constroem confiança.</p>

                <p><span className="font-bold">Conteúdo Personalizado: </span>O marketing digital permite que você personalize sua mensagem para diferentes segmentos do seu público. Isso aumenta a relevância da sua comunicação e melhora a experiência do usuário, levando a uma maior taxa de conversão.</p>

                <p><span className="font-bold">Otimização para Mecanismos de Busca (SEO):</span> Uma presença online robusta começa com um bom SEO. Ao otimizar seu conteúdo para mecanismos de busca, você aumenta as chances de ser encontrado por clientes que estão ativamente procurando por produtos ou serviços como os seus.</p>

                <p>Incorporar o marketing digital em sua estratégia de negócios não é apenas uma escolha inteligente — é essencial para manter a competitividade na era digital. Suba de nível com marketing digital e veja sua empresa crescer além das expectativas.          
                </p>
 



          </div>
        </CardContent>
      </Card>
    </div>


    <div className="flex justify-center flex-col p-20    ">
    <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Porque Ferramentas de Marketing Digital são essenciais:</AccordionTrigger>
    <AccordionContent>
    <p><span className="font-bold">Alcance Ampliado:</span> Atingir um público maior e mais diversificado globalmente</p>
    <p><span className="font-bold">Segmentação Eficiente: </span>Direcionar campanhas para públicos específicos com base em dados e comportamento.</p>
    <p><span className="font-bold">Custo-Benefício: </span>Reduzir custos operacionais e de publicidade em comparação com métodos tradicionais.</p>
    <p><span className="font-bold">Análise de Dados: </span>Medir e analisar o desempenho das campanhas em tempo real para otimização contínua.</p>
    <span className="font-bold">Engajamento: </span> Interagir e engajar com clientes de maneira direta e personalizada.
    <p className="p-20">Essas ferramentas são fundamentais para empresas que buscam melhorar a visibilidade, aumentar as vendas e fortalecer a presença online de forma estratégica e mensurável.</p>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Entenda o que é Marketing Digital na prática:</AccordionTrigger>
    <AccordionContent>
    <p><span className="font-bold">Defina seu público-alvo: </span>Estabeleça objetivos claros: </p>
    <p><span className="font-bold">Estabeleça objetivos claros: </span>Saiba o que você quer alcançar com suas campanhas.</p>
    <p><span className="font-bold">Escolha os canais certos: </span>Use plataformas onde seu público passa mais tempo.</p>
    <p><span className="font-bold">Crie conteúdo relevante: </span>Produza materiais que atendam às necessidades e interesses do seu público.</p>
    <p><span className="font-bold">Utilize SEO:</span> Otimize seu conteúdo para mecanismos de busca para melhor visibilidade.</p>
    <p><span className="font-bold">Analise os dados:</span> Monitore o desempenho e ajuste as estratégias conforme necessário.</p>
    <p className="p-20">Esses passos ajudarão efetivamente no ambiente digital, além de tornar uma escolha eficiente e inteligente para promover produtos ou serviços no mercado atual.
    </p>    
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Marketing Digital é Para você!</AccordionTrigger>
    <AccordionContent>
      <p>O marketing digital é direcionado a empresas, empreendedores e profissionais de marketing que desejam promover produtos, serviços ou marcas utilizando canais online. Ele abrange estratégias como SEO, publicidade online, mídias sociais, e-mail marketing, marketing de conteúdo e automação, visando alcançar e engajar um público amplo na internet. A flexibilidade e a capacidade de mensuração tornam o marketing digital uma escolha eficaz para atingir objetivos de negócios. 🚀</p>
    </AccordionContent>
  </AccordionItem>
</Accordion>
</div>

<Card  className=" flex p-20">
  <div className="flex flex-wrap gap-10">
    <h1>Descubra o Poder do Marketing Digital com nosso E-Book exclusivo, baixe "Marketing para WEB!" de GRAÇA e domine a arte do Marketing Digital.</h1>
    <p>No dinâmico mundo do marketing digital, estar atualizado com as últimas tendências e estratégias é essencial para qualquer profissional que deseja se destacar. É por isso que estamos entusiasmados em apresentar nosso e-book: “Marketing para WEB”.</p>
    <Image src="/images/ebookad.png" alt="Image" className="m-auto   flex object-cover" width={500} height={400}/>
  </div>
</Card>


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
