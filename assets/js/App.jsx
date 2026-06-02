const servicos = [
  {
    area: 'Tecnologia',
    titulo: 'Assistência técnica e soluções digitais',
    texto: 'Suporte para computadores, notebooks, redes, impressoras, formatação, instalação de programas, organização digital e criação de soluções simples para rotina de trabalho.',
    itens: ['Manutenção e diagnóstico', 'Suporte a usuários', 'Sites, automações e planilhas']
  },
  {
    area: 'Eventos',
    titulo: 'Personagem e presença temática',
    texto: 'Atuação em eventos, aniversários e ações especiais com presença visual marcante, interação com convidados e experiência temática organizada.',
    itens: ['Entrada temática', 'Fotos e interação', 'Ações personalizadas']
  }
];

const processos = [
  ['01', 'Entendimento', 'Alinho a necessidade, o tipo de serviço e o objetivo do atendimento.'],
  ['02', 'Proposta', 'Organizo o melhor caminho, explico o que será feito e combino os detalhes.'],
  ['03', 'Execução', 'Realizo o serviço com foco em clareza, cuidado e entrega prática.'],
  ['04', 'Entrega', 'Finalizo com orientação, próximos passos e contato aberto para dúvidas.']
];

const projetos = [
  {
    titulo: 'Conciliador Bancário',
    texto: 'Sistema para comparar arquivos de ERP com relatórios bancários e encontrar divergências financeiras.',
    stack: ['Python', 'Pandas', 'FastAPI']
  },
  {
    titulo: 'Controle de EPIs',
    texto: 'Aplicação para controlar entregas, estoque, responsáveis e assinaturas usando base em planilhas.',
    stack: ['AppSheet', 'Google Sheets']
  },
  {
    titulo: 'Portfólio YF Services',
    texto: 'Landing page comercial para unir tecnologia, projetos e eventos em uma apresentação profissional.',
    stack: ['React', 'HTML', 'CSS']
  }
];

function Header() {
  return (
    <header className="topbar">
      <a href="#inicio" className="logo" aria-label="YF Services"><span>YF</span><strong>YF Services</strong></a>
      <nav>
        <a href="#servicos">Serviços</a>
        <a href="#processo">Processo</a>
        <a href="#portfolio">Portfólio</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero section-shell">
      <div className="hero-copy">
        <p className="kicker">Tecnologia • Suporte • Eventos</p>
        <h1>Tecnologia que resolve. Eventos que chamam atenção.</h1>
        <p className="lead">Portfólio comercial de Alyson Yan para apresentar assistência tecnológica, projetos digitais e serviços temáticos com uma primeira impressão mais profissional.</p>
        <div className="hero-buttons">
          <a href="#contato" className="button button-primary">Pedir orçamento</a>
          <a href="#portfolio" className="button button-ghost">Ver trabalhos</a>
        </div>
        <div className="mini-proof">
          <span>Suporte técnico</span>
          <span>Desenvolvimento web</span>
          <span>Eventos temáticos</span>
        </div>
      </div>

      <aside className="hero-panel">
        <div className="profile-header">
          <img src="./assets/img/eu.jpg" alt="Foto de Alyson Yan" />
          <div>
            <strong>Alyson Yan</strong>
            <span>Ciência da Computação</span>
          </div>
        </div>
        <div className="panel-card destaque">
          <small>Marca pessoal</small>
          <strong>YF Services</strong>
          <p>Uma ponte entre suporte técnico, soluções digitais e eventos temáticos.</p>
        </div>
        <div className="panel-grid">
          <div><strong>TI</strong><span>Suporte e projetos</span></div>
          <div><strong>Eventos</strong><span>Presença temática</span></div>
        </div>
      </aside>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="section-shell services-section">
      <div className="section-title">
        <p className="kicker">Serviços</p>
        <h2>Uma apresentação clara para cliente, recrutador e contratante.</h2>
        <p>O site precisa mostrar rápido o que você faz, por que isso tem valor e como entrar em contato.</p>
      </div>
      <div className="service-grid">
        {servicos.map((servico) => (
          <article className="service-card" key={servico.area}>
            <span>{servico.area}</span>
            <h3>{servico.titulo}</h3>
            <p>{servico.texto}</p>
            <ul>
              {servico.itens.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Processo() {
  return (
    <section id="processo" className="section-shell process-section">
      <div className="section-title compact">
        <p className="kicker">Como funciona</p>
        <h2>Processo simples, direto e profissional.</h2>
      </div>
      <div className="process-grid">
        {processos.map(([numero, titulo, texto]) => (
          <article className="process-card" key={numero}>
            <span>{numero}</span>
            <h3>{titulo}</h3>
            <p>{texto}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="section-shell portfolio-section">
      <div className="section-title">
        <p className="kicker">Portfólio</p>
        <h2>Projetos que mostram prática além do discurso.</h2>
        <p>Esses trabalhos ajudam a provar domínio técnico, organização e capacidade de transformar problemas reais em solução.</p>
      </div>
      <div className="portfolio-grid">
        {projetos.map((projeto) => (
          <article className="project-card" key={projeto.titulo}>
            <h3>{projeto.titulo}</h3>
            <p>{projeto.texto}</p>
            <div>{projeto.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-strip section-shell">
      <div>
        <p className="kicker">Sobre mim</p>
        <h2>Perfil técnico com comunicação de serviço.</h2>
      </div>
      <p>Sou estudante de Ciência da Computação e atuo com suporte, hardware, programação, automação e eventos. A YF Services organiza essas frentes em uma marca mais fácil de entender, contratar e apresentar no currículo.</p>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="contact section-shell">
      <p className="kicker">Contato</p>
      <h2>Precisa de suporte, uma solução digital ou um evento temático?</h2>
      <p>Entre em contato pelos links abaixo e veja também meus projetos no GitHub.</p>
      <div className="contact-links">
        <a href="mailto:alyson.cienciacomp@gmail.com" className="button button-primary">Enviar e-mail</a>
        <a href="https://github.com/Alyson-Yan" target="_blank" rel="noreferrer" className="button button-ghost">GitHub</a>
        <a href="https://www.linkedin.com/in/alyson-yan-sampaio-fernandes-92b78235b" target="_blank" rel="noreferrer" className="button button-ghost">LinkedIn</a>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Processo />
        <Portfolio />
        <About />
        <Contact />
      </main>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);