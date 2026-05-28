const projetos = [
  {
    titulo: 'Conciliador Bancario',
    descricao: 'Sistema para comparar arquivos do ERP com relatorios bancarios e de adquirentes, ajudando a encontrar vendas conciliadas, divergencias e registros pendentes.',
    tecnologias: ['Python', 'Pandas', 'FastAPI', 'JavaScript'],
    status: 'Em desenvolvimento'
  },
  {
    titulo: 'App Financeiro',
    descricao: 'Aplicativo de controle financeiro pessoal com lancamentos, categorias, saldo mensal, parcelas e visao de gastos.',
    tecnologias: ['Flutter', 'Dart', 'Provider'],
    status: 'Em evolucao'
  },
  {
    titulo: 'Controle de EPIs',
    descricao: 'Aplicacao criada para organizar entregas, responsaveis e catalogo de EPIs usando uma solucao pratica baseada em planilhas.',
    tecnologias: ['AppSheet', 'Google Sheets'],
    status: 'Prototipo funcional'
  }
];

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section id="inicio" className="caixa hero">
      <img src="./assets/img/eu.jpg" alt="Foto de Alyson Yan" className="foto" />
      <h1>Alyson Yan</h1>
      <h2>Desenvolvedor em Construcao</h2>
      <p>Sou estudante de Ciencia da Computacao e gosto de criar solucoes simples, uteis e bem organizadas.</p>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="caixa secao">
      <h2>Sobre Mim</h2>
      <p>Tenho interesse em desenvolvimento web, hardware, automacao, suporte tecnico e projetos que resolvem problemas reais.</p>
    </section>
  );
}

function Projetos() {
  return (
    <section id="projetos" className="caixa secao">
      <h2>Projetos</h2>
      <p className="subtitulo">Cards renderizados dinamicamente a partir de um array de objetos em React.</p>
      <div className="grid-projetos">
        {projetos.map((projeto, index) => (
          <article className="card-projeto" key={index}>
            <span className="status">{projeto.status}</span>
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
            <div className="tecnologias">
              {projeto.tecnologias.map((tecnologia) => (
                <span key={tecnologia}>{tecnologia}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato" className="caixa secao contato">
      <h2>Contato</h2>
      <ul>
        <li><a href="https://github.com/Alyson-Yan" target="_blank" rel="noreferrer">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/alyson-yan-sampaio-fernandes-92b78235b" target="_blank" rel="noreferrer">LinkedIn</a></li>
      </ul>
    </section>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main className="content">
        <Hero />
        <Sobre />
        <Projetos />
        <Contato />
      </main>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
