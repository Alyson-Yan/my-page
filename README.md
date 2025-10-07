# my-page
Repositório dedicado à hospedagem do meu site pessoal, desenvolvido em HTML. O site tem como objetivo ser um espaço de estudo e também uma apresentação sobre mim, com informações e experiências relacionadas à minha trajetória.


Prioridade de ações (o que fazer agora) — direto ao ponto

Quick wins (faça já):

Adicionar LICENSE (MIT se quiser permissivo).

Melhorar o README.md com link do site (se hospedado), instruções de deploy e stack. 
GitHub

Otimizar eu.jpg (converter para webp, reduzir dimensões e compressão).

Acessibilidade & SEO (impacto alto, custo baixo):

Garantir <!doctype html> e html lang="pt-BR".

<meta name="viewport" content="width=device-width, initial-scale=1">.

Alt em todas as imagens, títulos semânticos (<header>, <main>, <footer>), contraste de cores e labels em formulários.

Performance:

Adicionar defer em <script src="matrix.js" defer></script> ou carregar o JS no fim do <body>.

Minificar CSS/JS; concatenar se fizer sentido; usar cache headers no servidor (GitHub Pages já serve bem).

Converter imagens para WebP e usar srcset para responsividade.

Segurança:

Se houver formulário de contato, não enviar dados por JS sem sanitização; prefira formulários que usem um backend seguro ou serviços (Formspree, Netlify Forms).

Considerar CSP (Content-Security-Policy) se a página rodar scripts/third-party.

Qualidade de código / automação:

Rodar eslint (JS), stylelint (CSS) e prettier (format).

Criar workflow de GitHub Actions para lint + deploy automático no push para main.

Deploy / infra:

Use GitHub Pages (branch main → gh-pages ou main direto) com HTTPS e — se quiser domínio — configure CNAME.
