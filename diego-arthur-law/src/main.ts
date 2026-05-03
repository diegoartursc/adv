import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  createIcons, 
  ShieldCheck, 
  Key, 
  Leaf, 
  Scale, 
  Mail, 
  Lock, 
  Mouse, 
  ChevronDown, 
  ArrowRight, 
  X,
  Code2,
  Search,
  MessageSquare
} from 'lucide';

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize Lucide Icons with explicit mapping
const icons = {
  ShieldCheck,
  Key,
  Leaf,
  Scale,
  Mail,
  Lock,
  Mouse,
  ChevronDown,
  ArrowRight,
  X,
  Code2,
  Search,
  MessageSquare
};

const initIcons = () => {
  createIcons({ icons });
};

// Content for Modals
const expertiseDetails: Record<string, any> = {
  'data-security': {
    title: 'Fortaleza Digital',
    content: `
      <div class="modal-body-content" style="padding: 10px;">
        <span class="scientific-name" style="color:var(--neon-green); font-size:0.85rem; text-transform:uppercase; letter-spacing:2px; display:block; margin-bottom:15px;">Governança de Dados & Inteligência Artificial</span>
        <h2 style="font-size:2.5rem; margin-bottom:20px; font-weight:800; line-height: 1.1;">Fortaleza Digital</h2>
        <p style="color:var(--text-dim); font-size:1.15rem; margin-bottom:30px; line-height:1.7;">A proteção de dados deixou de ser uma exigência burocrática. Com a fiscalização automatizada pela ANPD e a nova Lei de Inteligência Artificial, um vazamento ou o uso inadequado de algoritmos pode resultar em multas milionárias, interdição cautelar e dano reputacional irreversível. Estruturamos a governança jurídica que protege o seu negócio.</p>
        
        <div class="modal-services" style="background:rgba(255,255,255,0.02); padding:25px; border-radius:16px; border:1px solid rgba(0, 255, 136, 0.1);">
          <h4 style="color:#fff; margin-bottom:20px; font-size:1.2rem; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:10px;">Exemplos de Atuação:</h4>
          <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:15px;">
            <li style="display:flex; gap:12px; align-items:flex-start;">
              <span style="color:var(--neon-green); font-size:1.2rem;">&#8226;</span>
              <div>
                <strong style="color:var(--text-color); display:block; margin-bottom:3px;">DPIA Algorítmico (Lei de IA):</strong>
                <span style="color:var(--text-dim); font-size:0.95rem;">Auditoria jurídica e confecção do Relatório de Impacto para modelos de Machine Learning (LLMs), mitigando riscos de viés discriminatório e interdição cautelar pela ANPD.</span>
              </div>
            </li>
            <li style="display:flex; gap:12px; align-items:flex-start;">
              <span style="color:var(--neon-green); font-size:1.2rem;">&#8226;</span>
              <div>
                <strong style="color:var(--text-color); display:block; margin-bottom:3px;">Protocolo Anti-Ransomware (Data Breach Response):</strong>
                <span style="color:var(--text-dim); font-size:0.95rem;">Plano de contenção legal em 24h. Negociação com threat actors, reporte mandatório à autoridade nacional e defesas cíveis contra litígios em massa (Class Actions).</span>
              </div>
            </li>
            <li style="display:flex; gap:12px; align-items:flex-start;">
              <span style="color:var(--neon-green); font-size:1.2rem;">&#8226;</span>
              <div>
                <strong style="color:var(--text-color); display:block; margin-bottom:3px;">Engenharia de Consentimento 3.0:</strong>
                <span style="color:var(--text-dim); font-size:0.95rem;">Mapeamento de fluxos de dados biológicos e financeiros, implementando arquitetura de Privacy by Design diretamente nos repositórios da sua infraestrutura.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    `
  },
  'crypto': {
    title: 'Engenharia Web3',
    content: `
      <div class="modal-body-content" style="padding: 10px;">
        <span class="scientific-name" style="color:var(--neon-green); font-size:0.85rem; text-transform:uppercase; letter-spacing:2px; display:block; margin-bottom:15px;">Criptoativos & Regulação Financeira</span>
        <h2 style="font-size:2.5rem; margin-bottom:20px; font-weight:800; line-height: 1.1;">Engenharia Web3</h2>
        <p style="color:var(--text-dim); font-size:1.15rem; margin-bottom:30px; line-height:1.7;">Com a regulamentação das SPSAVs pelo Banco Central, operar no mercado de criptoativos sem estrutura jurídica adequada tornou-se inviável. Atuamos na obtenção de licenças, na estruturação de ofertas de tokens e na criação de contratos inteligentes com validade nos tribunais brasileiros.</p>
        
        <div class="modal-services" style="background:rgba(255,255,255,0.02); padding:25px; border-radius:16px; border:1px solid rgba(0, 255, 136, 0.1);">
          <h4 style="color:#fff; margin-bottom:20px; font-size:1.2rem; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:10px;">Exemplos de Atuação:</h4>
          <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:15px;">
            <li style="display:flex; gap:12px; align-items:flex-start;">
              <span style="color:var(--neon-green); font-size:1.2rem;">&#8226;</span>
              <div>
                <strong style="color:var(--text-color); display:block; margin-bottom:3px;">Licenciamento BC & Enquadramento CVM:</strong>
                <span style="color:var(--text-dim); font-size:0.95rem;">Modelagem jurídica de exchanges, emissão de utility tokens (RWA/Tokenização) e protocolos de staking, afastando riscos de oferta irregular de valores mobiliários.</span>
              </div>
            </li>
            <li style="display:flex; gap:12px; align-items:flex-start;">
              <span style="color:var(--neon-green); font-size:1.2rem;">&#8226;</span>
              <div>
                <strong style="color:var(--text-color); display:block; margin-bottom:3px;">Ricardian Contracts & Escrow On-chain:</strong>
                <span style="color:var(--text-dim); font-size:0.95rem;">Codificamos termos legais em contratos inteligentes auditáveis, criando pontes indestrutíveis entre a execução autônoma (blockchain) e as cortes arbitrais do mundo real.</span>
              </div>
            </li>
            <li style="display:flex; gap:12px; align-items:flex-start;">
              <span style="color:var(--neon-green); font-size:1.2rem;">&#8226;</span>
              <div>
                <strong style="color:var(--text-color); display:block; margin-bottom:3px;">Forense Cripto (Asset Recovery):</strong>
                <span style="color:var(--text-dim); font-size:0.95rem;">Liminares de urgência e rastreio avançado via Chainalysis para congelamento de fundos hackeados em corretoras centralizadas (Binance, Coinbase) ou pools descentralizadas.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    `
  },
  'cannabis': {
    title: 'Direito Canábico 2.0',
    content: `
      <div class="modal-body-content" style="padding: 10px;">
        <span class="scientific-name" style="color:var(--neon-green); font-size:0.85rem; text-transform:uppercase; letter-spacing:2px; display:block; margin-bottom:15px;">Inovação Regulatória & Saúde</span>
        <h2 style="font-size:2.5rem; margin-bottom:20px; font-weight:800; line-height: 1.1;">Canábico 2.0</h2>
        <p style="color:var(--text-dim); font-size:1.15rem; margin-bottom:30px; line-height:1.7;">O novo marco regulatório abriu caminho para a indústria da Cannabis Medicinal e do Cânhamo Industrial no Brasil. Atuamos para garantir que pacientes, pesquisadores e empresas do setor possam operar com segurança jurídica plena — da obtenção de salvo-condutos à estruturação de associações e licenças sanitárias.</p>
        
        <div class="modal-services" style="background:rgba(255,255,255,0.02); padding:25px; border-radius:16px; border:1px solid rgba(0, 255, 136, 0.1);">
          <h4 style="color:#fff; margin-bottom:20px; font-size:1.2rem; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:10px;">Exemplos de Atuação:</h4>
          <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:15px;">
            <li style="display:flex; gap:12px; align-items:flex-start;">
              <span style="color:var(--neon-green); font-size:1.2rem;">&#8226;</span>
              <div>
                <strong style="color:var(--text-color); display:block; margin-bottom:3px;">Habeas Corpus Preventivo (Blindagem Penal):</strong>
                <span style="color:var(--text-dim); font-size:0.95rem;">A principal ferramenta jurídica para garantir salvo-conduto a pacientes que necessitam cultivar plantas ricas em CBD e THC, protegendo contra incursões policiais e confiscos.</span>
              </div>
            </li>
            <li style="display:flex; gap:12px; align-items:flex-start;">
              <span style="color:var(--neon-green); font-size:1.2rem;">&#8226;</span>
              <div>
                <strong style="color:var(--text-color); display:block; margin-bottom:3px;">Engenharia Associativa (Modelagem de ONGs):</strong>
                <span style="color:var(--text-dim); font-size:0.95rem;">Estruturação societária, tributária e sanitária para Associações de Pacientes. Construímos o esqueleto jurídico para extração de óleos, distribuição segura e defesa civil.</span>
              </div>
            </li>
            <li style="display:flex; gap:12px; align-items:flex-start;">
              <span style="color:var(--neon-green); font-size:1.2rem;">&#8226;</span>
              <div>
                <strong style="color:var(--text-color); display:block; margin-bottom:3px;">Licenciamento Anvisa & Mapa (Agro Industrial):</strong>
                <span style="color:var(--text-dim); font-size:0.95rem;">Navegação pelos corredores da vigilância sanitária. Pareceres para importação de sementes, georreferenciamento de plantações de cânhamo e adequação de laboratórios (BPF/GMP).</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    `
  }
};

const initApp = () => {
  initIcons();

  // Initial Animations (Progressive Enhancement - No more gsap.set with opacity 0)
  
  // Hero Priority Animation - Use from() to start from invisible and move TO the default visible state
  gsap.from('.hero-content .fade-up', {
    opacity: 0,
    y: 30,
    duration: 1.2,
    stagger: 0.15,
    ease: 'power4.out',
    delay: 0.2
  });

  // Scroll Reveal Animations
  const reveals = document.querySelectorAll('.reveal-text, .glass-card, .step, .visual-element');
  reveals.forEach((el) => {
    if (el.closest('.hero')) return;
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 92%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power2.out'
    });
  });

  // Physics Tilt
  const cards = document.querySelectorAll('.neon-target');
  cards.forEach((card: any) => {
    card.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--x', `${(x / rect.width) * 100}%`);
      card.style.setProperty('--y', `${(y / rect.height) * 100}%`);
      const xPercent = (x / rect.width - 0.5) * 15;
      const yPercent = (y / rect.height - 0.5) * 15;
      gsap.to(card, { rotateY: xPercent, rotateX: -yPercent, duration: 0.4, ease: 'power1.out', overwrite: 'auto' });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.6, ease: 'power2.out', overwrite: 'auto' });
    });
  });

  // Modal Logic
  const modal = document.getElementById('expertise-modal');
  const modalContent = document.getElementById('modal-body');
  const closeModal = document.querySelector('.close-modal');

  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const card = target.closest('.expertise-card');
    
    if (card && modal && modalContent) {
      e.preventDefault();
      const key = card.getAttribute('data-expertise');
      if (key && expertiseDetails[key]) {
        modalContent.innerHTML = expertiseDetails[key].content;
        modal.style.display = 'flex';
        gsap.fromTo('.modal-content', 
          { scale: 0.8, opacity: 0 }, 
          { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }
        );
        initIcons();
      }
    }
  });

  const closeHandler = () => {
    if (modal) {
      gsap.to('.modal-content', { 
        scale: 0.8, opacity: 0, duration: 0.3, 
        onComplete: () => { if (modal) modal.style.display = 'none'; } 
      });
    }
  };

  closeModal?.addEventListener('click', (e) => { e.stopPropagation(); closeHandler(); });
  modal?.addEventListener('click', (e) => { if (e.target === modal) closeHandler(); });
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeHandler(); });
};

// Removed toggleFaq from here, moved to index.html for global access

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Parallax for Hero
document.addEventListener('mousemove', (e) => {
  const xPos = (e.clientX / window.innerWidth - 0.5) * 50;
  const yPos = (e.clientY / window.innerHeight - 0.5) * 50;
  gsap.to('.gradient-sphere', {
    x: xPos,
    y: yPos,
    duration: 1,
    ease: 'power2.out'
  });
});

