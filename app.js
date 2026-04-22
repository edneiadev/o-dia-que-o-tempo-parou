const IMAGE_PATHS = {
  telaInicial: "assets/imagens/tela-inicial.svg",
  narrativa1: "assets/imagens/narrativa-1.jpg",
  narrativa2: "assets/imagens/narrativa.2.jpg",
  narrativa3: "assets/imagens/narrativa-3.jpg",
  narrativa4: "assets/imagens/narrativa-4.jpg",
  acerto: "assets/imagens/acerto.jpg",
  erro: "assets/imagens/erro.jpg",
  tempoEsgotado: "assets/imagens/tempo-esgotado.jpg",
  pistaLiberada: "assets/imagens/pista-liberada.jpg",
  pistaBloqueada: "assets/imagens/pista-bloqueada.jpg",
  vitoria: "assets/imagens/vitoria-final.jpg",
  derrota: "assets/imagens/derrota-final.jpg",
  desafioFinal: "assets/imagens/desafio-final.svg"
};

const SOUND_PATHS = {
  musica: "assets/sons/musica.mp3",
  ticTac: "assets/sons/tic-tac.mp3",
  acerto: "assets/sons/acerto.mp3",
  erro: "assets/sons/erro.mp3",
  tempoEsgotado: "assets/sons/tempo-esgotado.mp3",
  vitoria: "assets/sons/vitoria-final.mp3",
  derrota: "assets/sons/derrota-final.mp3"
};

const gameData = {
  facil: {
    title: "Fácil",
    code: "1129",
    blocks: [
      {
        id: "aprendiz",
        title: "APRENDIZ",
        clue: "LUCIANA SAI DE CASA PARA IR À ESCOLA ÀS 6H E CHEGA ÀS 7H. QUANTO TEMPO ELA GASTA NO TRAJETO?",
        questions: [
          makeQuestion("QUANTAS HORAS O RELÓGIO ESTÁ MARCANDO?", "4:00", ["5 HORAS", "12 HORAS", "3 HORAS", "4 HORAS"], "D"),
          makeQuestion("QUANTAS HORAS O RELÓGIO ESTÁ MARCANDO?", "6:00", ["6 HORAS", "12 HORAS", "3 HORAS", "4 HORAS"], "A"),
          makeQuestion("QUANTAS HORAS O RELÓGIO ESTÁ MARCANDO?", "3:00", ["6 HORAS", "12 HORAS", "3 HORAS", "4 HORAS"], "C"),
          makeQuestion("QUANTAS HORAS O RELÓGIO ESTÁ MARCANDO?", "5:00", ["6 HORAS", "12 HORAS", "5 HORAS", "4 HORAS"], "C"),
          makeQuestion("QUANTAS HORAS O RELÓGIO ESTÁ MARCANDO?", "2:00", ["2 HORAS", "12 HORAS", "3 HORAS", "4 HORAS"], "A")
        ]
      },
      {
        id: "veterano",
        title: "VETERANO",
        clue: "SE EU SAÍ DE CASA ÀS 10 HORAS E GASTEI 2 HORAS PARA CHEGAR AO TRABALHO, QUE HORAS EU CHEGUEI AO TRABALHO?",
        questions: [
          makeQuestion("QUANTAS HORAS O RELÓGIO ESTÁ MARCANDO?", "1:05", ["1:03", "1:05", "2:01", "1:10"], "B"),
          makeQuestion("QUANTAS HORAS O RELÓGIO ESTÁ MARCANDO?", "2:10", ["2:05", "2:50", "2:10", "2 HORAS"], "C"),
          makeQuestion("QUANTAS HORAS O RELÓGIO ESTÁ MARCANDO?", "1:15", ["1:03", "1:30", "1:15", "3 HORAS"], "C"),
          makeQuestion("QUANTAS HORAS O RELÓGIO ESTÁ MARCANDO?", "2:20", ["2:40", "12 HORAS", "2:04", "2:20"], "D"),
          makeQuestion("QUANTAS HORAS O RELÓGIO ESTÁ MARCANDO?", "1:25", ["1:25", "1:05", "1:50", "5 HORAS"], "A")
        ]
      },
      {
        id: "mestre",
        title: "MESTRE",
        clue: "PAULO GASTA 3 HORAS PARA SE DESLOCAR DO TRABALHO ATÉ A SUA CASA. SE ELE SAI DO TRABALHO ÀS 6 HORAS, QUE HORAS ELE CHEGA EM CASA?",
        questions: [
          makeQuestion("QUANTAS HORAS O RELÓGIO ESTÁ MARCANDO?", "1:30", ["1:06", "1:30", "6:01", "1:60"], "B"),
          makeQuestion("QUANTAS HORAS O RELÓGIO ESTÁ MARCANDO?", "2:30", ["2:06", "3 HORAS", "2:30", "2 HORAS"], "C"),
          makeQuestion("QUANTAS HORAS O RELÓGIO ESTÁ MARCANDO?", "3:30", ["3:30", "6 HORAS", "3:06", "3 HORAS"], "A"),
          makeQuestion("QUANTAS HORAS O RELÓGIO ESTÁ MARCANDO?", "2:20", ["2:40", "12 HORAS", "2:04", "2:20"], "D"),
          makeQuestion("QUANTAS HORAS O RELÓGIO ESTÁ MARCANDO?", "6:30", ["6:30", "6 HORAS", "6:06", "5 HORAS"], "A")
        ]
      }
    ]
  },
  medio: {
    title: "Médio",
    code: "2212",
    blocks: [
      {
        id: "aprendiz",
        title: "APRENDIZ",
        clue: "QUANTAS HORAS EU TEREI QUE SAIR DE CASA PARA CHEGAR À CASA DA MINHA IRMÃ, ÀS 4 HORAS, SE EU GASTO 2 HORAS NO TRAJETO?",
        questions: [
          makeQuestion("QUE HORAS SÃO?", "3:15", ["3H", "3H15", "3H30", "2H45"], "B"),
          makeQuestion("QUE HORAS SÃO?", "9:45", ["9H30", "9H45", "10H", "8H45"], "B"),
          makeQuestion("QUE HORAS SÃO?", "5:20", ["5H20", "5H30", "4H20", "6H20"], "A"),
          makeQuestion("JOÃO COMEÇOU A ESTUDAR NO HORÁRIO MARCADO NO RELÓGIO E TERMINOU ÀS 15H. QUANTO TEMPO ELE ESTUDOU?", "14:00", ["30 MINUTOS", "1 HORA", "2 HORAS", "15 MINUTOS"], "B"),
          makeQuestion("UMA AULA COMEÇA NO HORÁRIO MARCADO NO RELÓGIO E TERMINA ÀS 10H. QUANTO TEMPO DURA?", "8:00", ["30 MINUTOS", "1 HORA", "2 HORAS", "45 MINUTOS"], "C")
        ]
      },
      {
        id: "veterano",
        title: "VETERANO",
        clue: "SE EU CHEGUEI À CASA DA MINHA AMIGA ÀS 6 HORAS, DEPOIS DE VIAJAR POR 4 HORAS, QUANTAS HORAS EU COMECEI A VIAGEM?",
        questions: [
          makeQuestion("MARIA ACORDA NO HORÁRIO MARCADO NO RELÓGIO. QUANTO TEMPO ELA TEM PARA SE ARRUMAR, SE O ESCOLAR PASSA ÀS 7 HORAS?", "6:30", ["40 MIN", "30 MIN", "10 MIN", "50 MIN"], "B"),
          makeQuestion("UM FILME COMEÇA NO HORÁRIO MARCADO NO RELÓGIO E TERMINA ÀS 5H30. QUANTO TEMPO DURA?", "4:00", ["1 HORA", "1H30", "2 HORAS", "30 MINUTOS"], "B"),
          makeQuestion("QUE HORAS SÃO?", "8:20", ["8H10", "8H20", "8H30", "9H20"], "B"),
          makeQuestion("QUE HORAS SÃO?", "6:45", ["6H30", "6H45", "7H", "5H45"], "B"),
          makeQuestion("SE AGORA SÃO 10H, QUE HORAS SERÃO DAQUI A 3 HORAS?", "10:00", ["13H", "11H30", "11H", "12H"], "A")
        ]
      },
      {
        id: "mestre",
        title: "MESTRE",
        clue: "SE AGORA SÃO 11H40, QUE HORAS SERÃO DAQUI A 20 MINUTOS?",
        questions: [
          makeQuestion("SE SÃO 18H45, QUE HORAS SERÃO DAQUI A 15 MINUTOS?", "18:45", ["18H", "19H", "19H15", "18H30"], "B"),
          makeQuestion("ANA SAIU DE CASA ÀS 13H30 E CHEGOU ÀS 14H. QUANTO TEMPO LEVOU?", "13:30", ["40 MIN", "50 MIN", "1H", "30 MIN"], "D"),
          makeQuestion("UM DESENHO DURA 25 MINUTOS. SE COMEÇOU ÀS 10H, QUE HORAS TERMINA?", "10:00", ["10H20", "10H45", "10H25", "10H35"], "C"),
          makeQuestion("SE SÃO 7H50, QUANTO FALTA PARA 8H?", "7:50", ["5 MIN", "10 MIN", "15 MIN", "20 MIN"], "B"),
          makeQuestion("UM PASSEIO COMEÇOU ÀS 15H E TERMINOU ÀS 18H30. QUANTO TEMPO DUROU?", "15:00", ["2H30", "3H", "3H30", "4H"], "C")
        ]
      }
    ]
  },
  dificil: {
    title: "Difícil",
    code: "8304",
    blocks: [
      {
        id: "aprendiz",
        title: "APRENDIZ",
        clue: "SE AGORA SÃO 9H10, QUE HORAS ERAM 70 MINUTOS ATRÁS?",
        questions: [
          makeQuestion("UM FILME COMEÇOU ÀS 13H20 E TERMINOU ÀS 15H10. QUANTO TEMPO DUROU?", "13:20", ["1H35", "1H45", "1H50", "2H"], "C"),
          makeQuestion("SE SÃO 18H50, QUE HORAS SERÃO APÓS 30 MINUTOS?", "18:50", ["19H15", "19H20", "19H25", "19H30"], "B"),
          makeQuestion("UMA AULA COMEÇA ÀS 7H30 E DURA 1H30. QUE HORAS TERMINA?", "7:30", ["9H", "9H10", "9H15", "9H20"], "A"),
          makeQuestion("PEDRO SAIU ÀS 14H20 E CHEGOU ÀS 15H10. QUANTO TEMPO ELE LEVOU?", "14:20", ["30 MIN", "40 MIN", "50 MIN", "20 MIN"], "C"),
          makeQuestion("UM DESENHO COMEÇOU ÀS 10H15 E TERMINOU ÀS 10H50. QUANTO TEMPO DUROU?", "10:15", ["30 MIN", "35 MIN", "40 MIN", "45 MIN"], "B")
        ]
      },
      {
        id: "veterano",
        title: "VETERANO",
        clue: "QUANTOS MINUTOS HÁ EM MEIA HORA?",
        questions: [
          makeQuestion("UM TREINO COMEÇOU ÀS 16H30 E DUROU 2H10. QUE HORAS TERMINOU?", "16:30", ["18H50", "18H45", "18H40", "19H"], "C"),
          makeQuestion("ANA COMEÇOU A ESTUDAR ÀS 13H50 E TERMINOU ÀS 15H00. QUANTO TEMPO ESTUDOU?", "13:50", ["1H10", "1H15", "1H20", "1H25"], "A"),
          makeQuestion("SE SÃO 13H30, QUE HORAS SERÃO DAQUI A 1H30?", "13:30", ["15H15", "16H", "15H", "16H30"], "C"),
          makeQuestion("UM PASSEIO COMEÇOU ÀS 8H20 E TERMINOU ÀS 11H30. QUANTO TEMPO DUROU?", "8:20", ["3H15", "3H25", "3H30", "3H10"], "D"),
          makeQuestion("SE SÃO 12H10, QUANTO FALTA PARA 14H?", "12:10", ["1H40", "1H45", "1H50", "2H"], "C")
        ]
      },
      {
        id: "mestre",
        title: "MESTRE",
        clue: "QUAL NÚMERO MARCA 16 HORAS NO RELÓGIO DE PONTEIROS?",
        questions: [
          makeQuestion("UM JOGO COMEÇOU ÀS 15H25 E TERMINOU ÀS 17H. QUANTO TEMPO DUROU?", "15:25", ["1H35", "1H40", "1H45", "1H50"], "A"),
          makeQuestion("JOÃO SAIU ÀS 6H55 E CHEGOU ÀS 7H. QUANTO TEMPO LEVOU?", "6:55", ["9 MIN", "5 MIN", "10 MIN", "15 MIN"], "B"),
          makeQuestion("SE SÃO 10H50, QUE HORAS SERÃO APÓS 1H30?", "10:50", ["12H05", "12H10", "12H15", "12H20"], "D"),
          makeQuestion("UM FILME DURA 2H10 E COMEÇA ÀS 19H20. QUE HORAS TERMINA?", "19:20", ["21H20", "21H25", "21H30", "21H35"], "C"),
          makeQuestion("SE SÃO 14H35, QUE HORAS ERAM 1H30 ATRÁS?", "14:35", ["14H30", "12H30", "13H05", "12H50"], "C")
        ]
      }
    ]
  }
};

const narrativeSlides = [
  {
    image: IMAGE_PATHS.narrativa1,
    text: "Era uma manhã comum na escola… Os alunos estavam terminando a aula de matemática. De repente… o relógio da sala começou a andar para trás…"
  },
  {
    image: IMAGE_PATHS.narrativa2,
    text: "O sinal não tocou, o recreio não começou. Os alunos ficaram presos na aula, porque o tempo deixou de passar."
  },
  {
    image: IMAGE_PATHS.narrativa3,
    text: "A professora pegou o relógio para consertar. Atrás dele, ela encontrou uma mensagem: “O tempo foi embaralhando. Horas e minutos perderam o caminho. Só quem entende o tempo poderá organizá-lo novamente.”"
  },
  {
    image: IMAGE_PATHS.narrativa4,
    text: "Vocês foram escolhidos como guardiões do tempo e precisam resolver os desafios de matemática para descobrir a senha que faz o tempo circular novamente."
  }
];

const app = document.getElementById("app");

const state = {
  screen: "home",
  levelKey: null,
  blockIndex: 0,
  questionIndex: 0,
  blockCorrect: 0,
  blockResults: [],
  unlockedClues: [],
  feedbackType: null,
  retryBlock: false,
  pendingInstallPrompt: null,
  soundOn: true,
  timerId: null,
  timeLeft: 60,
  currentQuestion: null,
  currentBlockSnapshot: null,
  finalDigits: ["", "", "", "", ""]
};

const audio = {
  musica: createAudio(SOUND_PATHS.musica, true, 0.35),
  ticTac: createAudio(SOUND_PATHS.ticTac, true, 0.4),
  acerto: createAudio(SOUND_PATHS.acerto, false, 0.65),
  erro: createAudio(SOUND_PATHS.erro, false, 0.65),
  tempoEsgotado: createAudio(SOUND_PATHS.tempoEsgotado, false, 0.75),
  vitoria: createAudio(SOUND_PATHS.vitoria, false, 0.75),
  derrota: createAudio(SOUND_PATHS.derrota, false, 0.75)
};

function makeQuestion(prompt, time, options, answer) {
  return { prompt, time, options, answer };
}

function createAudio(src, loop = false, volume = 1) {
  const element = new Audio(src);
  element.loop = loop;
  element.volume = volume;
  element.preload = "auto";
  return element;
}

function safePlay(target) {
  if (!state.soundOn || !target) return;
  target.currentTime = 0;
  target.play().catch(() => {});
}

function safePause(target) {
  if (!target) return;
  target.pause();
}

function startTheme() {
  if (!state.soundOn) return;
  audio.musica.play().catch(() => {});
}

function setSound(enabled) {
  state.soundOn = enabled;
  if (enabled) {
    startTheme();
    if (state.screen === "question") {
      audio.ticTac.play().catch(() => {});
    }
  } else {
    Object.values(audio).forEach((track) => track.pause());
  }
  render();
}

function setupInstallPrompt() {
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    state.pendingInstallPrompt = event;
    render();
  });

  window.addEventListener("appinstalled", () => {
    state.pendingInstallPrompt = null;
    render();
  });
}

async function triggerInstall() {
  if (!state.pendingInstallPrompt) return;
  await state.pendingInstallPrompt.prompt();
  await state.pendingInstallPrompt.userChoice;
  state.pendingInstallPrompt = null;
  render();
}

async function toggleFullscreen() {
  if (!document.fullscreenElement) {
    await document.documentElement.requestFullscreen?.();
  } else {
    await document.exitFullscreen?.();
  }
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    });
  }
}

function clearTimer() {
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
  safePause(audio.ticTac);
}

function resetGameProgress() {
  clearTimer();
  state.blockIndex = 0;
  state.questionIndex = 0;
  state.blockCorrect = 0;
  state.blockResults = [];
  state.unlockedClues = [];
  state.feedbackType = null;
  state.retryBlock = false;
  state.currentQuestion = null;
  state.currentBlockSnapshot = null;
  state.finalDigits = ["", "", "", "", ""];
}

function startGame(levelKey) {
  state.levelKey = levelKey;
  resetGameProgress();
  goToQuestion(0, 0);
}

function getLevel() {
  return gameData[state.levelKey];
}

function getBlock(level = getLevel(), blockIndex = state.blockIndex) {
  return level.blocks[blockIndex];
}

function goToQuestion(blockIndex, questionIndex) {
  clearTimer();
  state.blockIndex = blockIndex;
  state.questionIndex = questionIndex;
  state.feedbackType = null;
  const level = getLevel();
  const block = getBlock(level, blockIndex);
  const question = block.questions[questionIndex];
  state.currentQuestion = question;
  state.screen = "question";
  state.timeLeft = 60;
  state.currentBlockSnapshot = { blockTitle: block.title, questionNumber: questionIndex + 1 };
  if (state.soundOn) {
    audio.ticTac.currentTime = 0;
    audio.ticTac.play().catch(() => {});
  }
  state.timerId = window.setInterval(() => {
    state.timeLeft -= 1;
    if (state.timeLeft <= 0) {
      clearTimer();
      handleTimeout();
    } else {
      updateTimerVisual();
    }
  }, 1000);
  render();
  drawClock();
}

function updateTimerVisual() {
  const timer = document.querySelector("[data-timer]");
  if (!timer) return;
  timer.textContent = formatTime(state.timeLeft);
  timer.classList.toggle("warning", state.timeLeft <= 20 && state.timeLeft > 10);
  timer.classList.toggle("danger", state.timeLeft <= 10);
}

function handleAnswer(letter) {
  clearTimer();
  const isCorrect = letter === state.currentQuestion.answer;
  state.blockResults.push({ blockIndex: state.blockIndex, questionIndex: state.questionIndex, correct: isCorrect });
  if (isCorrect) {
    state.blockCorrect += 1;
    state.feedbackType = "acerto";
    safePlay(audio.acerto);
  } else {
    state.feedbackType = "erro";
    safePlay(audio.erro);
  }
  state.screen = "feedback";
  render();
}

function handleTimeout() {
  state.blockResults.push({ blockIndex: state.blockIndex, questionIndex: state.questionIndex, correct: false });
  state.feedbackType = "tempo";
  safePlay(audio.tempoEsgotado);
  state.screen = "feedback";
  render();
}

function continueAfterFeedback() {
  const block = getBlock();
  const isLastQuestion = state.questionIndex === block.questions.length - 1;
  if (!isLastQuestion) {
    goToQuestion(state.blockIndex, state.questionIndex + 1);
    return;
  }

  const unlocked = state.blockCorrect >= 4;
  if (unlocked) {
    if (!state.unlockedClues.includes(block.clue)) {
      state.unlockedClues.push(block.clue);
    }
    state.screen = "clue-unlocked";
  } else {
    state.screen = "clue-blocked";
  }
  render();
}

function retryCurrentBlock() {
  const currentLevel = getLevel();
  const beforeBlockResults = state.blockResults.filter((entry) => entry.blockIndex !== state.blockIndex);
  state.blockResults = beforeBlockResults;
  state.blockCorrect = 0;
  state.retryBlock = true;
  goToQuestion(state.blockIndex, 0);
  state.currentBlockSnapshot = { blockTitle: currentLevel.blocks[state.blockIndex].title, questionNumber: 1 };
}

function continueToNextStage() {
  const level = getLevel();
  const isLastBlock = state.blockIndex === level.blocks.length - 1;
  if (isLastBlock) {
    state.screen = "final-challenge";
    clearTimer();
    render();
    return;
  }
  state.blockIndex += 1;
  state.questionIndex = 0;
  state.blockCorrect = 0;
  goToQuestion(state.blockIndex, 0);
}

function submitCode() {
  const guess = state.finalDigits.join("").trim();
  const targetCode = getLevel().code;
  clearTimer();
  if (guess === targetCode) {
    state.screen = "victory";
    safePlay(audio.vitoria);
  } else {
    state.screen = "defeat";
    safePlay(audio.derrota);
  }
  render();
}

function restartToHome() {
  resetGameProgress();
  state.levelKey = null;
  state.screen = "home";
  startTheme();
  render();
}

function setFinalDigit(index, value) {
  const sanitized = value.replace(/\D/g, "").slice(0, 1);
  state.finalDigits[index] = sanitized;
  render();
  if (sanitized && index < 4) {
    document.querySelector(`[data-digit="${index + 1}"]`)?.focus();
  }
}

function handleFinalKey(index, event) {
  if (event.key === "Backspace" && !state.finalDigits[index] && index > 0) {
    document.querySelector(`[data-digit="${index - 1}"]`)?.focus();
  }
  if (event.key === "Enter") {
    submitCode();
  }
}

function render() {
  app.innerHTML = "";
  switch (state.screen) {
    case "home":
      renderHome();
      break;
    case "narrative":
      renderNarrative();
      break;
    case "difficulty":
      renderDifficulty();
      break;
    case "question":
      renderQuestion();
      break;
    case "feedback":
      renderFeedback();
      break;
    case "clue-unlocked":
      renderClueUnlocked();
      break;
    case "clue-blocked":
      renderClueBlocked();
      break;
    case "final-challenge":
      renderFinalChallenge();
      break;
    case "victory":
      renderVictory();
      break;
    case "defeat":
      renderDefeat();
      break;
    default:
      renderHome();
  }
}

function renderFrame(titleHtml, bodyHtml) {
  app.innerHTML = `
    <section class="screen game-home">
      <header class="screen-header">
        <div class="stack">
          <span class="brand">ESCAPE ROOM PEDAGÓGICO</span>
          ${titleHtml}
        </div>
        <div class="top-actions">
          <button class="btn" id="sound-toggle">${state.soundOn ? "Som: ligado" : "Som: desligado"}</button>
          <button class="btn" id="fullscreen-toggle">Tela cheia</button>
          <button class="btn ${state.pendingInstallPrompt ? "btn-secondary" : ""}" id="install-btn" ${state.pendingInstallPrompt ? "" : "disabled"}>Instalar</button>
        </div>
      </header>
      ${bodyHtml}
    </section>
  `;

  document.getElementById("sound-toggle")?.addEventListener("click", () => setSound(!state.soundOn));
  document.getElementById("fullscreen-toggle")?.addEventListener("click", toggleFullscreen);
  document.getElementById("install-btn")?.addEventListener("click", triggerInstall);
}

function renderActionsOnlyFrame(bodyHtml) {
  app.innerHTML = `
    <section class="screen">
      <header class="screen-header header-actions-only">
        <div class="top-actions">
          <button class="btn" id="sound-toggle">${state.soundOn ? "Som: ligado" : "Som: desligado"}</button>
          <button class="btn" id="fullscreen-toggle">Tela cheia</button>
          <button class="btn ${state.pendingInstallPrompt ? "btn-secondary" : ""}" id="install-btn" ${state.pendingInstallPrompt ? "" : "disabled"}>Instalar</button>
        </div>
      </header>
      ${bodyHtml}
    </section>
  `;

  document.getElementById("sound-toggle")?.addEventListener("click", () => setSound(!state.soundOn));
  document.getElementById("fullscreen-toggle")?.addEventListener("click", toggleFullscreen);
  document.getElementById("install-btn")?.addEventListener("click", triggerInstall);
}

function renderCustomFrame(titleHtml, bodyHtml, options = {}) {
  const { showBrand = true, showInstall = true, sectionClass = "" } = options;
  app.innerHTML = `
    <section class="screen ${sectionClass}">
      <header class="screen-header">
        <div class="stack">
          ${showBrand ? `<span class="brand">ESCAPE ROOM PEDAGÓGICO</span>` : ""}
          ${titleHtml}
        </div>
        <div class="top-actions">
          <button class="btn" id="sound-toggle">${state.soundOn ? "Som" : "Sem som"}</button>
          <button class="btn" id="fullscreen-toggle">Tela cheia</button>
          ${showInstall ? `<button class="btn ${state.pendingInstallPrompt ? "btn-secondary" : ""}" id="install-btn" ${state.pendingInstallPrompt ? "" : "disabled"}>Instalar</button>` : ""}
        </div>
      </header>
      ${bodyHtml}
    </section>
  `;

  document.getElementById("sound-toggle")?.addEventListener("click", () => setSound(!state.soundOn));
  document.getElementById("fullscreen-toggle")?.addEventListener("click", toggleFullscreen);
  document.getElementById("install-btn")?.addEventListener("click", triggerInstall);
}

function renderHome() {
  app.innerHTML = `
    <section class="screen">
      <div class="hero-grid">
        <div class="image-card">
          <div class="image-frame">
            <img src="${IMAGE_PATHS.telaInicial}" alt="Relógio mágico indicando a aventura do tempo">
          </div>
        </div>
        <div class="info-card stack">
          <div class="inline-actions">
            <button class="btn" id="sound-toggle">${state.soundOn ? "Som" : "Sem som"}</button>
            <button class="btn" id="fullscreen-toggle">Tela cheia</button>
            <button class="btn ${state.pendingInstallPrompt ? "btn-secondary" : ""}" id="install-btn" ${state.pendingInstallPrompt ? "" : "disabled"}>Instalar</button>
          </div>
          <h2>ESCAPE ROOM PEDAGÓGICO</h2>
          <p class="subtitle">O dia em que o tempo parou</p>
          <p class="subtitle">criado por Edneia Angélica Gomes</p>
          <p class="lede">Jogue e aprenda sobre medidas de tempo!</p>
          <div class="actions">
            <button class="btn btn-primary" id="start-btn">Começar aventura</button>
          </div>
        </div>
      </div>
    </section>
  `;
  document.getElementById("sound-toggle")?.addEventListener("click", () => setSound(!state.soundOn));
  document.getElementById("fullscreen-toggle")?.addEventListener("click", toggleFullscreen);
  document.getElementById("install-btn")?.addEventListener("click", triggerInstall);
  document.getElementById("start-btn")?.addEventListener("click", () => {
    startTheme();
    state.narrativeIndex = 0;
    state.screen = "narrative";
    render();
  });
}

function renderNarrative() {
  const slide = narrativeSlides[state.narrativeIndex || 0];
  renderCustomFrame(
    ``,
    `
      <div class="image-layout">
        <div class="image-card">
          <div class="image-frame">
            <img src="${slide.image}" alt="Cena da narrativa do escape room">
          </div>
        </div>
        <div class="info-card stack">
          <h2>Narrativa ${Number(state.narrativeIndex || 0) + 1}</h2>
          <p class="lede">${slide.text}</p>
          <div class="actions">
            <button class="btn btn-secondary" id="back-home">Voltar ao início</button>
            <button class="btn btn-primary" id="next-narrative">${(state.narrativeIndex || 0) < narrativeSlides.length - 1 ? "Continuar" : "Escolher nível"}</button>
          </div>
        </div>
      </div>
    `,
    { showBrand: false, showInstall: false, sectionClass: "narrative-screen" }
  );
  document.getElementById("back-home")?.addEventListener("click", restartToHome);
  document.getElementById("next-narrative")?.addEventListener("click", () => {
    if ((state.narrativeIndex || 0) < narrativeSlides.length - 1) {
      state.narrativeIndex += 1;
      render();
      return;
    }
    state.screen = "difficulty";
    render();
  });
}

function renderDifficulty() {
  renderFrame(
    `<h1>Escolha o nível</h1>`,
    `
      <div class="difficulty-grid game-difficulty">
        ${Object.entries(gameData).map(([key, level]) => `
          <article class="difficulty-card">
            <span class="badge">${level.title}</span>
            <div class="stack">
              <p class="small">Você precisa acertar pelo menos 4 de cada bloco para liberar a pista.</p>
            </div>
            <button class="btn btn-primary" data-level="${key}">Jogar</button>
          </article>
        `).join("")}
      </div>
    `
  );

  document.querySelectorAll("[data-level]").forEach((button) => {
    button.addEventListener("click", () => startGame(button.dataset.level));
  });
}

function renderQuestion() {
  const level = getLevel();
  const block = getBlock(level);
  const question = state.currentQuestion;
  renderCustomFrame(
    ``,
    `
      <div class="question-grid compact-grid">
        <div class="question-panel">
          <div class="question-meta">
            <div class="stack">
              <span class="question-number">Questão ${state.questionIndex + 1}/${block.title}</span>
            </div>
            <span class="progress-pill">${state.blockCorrect} acertos</span>
          </div>
          <div class="stack">
            <h3>${question.prompt}</h3>
            <p class="timer-pill" data-timer>${formatTime(state.timeLeft)}</p>
          </div>
          <div class="clock-card">
            <canvas class="clock-canvas" id="clockCanvas" width="320" height="320" aria-label="Relógio analógico"></canvas>
          </div>
        </div>
        <div class="question-panel">
          <div class="stack">
            <h2>Alternativas</h2>
          </div>
          <div class="choice-list">
            ${question.options.map((option, index) => {
              const letter = String.fromCharCode(65 + index);
              return `
                <button class="choice-btn" data-answer="${letter}">
                  <span class="choice-letter">${letter}</span>${option}
                </button>
              `;
            }).join("")}
          </div>
        </div>
      </div>
    `,
    { showBrand: false, showInstall: false, sectionClass: "question-screen" }
  );

  document.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => handleAnswer(button.dataset.answer));
  });
  updateTimerVisual();
  drawClock();
}

function renderFeedback() {
  const config = {
    acerto: {
      title: "Resposta correta!",
      body: "Você organizou mais um pedacinho do tempo. Continue para o próximo desafio.",
      image: IMAGE_PATHS.acerto,
      className: "success"
    },
    erro: {
      title: "Resposta incorreta",
      body: "O tempo ainda está confuso, mas você pode seguir em frente e recuperar pontos nas próximas questões.",
      image: IMAGE_PATHS.erro,
      className: "error"
    },
    tempo: {
      title: "Tempo esgotado",
      body: "O minuto acabou antes da resposta. Respire, observe o relógio e siga para o próximo desafio.",
      image: IMAGE_PATHS.tempoEsgotado,
      className: "timeout"
    }
  }[state.feedbackType];

  renderCustomFrame(
    ``,
    `
      <div class="image-layout game-result">
        <div class="image-card">
          <div class="image-frame">
            <img src="${config.image}" alt="${config.title}">
          </div>
        </div>
        <div class="info-card stack">
          <h2 class="result-title ${config.className}">${config.title}</h2>
          <p class="lede">${config.body}</p>
          <div class="actions">
            <button class="btn btn-primary" id="continue-feedback">Continuar</button>
          </div>
        </div>
      </div>
    `,
    { showBrand: false, sectionClass: "narrative-screen" }
  );
  document.getElementById("continue-feedback")?.addEventListener("click", continueAfterFeedback);
}

function renderClueUnlocked() {
  const block = getBlock();
  renderCustomFrame(
    ``,
    `
      <div class="image-layout">
        <div class="image-card">
          <div class="image-frame">
            <img src="${IMAGE_PATHS.pistaLiberada}" alt="Pista liberada">
          </div>
        </div>
        <div class="info-card stack">
          <h2>${block.title} desbloqueado</h2>
          <p class="lede">${block.clue}</p>
          <p class="small">Você acertou pelo menos 4 das 5 questões deste bloco.</p>
          <div class="actions">
            <button class="btn btn-primary" id="continue-after-clue">Continuar</button>
          </div>
        </div>
      </div>
    `,
    { showBrand: false, sectionClass: "narrative-screen" }
  );
  document.getElementById("continue-after-clue")?.addEventListener("click", () => {
    state.blockCorrect = 0;
    continueToNextStage();
  });
}

function renderClueBlocked() {
  const block = getBlock();
  renderCustomFrame(
    ``,
    `
      <div class="image-layout">
        <div class="image-card">
          <div class="image-frame">
            <img src="${IMAGE_PATHS.pistaBloqueada}" alt="Pista bloqueada">
          </div>
        </div>
        <div class="info-card stack">
          <h2>${block.title} ainda não liberado</h2>
          <p class="lede">Você acertou menos de 4 questões neste bloco. Pode tentar outra vez para conquistar a pista ou seguir jogando sem ela.</p>
          <div class="actions">
            <button class="btn btn-secondary" id="retry-block">Tentar novamente</button>
            <button class="btn btn-primary" id="continue-without-clue">Continuar o jogo</button>
          </div>
        </div>
      </div>
    `,
    { showBrand: false, sectionClass: "narrative-screen" }
  );
  document.getElementById("retry-block")?.addEventListener("click", retryCurrentBlock);
  document.getElementById("continue-without-clue")?.addEventListener("click", () => {
    state.blockCorrect = 0;
    continueToNextStage();
  });
}

function renderFinalChallenge() {
  const level = getLevel();
  renderFrame(
    `<h1>Desafio final</h1>`,
    `
      <div class="final-grid game-final">
        <div class="password-card stack">
          <h2>QUAL É A SENHA DO CADEADO DO TEMPO?</h2>
          <div class="password-row" aria-label="Senha do cadeado">
            ${state.finalDigits.map((digit, index) => `
              <input
                class="digit-input"
                data-digit="${index}"
                inputmode="numeric"
                maxlength="1"
                value="${digit}"
                aria-label="Dígito ${index + 1} da senha"
              >
            `).join("")}
          </div>
          <div class="actions">
            <button class="btn btn-primary" id="submit-code">Testar senha</button>
          </div>
        </div>
        <div class="summary-card stack">
          <h2>Pistas conquistadas</h2>
          <div class="clue-list">
            ${level.blocks.map((block) => {
              const unlocked = state.unlockedClues.includes(block.clue);
              return `
                <div class="clue-item ${unlocked ? "" : "locked"}">
                  <strong>${block.title}</strong>
                  <p>${unlocked ? block.clue : "Pista não desbloqueada neste bloco."}</p>
                </div>
              `;
            }).join("")}
          </div>
        </div>
      </div>
    `
  );

  document.querySelectorAll("[data-digit]").forEach((input) => {
    const index = Number(input.dataset.digit);
    input.addEventListener("input", (event) => setFinalDigit(index, event.target.value));
    input.addEventListener("keydown", (event) => handleFinalKey(index, event));
  });
  document.getElementById("submit-code")?.addEventListener("click", submitCode);
}

function renderVictory() {
  renderFrame(
    `<h1>Tempo desbloqueado</h1>`,
    `
      <div class="image-layout">
        <div class="image-card">
          <div class="image-frame">
            <img src="${IMAGE_PATHS.vitoria}" alt="Vitória final">
          </div>
        </div>
        <div class="info-card stack">
          <h2 class="result-title success">PARABÉNS, VOCÊ CONSEGUIU DESBLOQUEAR O TEMPO.</h2>
          <p class="lede">Os ponteiros voltaram a girar e a escola finalmente saiu do congelamento temporal.</p>
          <div class="actions">
            <button class="btn btn-primary" id="restart-game">Jogar novamente</button>
          </div>
        </div>
      </div>
    `
  );
  document.getElementById("restart-game")?.addEventListener("click", restartToHome);
}

function renderDefeat() {
  renderFrame(
    `<h1>Tempo bloqueado</h1>`,
    `
      <div class="image-layout">
        <div class="image-card">
          <div class="image-frame">
            <img src="${IMAGE_PATHS.derrota}" alt="Derrota final">
          </div>
        </div>
        <div class="info-card stack">
          <h2 class="result-title error">VOCÊ FRACASSOU E VAI FICAR PRESO NO TEMPO.</h2>
          <p class="lede">As pistas ainda não se organizaram do jeito certo. Reúna atenção e tente abrir o cadeado novamente.</p>
          <div class="actions">
            <button class="btn btn-danger" id="retry-final">Tentar novamente</button>
          </div>
        </div>
      </div>
    `
  );
  document.getElementById("retry-final")?.addEventListener("click", () => {
    state.finalDigits = ["", "", "", "", ""];
    state.screen = "final-challenge";
    render();
  });
}

function drawClock() {
  const canvas = document.getElementById("clockCanvas");
  if (!canvas || !state.currentQuestion) return;
  const context = canvas.getContext("2d");
  const size = canvas.width;
  const radius = size / 2;
  context.clearRect(0, 0, size, size);
  context.save();
  context.translate(radius, radius);

  context.beginPath();
  context.arc(0, 0, radius - 10, 0, Math.PI * 2);
  context.fillStyle = "#fffef8";
  context.fill();
  context.lineWidth = 10;
  context.strokeStyle = "#f3c8d9";
  context.stroke();

  for (let hour = 1; hour <= 12; hour += 1) {
    const angle = (hour * Math.PI) / 6 - Math.PI / 2;
    const x = Math.cos(angle) * (radius - 42);
    const y = Math.sin(angle) * (radius - 42);
    context.fillStyle = "#5d4f7f";
    context.font = "bold 22px Verdana";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(String(hour), x, y);
  }

  for (let tick = 0; tick < 60; tick += 1) {
    const angle = (tick * Math.PI) / 30;
    const inner = tick % 5 === 0 ? radius - 24 : radius - 18;
    const outer = radius - 10;
    context.beginPath();
    context.lineWidth = tick % 5 === 0 ? 4 : 2;
    context.strokeStyle = tick % 5 === 0 ? "#7d6da5" : "#c6bfd8";
    context.moveTo(Math.cos(angle - Math.PI / 2) * inner, Math.sin(angle - Math.PI / 2) * inner);
    context.lineTo(Math.cos(angle - Math.PI / 2) * outer, Math.sin(angle - Math.PI / 2) * outer);
    context.stroke();
  }

  const [hoursRaw, minutesRaw] = state.currentQuestion.time.split(":").map(Number);
  const minutes = minutesRaw || 0;
  const hours = hoursRaw % 12;
  const minuteAngle = (minutes / 60) * Math.PI * 2 - Math.PI / 2;
  const hourAngle = ((hours + minutes / 60) / 12) * Math.PI * 2 - Math.PI / 2;

  drawHand(context, hourAngle, radius * 0.48, 8, "#5d4f7f");
  drawHand(context, minuteAngle, radius * 0.7, 5, "#ff6f9c");

  context.beginPath();
  context.arc(0, 0, 8, 0, Math.PI * 2);
  context.fillStyle = "#5d4f7f";
  context.fill();
  context.restore();
}

function drawHand(context, angle, length, width, color) {
  context.beginPath();
  context.lineWidth = width;
  context.lineCap = "round";
  context.strokeStyle = color;
  context.moveTo(0, 0);
  context.lineTo(Math.cos(angle) * length, Math.sin(angle) * length);
  context.stroke();
}

function formatTime(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${mins}:${secs}`;
}

setupInstallPrompt();
registerServiceWorker();
render();
startTheme();
