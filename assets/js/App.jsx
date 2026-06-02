const slides = [
  {
    categoria: 'Tecnologia',
    titulo: 'Assistência técnica para computadores',
    subtitulo: 'Seu computador mais rápido, organizado e pronto para uso.',
    texto: 'Atendimento para computadores e notebooks com diagnóstico, formatação, instalação de programas, limpeza, organização e suporte para o dia a dia.',
    visual: 'YF TECH',
    etiqueta: 'Tecnologia',
    pontos: ['Diagnóstico claro', 'Manutenção preventiva', 'Orientação após o serviço']
  },
  {
    categoria: 'Eventos infantis',
    titulo: 'Personagem para festas infantis',
    subtitulo: 'Uma presença temática para transformar a festa em lembrança.',
    texto: 'Atuação com personagem em festas infantis e eventos familiares, com entrada temática, fotos, interação com convidados e presença animada durante o evento.',
    visual: 'FESTAS',
    etiqueta: 'Eventos infantis',
    pontos: ['Entrada do personagem', 'Fotos com convidados', 'Interação com as crianças']
  },
  {
    categoria: 'Soluções digitais',
    titulo: 'Sites, automações e organização digital',
    subtitulo: 'Soluções simples para facilitar sua rotina ou apresentar seu trabalho.',
    texto: 'Criação de páginas, sistemas pequenos, planilhas inteligentes e automações para transformar tarefas manuais em processos mais claros e práticos.',
    visual: 'WEB AUTO',
    etiqueta: 'Digital',
    pontos: ['Páginas web', 'Automações com Python', 'Organização de dados']
  },
  {
    categoria: 'Experiência temática',
    titulo: 'Animação para eventos especiais',
    subtitulo: 'Fotos, interação e presença de palco para momentos mais marcantes.',
    texto: 'Serviço pensado para criar uma experiência visual e divertida em aniversários, comemorações, encontros geek e ações personalizadas.',
    visual: 'HERÓI',
    etiqueta: 'Animação',
    pontos: ['Momentos para fotos', 'Participação personalizada', 'Energia de personagem']
  }
];

const cardsServicos = [
  ['Assistência técnica', 'Formatação, manutenção, instalação de programas, suporte para redes, impressoras e organização digital.'],
  ['Soluções digitais', 'Sites, automações, planilhas inteligentes, sistemas simples e soluções para pequenos processos.'],
  ['Festas infantis', 'Presença de personagem, entrada temática, fotos, interação com convidados e momentos especiais.'],
  ['Eventos personalizados', 'Ações temáticas para aniversários, comemorações, encontros geek e experiências familiares.']
];

const projetos = [
  ['Conciliador Bancário', 'Sistema para comparar arquivos de ERP com relatórios bancários e encontrar divergências financeiras.', 'Projeto de tecnologia'],
  ['Controle de EPIs', 'Aplicação para controlar entregas, estoque, responsáveis e assinaturas usando base em planilhas.', 'Solução digital'],
  ['Eventos com personagem', 'Presença temática para fotos, interação e momentos especiais em festas infantis e eventos familiares.', 'Eventos infantis'],
  ['YF Services', 'Marca que reúne serviços de tecnologia e experiências temáticas em uma apresentação simples, direta e profissional.', 'Marca comercial']
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
        <div className="service-visual" aria-label={slide.titulo}>
          <span>{slide.visual}</span>
          <strong>YF</strong>
        </div>
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
        <h2>Tecnologia para resolver. Eventos para encantar.</h2>
        <p>A YF Services oferece atendimento técnico para computadores, soluções digitais sob medida e experiências temáticas para festas infantis e eventos especiais.</p>
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
        <h2>Soluções digitais e experiências realizadas</h2>
        <p>Conheça algumas frentes de trabalho da YF Services, unindo suporte tecnológico, projetos digitais e eventos temáticos.</p>
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
      <p>Sou estudante de Ciência da Computação e atuo com suporte, hardware, programação e automação. Também trabalho com eventos infantis usando personagem, unindo presença visual, comunicação e cuidado com a experiência do público.</p>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato" className="contact-section">
      <span>Contato</span>
      <h2>Precisa de suporte técnico ou quer uma atração para seu evento?</h2>
      <p>Entre em contato para solicitar atendimento, combinar uma apresentação temática ou conhecer meus projetos.</p>
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