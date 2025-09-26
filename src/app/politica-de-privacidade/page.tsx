// src/app/politica-de-privacidade/page.tsx

export default function PoliticaDePrivacidadePage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-6 text-white">
        Política de Privacidade
      </h1>
      <div className="prose prose-lg max-w-none prose-invert">
        <p>
          A sua privacidade é importante para nós. É política do KitWebs
          respeitar a sua privacidade em relação a qualquer informação sua que
          possamos coletar no site KitWebs.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-4">
          1. Coleta de Informações
        </h2>
        <p>
          Solicitamos informações pessoais apenas quando realmente precisamos
          delas para lhe fornecer um serviço. Fazemo-lo por meios justos e
          legais, com o seu conhecimento e consentimento. Também informamos por
          que estamos coletando e como será usado.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-4">
          2. Uso de Cookies e Anúncios
        </h2>
        <p>
          Utilizamos cookies para melhorar a sua experiência. O Google AdSense,
          nosso parceiro de publicidade, também pode utilizar cookies para
          exibir anúncios relevantes. Esses cookies rastreiam anonimamente seus
          interesses para mostrar anúncios que possam ser do seu interesse.
        </p>
        <p>
          O cookie de publicidade do Google usa um ID para identificar os
          anúncios veiculados nos navegadores. Quando um usuário acessa um site
          parceiro do AdSense, um cookie pode ser inserido no navegador do
          usuário final.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-4">
          3. Links para Sites de Terceiros
        </h2>
        <p>
          O nosso site pode ter links para sites externos que não são operados
          por nós. Esteja ciente de que não temos controle sobre o conteúdo e
          práticas desses sites e não podemos aceitar responsabilidade por suas
          respectivas políticas de privacidade.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-4">
          4. Compromisso do Usuário
        </h2>
        <p>
          O usuário se compromete a fazer uso adequado dos conteúdos e da
          informação que o KitWebs oferece no site e com caráter enunciativo,
          mas não limitativo: não se envolver em atividades que sejam ilegais ou
          contrárias à boa fé e à ordem pública.
        </p>

        <p className="mt-6">
          Esta política é efetiva a partir de <strong>Setembro de 2025</strong>.
        </p>
      </div>
    </div>
  );
}
