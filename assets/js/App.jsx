const techServices = [
  'Manutenção, formatação e diagnóstico de computadores e notebooks',
  'Suporte para redes, impressoras, programas e organização digital',
  'Criação de páginas, automações, planilhas inteligentes e sistemas simples'
];

const eventServices = [
  'Presença de personagem para eventos familiares e temáticos',
  'Fotos, interação com convidados e entrada temática',
  'Ações personalizadas para aniversários, comemorações e encontros geek'
];

const projetos = [
  {
    titulo: 'Conciliador Bancário',
    descricao: 'Sistema para comparar arquivos de ERP com relatórios bancários, encontrar divergências e organizar registros financeiros.',
    tecnologias: ['Python', 'Pandas', 'FastAPI', 'JavaScript']
  },
  {
    titulo: 'Controle de EPIs',
    descricao: 'Aplicação para controle de entregas, estoque, responsáveis e assinaturas usando AppSheet e Google Sheets.',
    tecnologias: ['AppSheet', 'Google Sheets', 'Automação']
  },
  {
    titulo: 'Portfólio YF Services',
    descricao: 'Página comercial para apresentar serviços de tecnologia, projetos e eventos em uma primeira impressão profissional.',
    tecnologias: ['React', 'HTML', 'CSS', 'GitHub Pages']
  }
];

function Navbar() {
  return (
    <nav className="navbar">
      <a className="brand" href="#inicio"><span>YF</span> Services</a>
      <ul>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-text">
        <p className="tag">Tecnologia • Suporte • Eventos</p>
        <h1>YF Services</h1>
        <h2>Assistência tecnológica e eventos temáticos com uma apresentação profissional.</h2>
        <p>Sou Alyson Yan, estudante de Ciência da Computação. Atuo com suporte, manutenção, projetos de tecnologia e presença temática em eventos.</p>
        <div className="actions">
          <a className="btn primary" href="#contato">Solicitar atendimento</a>
          <a className="btn secondary" href="#projetos">Ver projetos</a>
        </div>
      </div>
      <aside className="profile-card">
        <img src="./assets/img/eu.jpg" alt="Foto de Alyson Yan" className="foto" />
        <strong>Alyson Yan</strong>
        <span>Ciência da Computação</span>
        <p>Suporte técnico • Web • Automação • Eventos</p>
      </aside>
    </section>
  );
}

function ListaServicos({ titulo, itens }) {
  return (
    <article className="service-card">
      <h3>{titulo}</h3>
      <ul>
        {itens.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </article>
  );
}

function Servicos() {
  return (
    <section id="servicos" className="secao">
      <p className="tag">O que eu faço</p>
      <h2>Duas frentes, uma marca</h2>
      <p className="subtitulo">Uma vitrine clara para clientes de tecnologia, contratantes de eventos e recrutadores que chegam pelo GitHub.</p>
      <div className="grid-servicos">
        <ListaServicos titulo="Assistência tecnológica" itens={techServices} />
        <ListaServicos titulo="Eventos e personagem" itens={eventServices} />
      </div>
    </section>
  );
}

function Projetos() {
  return (
    <section id="projetos" className="secao">
      <p className="tag">Projetos</p>
      <h2>Provas práticas de trabalho</h2>
      <div className="grid-projetos">
        {projetos.map((projeto) => (
          <article className="card-projeto" key={projeto.titulo}>
            <span className="status">Projeto</span>
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
            <div className="tecnologias">
              {projeto.tecnologias.map((tec) => <span key={tec}>{tec}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="secao sobre">
      <p className="tag">Sobre</p>
      <h2>Perfil técnico com comunicação direta</h2>
      <p>Trabalho com tecnologia na prática: suporte, hardware, programação, automação e organização de processos. Também atuo em eventos, o que fortalece minha comunicação, presença e responsabilidade com pessoas.</p>
      <div className="highlights">
        <span>Suporte técnico</span>
        <span>Desenvolvimento web</span>
        <span>Automação</span>
        <span>Eventos temáticos</span>
      </div>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato" className="secao contato">
      <p className="tag">Contato</p>
      <h2>Vamos conversar?</h2>
      <p className="subtitulo">Conheça meus projetos ou chame para assistência tecnológica e eventos.</p>
      <div className="contato-links">
        <a href="https://github.com/Alyson-Yan" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/alyson-yan-sampaio-fernandes-92b78235b" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:alyson.cienciacomp@gmail.com">E-mail</a>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main className="content">
        <Hero />
        <Servicos />
        <Projetos />
        <Sobre />
        <Contato />
      </main>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);