export type Lang = 'en' | 'ru';
export type LocalizedString = { en: string; ru: string };

const translations = {
  en: {
    // Navigation
    nav: {
      title: 'Pesach 5786',
      subtitle: 'Passover 2026',
      home: 'Home',
      preparation: 'Preparation',
      recipes: 'Recipes',
      kids: 'Kids Zone',
    },

    // Countdown
    countdown: {
      label: 'Until First Seder — April 1, 2026',
      quote: '"In every generation, one is obligated to see oneself as if they personally left Egypt."',
      cite: '— Passover Haggadah',
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds',
    },

    // Home page
    home: {
      badge: 'Chag Pesach Sameach 🌿',
      headline: 'Passover 2026',
      headlineAccent: 'Preparation Guide',
      subline: 'Everything your family needs for a meaningful, joyful Seder — checklists, recipes, and activities for all ages.',
      progressLabel: 'Your Preparation Progress',
      progressSuffix: 'tasks done',
      progressPercent: '% complete — keep going!',
      phaseNow: 'Now: Current Phase',
      viewTasks: 'View all tasks',
      sederSteps: 'The 15 Steps of the Seder',
      explore: 'Explore',
      section1Stat: '6 phases',
      section1Title: 'Preparation Checklist',
      section1Desc: '50+ tasks across 6 timeline phases — from ordering matzah 4 weeks out to lighting candles at the Seder.',
      section2Stat: '14 recipes',
      section2Title: 'Recipes',
      section2Desc: '14 Kosher for Passover recipes with full ingredients and step-by-step methods. From charoset to flourless chocolate cake.',
      section3Stat: '7 activities',
      section3Title: 'Kids Zone',
      section3Desc: '7 hands-on activities — yeast science, sea-parting experiments, plague labs, and engineering challenges.',
      quote: '"The beginning of freedom is the recognition of unfreedom."',
      cite: '— Herbert Marcuse; echoed at every Seder table',
    },

    // Preparation page
    prep: {
      heading: 'Preparation Checklist',
      subtitle: 'tasks across 6 timeline phases. Checkboxes are saved to your browser automatically.',
      globalProgress: 'Overall Progress',
      currentBadge: 'CURRENT',
      phaseLabel: 'Phase',
      done: 'done',
      why: 'why?',
      less: 'less',
      complete: 'You\'ve completed all',
      completeSuffix: 'preparation tasks. Your Seder awaits!',
      congrats: 'Chag Sameach!',
    },

    // Recipes page
    recipes: {
      heading: 'Passover Recipes',
      subtitle: 'Kosher for Passover recipes — all tested, all delicious.',
      searchPlaceholder: 'Search recipes...',
      all: 'All',
      viewRecipe: 'View Full Recipe',
      hideRecipe: 'Hide Recipe',
      tipLabel: 'Chef\'s Tip:',
      ingredients: 'Ingredients',
      method: 'Method',
      serves: 'Serves',
      prep: 'Prep:',
      cook: 'Cook:',
      noResults: 'No recipes found.',
      clearFilters: 'Clear filters',
    },

    // Kids Zone page
    kids: {
      heading: 'Kids Zone',
      subtitle: '7 hands-on activities that make Passover come alive — science experiments, map-making, engineering, and family adventures inspired by the Exodus story.',
      pedagogyNote: 'Hands-on family activities that make Passover come alive through questions, experiments, and making things together.',
      pedagogyLabel: 'Pedagogical approach:',
      materials: 'Materials Needed',
      steps: 'Step-by-Step Guide',
      parentTips: 'Parent Tips',
      science: 'Science Extension',
      expandActivity: 'See Full Activity Guide',
      collapseActivity: 'Collapse Activity',
      artifact: 'Artifact:',
      ages: 'Ages',
      quote: '"The wise child asks questions. So does the scientist. So does the parent who doesn\'t pretend to know everything."',
      cite: 'Each activity is designed for families to do together — no special equipment, just curiosity and a little time.',
    },

    // Footer
    footer: {
      text: 'Chag Pesach Sameach 🍷 · Passover 2026 · April 1–9',
    },
  },

  ru: {
    // Navigation
    nav: {
      title: 'Песах 5786',
      subtitle: 'Пасхальный Седер 2026',
      home: 'Главная',
      preparation: 'Подготовка',
      recipes: 'Рецепты',
      kids: 'Детям',
    },

    // Countdown
    countdown: {
      label: 'До первого Седера — 1 апреля 2026',
      quote: '«В каждом поколении человек обязан ощущать себя так, как будто он сам вышел из Египта.»',
      cite: '— Пасхальная Агада',
      days: 'Дней',
      hours: 'Часов',
      minutes: 'Минут',
      seconds: 'Секунд',
    },

    // Home page
    home: {
      badge: 'Хаг Песах Самеах 🌿',
      headline: 'Песах 2026',
      headlineAccent: 'Путеводитель по подготовке',
      subline: 'Всё необходимое для радостного и осмысленного Седера — чеклисты, рецепты и активности для всей семьи.',
      progressLabel: 'Ваш прогресс подготовки',
      progressSuffix: 'задач выполнено',
      progressPercent: '% выполнено — продолжайте!',
      phaseNow: 'Сейчас: текущий этап',
      viewTasks: 'Все задачи',
      sederSteps: '15 шагов Седера',
      explore: 'Открыть',
      section1Stat: '6 этапов',
      section1Title: 'Чеклист подготовки',
      section1Desc: '50+ задач по 6 временным этапам — от заказа мацы за 4 недели до зажигания свечей на Седере.',
      section2Stat: '14 рецептов',
      section2Title: 'Рецепты',
      section2Desc: '14 кошерных на Песах рецептов с полным составом и пошаговыми инструкциями. От харосет до шоколадного торта.',
      section3Stat: '7 активностей',
      section3Title: 'Детская зона',
      section3Desc: '7 практических занятий — опыты с дрожжами, «разделение моря», лаборатория казней и инженерные задачи.',
      quote: '«Начало свободы — это осознание несвободы.»',
      cite: '— Герберт Маркузе; звучит за каждым пасхальным столом',
    },

    // Preparation page
    prep: {
      heading: 'Чеклист подготовки',
      subtitle: 'задач по 6 временным этапам. Отметки сохраняются в браузере автоматически.',
      globalProgress: 'Общий прогресс',
      currentBadge: 'СЕЙЧАС',
      phaseLabel: 'Этап',
      done: 'готово',
      why: 'зачем?',
      less: 'свернуть',
      complete: 'Вы выполнили все',
      completeSuffix: 'задач подготовки. Ваш Седер ждёт!',
      congrats: 'Хаг Самеах!',
    },

    // Recipes page
    recipes: {
      heading: 'Рецепты на Песах',
      subtitle: 'кошерных на Песах рецептов — все проверены, все вкусны.',
      searchPlaceholder: 'Поиск рецептов...',
      all: 'Все',
      viewRecipe: 'Показать рецепт',
      hideRecipe: 'Скрыть рецепт',
      tipLabel: 'Совет шефа:',
      ingredients: 'Ингредиенты',
      method: 'Приготовление',
      serves: 'Порций',
      prep: 'Подготовка:',
      cook: 'Готовка:',
      noResults: 'Рецепты не найдены.',
      clearFilters: 'Сбросить фильтры',
    },

    // Kids Zone page
    kids: {
      heading: 'Детская зона',
      subtitle: '7 практических занятий, которые оживляют историю Песаха — научные опыты, создание карт, инженерные задачи и семейные приключения.',
      pedagogyNote: 'Практические семейные занятия, которые оживляют Песах через вопросы, опыты и совместное творчество.',
      pedagogyLabel: 'Педагогический подход:',
      materials: 'Что понадобится',
      steps: 'Пошаговое руководство',
      parentTips: 'Советы родителям',
      science: 'Углубление в науку',
      expandActivity: 'Полное руководство по занятию',
      collapseActivity: 'Свернуть',
      artifact: 'Результат:',
      ages: 'Возраст',
      quote: '«Мудрый ребёнок задаёт вопросы. Как и учёный. Как и родитель, который не притворяется, что знает всё.»',
      cite: 'Каждое занятие создано для совместного времяпровождения — без специального оборудования, только любопытство и немного времени.',
    },

    // Footer
    footer: {
      text: 'Хаг Песах Самеах 🍷 · Пасхальный Седер 2026 · 1–9 апреля',
    },
  },
} as const;

export default translations;
