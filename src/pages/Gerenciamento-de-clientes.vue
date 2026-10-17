<script setup>
import { ref } from 'vue'

const nome = ref('')
const email = ref('')
const enviado = ref(false)

function enviar() {
  enviado.value = true
  nome.value = ''
  email.value = ''
  setTimeout(() => { enviado.value = false }, 6000)
}
</script>

<template>
  <!-- ================= HERO ================= -->
  <section class="hero">
    <div class="container hero-grid">
      <div>
        <h1>EspoCRM sob medida: implementação, integração e suporte em português</h1>
        <p class="sub">
          Tenha um CRM completo, personalizado para o seu processo, sem licenças por usuário
          e com os dados sob seu controle. Nós cuidamos de tudo — da configuração ao suporte contínuo.
        </p>
        <div class="hero-cta">
          <a href="#contato" class="btn btn-primary">Solicitar diagnóstico gratuito</a>
          <a href="#planos" class="btn btn-outline">Ver planos</a>
        </div>
        <div class="hero-badges">
          <span>Sem custo de licença por usuário</span>
          <span>Hospedagem no seu servidor ou na nuvem</span>
          <span>Suporte em português</span>
        </div>
      </div>

      <div class="hero-visual" aria-hidden="true">
        <div class="bar w40"></div>
        <div class="bar w80"></div>
        <div class="bar w60"></div>
        <div class="card-mini"><strong>Pipeline de Vendas</strong><br><span style="opacity:.7;font-size:.85rem">Prospecção → Proposta → Fechamento</span></div>
        <div class="card-mini"><strong>+ 320 leads ativos</strong><br><span style="opacity:.7;font-size:.85rem">Atualizados em tempo real</span></div>
        <div class="card-mini"><strong>Automação ativa</strong><br><span style="opacity:.7;font-size:.85rem">Follow-up automático em 24h</span></div>
      </div>
    </div>
  </section>

  <!-- ================= PROBLEMA ================= -->
  <section class="problema">
    <div class="container">
      <div class="section-head">
        <h2>Sua empresa está desorganizada no tratamento com os clientes?</h2>
        <p>Esses são os problemas que mais ouvimos de empresas que chegam até nós.</p>
      </div>
      <div class="problema-grid">
        <div class="problema-item">
          <h3>Organizar clientes</h3>
          <p>As informações de meus clientes estão espalhadas por agendas e ferramentas espalhadas em vários lugares.</p>
        </div>
        <div class="problema-item">
          <h3>Preciso saber quando fazer atendimentos</h3>
          <p>Gestão de atendimentos da empresa está desorganizado.</p>
        </div>
        <div class="problema-item">
          <h3>Preciso saber quando fazer ligações</h3>
          <p>Faço as ligações de qualquer jeito, sem uma previsão.</p>
        </div>
        <div class="problema-item">
          <h3>Dados presos ao fornecedor</h3>
          <p>Você não consegue exportar tudo, integrar com outros sistemas ou migrar sem perder histórico. Fica refém da plataforma.</p>
        </div>
        <div class="problema-item">
          <h3>Processo engessado</h3>
          <p>O CRM impõe um fluxo genérico. Sua equipe se adapta ao software — quando deveria ser o contrário.</p>
        </div>
        <div class="problema-item">
          <h3>Custo por usuário insustentável</h3>
          <p>A cada novo vendedor ou atendente, a fatura cresce. O CRM vira uma despesa fixa que limita o crescimento do time.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ================= SOLUÇÃO ================= -->
  <section>
    <div class="container">
      <div class="section-head">
        <h2>O que você recebe com a nossa implementação</h2>
        <p>Um pacote completo: software, configuração, integração, treinamento e suporte contínuo.</p>
      </div>
      <div class="solucao-grid">
        <div class="solucao-card">
          <div class="icon">1</div>
          <h3>Implementação e configuração</h3>
          <p>Mapeamento dos seus processos, criação de fluxos (pipelines), campos, layouts, dashboards e automações sob medida.</p>
        </div>
        <div class="solucao-card">
          <div class="icon">2</div>
          <h3>Tranquilidade para trabalhar enquanto seus clientes são bem atendidos</h3>
          <p>Saíba quando seus clientes serão atendidos, contactados ou terá reuniões.</p>
        </div>
        <div class="solucao-card">
          <div class="icon">3</div>
          <h3>Migração de dados</h3>
          <p>Importação de contatos, empresas, leads e histórico do seu CRM ou planilhas atuais, sem perda de informação.</p>
        </div>
        <div class="solucao-card">
          <div class="icon">4</div>
          <h3>Integrações</h3>
          <p>E-mail (IMAP/SMTP), Google/Outlook, VoIP, WhatsApp, ERPs e sistemas internos via API REST.</p>
        </div>
        <div class="solucao-card">
          <div class="icon">5</div>
          <h3>Treinamento da equipe</h3>
          <p>Capacitação prática para que o time use o sistema no dia a dia, com material de apoio em português.</p>
        </div>
        <div class="solucao-card">
          <div class="icon">6</div>
          <h3>Hospedagem e suporte contínuo</h3>
          <p>Servidor gerenciado, backups, atualizações de segurança e suporte técnico recorrente.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ================= COMO FUNCIONA ================= -->
  <section class="como-funciona">
    <div class="container">
      <div class="section-head">
        <h2>Como funciona a implementação</h2>
        <p>Um processo estruturado, do diagnóstico ao suporte contínuo.</p>
      </div>
      <div class="steps">
        <div class="step">
          <h3>Diagnóstico</h3>
          <p>Reunião para entender seus processos, sistemas atuais e necessidades.</p>
        </div>
        <div class="step">
          <h3>Proposta</h3>
          <p>Escopo, cronograma e investimento detalhados, sem surpresas.</p>
        </div>
        <div class="step">
          <h3>Implementação</h3>
          <p>Configuração, customização e migração dos dados para o novo CRM.</p>
        </div>
        <div class="step">
          <h3>Treinamento</h3>
          <p>Homologação com usuários-chave e capacitação da equipe.</p>
        </div>
        <div class="step">
          <h3>Início do uso</h3>
          <p>Entrada em produção com acompanhamento intensivo nas primeiras semanas.</p>
        </div>
        <div class="step">
          <h3>Suporte contínuo</h3>
          <p>Gestão, evolução e melhorias conforme a sua empresa cresce.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ================= CASES ================= -->
  <section>
    <div class="container">
      <div class="section-head">
        <h2>Casos de sucesso</h2>
        <p>Resultados reais de empresas que trabalham conosco.</p>
      </div>
      <div class="cases-grid">
        <div class="case-card">
          <span class="case-tag">Saúde &amp; Bem-Estar</span>
          <h3>Rastreamento de pacientes</h3>
          <p>Organização configurou o EspoCRM para rastreamento de pacientes e acompanhamento de futuras consultas.</p>
          <div class="case-result">↑ Acompanhamento contínuo de pacientes em larga escala</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ================= PLANOS ================= -->
  <section class="planos" id="planos">
    <div class="container">
      <div class="section-head">
        <h2>Planos e investimento</h2>
        <p>Um projeto de implementação sob medida e a gestão contínua para manter tudo funcionando.</p>
      </div>
      <div class="planos-grid planos-grid-2">
        <div class="plano destaque">
          <h3>Implementação do CRM</h3>
          <div class="preco">A partir de R$ 2.500 <small>projeto sob medida</small></div>
          <p class="desc">
            Para quem está crescendo e quer se organizar melhor, com mais tranquilidade para tomar decisões.
            Ideal para sair do zero, substituir um CRM simples ou integrar processos mais complexos.
          </p>
          <ul>
            <li>Diagnóstico e mapeamento de processos</li>
            <li>Configuração de pipeline, campos e layouts</li>
            <li>Migração de contatos e leads</li>
            <li>Integrações (e-mail, VoIP, ERP, WhatsApp)</li>
            <li>Customização de módulos específicos</li>
            <li>Automações avançadas (BPM)</li>
            <li>Portal do cliente configurado</li>
            <li>Treinamento da equipe</li>
            <li>90 dias de suporte pós início</li>
          </ul>
          <a href="#contato" class="btn btn-primary">Solicitar proposta</a>
        </div>

        <div class="plano">
          <h3>Gestão Contínua</h3>
          <div class="preco">R$ 250,00 <small>/mês</small></div>
          <p class="desc">Para manter o CRM saudável, atualizado e em evolução.</p>
          <ul>
            <li>Hospedagem gerenciada</li>
            <li>Backups e atualizações de segurança</li>
            <li>Suporte técnico prioritário</li>
            <li>Horas mensais para melhorias</li>
            <li>Treinamento contínuo de novos usuários</li>
          </ul>
          <a href="#contato" class="btn btn-outline">Falar com especialista</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ================= FAQ ================= -->
  <section>
    <div class="container">
      <div class="section-head">
        <h2>Perguntas frequentes</h2>
      </div>
      <div class="faq-list">
        <details class="faq-item">
          <summary>O que é o EspoCRM e por que ele é diferente?</summary>
          <div class="resposta">É um CRM open-source completo (vendas, atendimento, marketing e automações). Diferente dos CRMs tradicionais, não cobra licença por usuário — você paga apenas pela implementação e pelos serviços que quiser contratar.</div>
        </details>
        <details class="faq-item">
          <summary>Onde ficam hospedados os dados?</summary>
          <div class="resposta">Você escolhe: no seu próprio servidor, em um provedor de nuvem (AWS, Google Cloud, Azure) ou em uma infraestrutura gerenciada por nós. Em todos os casos, os dados são seus e podem ser exportados a qualquer momento.</div>
        </details>
        <details class="faq-item">
          <summary>Consigo migrar do meu CRM atual?</summary>
          <div class="resposta">Sim. Fazemos a migração de contatos, empresas, leads, oportunidades e histórico. Em geral, é possível preservar praticamente tudo o que for relevante para o seu processo comercial.</div>
        </details>
        <details class="faq-item">
          <summary>Quanto tempo leva a implementação?</summary>
          <div class="resposta">Depende do escopo. Uma implementação essencial costuma levar de 2 a 4 semanas. Projetos com integrações e customizações podem levar de 6 a 12 semanas. Definimos o cronograma na proposta.</div>
        </details>
        <details class="faq-item">
          <summary>Preciso de equipe de TI para manter o sistema?</summary>
          <div class="resposta">Não. No plano de Gestão Contínua, cuidamos da hospedagem, backups, atualizações e suporte. Sua equipe só precisa usar o CRM no dia a dia.</div>
        </details>
        <details class="faq-item">
          <summary>Posso personalizar o sistema para o meu negócio?</summary>
          <div class="resposta">Sim. Essa é a principal vantagem do EspoCRM: podemos criar campos, módulos, automações e relatórios específicos para o seu processo, sem depender do roadmap de um fornecedor.</div>
        </details>
      </div>
    </div>
  </section>

  <!-- ================= CTA FINAL ================= -->
  <section class="cta-final" id="contato">
    <div class="container">
      <h2>Vamos conversar sobre o seu CRM?</h2>
      <p>Agende um diagnóstico gratuito de 30 minutos. Vamos entender seu processo e mostrar como o EspoCRM pode se encaixar na sua operação.</p>

      <form @submit.prevent="enviar">
        <input v-model="nome" type="text" name="nome" placeholder="Seu nome" required>
        <input v-model="email" type="email" name="email" placeholder="Seu e-mail corporativo" required>
        <button type="submit" class="btn btn-primary">Quero o diagnóstico</button>
      </form>

      <p v-if="enviado" class="sucesso">Obrigado! Entraremos em contato em breve.</p>
      <p v-else class="obs">Sem compromisso. Respondemos em até 1 dia útil.</p>
    </div>
  </section>
</template>

<style>
:root {
  --primary: #1e6feb;
  --primary-dark: #1450b3;
  --dark: #0f172a;
  --gray: #64748b;
  --light: #f8fafc;
  --border: #e2e8f0;
  --success: #10b981;
  --radius: 12px;
  --shadow: 0 4px 20px rgba(15, 23, 42, 0.08);
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: var(--dark);
  line-height: 1.6;
  background: #fff;
}

.container { max-width: 1140px; margin: 0 auto; padding: 0 24px; }

section { padding: 80px 0; }

h1, h2, h3 { line-height: 1.2; font-weight: 700; }
h1 { font-size: clamp(2rem, 4vw, 3rem); }
h2 { font-size: clamp(1.6rem, 3vw, 2.25rem); margin-bottom: 16px; }
h3 { font-size: 1.15rem; margin-bottom: 10px; }

.section-head { text-align: center; max-width: 720px; margin: 0 auto 56px; }
.section-head p { color: var(--gray); font-size: 1.05rem; }

.btn {
  display: inline-block;
  padding: 14px 28px;
  border-radius: var(--radius);
  font-weight: 600;
  text-decoration: none;
  transition: all .2s;
  cursor: pointer;
  border: none;
  font-size: 1rem;
}
.btn-primary { background: var(--primary); color: #fff; }
.btn-primary:hover { background: var(--primary-dark); transform: translateY(-2px); }
.btn-outline { background: transparent; color: var(--primary); border: 2px solid var(--primary); }
.btn-outline:hover { background: var(--primary); color: #fff; }

.hero {
  background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
  color: #fff;
  padding: 100px 0;
}
.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
  align-items: center;
}
.hero h1 { margin-bottom: 20px; }
.hero p.sub { font-size: 1.15rem; opacity: .9; margin-bottom: 28px; }
.hero-cta { display: flex; gap: 14px; flex-wrap: wrap; }
.hero-cta .btn-outline { color: #fff; border-color: rgba(255,255,255,.5); }
.hero-cta .btn-outline:hover { background: #fff; color: var(--dark); border-color: #fff; }
.hero-badges {
  display: flex; gap: 20px; margin-top: 32px; flex-wrap: wrap;
  font-size: .9rem; opacity: .85;
}
.hero-badges span::before { content: "✓ "; color: var(--success); font-weight: 700; }

.hero-visual {
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.15);
  border-radius: var(--radius);
  padding: 24px;
  backdrop-filter: blur(6px);
}
.hero-visual .bar { height: 10px; border-radius: 6px; background: rgba(255,255,255,.15); margin-bottom: 12px; }
.hero-visual .bar.w60 { width: 60%; }
.hero-visual .bar.w80 { width: 80%; }
.hero-visual .bar.w40 { width: 40%; }
.hero-visual .card-mini {
  background: rgba(255,255,255,.1);
  border-radius: 8px;
  padding: 14px;
  margin-top: 16px;
}
.hero-visual .card-mini + .card-mini { margin-top: 10px; }

.problema { background: var(--light); }
.problema-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}
.problema-item {
  background: #fff;
  border-radius: var(--radius);
  padding: 28px;
  border-left: 4px solid #ef4444;
  box-shadow: var(--shadow);
}
.problema-item h3 { color: var(--dark); }

.solucao-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}
.solucao-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px;
  transition: all .25s;
  background: #fff;
}
.solucao-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow);
  border-color: var(--primary);
}
.solucao-card .icon {
  width: 44px; height: 44px;
  border-radius: 10px;
  background: rgba(30, 111, 235, .1);
  color: var(--primary);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.4rem; font-weight: 700;
  margin-bottom: 16px;
}

.como-funciona { background: var(--light); }
.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  counter-reset: step;
}
.step {
  background: #fff;
  border-radius: var(--radius);
  padding: 28px 22px;
  text-align: center;
  box-shadow: var(--shadow);
  position: relative;
}
.step::before {
  counter-increment: step;
  content: counter(step);
  position: absolute;
  top: -18px; left: 50%;
  transform: translateX(-50%);
  width: 36px; height: 36px;
  background: var(--primary);
  color: #fff;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-weight: 700;
}
.step { margin-top: 18px; }
.step h3 { margin-top: 12px; font-size: 1.05rem; }
.step p { font-size: .92rem; color: var(--gray); }

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}
.case-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px;
  background: #fff;
  transition: all .25s;
}
.case-card:hover { box-shadow: var(--shadow); }
.case-tag {
  display: inline-block;
  background: rgba(16, 185, 129, .1);
  color: var(--success);
  font-size: .75rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 999px;
  margin-bottom: 14px;
  text-transform: uppercase;
  letter-spacing: .5px;
}
.case-card h3 { margin-bottom: 10px; }
.case-card p { color: var(--gray); font-size: .95rem; }
.case-result {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px dashed var(--border);
  font-weight: 600;
  color: var(--success);
}

.planos { background: var(--light); }
.planos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  align-items: stretch;
}
.planos-grid-2 { grid-template-columns: repeat(2, 1fr); }
@media (max-width: 768px) {
  .planos-grid-2 { grid-template-columns: 1fr; }
}
.plano {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 32px 28px;
  display: flex; flex-direction: column;
  transition: all .25s;
}
.plano.destaque {
  border: 2px solid var(--primary);
  box-shadow: var(--shadow);
  position: relative;
}
.plano.destaque::after {
  content: "Mais procurado";
  position: absolute;
  top: -14px; left: 50%;
  transform: translateX(-50%);
  background: var(--primary);
  color: #fff;
  font-size: .75rem;
  font-weight: 700;
  padding: 4px 14px;
  border-radius: 999px;
  text-transform: uppercase;
}
.plano h3 { font-size: 1.2rem; margin-bottom: 6px; }
.plano .preco {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--primary);
  margin: 12px 0 4px;
}
.plano .preco small { font-size: .85rem; color: var(--gray); font-weight: 400; }
.plano .desc { color: var(--gray); font-size: .92rem; margin-bottom: 20px; }
.plano ul { list-style: none; margin-bottom: 28px; flex-grow: 1; }
.plano ul li {
  padding: 8px 0 8px 26px;
  position: relative;
  font-size: .93rem;
  border-bottom: 1px solid var(--border);
}
.plano ul li:last-child { border-bottom: none; }
.plano ul li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--success);
  font-weight: 700;
}
.plano .btn { text-align: center; }

.faq-list { max-width: 780px; margin: 0 auto; }
.faq-item {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  margin-bottom: 12px;
  overflow: hidden;
  background: #fff;
}
.faq-item summary {
  padding: 18px 22px;
  font-weight: 600;
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}
.faq-item summary::-webkit-details-marker { display: none; }
.faq-item summary::after {
  content: "+";
  font-size: 1.4rem;
  color: var(--primary);
  transition: transform .2s;
  flex-shrink: 0;
}
.faq-item[open] summary::after { transform: rotate(45deg); }
.faq-item .resposta {
  padding: 0 22px 20px;
  color: var(--gray);
  font-size: .95rem;
}

.cta-final {
  background: linear-gradient(135deg, #1e3a8a 0%, #1e6feb 100%);
  color: #fff;
  text-align: center;
  padding: 90px 0;
}
.cta-final h2 { color: #fff; }
.cta-final p {
  font-size: 1.1rem;
  opacity: .9;
  max-width: 620px;
  margin: 16px auto 32px;
}
.cta-final form {
  display: flex;
  gap: 10px;
  max-width: 520px;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
}
.cta-final input {
  flex: 1;
  min-width: 220px;
  padding: 14px 18px;
  border-radius: var(--radius);
  border: none;
  font-size: 1rem;
}
.cta-final .btn-primary { background: #fff; color: var(--primary); }
.cta-final .btn-primary:hover { background: #f1f5f9; }
.cta-final .obs { font-size: .85rem; opacity: .75; margin-top: 16px; }
.cta-final .sucesso {
  margin-top: 16px;
  padding: 12px 20px;
  border-radius: var(--radius);
  background: rgba(16, 185, 129, .2);
  font-weight: 600;
  display: inline-block;
}

@media (max-width: 860px) {
  .hero-grid { grid-template-columns: 1fr; gap: 40px; }
  .hero { padding: 70px 0; }
  section { padding: 60px 0; }
}
</style>