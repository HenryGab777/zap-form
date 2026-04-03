# 🍔 Monteiro Burger - Formulário de Entrega

## 📋 Descrição do Projeto

**Monteiro Burger** é um formulário web de checkout (endereço de entrega) desenvolvido para coletar informações de clientes e enviar diretamente para o WhatsApp do restaurante. O sistema permite que clientes preencham seu endereço de forma rápida e intuitiva, com suporte a geolocalização e busca automática de CEP.

## 🚀 Como acessar
Para acessar o site, basta clicar no link:
[👉 Visite o site aqui](enderecopadronizar.netlify.app)

---

## 🏗️ Estrutura do Projeto

```
zap-form/
└── MonteiroTYPE .html          # Arquivo principal com HTML, CSS e JavaScript
```

### Arquivos
- **MonteiroTYPE .html** - Página única responsiva contendo todo o sistema (HTML + CSS + JavaScript)

---

## 🎯 Como Funciona

### 1. **Fluxo Principal**
```
1. Cliente acessa o formulário
2. Preenche informações pessoais e de endereço
3. Opcionalmente captura geolocalização ou busca CEP
4. Clica em "Enviar no WhatsApp"
5. Mensagem formatada é enviada para o número do restaurante
```

### 2. **Campos do Formulário**

| Campo | Obrigatório | Descrição |
|-------|-----------|-----------|
| **Nome do Cliente** | ✅ Sim | Nome de quem receberá o pedido |
| **CEP** | ❌ Não | Código postal (busca automática de endereço) |
| **Rua/Nº** | ✅ Sim | Endereço completo com número |
| **Setor/Bairro** | ✅ Sim | Bairro ou setor do endereço |
| **Complemento** | ❌ Não | Apto, casa, lote, quadra, etc. |
| **Localização (GPS)** | ❌ Não | Captura coordenadas via geolocalização |

---

## ✨ Funcionalidades Principais

### 🔍 **Busca de CEP Automática**
- Quando o usuário insere um CEP válido (8 dígitos), a API ViaCEP preenche automaticamente:
  - Rua/Logradouro
  - Bairro
- Integração com a API: `https://viacep.com.br`

### 📍 **Geolocalização (GPS)**
- Botão "Clique para enviar (Localização Atual)" captura as coordenadas do usuário
- As coordenadas são convertidas em link do **Waze** para navegação
- Aumenta a precisão da entrega

### 💬 **Integração WhatsApp**
- Formata a mensagem com emojis e dados do cliente
- Envia para o número: `+55 62 99376-8276`
- Link direto: `https://wa.me/NUMERO?text=MENSAGEM`
- Abre o WhatsApp automaticamente no dispositivo do cliente

### 🎨 **Design Responsivo**
- Adaptado para mobile, tablet e desktop
- Interface limpa com as cores do restaurante:
  - Verde: `#205c44`
  - Bege: `#f9f8f4`
  - Amarelo: `#FFC107`
- Efeitos suaves e animações

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilos e animações
  - **Tailwind CSS** - Framework de CSS (via CDN)
  - Estilos customizados com variáveis CSS
- **JavaScript Vanilla** - Funcionalidades interativas
  - Sem dependências externas
  - Requisições assincronizadas (fetch API)

### APIs Externas
- **ViaCEP** - Busca de endereço por CEP
- **Geolocation API** - Captura de coordenadas GPS
- **Waze** - Links de navegação
- **WhatsApp API** - Envio de mensagens

### Fonts & CDN
- **Google Fonts** - Inter (400, 600, 800)
- **Tailwind CSS CDN**

---

## 📱 Fluxo de Dados

```
┌─────────────────────────────┐
│   Usuário Preenche Form     │
└──────────────┬──────────────┘
               │
     ┌─────────┴─────────┐
     │                   │
  ┌──▼──┐            ┌──▼──────┐
  │ CEP │            │ GPS     │
  │ API │            │ Capture │
  └──┬──┘            └──┬──────┘
     │                  │
     └────────┬─────────┘
              │
        ┌─────▼──────────────────┐
        │ Formata Mensagem       │
        │ com Emoji e Waze Link  │
        └──────────┬─────────────┘
                   │
        ┌──────────▼────────────┐
        │ Abre WhatsApp Web/App │
        │ Envia para Restaurante │
        └───────────────────────┘
```

---

## 🚀 Como Usar

### Instalação
Nenhuma instalação necessária! É um arquivo HTML único.

### Executar Localmente
1. Salve o arquivo `MonteiroTYPE .html` no seu computador
2. Abra em qualquer navegador moderno (Chrome, Firefox, Safari, Edge)
3. Preencha o formulário e teste a funcionalidade

### Publicar Online
- Hospede em qualquer servidor web (GitHub Pages, Netlify, Vercel, etc.)
- Exemplo com GitHub Pages:
  ```bash
  git add MonteiroTYPE .html
  git commit -m "Adicionar formulário de entrega"
  git push origin main
  ```

---

## ⚙️ Configurações Importantes

### Alterar Número do WhatsApp
No arquivo HTML, procure por:
```javascript
const SEU_NUMERO = "5562993768276"; 
```

Substitua pelo seu número:
```javascript
const SEU_NUMERO = "55XXXXXXXXXXX"; // +55 + DDD + Número (sem caracteres especiais)
```

### Alterar Cores
As cores estão definidas em variáveis CSS no `<style>`:
```css
:root {
    --verde-logo: #205c44;      /* Verde do logo */
    --bege-logo: #f9f8f4;       /* Bege de fundo */
    --amarelo-destaque: #FFC107; /* Amarelo destaque */
    --whatsapp-green: #25D366;  /* Verde WhatsApp */
}
```

---

## 📋 Mensagem WhatsApp Enviada

Exemplo de mensagem formatada:

```
🍔 ENDEREÇO - MONTEIRO BURGER

👤 CLIENTE: João Silva
🏠 RUA/Nº: Rua T-32, nº 120
🏘️ SETOR: Setor Bueno
🏢 REF: Apto 302, Bloco A

🚙 ABRIR LOCALIZAÇÃO:
https://waze.com/ul?ll=-15.7942,-48.0000&navigate=yes
```

---

## 🎨 Design & UX

### Paleta de Cores
- **Verde Escuro** (`#205c44`) - Card principal
- **Bege Claro** (`#f9f8f4`) - Fundo
- **Amarelo** (`#FFC107`) - Títulos e labels
- **Verde WhatsApp** (`#25D366`) - Botão principal

### Interatividade
- ✅ Validação de campos obrigatórios
- ✅ Feedback visual ao clicar em botões
- ✅ Toques suavizados em dispositivos mobile
- ✅ Animações ao passar o mouse
- ✅ Alertas para feedback do usuário

---

## 🔐 Segurança

### Observações
- ⚠️ O número do WhatsApp está visível no código
- ⚠️ Considere usar backend se precisar proteger informações sensíveis
- ✅ Validação básica de campos obrigatórios
- ✅ Sem armazenamento de dados no cliente

---

## 📱 Compatibilidade

| Navegador | Desktop | Mobile |
|-----------|---------|--------|
| Chrome | ✅ | ✅ |
| Firefox | ✅ | ✅ |
| Safari | ✅ | ✅ |
| Edge | ✅ | ✅ |
| IE 11 | ❌ | N/A |

---

## 🐛 Possíveis Melhorias Futuras

1. **Backend** - Armazenar pedidos em banco de dados
2. **Autenticação** - Sistema de login para clientes
3. **Menu** - Integração com cardápio do restaurante
4. **Pagamento** - Integração com gateway de pagamento
5. **Email** - Confirmação de pedido por email
6. **Analytics** - Rastreamento de dados de clientes
7. **Multi-idioma** - Suporte a outros idiomas
8. **PWA** - Funcionalidade offline

---

## 📞 Suporte

Para reportar bugs ou sugerir melhorias, entre em contato com a Monteiro Burger.

---

## 📄 Licença

Este projeto é propriedade da Monteiro Burger. Todos os direitos reservados.

---

**Versão:** 1.0  
**Data:** Março 2026  
**Desenvolvido para:** Monteiro Burger
