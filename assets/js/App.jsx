const slides = [
  {
    categoria: 'Tecnologia',
    titulo: 'Assistência técnica para computadores',
    subtitulo: 'Manutenção, diagnóstico e suporte para deixar o equipamento pronto para uso.',
    texto: 'Atendimento para computadores e notebooks com foco em resolver problemas de desempenho, instalação de programas, formatação, limpeza, organização e suporte básico para o dia a dia.',
    imagem: './assets/img/eu.jpg',
    etiqueta: 'Suporte técnico',
    pontos: ['Diagnóstico do problema', 'Manutenção preventiva', 'Orientação após o serviço']
  },
  {
    categoria: 'Tecnologia',
    titulo: 'Soluções digitais e automações',
    subtitulo: 'Projetos simples para organizar processos, planilhas e rotinas repetitivas.',
    texto: 'Criação de páginas, sistemas pequenos, planilhas inteligentes e automações para transformar tarefas manuais em fluxos mais claros e organizados.',
    imagem: './assets/img/eu.jpg',
    etiqueta: 'Projetos digitais',
    pontos: ['Páginas web', 'Automações com Python', 'Organização de dados']
  },
  {
    categoria: 'Eventos',
    titulo: 'Eventos temáticos com personagem',
    subtitulo: 'Presença visual marcante para fotos, interação e momentos especiais.',
    texto: 'Serviço voltado para eventos familiares, aniversários e ações temáticas. A proposta é criar uma experiência divertida, organizada e com boa presença visual para os convidados.',
    imagem: './assets/img/eu.jpg',
    etiqueta: 'Eventos',
    pontos: ['Entrada temática', 'Fotos com convidados', 'Interação durante o evento']
  },
  {
    categoria: 'Portfólio',
    titulo: 'Projetos reais em tecnologia',
    subtitulo: 'Trabalhos que mostram prática, raciocínio técnico e capacidade de entrega.',
    texto: 'Projetos como conciliador bancário, controle de EPIs, páginas comerciais e soluções internas ajudam a demonstrar experiência prática além do currículo.',
    imagem: './assets/img/eu.jpg',
    etiqueta: 'Projetos',
    pontos: ['Conciliador bancário', 'Controle de EPIs', 'Portfólios e sistemas web']
  }
];

const cardsServicos = [
  ['Assistência tecnológica', 'Formatação, manutenção, instalação de programas, suporte para redes, impressoras e organização digital.'],
  ['Projetos digitais', 'Sites, automações, planilhas inteligentes, sistemas simples e soluções para pequenos processos.'],
  ['Eventos temáticos', 'Presença de personagem, fotos, interação e ações personalizadas para eventos e comemorações.']
];

const projetos = [
  ['Conciliador Bancário', 'Sistema para comparar arquivos de ERP com relatórios bancários e encontrar divergências financeiras.', 'Python • Pandas • FastAPI'],
  ['Controle de EPIs', 'Aplicação para controlar entregas, estoque, responsáveis e assinaturas usando base em planilhas.', 'AppSheet • Google Sheets'],
  ['YF Services', 'Página comercial para reunir tecnologia, suporte, projetos e eventos em uma apresentação profissional.', 'React • HTML • CSS']
];

function Header() {
  return (
    <header className="site-header">
      <a href="#inicio" className="brand-box">
        <span>YF</span>
        <strong>YF Services</strong>
      </a>
      <nav>
        <a href="#inicio">Início</a>
        <a href="#servicos">Serviços</a>
        <a href="#galeria">Galeria</a>
        <a href="#sobre">Sobre</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}

function Showcase() {
  const [ativo, setAtivo] = React.useState(0);
  const slide = slides[ativo];

  function anterior() {
    setAtivo((valor) => valor === 0 ? slides.length - 1 : valor - 1);
  }

  function proximo() {
    setAtivo((valor) => valor === slides.length - 1 ? 0 : valor + 1);
  }

  return (
    <section id="inicio" className="showcase">
      <button className="slide-btn slide-prev" onClick={anterior} aria-label="Slide anterior">‹</button>
      <button className="slide-btn slide-next" onClick={proximo} aria-label="Próximo slide">›</button>

      <div className="showcase-media">
        <img src={slide.imagem} alt={slide.titulo} />
        <div className="photo-badge">{slide.etiqueta}</div>
      </div>

      <div className="showcase-info">
        <p className="section-label">{slide.categoria}</p>
        <h1>{slide.titulo}</h1>
        <h2>{slide.subtitulo}</h2>
        <p>{slide.texto}</p>
        <ul>
          {slide.pontos.map((ponto) => <li key={ponto}>{ponto}</li>)}
        </ul>
        <a href="#contato" className="main-cta">Solicitar serviço</a>
      </div>

      <div className="slide-dots">
        {slides.map((item, index) => (
          <button key={item.titulo} className={index === ativo ? 'active' : ''} onClick={() => setAtivo(index)} aria-label={`Ir para ${item.titulo}`}></button>
        ))}
      </div>
    </section>
  );
}

function Servicos() {
  return (
    <section id="servicos" className="content-section">
      <div className="section-heading">
        <span>Serviços</span>
        <h2>O que a YF Services entrega</h2>
        <p>Uma marca para apresentar de forma clara seus trabalhos com tecnologia, suporte e eventos.</p>
      </div>
      <div className="cards-grid">
        {cardsServicos.map(([titulo, texto]) => (
          <article className="info-card" key={titulo}>
            <h3>{titulo}</h3>
            <p>{texto}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function GaleriaProjetos() {
  return (
    <section id="galeria" className="content-section portfolio-section">
      <div className="section-heading">
        <span>Portfólio</span>
        <h2>Projetos e trabalhos para primeira impressão</h2>
        <p>Essa área funciona como vitrine para quem chega pelo currículo, pelo GitHub ou por indicação.</p>
      </div>
      <div className="project-list">
        {projetos.map(([titulo, texto, stack]) => (
          <article className="project-row" key={titulo}>
            <div>
              <h3>{titulo}</h3>
              <p>{texto}</p>
            </div>
            <span>{stack}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="about-section">
      <div className="about-title">
        <span>Sobre mim</span>
        <h2>Alyson Yan</h2>
      </div>
      <p>Sou estudante de Ciência da Computação e trabalho com suporte, hardware, programação, automação e eventos. A ideia da YF Services é reunir essas frentes em uma apresentação comercial mais forte, mostrando competência técnica e presença profissional.</p>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato" className="contact-section">
      <span>Contato</span>
      <h2>Quer contratar um serviço ou conhecer meus projetos?</h2>
      <p>Use os links abaixo para entrar em contato, ver meu GitHub ou acessar meu perfil profissional.</p>
      <div className="contact-actions">
        <a href="mailto:alyson.cienciacomp@gmail.com">E-mail</a>
        <a href="https://github.com/Alyson-Yan" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/alyson-yan-sampaio-fernandes-92b78235b" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Header />
      <main className="page-wrap">
        <Showcase />
        <Servicos />
        <GaleriaProjetos />
        <Sobre />
        <Contato />
      </main>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);