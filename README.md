# Portfolio Pessoal

Um portfolio pessoal moderno e leve construído com Vue.js e Tailwind CSS.

## Tecnologias Utilizadas

- Vue.js 3
- Vite
- Tailwind CSS
- PostCSS
- Autoprefixer

## Instalação

1. Clone o repositório:
```bash
git clone [seu-repositorio]
cd [nome-do-diretorio]
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Para build de produção:
```bash
npm run build
```

## Personalização

Para personalizar o portfolio, edite os seguintes arquivos:

- `src/App.vue`: Layout principal e conteúdo
- `src/style.css`: Estilos globais
- `tailwind.config.js`: Configuração do Tailwind CSS

## Estrutura do Projeto

```
├── src/
│   ├── assets/        # Recursos estáticos
│   ├── components/    # Componentes Vue
│   ├── App.vue        # Componente principal
│   └── main.js        # Ponto de entrada
├── public/            # Arquivos públicos
├── index.html         # Template HTML
├── package.json       # Dependências e scripts
├── tailwind.config.js # Configuração do Tailwind
└── postcss.config.js  # Configuração do PostCSS
```

## Automatização

### Em produção
$ cd ~/prog/site-pessoal
$ npm run build
$ sudo cp -r dist/ /var/www/html/site-pessoal/
$ sudo cp -r api/ /var/www/html/site-pessoal/
$ sudo systemctl restart nginx
