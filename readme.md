# Sistema de Organização de Rotinas

**Atenção:** Este projeto é apenas o front-end desenvolvido em Next.js.  
Atualmente não há integração com backend, portanto todos os dados exibidos são fixos em tela (mockados). Ao atualizar a página, as alterações realizadas são perdidas.

## 📝 Descrição do Projeto

O **Sistema de Organização de Rotinas** é uma plataforma digital criada especialmente para **Ana**, uma jovem adulta com necessidades atípicas, com o objetivo de promover sua autonomia, inclusão e qualidade de vida.

O sistema foi planejado para ajudá-la no gerenciamento diário de atividades, proporcionando uma experiência simples, acessível e personalizada, tanto para Ana quanto para sua mãe e equipe de apoio.

O objetivo é desenvolver uma solução digital acessível e intuitiva para organizar e gerenciar rotinas diárias, semanais e eventuais, visando:

- Aumentar a autonomia de Ana;
- Facilitar o gerenciamento de rotinas por sua mãe;
- Proporcionar uma rotina mais eficiente e adaptada às necessidades da usuária.

## 🎨 Design

- As telas foram desenhadas seguindo um protótipo criado no **Figma**.
- Responsivo: telas adaptadas para **mobile e desktop**.

## 💡 Tecnologias Utilizadas

- **Next.js** (Front-end)
- **React**
- **TypeScript**
- **Material UI (MUI)** para os componentes visuais personalizados
- **React Toastify** para mensagens de notificação

## 👀 Funcionalidades e Telas Implementadas

- **Tela de Login**  
  - Login de teste com duas opções:

| Usuário           | Senha | Perfil         |
| ----------------- | ----- | -------------- |
| `ana@email.com`   | `Senha123@` | Usuário padrão |
| `maria@email.com` | `Senha123@` | Administrador  |

- **Tela de Registro**  
  - Atualmente **não funcional** devido à ausência de backend.

- **Tela Home**  
  - Dados fixos exibidos para simular o ambiente principal.

- **Tela de Atividades**  
  - Permite visualizar atividades diárias, semanais e eventuais.
  - As atividades criadas, editadas ou deletadas **não são salvas permanentemente** — ao atualizar a página, as alterações são perdidas.
  - Possui modais para criação, edição e exclusão de atividades.

- **Tela de Relatório de Progresso**  
  - Exibe visualmente o progresso das atividades realizadas.

- **Tela de Acessibilidade**  
  - Opções para ajustar a experiência de acordo com as necessidades do usuário.

- **Tela de Editar Perfil**  
  - Formulário para atualizar informações pessoais (dados também fixos).


## ⚠️ Observações Importantes

- Não há conexão com backend; todas as operações são simuladas no front-end.
- Dados não são persistidos e são redefinidos a cada recarregamento da página.
- O projeto serve como protótipo funcional para validação de interface e fluxos básicos.

---

## 📁 Estrutura do Projeto

- `components/` - Componentes React reutilizáveis e personalizados
- `data/` - Dados mockados fixos para países, estados, usuários, etc.
- `styles/` - Estilos e temas

---

## 🚀 Como Rodar o Projeto

1. Clone o repositório:
```bash
git clone <URL_DO_REPOSITORIO>
```

2. Instale as dependências:
```bash
npm install
```

3. Rode a aplicação em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
```bash
http://localhost:3000/login
```


