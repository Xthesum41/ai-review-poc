# ai-review-poc

## Objetivo do projeto
Implementar um bot automatizado de revisão de código integrado ao GitHub que utiliza o LLM Gemini 2.5 flash para analisar commits e Pull Requests, gerando avaliações técnicas, sugestões e decisão de aprovação ou reprovação.

## Objetivos específicos
- Automatizar o processo de code review em Pull Requests.
- Analisar diffs de commits usando IA (Gemini 2.5 flash).
- Identificar possíveis bugs, falhas de segurança, más práticas, problemas de performance e violações de padrão de código.
- Gerar comentários técnicos claros no PR.
- Classificar o PR como aprovado ou reprovado.
- Apoiar desenvolvedores com sugestões de melhoria.
- Reduzir carga manual de revisão de código.
- Padronizar critérios de qualidade no repositório.
- Integrar revisão diretamente no fluxo do GitHub Actions.
- Manter a solução sem necessidade de servidor externo.
- Garantir uso seguro de credenciais via GitHub Secrets.

## Objetivos técnicos
- Integrar GitHub Actions + API Gemini.
- Consumir diffs automaticamente via webhook de PR.
- Construir prompt de revisão de código estruturado.
- Processar a resposta do LLM e publicar comentário no PR.
- Permitir expansão futura para:
	- score de qualidade;
	- aprovação automática;
	- bloqueio de merge;
	- revisão por linguagem;
	- análise de testes.