document.addEventListener('DOMContentLoaded', function() {
  const burgerToggle = document.getElementById('burger-toggle');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      burgerToggle.checked = false;
    });
  });

  // Данные для теста
  const quizData = {
    questions: [
      {
        text: "Как бы ты описал свой характер?",
        options: [
          { text: "Серьезный и ответственный", scores: { spiderman: 2, batman: 3, walter: 1 } },
          { text: "Саркастичный и остроумный", scores: { deadpool: 3, ironman: 2 } },
          { text: "Харизматичный и уверенный", scores: { ironman: 3, joker: 2 } },
          { text: "Спокойный и расчетливый", scores: { batman: 2, walter: 3 } }
        ]
      },
      {
        text: "Какую суперспособность ты бы выбрал?",
        options: [
          { text: "Невидимость", scores: { batman: 1 } },
          { text: "Сверхсила", scores: { spiderman: 2 } },
          { text: "Регенерация", scores: { deadpool: 3 } },
          { text: "Гениальный интеллект", scores: { ironman: 3, walter: 2, batman: 1 } }
        ]
      },
      {
        text: "Как ты относишься к правилам?",
        options: [
          { text: "Строго их соблюдаю", scores: { spiderman: 3 } },
          { text: "Соблюдаю, но могу нарушить при необходимости", scores: { batman: 2 } },
          { text: "Нарушаю, если они мне мешают", scores: { ironman: 2, walter: 1 } },
          { text: "Правила созданы, чтобы их нарушать", scores: { deadpool: 3, joker: 2 } }
        ]
      },
      {
        text: "Какой у тебя подход к решению проблем?",
        options: [
          { text: "Продумываю каждый шаг", scores: { batman: 3, walter: 2 } },
          { text: "Действую по ситуации", scores: { spiderman: 2 } },
          { text: "Импровизирую", scores: { ironman: 2, deadpool: 3 } },
          { text: "Создаю хаос", scores: { joker: 3 } }
        ]
      },
      {
        text: "Что для тебя важнее всего?",
        options: [
          { text: "Справедливость", scores: { spiderman: 3, batman: 2 } },
          { text: "Свобода", scores: { deadpool: 3 } },
          { text: "Власть", scores: { joker: 2, walter: 1 } },
          { text: "Технологии и прогресс", scores: { ironman: 3 } }
        ]
      },
      {
        text: "Как ты ведешь себя в стрессовой ситуации?",
        options: [
          { text: "Сохраняю спокойствие и ищу решение", scores: { batman: 3, walter: 2 } },
          { text: "Действую быстро и решительно", scores: { spiderman: 2 } },
          { text: "Шучу, чтобы снять напряжение", scores: { deadpool: 3 } },
          { text: "Наслаждаюсь адреналином", scores: { joker: 2, ironman: 1 } }
        ]
      },
      {
        text: "Какой у тебя стиль общения?",
        options: [
          { text: "Прямой и честный", scores: { spiderman: 2 } },
          { text: "Загадочный и немногословный", scores: { batman: 3 } },
          { text: "Остроумный и саркастичный", scores: { ironman: 2, deadpool: 3 } },
          { text: "Манипулятивный и убедительный", scores: { joker: 2, walter: 3 } }
        ]
      },
      {
        text: "Что ты думаешь о работе в команде?",
        options: [
          { text: "Предпочитаю работать один", scores: { batman: 3, walter: 2 } },
          { text: "Работаю в команде, но могу действовать самостоятельно", scores: { spiderman: 2 } },
          { text: "Команда - это сила", scores: { ironman: 1 } },
          { text: "Команда только мешает", scores: { joker: 3, deadpool: 1 } }
        ]
      },
      {
        text: "Какой твой главный мотиватор?",
        options: [
          { text: "Чувство долга", scores: { spiderman: 3, batman: 2 } },
          { text: "Личная выгода", scores: { walter: 3 } },
          { text: "Слава и признание", scores: { ironman: 2 } },
          { text: "Веселье и хаос", scores: { deadpool: 3, joker: 2 } }
        ]
      },
      {
        text: "Какой финал истории тебе ближе?",
        options: [
          { text: "Героическая жертва ради других", scores: { spiderman: 3 } },
          { text: "Триумф и признание", scores: { ironman: 2 } },
          { text: "Загадочное исчезновение", scores: { batman: 2 } },
          { text: "Неожиданный поворот", scores: { deadpool: 2, joker: 3, walter: 1 } }
        ]
      }
    ],
    results: {
      spiderman: {
        name: "Человек-Паук",
        description: "Ты - настоящий герой с большим сердцем! Как и Питер Паркер, ты веришь, что с большой силой приходит большая ответственность. Ты всегда готов помочь другим, даже если это требует жертв с твоей стороны. Твое чувство юмора помогает тебе справляться с трудностями, а верность своим принципам делает тебя настоящим образцом для подражания.",
        image: ".idea/2880x1800-px-action-man-marvel-spider-spiderman-superhero-1685845.jpg",
        type: "Супергерой",
        universe: "Marvel"
      },
      deadpool: {
        name: "Дедпул",
        description: "Ты - непредсказуемый антигерой с острым языком и большим сердцем! Как и Уэйд Уилсон, ты не принимаешь жизнь слишком серьезно и всегда находишь повод для шутки, даже в самых сложных ситуациях. Твоя уникальная perspective на мир и способность 'ломать четвертую стену' делают тебя незабываемым персонажем. Ты можешь быть циничным, но в глубине души ты заботишься о тех, кто тебе дорог.",
        image: ".idea/deadpool-death-header.jpg",
        type: "Антигерой",
        universe: "Marvel"
      },
      ironman: {
        name: "Железный человек",
        description: "Ты - гений, миллиардер, плейбой, филантроп! Как и Тони Старк, ты уверен в себе, обаятелен и невероятно умен. Ты веришь в силу технологий и инноваций, чтобы сделать мир лучше. Твое остроумие и сарказм - это твоя защита, но внутри ты глубоко заботишься о благополучии других. Ты не идеален, но твои ошибки только делают тебя человечнее.",
        image: ".idea/i.webp",
        type: "Супергерой",
        universe: "Marvel"
      },
      batman: {
        name: "Бэтмен",
        description: "Ты - Темный рыцарь, защитник Готэма! Как и Брюс Уэйн, ты серьезен, дисциплинирован и предан своему делу. Ты веришь в справедливость и готов сделать все возможное, чтобы защитить невинных. Твоя внутренняя борьба и трагическое прошлое сделали тебя тем, кто ты есть - загадочным и немного мрачным героем, который предпочитает работать в тени.",
        image: ".idea/9779816ede18b60cb69ba5ea941039c9.webp",
        type: "Супергерой",
        universe: "DC"
      },
      joker: {
        name: "Джокер",
        description: "Ты - агент хаоса, загадочный и непредсказуемый! Как и Джокер, ты видишь абсурдность мира и решил не играть по его правилам. Твой ум остёр как бритва, а чувство юмора - темное и ироничное. Ты веришь, что один плохой день может изменить любого, и наслаждаешься хаосом, который создаешь вокруг себя. Ты - загадка, которую никто не может разгадать.",
        image: ".idea/c13e4760fd88cdd7ef6b8e8cc6bf462e.jpg",
        type: "Злодей",
        universe: "DC"
      },
      walter: {
        name: "Уолтер Уайт",
        description: "Ты - гениальный ум, способный на радикальные преобразования! Как и Уолтер Уайт, ты начинал как обычный человек, но обстоятельства раскрыли твой истинный потенциал. Твой аналитический ум и решительность позволяют тебе достигать невозможного, даже если для этого приходится переступать через моральные принципы. Ты доказываешь, что даже самый обычный человек может стать легендой.",
        image: ".idea/i.jpg",
        type: "Антигерой",
        universe: "Телесериал"
      }
    }
  };

  // Элементы DOM
  const startQuizButton = document.getElementById('startQuiz');
  const quizSection = document.getElementById('quizSection');
  const resultSection = document.getElementById('resultSection');
  const otherResults = document.getElementById('otherResults');
  const questionText = document.getElementById('questionText');
  const optionsContainer = document.getElementById('optionsContainer');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  const currentQuestionElement = document.getElementById('currentQuestion');
  const progressFill = document.getElementById('progressFill');
  const restartQuizButton = document.getElementById('restartQuiz');
  const shareResultButton = document.getElementById('shareResult');
  
  // Элементы результатов
  const resultHero = document.getElementById('resultHero');
  const resultName = document.getElementById('resultName');
  const resultDescription = document.getElementById('resultDescription');
  const matchPercentage = document.getElementById('matchPercentage');
  const heroType = document.getElementById('heroType');
  const heroUniverse = document.getElementById('heroUniverse');
  const resultsGrid = document.getElementById('resultsGrid');

  // Переменные состояния
  let currentQuestionIndex = 0;
  let userScores = {
    spiderman: 0,
    deadpool: 0,
    ironman: 0,
    batman: 0,
    joker: 0,
    walter: 0
  };
  let userAnswers = [];

  // Начало теста
  startQuizButton.addEventListener('click', startQuiz);
  
  // Навигация по вопросам
  prevButton.addEventListener('click', goToPreviousQuestion);
  nextButton.addEventListener('click', goToNextQuestion);
  
  // Перезапуск теста
  restartQuizButton.addEventListener('click', restartQuiz);
  
  // Поделиться результатом
  shareResultButton.addEventListener('click', shareResult);

  function startQuiz() {
    document.querySelector('.quiz-hero').style.display = 'none';
    document.querySelector('.how-it-works').style.display = 'none';
    quizSection.style.display = 'block';
    currentQuestionIndex = 0;
    userScores = {
      spiderman: 0,
      deadpool: 0,
      ironman: 0,
      batman: 0,
      joker: 0,
      walter: 0
    };
    userAnswers = [];
    showQuestion();
  }

  function showQuestion() {
    const question = quizData.questions[currentQuestionIndex];
    questionText.textContent = question.text;
    currentQuestionElement.textContent = currentQuestionIndex + 1;
    
    // Обновление прогресс-бара
    const progress = ((currentQuestionIndex + 1) / quizData.questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    
    // Очистка контейнера опций
    optionsContainer.innerHTML = '';
    
    // Добавление опций
    question.options.forEach((option, index) => {
      const optionElement = document.createElement('div');
      optionElement.className = 'option-card';
      optionElement.innerHTML = `
        <input type="radio" id="option${index}" name="quizOption" value="${index}">
        <label for="option${index}">${option.text}</label>
      `;
      optionsContainer.appendChild(optionElement);
      
      // Обработчик выбора опции
      optionElement.querySelector('input').addEventListener('change', function() {
        userAnswers[currentQuestionIndex] = index;
        nextButton.disabled = false;
      });
    });
    
    // Восстановление предыдущего ответа, если есть
    if (userAnswers[currentQuestionIndex] !== undefined) {
      const previousAnswer = userAnswers[currentQuestionIndex];
      document.getElementById(`option${previousAnswer}`).checked = true;
      nextButton.disabled = false;
    } else {
      nextButton.disabled = true;
    }
    
    // Обновление состояния кнопок навигации
    prevButton.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === quizData.questions.length - 1) {
      nextButton.textContent = 'Завершить тест';
    } else {
      nextButton.textContent = 'Далее';
    }
  }

  function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      showQuestion();
    }
  }

  function goToNextQuestion() {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      currentQuestionIndex++;
      showQuestion();
    } else {
      calculateResult();
    }
  }

  function calculateResult() {
    // Сброс счетчиков
    userScores = {
      spiderman: 0,
      deadpool: 0,
      ironman: 0,
      batman: 0,
      joker: 0,
      walter: 0
    };
    
    // Подсчет очков на основе ответов
    userAnswers.forEach((answerIndex, questionIndex) => {
      const question = quizData.questions[questionIndex];
      const selectedOption = question.options[answerIndex];
      
      // Добавление очков для каждого героя
      Object.keys(selectedOption.scores).forEach(hero => {
        userScores[hero] += selectedOption.scores[hero];
      });
    });
    
    // Определение героя с максимальным количеством очков
    let maxScore = 0;
    let topHero = '';
    
    Object.keys(userScores).forEach(hero => {
      if (userScores[hero] > maxScore) {
        maxScore = userScores[hero];
        topHero = hero;
      }
    });
    
    // Отображение результата
    showResult(topHero);
  }

  function showResult(heroKey) {
    const hero = quizData.results[heroKey];
    
    // Расчет процента совпадения (максимальный возможный балл - 30)
    const maxPossibleScore = 30;
    const matchPercent = Math.round((userScores[heroKey] / maxPossibleScore) * 100);
    
    // Отображение основного результата
    resultHero.innerHTML = `
      <div class="result-image">
        <img src="${hero.image}" alt="${hero.name}">
      </div>
    `;
    resultName.textContent = hero.name;
    resultDescription.textContent = hero.description;
    matchPercentage.textContent = `${matchPercent}%`;
    heroType.textContent = hero.type;
    heroUniverse.textContent = hero.universe;
    
    // Скрытие секции теста и отображение результата
    quizSection.style.display = 'none';
    resultSection.style.display = 'block';
    otherResults.style.display = 'block';
    
    // Отображение других возможных результатов
    showOtherResults(heroKey);
  }

  function showOtherResults(excludedHero) {
    resultsGrid.innerHTML = '';
    
      // Сортировка героев по количеству очков (по убыванию)
      const sortedHeroes = Object.keys(userScores)
        .filter(hero => hero !== excludedHero)
        .sort((a, b) => userScores[b] - userScores[a])
        .slice(0, 3); // Берем топ-3 после исключенного героя
      
      sortedHeroes.forEach((heroKey, index) => {
          const hero = quizData.results[heroKey];
          const matchPercent = Math.round((userScores[heroKey] / 30) * 100);
          
          const heroCard = document.createElement('div');
          heroCard.className = 'result-card fade-in';
          heroCard.style.animationDelay = `${index * 0.2}s`; // Добавляем задержку для анимации
          
          heroCard.innerHTML = `
              <div class="result-card-image">
                  <img src="${hero.image}" alt="${hero.name}">
              </div>
              <div class="result-card-content">
                  <div>
                      <h3>${hero.name}</h3>
                      <p>${hero.type} • ${hero.universe}</p>
                  </div>
                  <div class="result-card-match">
                      Совпадение: ${matchPercent}%
                  </div>
              </div>
          `;
          resultsGrid.appendChild(heroCard);
      });
  }

  function restartQuiz() {
    resultSection.style.display = 'none';
    otherResults.style.display = 'none';
    startQuiz();
  }

  function shareResult() {
    const heroName = resultName.textContent;
    const matchPercent = matchPercentage.textContent;
    
    if (navigator.share) {
      navigator.share({
        title: 'Мой результат теста "Кто ты из киногероев?"',
        text: `Я прошел тест и узнал, что я ${heroName} с совпадением ${matchPercent}! Пройди тест и узнай, кто ты из киногероев!`,
        url: window.location.href
      })
      .catch(error => console.log('Ошибка при попытке поделиться:', error));
    } else {
      // Fallback для браузеров, которые не поддерживают Web Share API
      const shareText = `Я прошел тест и узнал, что я ${heroName} с совпадением ${matchPercent}! Пройди тест и узнай, кто ты из киногероев! ${window.location.href}`;
      navigator.clipboard.writeText(shareText)
        .then(() => alert('Результат скопирован в буфер обмена! Поделись им с друзьями!'))
        .catch(err => {
          console.error('Ошибка при копировании: ', err);
          alert('Скопируйте ссылку вручную: ' + window.location.href);
        });
    }
  }

  // Анимация появления элементов при скролле
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Наблюдаем за карточками
  document.querySelectorAll('.step-card, .option-card, .result-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
});