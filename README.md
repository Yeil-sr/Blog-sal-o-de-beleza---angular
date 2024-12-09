# AfroBeauty Blog - Landing Page

**AfroBeauty Blog** é uma landing page inspirada no universo de cuidados com cabelos afro e crespos, desenvolvida com o framework Angular. Este projeto destaca as principais tendências, dicas, e tutoriais de beleza, focando em um público que busca representatividade e cuidado especializado.

## 🚀 Principais Características do Projeto

- **Design Moderno e Responsivo**: A interface foi projetada para oferecer uma experiência agradável e fluida em todos os dispositivos, desde desktops até smartphones.
- **Componentização**: Uso extensivo de componentes Angular para garantir reutilização e organização do código.
- **Tema Personalizado**: Uma paleta de cores e fontes cuidadosamente selecionadas para representar a beleza e a diversidade cultural.
- **SEO-Friendly**: Configuração otimizada para mecanismos de busca, garantindo maior visibilidade da página.
- **Recursos Interativos**:
  - **Artigos em Destaque**: Seção com artigos relevantes e imagens de alta qualidade, como dicas para cronograma capilar, hidratação e cuidados para cabelos crespos.
  - **Postagens Populares**: Destaque para as postagens mais acessadas pelos leitores.
  - **Newsletter**: Um formulário intuitivo para os visitantes se inscreverem e receberem novidades diretamente em seus e-mails.
  
## 📂 Estrutura do Projeto

O projeto segue as melhores práticas de organização, utilizando Angular CLI para estruturar pastas e componentes:

```
src/
├── app/
│   ├── components/
│   │   ├── menu-title/
│   │   ├── big-card/
│   │   ├── title-section/
│   │   ├── popular-post/
│   │   └── newsletter/
│   ├── pages/
│   │   └── home/
├── assets/
│   ├── images/
│   ├── styles/
│   │   └── theme.css
```

## ⚙️ Funcionalidades Técnicas

### 1. **Desenvolvimento Local**

Para iniciar o servidor local de desenvolvimento:

```bash
ng serve
```

Acesse [http://localhost:4200/](http://localhost:4200/) para visualizar a aplicação. O servidor recarrega automaticamente ao salvar modificações no código.

### 2. **Geração de Componentes**

Para criar novos componentes ou diretivas:

```bash
ng generate component component-name
```

### 3. **Construção do Projeto**

Para compilar o projeto para produção:

```bash
ng build --prod
```

Os artefatos compilados estarão na pasta `dist/`.

### 4. **Testes**

- **Testes Unitários**: Utilize o Karma para rodar os testes:
  ```bash
  ng test
  ```

- **Testes de Integração**: Utilize ferramentas de e2e, como Protractor ou Cypress.

## 🖼️ Visual do Projeto

  <img src="https://github.com/user-attachments/assets/c73fa782-f386-4344-9adb-2e7cb9139919" alt="landing page">
### **Página Inicial**

- Uma seção de artigos com imagens envolventes e descrições atraentes.
- Destaques de postagens populares com links diretos.
- Formulário de inscrição em newsletters para engajar o público.

### **Componentes Reutilizáveis**

Cada seção da página foi criada com componentes modulares, como `<app-title-section>` e `<app-big-card>`, garantindo consistência e escalabilidade.

## 🛠️ Tecnologias Utilizadas

- **Framework**: Angular 19.0.2
- **Linguagens**: TypeScript, HTML5, CSS3
- **Gerenciamento de Dependências**: npm
- **Ferramentas Auxiliares**: Angular CLI, Karma



**AfroBeauty Blog** é mais do que uma landing page; é um espaço dedicado à valorização da beleza afro. 💇‍♀️✨
