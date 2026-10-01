/**
 * Jogo "Salve o Solo!" - Meninas pelo Clima
 * Versão Expandida com Imagens Ilustrativas das Árvores
 */

// 1. Mapeamento de Estados, Regiões e Biomas Dominantes do Brasil (IBGE)
const BRAZIL_REGIONS = {
  "AC": { name: "Acre", biomes: ["Amazônia"] },
  "AL": { name: "Alagoas", biomes: ["Caatinga", "Mata Atlântica"] },
  "AP": { name: "Amapá", biomes: ["Amazônia"] },
  "AM": { name: "Amazonas", biomes: ["Amazônia"] },
  "BA": { name: "Bahia", biomes: ["Caatinga", "Mata Atlântica", "Cerrado"] },
  "CE": { name: "Ceará", biomes: ["Caatinga", "Mata Atlântica"] },
  "DF": { name: "Distrito Federal", biomes: ["Cerrado"] },
  "ES": { name: "Espírito Santo", biomes: ["Mata Atlântica"] },
  "GO": { name: "Goiás", biomes: ["Cerrado"] },
  "MA": { name: "Maranhão", biomes: ["Amazônia", "Cerrado", "Caatinga"] },
  "MT": { name: "Mato Grosso", biomes: ["Amazônia", "Cerrado", "Pantanal"] },
  "MS": { name: "Mato Grosso do Sul", biomes: ["Cerrado", "Pantanal", "Mata Atlântica"] },
  "MG": { name: "Minas Gerais", biomes: ["Cerrado", "Mata Atlântica", "Caatinga"] },
  "PA": { name: "Pará", biomes: ["Amazônia"] },
  "PB": { name: "Paraíba", biomes: ["Caatinga", "Mata Atlântica"] },
  "PR": { name: "Paraná", biomes: ["Mata Atlântica"] },
  "PE": { name: "Pernambuco", biomes: ["Caatinga", "Mata Atlântica"] },
  "PI": { name: "Piauí", biomes: ["Caatinga", "Cerrado"] },
  "RJ": { name: "Rio de Janeiro", biomes: ["Mata Atlântica"] },
  "RN": { name: "Rio Grande do Norte", biomes: ["Caatinga", "Mata Atlântica"] },
  "RS": { name: "Rio Grande do Sul", biomes: ["Pampa", "Mata Atlântica"] },
  "RO": { name: "Rondônia", biomes: ["Amazônia"] },
  "RR": { name: "Roraima", biomes: ["Amazônia"] },
  "SC": { name: "Santa Catarina", biomes: ["Mata Atlântica"] },
  "SP": { name: "São Paulo", biomes: ["Mata Atlântica", "Cerrado"] },
  "SE": { name: "Sergipe", biomes: ["Caatinga", "Mata Atlântica"] },
  "TO": { name: "Tocantins", biomes: ["Cerrado", "Amazônia"] }
};

// 2. Catálogo Expandido de Espécies Nativas com Imagens
const SPECIES_CATALOG = [
  {
    id: "pitanga",
    name: "Pitangueira",
    scientificName: "Eugenia uniflora",
    imageUrl: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    biomes: ["Mata Atlântica", "Pampa"],
    maxHeight: "3 a 6 metros",
    roots: "Superficiais e não agressivas",
    sunRequirement: ["direto", "parcial"],
    drainage: "umido_drenado",
    potSuitable: true,
    minPotVolume: "40 Litros",
    spaceNeed: "pequeno",
    description: "Árvore frutífera nativa de pequeno porte. Perfeita para quintais, calçadas e vasos grandes. Suas flores e frutos atraem passarinhos e fauna local.",
    sowing: "Semear sementes frescas a 1 cm de profundidade em substrato úmido e orgânico.",
    germination: "20 a 40 dias.",
    sources: "Embrapa WebAmbiente / Flora do Brasil 2020"
  },
  {
    id: "ipe_amarelo",
    name: "Ipê-Amarelo",
    scientificName: "Handroanthus chrysotrichus",
    imageUrl: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&w=800&q=80",
    biomes: ["Mata Atlântica", "Cerrado"],
    maxHeight: "4 a 10 metros",
    roots: "Profundas e seguras",
    sunRequirement: ["direto"],
    drainage: "umido_drenado",
    potSuitable: false,
    minPotVolume: "Muda temporária em vaso até 50cm de altura",
    spaceNeed: "medio",
    description: "Símbolo nacional com florada dourada exuberante. Árvore extremamente resistente, ótima para conservação do solo e recuperação de áreas degradadas.",
    sowing: "Colocar a semente alada levemente na horizontal cobrindo com 0,5 cm de terra leve.",
    germination: "14 a 25 dias.",
    sources: "Embrapa WebAmbiente"
  },
  {
    id: "aroeira_pimenteira",
    name: "Aroeira-Pimenteira",
    scientificName: "Schinus terebinthifolia",
    imageUrl: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
    biomes: ["Mata Atlântica", "Caatinga", "Cerrado", "Pampa"],
    maxHeight: "5 a 10 metros",
    roots: "Fortes e fixadoras de solo",
    sunRequirement: ["direto"],
    drainage: "umido_drenado",
    potSuitable: false,
    minPotVolume: "Não recomendado para vaso definitivo",
    spaceNeed: "medio",
    description: "Espécie pioneira de altíssima rusticidade. Suas raízes ajudam a conter erosões em barrancos e encostas degradadas.",
    sowing: "Cobrir levemente as sementes com terra e irrigar diariamente sem encharcar.",
    germination: "15 a 30 dias.",
    sources: "Embrapa WebAmbiente"
  },
  {
    id: "quaresmeira",
    name: "Quaresmeira",
    scientificName: "Tibouchina granulosa",
    imageUrl: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&w=800&q=80",
    biomes: ["Mata Atlântica"],
    maxHeight: "8 a 12 metros",
    roots: "Não agressivas",
    sunRequirement: ["direto", "parcial"],
    drainage: "umido_drenado",
    potSuitable: false,
    minPotVolume: "Apenas muda inicial",
    spaceNeed: "medio",
    description: "Muito valorizada na arborização urbana costeira e de encosta por não danificar calçadas e oferecer abundante floração roxa/rosa.",
    sowing: "Polvilhar as sementes minúsculas sobre o substrato mantendo alta umidade.",
    germination: "30 a 45 dias.",
    sources: "Manual de Arborização Urbana / Embrapa"
  },
  {
    id: "barbatimao",
    name: "Barbatimão",
    scientificName: "Stryphnodendron adstringens",
    imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
    biomes: ["Cerrado", "Caatinga"],
    maxHeight: "4 a 6 metros",
    roots: "Profundas e pivotantes",
    sunRequirement: ["direto"],
    drainage: "umido_drenado",
    potSuitable: false,
    minPotVolume: "Não recomendado para vaso definitivo",
    spaceNeed: "pequeno",
    description: "Típica do Cerrado e transição para Caatinga, resistente a solos secos e de baixa fertilidade. Protege a camada superficial contra o dessecamento.",
    sowing: "Requer escarificação leve da semente em lixa antes de semear a 1 cm de profundidade.",
    germination: "15 a 30 dias.",
    sources: "Embrapa Cerrados"
  },
  {
    id: "mulungu",
    name: "Mulungu",
    scientificName: "Erythrina velutina",
    imageUrl: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80",
    biomes: ["Caatinga", "Cerrado", "Mata Atlântica"],
    maxHeight: "8 a 12 metros",
    roots: "Profundas, fixadoras de nitrogênio",
    sunRequirement: ["direto"],
    drainage: "umido_drenado",
    potSuitable: false,
    minPotVolume: "Apenas muda temporária",
    spaceNeed: "grande",
    description: "Árvore adaptada ao semiárido e áreas secas. Fixa nitrogênio no solo, enriquecendo terras empobrecidas e combatendo o avanço do solo árido.",
    sowing: "Fazer uma pequena ranhura na casca da semente (quebra de dormência) e plantar a 1,5 cm.",
    germination: "10 a 20 dias.",
    sources: "Embrapa Semiárido"
  },
  {
    id: "embauba",
    name: "Embaúba",
    scientificName: "Cecropia pachystachya",
    imageUrl: "https://images.unsplash.com/photo-1511497584788-876761465586?auto=format&fit=crop&w=800&q=80",
    biomes: ["Amazônia", "Mata Atlântica", "Cerrado", "Pantanal"],
    maxHeight: "6 a 12 metros",
    roots: "Superficiais, de crescimento rápido",
    sunRequirement: ["direto"],
    drainage: "umido_drenado",
    potSuitable: false,
    minPotVolume: "Apenas para muda temporária",
    spaceNeed: "medio",
    description: "Espécie regeneradora de florestas. Cresce rapidamente em solos expostos e desprotegidos, criando sombra para que outras plantas voltem a nascer.",
    sowing: "Pressionar as sementes na superfície do solo sem enterrar fundo (precisa de luz).",
    germination: "20 a 40 dias.",
    sources: "INPA / Embrapa Amazônia Oriental"
  },
  {
    id: "cajui",
    name: "Cajuí / Cajueiro-Nativo",
    scientificName: "Anacardium humile",
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    biomes: ["Cerrado", "Amazônia", "Caatinga"],
    maxHeight: "2 a 4 metros",
    roots: "Xilopódio profundo (armazena água)",
    sunRequirement: ["direto"],
    drainage: "umido_drenado",
    potSuitable: true,
    minPotVolume: "50 Litros",
    spaceNeed: "pequeno",
    description: "Espécie arbustiva/arbórea de pequeno porte com raízes acumuladoras de água, perfeita para solos arenosos e sujeitos a períodos de seca.",
    sowing: "Plantar a castanha com a ponta para baixo cobrindo até a metade.",
    germination: "20 a 35 dias.",
    sources: "Embrapa Meio-Norte / Flora do Cerrado"
  },
  {
    id: "araucaria",
    name: "Araucária / Pinheiro-do-Paraná",
    scientificName: "Araucaria angustifolia",
    imageUrl: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80",
    biomes: ["Mata Atlântica"],
    maxHeight: "15 a 30 metros",
    roots: "Profundas e robustas",
    sunRequirement: ["direto"],
    drainage: "umido_drenado",
    potSuitable: false,
    minPotVolume: "Não aceita vaso na fase adulta",
    spaceNeed: "grande",
    description: "Símbolo do Sul do Brasil e regiões frias de altitude. Exige espaço amplo e solo profundo, desempenhando papel crucial na conservação da água e do solo de serras.",
    sowing: "Finque o pinhão com a ponta fina para baixo, deixando um terço para fora da terra.",
    germination: "30 a 60 dias.",
    sources: "Embrapa Florestas"
  },
  {
    id: "ingazeiro",
    name: "Ingá-do-Brejo",
    scientificName: "Inga laurina",
    imageUrl: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80",
    biomes: ["Amazônia", "Mata Atlântica", "Pantanal"],
    maxHeight: "8 a 15 metros",
    roots: "Resistentes ao encharcamento",
    sunRequirement: ["direto", "parcial"],
    drainage: "encharcado",
    potSuitable: false,
    minPotVolume: "Apenas muda inicial",
    spaceNeed: "grande",
    description: "Especialista em solos muito úmidos e margens de rios (matas ciliares). Evita o desmoronamento de margens e o assoreamento dos cursos d'água.",
    sowing: "Retirar a polpa branca da semente e semear imediatamente a 1 cm de profundidade.",
    germination: "7 a 15 dias.",
    sources: "Embrapa Pantanal"
  }
];

// 3. Perguntas do Mini-Desafio por Faixa Etária
const QUIZ_QUESTIONS = {
  crianca: [
    {
      q: "O que as raízes das árvores e as folhas no chão fazem pela terra quando chove?",
      options: [
        { text: "Protegem o solo contra a força da água e evitam a erosão", correct: true, exp: "Muito bem! As plantas funcionam como um escudo que segura a terra no lugar!" },
        { text: "Deixam o solo fraco e levam a terra embora", correct: false, exp: "Na verdade, são as raízes que seguram a terra para que a chuva não a leve!" }
      ]
    },
    {
      q: "Se um lugar passa alguns dias muito quentes e sem chuva, ele virou um deserto?",
      options: [
        { text: "Não! Seca curta é do clima, desertificação é uma degradação grave e demorada", correct: true, exp: "Certo! Dias quentes são normais. A desertificação leva anos para acontecer por danos à terra." },
        { text: "Sim, qualquer calor de verão transforma o solo em deserto", correct: false, exp: "Não é bem assim! O calor passageiro não é desertificação." }
      ]
    },
    {
      q: "Podemos plantar qualquer árvore em um vaso pequeno dentro de casa?",
      options: [
        { text: "Não! Precisamos escolher a árvore adequada ao espaço que terá quando crescer", correct: true, exp: "Exato! Uma árvore grande precisa de solo profundo para suas raízes." },
        { text: "Sim, todas as árvores cabem em vasos para sempre", correct: false, exp: "Cuidado! Árvores grandes quebram os vasos e podem morrer sem espaço!" }
      ]
    }
  ],
  adolescente: [
    {
      q: "Qual é o papel da cobertura vegetal na proteção contra a erosão?",
      options: [
        { text: "As raízes agregam a terra e as folhas reduzem o impacto direto da chuva", correct: true, exp: "Correto! A vegetação reduz o escoamento superficial e protege a estrutura do solo." },
        { text: "A vegetação seca o solo completamente, impedindo que a chuva molhe a terra", correct: false, exp: "Incorreto. As plantas ajudam na infiltração saudável e conservação da água no solo." }
      ]
    },
    {
      q: "Como diferenciar o processo de desertificação de uma seca sazonal?",
      options: [
        { text: "A desertificação é a degradação persistente da terra em áreas secas por fatores climáticos e humanos", correct: true, exp: "Excelente! Trata-se da perda contínua da capacidade produtiva do solo." },
        { text: "Desertificação é qualquer semana em que a temperatura passa dos 35°C", correct: false, exp: "Incorreto. O calor temporário é um evento meteorológico, não degradação permanente." }
      ]
    },
    {
      q: "O que deve ser avaliado antes de escolher uma espécie para plantar?",
      options: [
        { text: "Porte adulto, tipo de raiz, bioma nativo e compatibilidade com o espaço", correct: true, exp: "Perfeito! A adequação do local ao porte adulto evita problemas futuros." },
        { text: "Apenas se a muda jovem é bonita no vaso", correct: false, exp: "Atenção: A muda cresce! Não avaliar o porte adulto pode causar danos estruturais no futuro." }
      ]
    }
  ],
  adulto: [
    {
      q: "Segundo a UNCCD, o que define cientificamente a desertificação?",
      options: [
        { text: "Degradação da terra em zonas áridas, semiáridas e subúmidas secas por variações climáticas e ação humana", correct: true, exp: "Correto. Trata-se da perda de produtividade biológica do solo nessas regiões." },
        { text: "Aumento de temperatura em centros urbanos asfaltados", correct: false, exp: "Incorreto. Isso se refere às ilhas de calor urbanas, diferente de desertificação." }
      ]
    },
    {
      q: "A recuperação de um ecossistema nativo de campo ou savana deve sempre transformar o local em floresta densa?",
      options: [
        { text: "Não. Deve-se respeitar a fisionomia original (como os campos) sem forçar florestamento inadequado", correct: true, exp: "Exatamente! Transformar campos em florestas fechadas pode destruir a biodiversidade nativa local." },
        { text: "Sim. Qualquer projeto ambiental deve plantar florestas fechadas", correct: false, exp: "Incorreto. Nem todo ecossistema degradado era originalmente uma floresta fechada." }
      ]
    },
    {
      q: "Por que avaliar raízes e porte adulto é indispensável no planejamento ambiental?",
      options: [
        { text: "Para prevenir conflitos com construções, fiação, tubulações e garantir a sobrevivência da árvore", correct: true, exp: "Perfeito! O planejamento previne poda drástica e problemas estruturais." },
        { text: "Apenas por questões estéticas da copa", correct: false, exp: "Vai além da estética: envolve segurança estrutural e saúde a longo prazo da árvore." }
      ]
    }
  ]
};

// Estado Global do Jogo
let gameState = {
  ageGroup: "",
  quizIndex: 0,
  state: "RJ",
  city: "Duque de Caxias",
  detectedBiomes: ["Mata Atlântica"],
  housingType: "",
  plantLocationType: "",
  spaceAvailable: "medio",
  sunlight: "direto",
  drainage: "umido_drenado"
};

// Elementos da DOM
const app = document.getElementById("app-container");
const btnCreditsNav = document.getElementById("btn-credits-nav");
const modalCredits = document.getElementById("modal-credits");
const btnCloseModal = document.getElementById("btn-close-modal");

btnCreditsNav.addEventListener("click", () => modalCredits.classList.remove("hidden"));
btnCloseModal.addEventListener("click", () => modalCredits.classList.add("hidden"));

// Inicializar Jogo
renderWelcomeScreen();

function renderProgress(currentStep, totalSteps = 6) {
  const percentage = Math.round((currentStep / totalSteps) * 100);
  return `
    <div class="step-indicator">Etapa ${currentStep} de ${totalSteps}</div>
    <div class="progress-container">
      <div class="progress-bar" style="width: ${percentage}%"></div>
    </div>
  `;
}

// 1. Tela Inicial
function renderWelcomeScreen() {
  app.innerHTML = `
    <h2 class="screen-title">Bem-vinda(o) ao "Salve o Solo!" 🌱</h2>
    <p class="description">
      Aprenda a proteger a terra, compreenda o que é a desertificação e encontre a semente nativa ideal para a sua região e espaço!
    </p>
    <div class="feedback-card">
      <p>💡 <strong>Conhecimento é Semente:</strong> Escolher uma árvore requer saber onde ela viverá quando ficar adulta!</p>
    </div>
    <p class="description">Para adaptar a nossa conversa, qual é a sua faixa etária?</p>
    <div class="options-grid">
      <button class="btn-option" onclick="selectAge('crianca')">🧒 Criança</button>
      <button class="btn-option" onclick="selectAge('adolescente')">🧑 Adolescente</button>
      <button class="btn-option" onclick="selectAge('adulto')">👨‍🌾 Adulto</button>
    </div>
  `;
}

function selectAge(age) {
  gameState.ageGroup = age;
  gameState.quizIndex = 0;
  renderQuizScreen();
}

// 2. Mini-Desafio
function renderQuizScreen() {
  const questions = QUIZ_QUESTIONS[gameState.ageGroup] || QUIZ_QUESTIONS["adolescente"];
  const currentQ = questions[gameState.quizIndex];

  let html = renderProgress(1);
  html += `
    <h2 class="screen-title">Mini-Desafio do Solo 🧠 (${gameState.quizIndex + 1}/3)</h2>
    <p class="description">${currentQ.q}</p>
    <div class="options-grid">
  `;

  currentQ.options.forEach((opt, idx) => {
    html += `<button class="btn-option" onclick="answerQuiz(${idx})">${opt.text}</button>`;
  });

  html += `</div>`;

  if (gameState.quizIndex > 0) {
    html += `
      <div class="nav-actions">
        <button class="btn-back" onclick="prevQuiz()">← Pergunta Anterior</button>
      </div>
    `;
  }

  app.innerHTML = html;
}

function answerQuiz(optionIdx) {
  const questions = QUIZ_QUESTIONS[gameState.ageGroup] || QUIZ_QUESTIONS["adolescente"];
  const currentQ = questions[gameState.quizIndex];
  const selectedOpt = currentQ.options[optionIdx];

  app.innerHTML = `
    ${renderProgress(1)}
    <h2 class="screen-title">Explicação 💡</h2>
    <div class="feedback-card">
      <p>${selectedOpt.exp}</p>
    </div>
    <div class="nav-actions">
      <button class="btn-primary" onclick="nextQuiz()">Continuar →</button>
    </div>
  `;
}

function nextQuiz() {
  gameState.quizIndex++;
  const questions = QUIZ_QUESTIONS[gameState.ageGroup] || QUIZ_QUESTIONS["adolescente"];
  if (gameState.quizIndex < questions.length) {
    renderQuizScreen();
  } else {
    renderTransitionScreen();
  }
}

function prevQuiz() {
  gameState.quizIndex--;
  renderQuizScreen();
}

function renderTransitionScreen() {
  app.innerHTML = `
    ${renderProgress(2)}
    <h2 class="screen-title">Excelente! 👏</h2>
    <p class="description">
      Agora que entendemos como cuidar do solo, vamos identificar o seu Estado, Município e Bioma para encontrar a espécie ideal!
    </p>
    <div class="nav-actions">
      <button class="btn-back" onclick="gameState.quizIndex=0; renderQuizScreen();">← Refazer Desafio</button>
      <button class="btn-primary" onclick="renderLocationScreen()">Avançar para Localização →</button>
    </div>
  `;
}

// 3. Localização Nacional
function renderLocationScreen() {
  let stateOptions = Object.keys(BRAZIL_REGIONS).map(uf => {
    return `<option value="${uf}" ${uf === gameState.state ? 'selected' : ''}>${BRAZIL_REGIONS[uf].name} (${uf})</option>`;
  }).join('');

  app.innerHTML = `
    ${renderProgress(3)}
    <h2 class="screen-title">Sua Região no Brasil 📍</h2>
    <p class="description">Informe onde o plantio será realizado para identificarmos os biomas de ocorrência oficial (IBGE).</p>
    
    <div class="form-group">
      <label for="select-state">Estado (UF):</label>
      <select id="select-state" class="form-control" onchange="updateState(this.value)">
        ${stateOptions}
      </select>
    </div>

    <div class="form-group">
      <label for="input-city">Município / Cidade:</label>
      <input type="text" id="input-city" class="form-control" value="${gameState.city}" placeholder="Digite o nome da sua cidade..." oninput="gameState.city = this.value">
    </div>

    <div class="nav-actions">
      <button class="btn-back" onclick="renderTransitionScreen()">← Voltar</button>
      <button class="btn-primary" onclick="renderBiomeInfoScreen()">Identificar Bioma →</button>
    </div>
  `;
}

function updateState(uf) {
  gameState.state = uf;
  gameState.detectedBiomes = BRAZIL_REGIONS[uf].biomes;
}

function renderBiomeInfoScreen() {
  if (!gameState.city.trim()) {
    gameState.city = "Sua Cidade";
  }
  const stateData = BRAZIL_REGIONS[gameState.state] || BRAZIL_REGIONS["RJ"];
  gameState.detectedBiomes = stateData.biomes;

  app.innerHTML = `
    ${renderProgress(3)}
    <h2 class="screen-title">Bioma em ${gameState.city} - ${gameState.state} 🌳</h2>
    <div class="result-badge">Fonte Oficial: IBGE - Mapeamento de Biomas do Brasil</div>
    <p class="description">
      No estado de <strong>${stateData.name}</strong> (${gameState.state}), o ecossistema abrange os biomas: <strong>${stateData.biomes.join(' e ')}</strong>.
    </p>
    <div class="feedback-card">
      <p>🌿 <strong>Contexto Fitoecológico:</strong> Espécies nativas registradas nesses biomas possuem adaptação natural ao solo e clima da sua região!</p>
    </div>
    <div class="nav-actions">
      <button class="btn-back" onclick="renderLocationScreen()">← Alterar Local</button>
      <button class="btn-primary" onclick="renderHousingScreen()">Investigar Espaço de Plantio →</button>
    </div>
  `;
}

// 4. Triagem do Espaço
function renderHousingScreen() {
  app.innerHTML = `
    ${renderProgress(4)}
    <h2 class="screen-title">Onde a semente será cultivada? 🏠</h2>
    <p class="description">Escolha a opção que melhor descreve o local de plantio:</p>
    <div class="options-grid">
      <button class="btn-option" onclick="setHousing('apto')">🏢 Apartamento / Sem quintal na terra</button>
      <button class="btn-option" onclick="setHousing('casa_quintal')">🏡 Casa com quintal / Terra livre</button>
      <button class="btn-option" onclick="setHousing('outro_local')">🏫 Escola, Terreno comunitário ou Sítio</button>
    </div>
    <div class="nav-actions">
      <button class="btn-back" onclick="renderBiomeInfoScreen()">← Voltar</button>
    </div>
  `;
}

function setHousing(type) {
  gameState.housingType = type;
  if (type === 'apto') {
    renderAltSpaceScreen();
  } else {
    gameState.plantLocationType = 'terra';
    renderConditionsScreen();
  }
}

function renderAltSpaceScreen() {
  app.innerHTML = `
    ${renderProgress(4)}
    <h2 class="screen-title">Opções de Cultivo 🪴</h2>
    <p class="description">Como não há acesso direto à terra em casa, como prefere seguir?</p>
    <div class="options-grid">
      <button class="btn-option" onclick="setPlantLoc('vaso')">🪴 Cultivo em Vaso / Recipiente espaçoso</button>
      <button class="btn-option" onclick="setPlantLoc('outro_local')">🌳 Preparar muda para transplantar em espaço escolar/público</button>
    </div>
    <div class="nav-actions">
      <button class="btn-back" onclick="renderHousingScreen()">← Voltar</button>
    </div>
  `;
}

function setPlantLoc(loc) {
  gameState.plantLocationType = loc;
  renderConditionsScreen();
}

// 5. Condições Ambientais
function renderConditionsScreen() {
  app.innerHTML = `
    ${renderProgress(5)}
    <h2 class="screen-title">Condições do Local de Plantio ☀️💧</h2>
    
    <div class="form-group">
      <label>1. Luminosidade (Insolação):</label>
      <select id="select-sun" class="form-control" onchange="gameState.sunlight = this.value">
        <option value="direto">Sol direto na maior parte do dia</option>
        <option value="parcial">Sol parcial (algumas horas por dia)</option>
      </select>
    </div>

    <div class="form-group">
      <label>2. Drenagem da água no solo:</label>
      <select id="select-drain" class="form-control" onchange="gameState.drainage = this.value">
        <option value="umido_drenado">A água escoa bem e o solo fica úmido sem empoçar</option>
        <option value="encharcado">O solo fica encharcado/alagado por bastante tempo</option>
      </select>
    </div>

    <div class="form-group">
      <label>3. Espaço disponível para a árvore adulta:</label>
      <select id="select-space" class="form-control" onchange="gameState.spaceAvailable = this.value">
        <option value="pequeno">Pequeno (Vaso, vaso grande ou pequeno canteiro)</option>
        <option value="medio">Médio (Quintal urbano / Área de escola)</option>
        <option value="grande">Grande (Terreno amplo, sítio ou área de reflorestamento)</option>
      </select>
    </div>

    <div class="nav-actions">
      <button class="btn-back" onclick="renderHousingScreen()">← Voltar</button>
      <button class="btn-primary" onclick="calculateRecommendation()">Recomendar Semente 🎯</button>
    </div>
  `;

  gameState.sunlight = document.getElementById("select-sun").value;
  gameState.drainage = document.getElementById("select-drain").value;
  gameState.spaceAvailable = document.getElementById("select-space").value;
}

// 6. Seleção Dinâmica
function calculateRecommendation() {
  const userBiomes = gameState.detectedBiomes;

  let scored = SPECIES_CATALOG.map(sp => {
    let score = 0;

    if (sp.biomes.some(b => userBiomes.includes(b))) score += 3;

    if (gameState.plantLocationType === 'vaso') {
      if (sp.potSuitable) score += 3;
      else score -= 4;
    } else {
      score += 1;
    }

    if (sp.drainage === gameState.drainage) score += 2;
    if (gameState.spaceAvailable === sp.spaceNeed) score += 2;
    if (sp.sunRequirement.includes(gameState.sunlight)) score += 1;

    return { species: sp, score: score };
  });

  scored.sort((a, b) => b.score - a.score);
  let bestMatch = scored[0].species;
  renderResultScreen(bestMatch);
}

// 7. Resultado com Imagem
function renderResultScreen(species) {
  let isPot = gameState.plantLocationType === 'vaso';
  let childMessage = gameState.ageGroup === 'crianca' 
    ? "<p><strong>💡 Dica para Crianças:</strong> Chame um adulto para ajudar no cultivo e molhar a sementinha nos dias secos!</p>" 
    : "";

  app.innerHTML = `
    ${renderProgress(6)}
    <h2 class="screen-title">Semente Recomendada para Você! 🌱</h2>
    ${childMessage}

    <div class="result-card-main">
      <span class="result-badge">Nativa para o Bioma (${species.biomes.join(' / ')})</span>
      
      <div class="species-img-container">
        <img src="${species.imageUrl}" alt="Fotografia de ${species.name}" class="species-img" loading="lazy" />
      </div>

      <h3>${species.name}</h3>
      <span class="scientific-name">${species.scientificName}</span>
      
      <div class="info-section">
        <h4>Por que esta espécie foi escolhida?</h4>
        <p>${species.description}</p>
      </div>

      <div class="info-section">
        <h4>Porte Adulto & Raízes</h4>
        <p><strong>Porte/Altura:</strong> ${species.maxHeight}</p>
        <p><strong>Características radiculares:</strong> ${species.roots}</p>
        <p><strong>Espaço recomendado:</strong> ${species.spaceNeed === 'pequeno' ? 'Pequeno / Vaso' : species.spaceNeed === 'medio' ? 'Médio (Quintal / Calçada ampla)' : 'Amplo (Terreno livre)'}</p>
      </div>

      <div class="info-section">
        <h4>Guia de Semeadura e Germinação</h4>
        <ul>
          <li><strong>Preparo e Substrato:</strong> ${species.sowing}</li>
          <li><strong>Tempo para Germinar:</strong> ${species.germination}</li>
          <li><strong>Recipiente:</strong> ${isPot ? (species.potSuitable ? `Recipiente definitivo (${species.minPotVolume})` : `Temporário em vaso (${species.minPotVolume}). Transplantar para o solo ao atingir 40 cm.`) : 'Plantio definitivo diretamente no solo.'}</li>
        </ul>
      </div>

      <div class="info-section">
        <h4>Conservação do Solo e Água</h4>
        <p>O cultivo de <em>${species.scientificName}</em> contribui para fixar a camada orgânica do solo, melhorar a infiltração de água e prevenir a degradação e erosão da sua região.</p>
      </div>

      <div class="info-section">
        <h4>Fontes e Registros Botânicos</h4>
        <p><em>${species.sources}</em></p>
      </div>
    </div>

    <div class="nav-actions" style="flex-wrap: wrap; gap: 8px;">
      <button class="btn-back" onclick="renderHousingScreen()">🔄 Revisar Respostas</button>
      <button class="btn-primary" onclick="renderWelcomeScreen()">🎮 Jogar Novamente</button>
    </div>
  `;
}
