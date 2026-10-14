# Formulário de hospedagens — Tripway

Página estática responsiva para apresentar hospedagens à Tripway e iniciar uma conversa pelo WhatsApp.

## Funcionamento

Solicita nome, telefone, tipo de hospedagem, local, capacidade e canais atuais de captação de clientes. Valida os campos e monta uma mensagem para +55 93 9130-2594. O visitante confere e confirma o envio no WhatsApp.

Não há backend, armazenamento de respostas, analytics ou envio automático. O formulário sozinho não registra leads; o contato chega pelo WhatsApp após o envio do visitante.

## Executar localmente

Sem instalação de dependências ou build:

```sh
python -m http.server 5188
```

Abra http://localhost:5188. Para hospedar, publique esta pasta em um serviço de arquivos estáticos, mantendo index.html na raiz.

## Arquivos

- index.html: conteúdo e formulário acessível.
- style.css: estilos responsivos e fontes locais.
- app.js: validação, prévia e link para WhatsApp.
- assets/: símbolo Tripway, fontes e respectivas licenças.

O símbolo Tripway foi reaproveitado do projeto mobile, sem alteração de cor ou proporção. As fontes Inter e Playfair Display possuem avisos de licença em assets/. Não se presume licença de redistribuição da marca.

## Verificações em 14/10/2026

- Sintaxe JavaScript: node --check app.js.
- Edge/Playwright: campos obrigatórios, telefone inválido, nome só com espaços, capacidade inteira, texto com acentos/caracteres especiais e destino do link.
- Layout inspecionado em desktop e largura de 390 px, sem transbordamento horizontal.
- Ausência de gravação em localStorage verificada.
- Nenhuma mensagem foi enviada durante os testes.

Pendente: teste em aparelho físico da abertura do aplicativo WhatsApp e envio manual. Não foi realizada auditoria completa de acessibilidade.

Esta cópia não inclui configurações ou credenciais da hospedagem Sites. Publicar o código no GitHub não habilita automaticamente GitHub Pages.
