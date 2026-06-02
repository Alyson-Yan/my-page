const slides = [
  {
    categoria: 'Tecnologia',
    titulo: 'Assistência técnica para computadores',
    subtitulo: 'Manutenção, diagnóstico e suporte para deixar o equipamento pronto para uso.',
    texto: 'Atendimento para computadores e notebooks com foco em resolver problemas de desempenho, instalação de programas, formatação, limpeza, organização e suporte básico para o dia a dia.',
    visual: 'YF TECH',
    etiqueta: 'Tecnologia',
    pontos: ['Diagnóstico do problema', 'Manutenção preventiva', 'Orientação após o serviço']
  },
  {
    categoria: 'Eventos infantis',
    titulo: 'Personagem para festas infantis',
    subtitulo: 'Presença temática para deixar o aniversário mais divertido, visual e memorável.',
    texto: 'Atuação com personagem em festas infantis e eventos familiares, com entrada temática, interação com convidados, fotos e presença animada durante o evento.',
    visual: 'FESTAS',
    etiqueta: 'Eventos infantis',
    pontos: ['Entrada do personagem', 'Fotos com convidados', 'Interação com as crianças']
  },
  {
    categoria: 'Tecnologia',
    titulo: 'Soluções digitais e automações',
    subtitulo: 'Projetos simples para organizar processos, planilhas e rotinas repetitivas.',
    texto: 'Criação de páginas, sistemas pequenos, planilhas inteligentes e automações para transformar tarefas manuais em fluxos mais claros e organizados.',
    visual: 'WEB AUTO',
    etiqueta: 'Projetos digitais',
    pontos: ['Páginas web', 'Automações com Python', 'Organização de dados']
  },
  {
    categoria: 'Eventos infantis',
    titulo: 'Experiência temática para eventos',
    subtitulo: 'Um serviço pensado para fotos, interação, surpresa e presença de palco.',
    texto: 'A proposta dos eventos é criar uma lembrança marcante para a festa, mantendo organização, cuidado com o público e uma apresentação visual forte.',
    visual: 'HERÓI',
    etiqueta: 'Animação',
    pontos: ['Momentos para fotos', 'Participação personalizada', 'Energia de personagem']
  }
];

const cardsServicos = [
  ['Assistência tecnológica', 'Formatação, manutenção, instalação de programas, suporte para redes, impressoras e organização digital.'],
  ['Projetos digitais', 'Sites, automações, planilhas inteligentes, sistemas simples e soluções para pequenos processos.'],
  ['Festas infantis', 'Presença de personagem, entrada temática, fotos, interação com convidados e momentos especiais.'],
  ['Eventos personalizados', 'Ações temáticas para aniversários, comemorações, encontros geek e experiências familiares.']
];

const projetos = [
  ['Conciliador Bancário', 'Sistema para comparar arquivos de ERP com relatórios bancários e encontrar divergências financeiras.', 'Tecnologia'],
  ['Controle de EPIs', 'Aplicação para controlar entregas, estoque, responsáveis e assinaturas usando base em planilhas.', 'Tecnologia'],
  ['Animação com personagem', 'Trabalho com presença temática, interação, fotos e energia visual para eventos infantis e familiares.', 'Eventos'],
  ['YF Services', 'Marca pessoal que reúne suporte tecnológico e eventos em uma apresentação comercial equilibrada.', 'Tecnologia + Eventos']
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
        <h2>Metade tecnologia. Metade eventos infantis.</h2>
        <p>A YF Services funciona como uma marca com duas áreas: suporte e soluções digitais para quem precisa resolver problemas, e eventos temáticos para quem quer criar uma experiência marcante.</p>
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
        <h2>Trabalhos técnicos e experiências de evento</h2>
        <p>Essa área serve para mostrar tanto projetos de tecnologia quanto trabalhos com personagem, reforçando as duas frentes da marca.</p>
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
      <p>Sou estudante de Ciência da Computação, trabalho com suporte, hardware, programação e automação. Também atuo em eventos infantis com personagem, unindo presença visual, comunicação e cuidado com a experiência do público. A YF Services organiza essas duas frentes em uma marca comercial mais clara.</p>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato" className="contact-section">
      <span>Contato</span>
      <h2>Precisa de tecnologia ou quer animar um evento infantil?</h2>
      <p>Use os links abaixo para solicitar atendimento, ver meus projetos ou acessar meu perfil profissional.</p>
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