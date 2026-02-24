import type { LocalizedString } from '../i18n/translations';

export interface Activity {
  id: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  type: LocalizedString;
  ageRange: string;
  duration: LocalizedString;
  artifact: LocalizedString;
  materials: LocalizedString[];
  overview: LocalizedString;
  steps: {
    phase: LocalizedString;
    content: LocalizedString;
  }[];
  parentTips: LocalizedString;
  scienceNote?: LocalizedString;
}

export const activities: Activity[] = [
  {
    id: 'parting-sea',
    title: { en: 'Parting the Sea', ru: 'Расступление моря' },
    subtitle: { en: 'Surface Tension and Soap Magic', ru: 'Поверхностное натяжение и магия мыла' },
    type: { en: 'Water Experiment', ru: 'Водный опыт' },
    ageRange: '4–10',
    duration: { en: '15 min', ru: '15 мин' },
    artifact: {
      en: 'A hand-drawn "Yam Suf" (Red Sea) map with your experiment annotated',
      ru: 'Нарисованная от руки карта «Ям Суф» (Красного моря) с аннотацией опыта',
    },
    materials: [
      { en: 'A large shallow dish or baking pan', ru: 'Широкая неглубокая тарелка или форма для выпечки' },
      { en: 'Water', ru: 'Вода' },
      { en: 'Ground black pepper (lots of it)', ru: 'Молотый чёрный перец (много)' },
      { en: 'One drop of dish soap', ru: 'Одна капля жидкости для посуды' },
      { en: 'Blue food coloring (optional)', ru: 'Синий пищевой краситель (по желанию)' },
      { en: 'Paper and crayons for the map', ru: 'Бумага и карандаши для карты' },
    ],
    overview: {
      en: 'How did the sea part? This classic experiment uses surface tension to make pepper "part like the sea" — and leads to a conversation about scientific wonder vs. miraculous wonder.',
      ru: 'Как расступилось море? Этот классический опыт использует поверхностное натяжение, чтобы перец «расступился, как море» — и приводит к разговору о научном и чудесном.',
    },
    steps: [
      {
        phase: { en: 'The Question', ru: 'Вопрос' },
        content: {
          en: 'Ask: "If you could part the sea, how would you do it? What would you need?" Listen to all ideas without judgment. Then: "Scientists have a concept called surface tension — water molecules holding hands at the surface. What do you think happens if you break those connections?"',
          ru: 'Спросите: «Если бы вы могли расступить море, как бы вы это сделали? Что вам понадобилось бы?» Выслушайте все идеи без осуждения. Затем: «У учёных есть понятие поверхностного натяжения — молекулы воды держатся за руки на поверхности. Как вы думаете, что произойдёт, если разорвать эти связи?»',
        },
      },
      {
        phase: { en: 'The Story', ru: 'История' },
        content: {
          en: "The Israelites stood at the edge of the Red Sea (Yam Suf — Sea of Reeds). The Egyptian army was behind them. Nowhere to go. Then Moses stretched out his staff, and a great wind blew all night — and the sea parted. They walked through on dry land. When the Egyptians followed, the waters returned. It's the most dramatic moment in the Exodus.",
          ru: 'Израильтяне стояли на берегу Красного моря (Ям Суф — море тростника). Египетская армия наступала сзади. Некуда было бежать. Тогда Моше простёр свой посох, и всю ночь дул сильный ветер — и море расступилось. Они прошли по сухому дну. Когда за ними двинулись египтяне, воды вернулись. Это самый драматичный момент Исхода.',
        },
      },
      {
        phase: { en: 'The Science', ru: 'Наука' },
        content: {
          en: "Water molecules love each other — they're attracted to each other and create a kind of elastic film at the water's surface. This is surface tension. Pepper is light enough to sit on this film. Soap molecules are attracted to both water AND oil/fat — when soap touches the water surface, it breaks the surface tension and rushes outward, dragging the pepper with it. The pepper \"parts.\"",
          ru: 'Молекулы воды любят друг друга — они притягиваются и создают упругую плёнку на поверхности. Это поверхностное натяжение. Перец достаточно лёгкий, чтобы лежать на этой плёнке. Молекулы мыла притягиваются и к воде, и к маслу/жиру — когда мыло касается поверхности воды, оно разрывает поверхностное натяжение и устремляется наружу, увлекая за собой перец. Перец «расступается».',
        },
      },
      {
        phase: { en: 'The Experiment', ru: 'Опыт' },
        content: {
          en: "1. Fill the dish with water. Add blue food coloring if you like.\n2. Generously sprinkle black pepper over the entire surface (this is your \"sea of Israelites\").\n3. Place your fingertip in the center. Nothing happens!\n4. Touch one finger to the dish soap, then touch the CENTER of the water.\n5. WHOOSH — the pepper flies to the edges! The sea parts!\n6. Try it again. Why doesn't it work as dramatically the second time? (Soap has spread through the water.)",
          ru: '1. Наполните тарелку водой. При желании добавьте синий краситель.\n2. Щедро насыпьте чёрный перец по всей поверхности (это ваше «море израильтян»).\n3. Прикоснитесь пальцем к центру. Ничего не происходит!\n4. Смочите один палец в жидкости для посуды, затем прикоснитесь к ЦЕНТРУ воды.\n5. ВУШ — перец разлетается к краям! Море расступается!\n6. Попробуйте ещё раз. Почему во второй раз эффект слабее? (Мыло уже распределилось в воде.)',
        },
      },
      {
        phase: { en: 'The Artifact', ru: 'Артефакт' },
        content: {
          en: 'Draw a map of the Exodus route together: Egypt → Desert → Yam Suf → Sinai. Mark where the sea parted. Write one question each person has about how the parting might have worked. These become your "family theology discussion" for the Seder table.',
          ru: 'Нарисуйте вместе карту маршрута Исхода: Египет → Пустыня → Ям Суф → Синай. Отметьте место расступления моря. Напишите по одному вопросу от каждого о том, как это могло произойти. Это станет темой «семейного богословского разговора» за столом Седера.',
        },
      },
    ],
    parentTips: {
      en: "Let children predict before each step: \"What will happen if...?\" This is the scientific method in miniature. Don't rush to explain — let them wonder first.",
      ru: 'Позвольте детям делать предположения перед каждым шагом: «Что произойдёт, если...?» Это научный метод в миниатюре. Не спешите объяснять — сначала дайте им подумать.',
    },
    scienceNote: {
      en: 'A Jewish text connects this to wind: "And the Lord drove the sea back by a strong east wind all that night." Geologists have actually modeled this — a sustained 60+ mph wind could temporarily expose the shallow Reed Sea floor. Science and faith can coexist.',
      ru: 'Еврейский текст связывает это с ветром: «И гнал Господь море сильным восточным ветром всю ту ночь». Геологи действительно моделировали это — устойчивый ветер более 100 км/ч мог временно обнажить мелкое дно Тростникового моря. Наука и вера могут сосуществовать.',
    },
  },
  {
    id: 'ten-plagues-lab',
    title: { en: '10 Plagues Science Lab', ru: 'Научная лаборатория 10 казней' },
    subtitle: { en: 'Four Mini-Experiments for Four Plagues', ru: 'Четыре мини-опыта для четырёх казней' },
    type: { en: 'Science Lab', ru: 'Научная лаборатория' },
    ageRange: '7–14',
    duration: { en: '1–2 hours', ru: '1–2 часа' },
    artifact: {
      en: 'A "Plagues Lab Notebook" with drawings and observations',
      ru: '«Лабораторный журнал казней» с рисунками и наблюдениями',
    },
    materials: [
      { en: 'Red food coloring and a bowl of water (Blood)', ru: 'Красный пищевой краситель и миска воды (Кровь)' },
      { en: 'Rubber frogs or green ping-pong balls (Frogs)', ru: 'Резиновые лягушки или зелёные мячи для пинг-понга (Лягушки)' },
      { en: 'A flashlight and a box (Darkness)', ru: 'Фонарик и коробка (Тьма)' },
      { en: 'Ping-pong balls or ice cubes (Hail)', ru: 'Мячи для пинг-понга или кубики льда (Град)' },
      { en: 'A lab notebook (blank paper folded into a booklet)', ru: 'Лабораторный журнал (чистая бумага, сложенная в тетрадь)' },
      { en: 'Pens and colored pencils', ru: 'Ручки и цветные карандаши' },
    ],
    overview: {
      en: 'The 10 plagues are among the most vivid stories in world literature. This activity examines four plagues through a scientific lens: what natural events could produce these phenomena? Children document observations like real scientists.',
      ru: 'Десять казней — одни из самых ярких историй в мировой литературе. Это занятие рассматривает четыре казни через научный объектив: какие природные явления могли вызвать эти феномены? Дети фиксируют наблюдения как настоящие учёные.',
    },
    steps: [
      {
        phase: { en: 'Setup: The Lab Notebook', ru: 'Подготовка: лабораторный журнал' },
        content: {
          en: "Fold paper into a little booklet. Title it: \"[Child's Name]'s Plagues Lab.\" Each experiment gets its own page with: Plague Name, My Hypothesis (what I think will happen), Observation (what actually happened), One Question I Still Have.",
          ru: 'Сложите бумагу в тетрадочку. Назовите её: «Лаборатория казней [имя ребёнка]». Каждый опыт — отдельная страница с: Названием казни, Моей гипотезой (что я думаю, произойдёт), Наблюдением (что на самом деле произошло), Одним вопросом, который остался.',
        },
      },
      {
        phase: { en: 'Experiment 1: Blood (Dam)', ru: 'Опыт 1: Кровь (Дам)' },
        content: {
          en: 'Fill a clear bowl with water. Slowly add red food coloring to one side. Watch it spread — or not spread, depending on how you add it.\nScience question: "Some scientists think the Nile turned red from toxic algae called Karenia brevis — a red tide. What makes water turn red? What happens to fish when the water changes?" Observe how food coloring disperses. Draw it in your notebook.',
          ru: 'Наполните прозрачную миску водой. Медленно добавьте красный краситель с одной стороны. Наблюдайте, как он распространяется — или не распространяется, в зависимости от способа добавления.\nНаучный вопрос: «Некоторые учёные думают, что Нил покраснел от токсичных водорослей Karenia brevis — красного прилива. Что делает воду красной? Что происходит с рыбой при изменении воды?» Наблюдайте, как краситель рассеивается. Зарисуйте в журнал.',
        },
      },
      {
        phase: { en: 'Experiment 2: Darkness (Choshech)', ru: 'Опыт 2: Тьма (Хошех)' },
        content: {
          en: 'Set up a box with a small hole. Let light come in through the hole. Cover the hole — complete darkness. Then: open a flashlight and gradually shine it in.\nScience question: "A solar eclipse? A sandstorm? The Hebrew says the darkness was so thick it could be felt — what kind of darkness is that? What\'s the darkest place you\'ve ever been?" Measure how long it takes your eyes to adjust. Record in notebook.',
          ru: 'Сделайте маленькую дырку в коробке. Пропустите свет через отверстие. Закройте отверстие — полная темнота. Затем: включите фонарик и постепенно посветите внутрь.\nНаучный вопрос: «Солнечное затмение? Песчаная буря? На иврите сказано, что тьма была такой плотной, что её можно было ощутить — что это за тьма? В каком самом тёмном месте вы бывали?» Измерьте, сколько времени глаза привыкают к темноте. Запишите в журнал.',
        },
      },
      {
        phase: { en: 'Experiment 3: Frogs (Tzfardea)', ru: 'Опыт 3: Лягушки (Цфардеа)' },
        content: {
          en: 'Scatter rubber frogs or ping-pong balls around the room — everywhere: shoes, couch, refrigerator, pockets. Have children find them all.\nScience question: "Scientists think a drought followed by the Nile flooding drove frogs out of the water in massive numbers. What happens to animals when their habitat is disturbed? Where would you go if your home suddenly flooded?" Count how many frogs you hid vs. found. Were any missed?',
          ru: 'Разложите резиновых лягушек или мячи по всей комнате — везде: в ботинках, на диване, в холодильнике, по карманам. Пусть дети найдут их все.\nНаучный вопрос: «Учёные считают, что засуха, а затем разлив Нила вытеснили лягушек из воды в огромных количествах. Что происходит с животными, когда нарушается их среда обитания? Куда бы вы пошли, если бы ваш дом затопило?» Посчитайте, сколько лягушек спрятали и нашли. Какие-нибудь пропустили?',
        },
      },
      {
        phase: { en: 'Experiment 4: Hail (Barad)', ru: 'Опыт 4: Град (Барад)' },
        content: {
          en: 'Drop ice cubes or ping-pong balls from various heights onto paper. The higher the drop, the bigger the dent.\nScience question: "The Torah says fire was inside the hail — some scholars say this was ball lightning. What is ball lightning? How does hail form in the sky? How big can hailstones get? (Record: 8 inches / 20 cm in South Dakota, 2010.)" Measure the dents. Which height caused the most damage?',
          ru: 'Бросайте кубики льда или мячи для пинг-понга с разной высоты на бумагу. Чем выше, тем больше след.\nНаучный вопрос: «Тора говорит, что внутри града был огонь — некоторые учёные считают, это была шаровая молния. Что такое шаровая молния? Как образуется град? Насколько большим он бывает? (Рекорд: 20 см в Южной Дакоте, 2010.)» Измерьте следы от ударов. С какой высоты ущерб больше?',
        },
      },
      {
        phase: { en: 'Synthesis: The Lab Report', ru: 'Синтез: лабораторный отчёт' },
        content: {
          en: 'After all experiments: "If you were an ancient Egyptian scientist, how would you explain what was happening? If you were an Israelite prophet, how would you explain it? Can both explanations be true at the same time?"',
          ru: 'После всех опытов: «Если бы вы были древнеегипетским учёным, как бы вы объяснили происходящее? Если бы вы были израильским пророком, как бы вы объяснили это? Могут ли оба объяснения быть верными одновременно?»',
        },
      },
    ],
    parentTips: {
      en: 'The goal is not to "debunk" the plagues but to encourage multiple ways of knowing. Children can hold scientific curiosity and religious meaning simultaneously — in fact, the best scientists often do.',
      ru: 'Цель — не «разоблачить» казни, а поощрить разные способы познания. Дети могут одновременно сохранять научное любопытство и религиозный смысл — лучшие учёные именно так и делают.',
    },
    scienceNote: {
      en: 'Actual academic research: Dr. John Marr and Curtis Malloy published a scientific model (1996) where all 10 plagues follow as a cascade from one initial event — a toxic algae bloom in the Nile. Each plague triggers the next in ecological sequence.',
      ru: 'Реальное научное исследование: доктор Джон Марр и Кёртис Маллой опубликовали научную модель (1996), в которой все 10 казней следуют каскадом из одного начального события — токсичного цветения водорослей в Ниле. Каждая казнь запускает следующую в экологической последовательности.',
    },
  },
  {
    id: 'exodus-map',
    title: { en: 'Exodus Map Quest', ru: 'Квест «Карта Исхода»' },
    subtitle: { en: 'Cartography as Family Memory', ru: 'Картография как семейная память' },
    type: { en: 'Creative Craft', ru: 'Творческое поделие' },
    ageRange: '6–12',
    duration: { en: '45 min', ru: '45 мин' },
    artifact: {
      en: 'A large illustrated wall map of the Exodus route',
      ru: 'Большая иллюстрированная настенная карта маршрута Исхода',
    },
    materials: [
      { en: 'Large sheet of paper or poster board (at least 18"x24")', ru: 'Большой лист бумаги или ватман (не менее 45×60 см)' },
      { en: 'Colored pencils, markers, or watercolors', ru: 'Цветные карандаши, маркеры или акварель' },
      { en: 'An atlas or printed map of the Middle East/North Africa', ru: 'Атлас или распечатанная карта Ближнего Востока/Северной Африки' },
      { en: 'Stickers, stamps, or small illustrated symbols', ru: 'Наклейки, штампы или маленькие иллюстрированные символы' },
      { en: 'Reference: a Haggadah with the Exodus route', ru: 'Справочник: Агада с маршрутом Исхода' },
    ],
    overview: {
      en: "Where did the Israelites actually walk? How far was it? How long would it take today? This project makes the Exodus geographically real — turning abstract history into a physical journey children can trace with their fingers.",
      ru: 'Где именно шли израильтяне? Как далеко? Сколько времени это заняло бы сегодня? Этот проект делает Исход географически реальным — превращает абстрактную историю в физическое путешествие, которое дети могут проследить пальцем.',
    },
    steps: [
      {
        phase: { en: 'The Question', ru: 'Вопрос' },
        content: {
          en: 'Spread a modern map of Egypt, Sinai, and Israel on the table. Ask: "The Israelites left Egypt and wandered for 40 years before reaching Israel. Look at the map — could you walk that distance? How long do you think it really took to WALK from Egypt to Israel without roads or cars?"',
          ru: 'Разложите современную карту Египта, Синая и Израиля на столе. Спросите: «Израильтяне вышли из Египта и странствовали 40 лет, прежде чем достигли Израиля. Посмотрите на карту — смогли бы вы пройти это расстояние пешком? Как долго, по-вашему, шли бы из Египта в Израиль без дорог и машин?»',
        },
      },
      {
        phase: { en: 'Research Together', ru: 'Исследование вместе' },
        content: {
          en: "Look up key locations: Ancient Egypt (today's Cairo/Giza area), the land of Goshen (northeast Nile Delta), the Red Sea or Reed Sea crossing (several scholarly theories on location), Mount Sinai (traditional location: southern Sinai Peninsula), and Canaan (today's Israel).",
          ru: 'Найдите ключевые места: Древний Египет (район современного Каира/Гизы), земля Гошен (северо-восточная дельта Нила), место перехода через Красное или Тростниковое море (несколько научных версий), гора Синай (традиционное местонахождение: южный Синайский полуостров) и Ханаан (современный Израиль).',
        },
      },
      {
        phase: { en: 'Draw the Map', ru: 'Рисуем карту' },
        content: {
          en: "On the large paper, sketch the outline of Egypt, Sinai Peninsula, Red Sea, and Canaan. This doesn't need to be precise — it's YOUR family's interpretation. Add:\n• The Nile River (blue)\n• Goshen (where the Israelites lived — mark with a house symbol)\n• The Exodus route (dotted line with arrows)\n• The Red Sea crossing point (dramatic wavy lines)\n• Mount Sinai (draw a mountain)\n• The Promised Land (Canaan) destination",
          ru: 'На большом листе нарисуйте контуры Египта, Синайского полуострова, Красного моря и Ханаана. Точность не обязательна — это ваша СЕМЕЙНАЯ интерпретация. Добавьте:\n• Реку Нил (синим)\n• Гошен (место жительства израильтян — отметьте символом дома)\n• Маршрут Исхода (пунктирная линия со стрелками)\n• Место перехода через Красное море (выразительные волнистые линии)\n• Гору Синай (нарисуйте гору)\n• Пункт назначения — Земля обетованная (Ханаан)',
        },
      },
      {
        phase: { en: 'Populate the Map', ru: 'Заполняем карту' },
        content: {
          en: 'Add illustrated symbols: pyramids in Egypt, frogs near the Nile (plagues!), a burning bush at Sinai, a harp for David\'s later kingdom. Draw the cloud pillar that led the Israelites by day and the fire pillar by night. Add a compass rose.',
          ru: 'Добавьте иллюстрированные символы: пирамиды в Египте, лягушки у Нила (казни!), неопалимая купина на Синае, арфа для позднейшего царства Давида. Нарисуйте облачный столп, который вёл израильтян днём, и огненный — ночью. Добавьте розу ветров.',
        },
      },
      {
        phase: { en: 'The Distance Calculation', ru: 'Расчёт расстояния' },
        content: {
          en: 'Look up the actual distance from Cairo to Jerusalem: about 550 km / 340 miles. If someone walks 20 km per day, how many days is that? (27 days!) Why did it take 40 years? Discuss: the 40 years were about transformation, not distance. It takes time to go from "slave thinking" to "free thinking."',
          ru: 'Узнайте реальное расстояние от Каира до Иерусалима: около 550 км. Если идти 20 км в день, сколько дней? (27 дней!) Почему же 40 лет? Обсудите: 40 лет — о преображении, а не о расстоянии. Нужно время, чтобы перейти от «рабского мышления» к «свободному мышлению».',
        },
      },
      {
        phase: { en: 'Hang the Map', ru: 'Вешаем карту' },
        content: {
          en: "Hang the finished map in your home before the Seder. During the Seder, point to key locations as you read the Haggadah. The map becomes a year-round conversation piece.",
          ru: 'Повесьте готовую карту дома до Седера. Во время Седера указывайте на ключевые места по мере чтения Агады. Карта станет постоянным поводом для разговора.',
        },
      },
    ],
    parentTips: {
      en: "Resist the urge to correct imprecise geography. The meaning is in the making. Let children draw the route as they imagine it — some things in Exodus are genuinely uncertain, and that's part of the conversation.",
      ru: 'Сопротивляйтесь желанию исправлять неточную географию. Смысл — в процессе создания. Пусть дети рисуют маршрут так, как воображают — некоторые детали Исхода действительно неизвестны, и это часть разговора.',
    },
  },
  {
    id: 'afikoman-detective',
    title: { en: 'Afikoman Detective Agency', ru: 'Детективное агентство афикомана' },
    subtitle: { en: 'Design Your Own Family Quest', ru: 'Создайте свой семейный квест' },
    type: { en: 'Family Game Design', ru: 'Семейный игровой дизайн' },
    ageRange: '4–12',
    duration: { en: 'Evening activity (clue design: 30 min; quest: varies)', ru: 'Вечернее занятие (создание подсказок: 30 мин; квест: по-разному)' },
    artifact: {
      en: 'A set of handwritten clue cards in a treasure envelope',
      ru: 'Набор рукописных карточек с подсказками в конверте-сокровище',
    },
    materials: [
      { en: 'Index cards or small paper cards', ru: 'Карточки или небольшие листки бумаги' },
      { en: 'Pens and markers', ru: 'Ручки и маркеры' },
      { en: 'A small envelope or pouch for clues', ru: 'Небольшой конверт или мешочек для подсказок' },
      { en: 'The Afikoman (broken middle matzah)', ru: 'Афикоман (сломанная средняя маца)' },
      { en: 'Prizes (stickers, small toys, chocolate coins)', ru: 'Призы (наклейки, маленькие игрушки, шоколадные монеты)' },
      { en: 'Optional: wax seal for dramatic effect', ru: 'По желанию: сургучная печать для эффекта' },
    ],
    overview: {
      en: "Instead of simply hiding the Afikoman, children design a multi-clue treasure hunt — then adults solve IT. This flips the traditional dynamic: children become the creators and adults become the puzzlers.",
      ru: 'Вместо того чтобы просто прятать афикоман, дети придумывают квест с несколькими подсказками — а взрослые его разгадывают. Это переворачивает традиционную динамику: дети становятся создателями, а взрослые — разгадывателями.',
    },
    steps: [
      {
        phase: { en: 'The Concept', ru: 'Концепция' },
        content: {
          en: 'Explain the twist: "This year, YOU are hiding the Afikoman AND creating the clue hunt. The grown-ups will have to solve your riddles to find it. You are the Afikoman Detective Agency — and you get to set the rules."',
          ru: 'Объясните задумку: «В этом году ВЫ прячете афикоман И создаёте квест с подсказками. Взрослым придётся разгадать ваши загадки, чтобы его найти. Вы — Детективное агентство афикомана — и именно вы устанавливаете правила».',
        },
      },
      {
        phase: { en: 'Write the Clues', ru: 'Пишем подсказки' },
        content: {
          en: 'Children write 4–6 location clues leading to the Afikoman. Each clue hints at the NEXT location. Clue style ideas:\n• Rhyme: "Where do we go when our hands need to be clean? Find me where good hygiene is seen."\n• Riddle: "I am tall but I sit. I hold your coat when you forget. What am I?" (Coat rack)\n• Drawing: A picture of the refrigerator handle\n• Hebrew word: "Shulchan" (table) — look it up in the Haggadah',
          ru: 'Дети пишут 4–6 подсказок, ведущих к афикоману. Каждая подсказка намекает на СЛЕДУЮЩЕЕ место. Идеи для подсказок:\n• Рифма: «Куда мы идём, когда руки грязны? Найди меня там, где чистые руки важны.»\n• Загадка: «Я высокий, но стою. Я держу пальто, когда ты забываешь. Кто я?» (Вешалка)\n• Рисунок: изображение ручки холодильника\n• Ивритское слово: «Шульхан» (стол) — поищи в Агаде',
        },
      },
      {
        phase: { en: 'Hide Everything', ru: 'Прячем всё' },
        content: {
          en: 'Place each clue in sequence at the location it describes. Hide the Afikoman with the final clue. Put the FIRST clue in a dramatic envelope marked "From the Afikoman Detective Agency."',
          ru: 'Положите каждую подсказку последовательно на то место, которое она описывает. Спрячьте афикоман вместе с последней подсказкой. Первую подсказку вложите в торжественный конверт с надписью «От Детективного агентства афикомана».',
        },
      },
      {
        phase: { en: 'The Hunt Begins', ru: 'Начало охоты' },
        content: {
          en: 'After the meal, produce the envelope with ceremony. Adults open it and read the first clue aloud. Children watch and suppress giggles. Adults search for each clue in sequence, consulting children for "warm/cold" hints.',
          ru: 'После трапезы торжественно вручите конверт. Взрослые открывают его и читают первую подсказку вслух. Дети наблюдают и сдерживают смех. Взрослые ищут каждую подсказку по очереди, консультируясь с детьми — «тепло/холодно».',
        },
      },
      {
        phase: { en: 'The Negotiation', ru: 'Переговоры' },
        content: {
          en: 'When adults find the Afikoman, they must negotiate the ransom — but this year, the children SET the terms. What do they want? (Dessert first? An extra bedtime story? A hug from every person?) Negotiate seriously.',
          ru: 'Когда взрослые находят афикоман, они должны договориться о выкупе — но в этом году дети УСТАНАВЛИВАЮТ условия. Чего они хотят? (Сначала десерт? Ещё одну сказку перед сном? Обнимашки от каждого?) Переговоры всерьёз.',
        },
      },
      {
        phase: { en: 'The Artifact Lives On', ru: 'Артефакт живёт дальше' },
        content: {
          en: "After Pesach, save the clue cards. Write the date on the envelope. Add them to a \"Pesach box\" each year — a growing archive of your family's Seder memories.",
          ru: 'После Песаха сохраните карточки с подсказками. Напишите дату на конверте. Каждый год кладите их в «Ящик Песаха» — растущий архив воспоминаний о Седере вашей семьи.',
        },
      },
    ],
    parentTips: {
      en: 'Let younger children dictate clues to older siblings or parents to write. Even scribbled drawings are valid clues. The detective role gives children enormous pride and agency.',
      ru: 'Пусть младшие дети диктуют подсказки старшим братьям/сёстрам или родителям. Даже каракули — законные подсказки. Роль детектива даёт детям огромную гордость и чувство ответственности.',
    },
  },
  {
    id: 'build-pyramid',
    title: { en: 'Build the Pyramid', ru: 'Строим пирамиду' },
    subtitle: { en: 'Engineering Under Constraints', ru: 'Инженерное задание с ограничениями' },
    type: { en: 'Engineering Challenge', ru: 'Инженерный вызов' },
    ageRange: '6–14',
    duration: { en: '30 min', ru: '30 мин' },
    artifact: {
      en: 'A standing pyramid — photograph it for the family record',
      ru: 'Стоящая пирамида — сфотографируйте для семейного архива',
    },
    materials: [
      { en: 'Sugar cubes (the "bricks")', ru: 'Кубики сахара («кирпичи»)' },
      { en: 'Regular toothpicks (the "tools")', ru: 'Обычные зубочистки («инструменты»)' },
      { en: 'Marshmallows (the "mortar")', ru: 'Маршмеллоу («строительный раствор»)' },
      { en: 'A flat surface', ru: 'Ровная поверхность' },
      { en: 'A ruler', ru: 'Линейка' },
      { en: 'Optional: sand (put sugar cubes in a tray of sand for extra challenge)', ru: 'По желанию: песок (положите кубики в лоток с песком для дополнительного усложнения)' },
    ],
    overview: {
      en: 'The Israelites built with bricks and mortar. What does that actually mean structurally? Children discover the engineering principles of pyramids — why do pyramids not fall? — while connecting to the story of their ancestors.',
      ru: 'Израильтяне строили из кирпичей и раствора. Что это значит конструктивно? Дети открывают инженерные принципы пирамид — почему пирамиды не падают? — в связи с историей своих предков.',
    },
    steps: [
      {
        phase: { en: 'The Question', ru: 'Вопрос' },
        content: {
          en: "Ask: \"The Pyramid of Giza is 4,500 years old and still standing. Why doesn't it fall down? What shape do you think is the most stable for a building? A square? A triangle? A circle? Let's test your theory.\"",
          ru: 'Спросите: «Пирамида Хеопса стоит уже 4500 лет. Почему она не падает? Как вы думаете, какая форма самая устойчивая для здания? Квадрат? Треугольник? Круг? Давайте проверим вашу теорию».',
        },
      },
      {
        phase: { en: 'The Challenge', ru: 'Задание' },
        content: {
          en: 'Mission: Build the tallest freestanding structure you can using ONLY sugar cubes and marshmallows. You have 10 minutes. Then we\'ll discuss what worked and why.',
          ru: 'Задание: Постройте максимально высокую свободностоящую конструкцию, используя ТОЛЬКО кубики сахара и маршмеллоу. У вас есть 10 минут. Потом обсудим, что сработало и почему.',
        },
      },
      {
        phase: { en: 'Round 1: Free Build', ru: 'Раунд 1: Свободное строительство' },
        content: {
          en: 'Children build any shape they choose. Time them. Measure height. Test stability: Can it survive a gentle table-tap? A book placed on top?',
          ru: 'Дети строят любую форму по выбору. Засеките время. Измерьте высоту. Проверьте устойчивость: выдержит лёгкое постукивание по столу? Книгу, положенную сверху?',
        },
      },
      {
        phase: { en: 'Round 2: Pyramid Challenge', ru: 'Раунд 2: Вызов пирамиды' },
        content: {
          en: 'Now build specifically a pyramid shape — wider base, narrowing toward the top. Discuss: "The pyramid shape distributes weight outward and downward. The base has MORE surface area, so the weight per square inch is LESS." Test the pyramid against the Round 1 structure.',
          ru: 'Теперь стройте конкретно пирамиду — более широкое основание, сужающееся кверху. Обсудите: «Форма пирамиды распределяет вес наружу и вниз. Основание имеет БОЛЬШУЮ площадь, поэтому вес на квадратный сантиметр МЕНЬШЕ». Сравните пирамиду с конструкцией из раунда 1.',
        },
      },
      {
        phase: { en: 'The Human Connection', ru: 'Связь с человеком' },
        content: {
          en: 'As you build: "The Torah says the Israelites built the store cities of Pithom and Raamses. Archaeologists have found these cities — real bricks with real straw mixed in, exactly as described. Some bricks even have no straw (like later in Exodus when Pharaoh cuts the straw ration). Physical evidence in the sand."',
          ru: 'В процессе строительства: «Тора говорит, что израильтяне строили города-склады Питом и Раамсес. Археологи нашли эти города — настоящие кирпичи с настоящей соломой, смешанной в них, именно как описано. В некоторых кирпичах нет соломы (как позже в Исходе, когда фараон сокращает её паёк). Физические доказательства в песке».',
        },
      },
      {
        phase: { en: 'The Engineering Debrief', ru: 'Разбор полётов' },
        content: {
          en: 'After building: "Engineers who build things think about three forces: compression (pushing down), tension (pulling apart), and shear (sliding sideways). Which force threatens your pyramid most? How does the pyramid shape resist each force?" Older children can draw a force diagram.',
          ru: 'После строительства: «Инженеры думают о трёх силах: сжатие (давление вниз), растяжение (растягивание) и сдвиг (скольжение в сторону). Какая сила больше всего угрожает вашей пирамиде? Как форма пирамиды противостоит каждой силе?» Старшие дети могут нарисовать диаграмму сил.',
        },
      },
    ],
    parentTips: {
      en: 'The engineering debrief is optional — for many families, the building itself is enough. But older children (10+) often enjoy the vocabulary of forces. Use real engineering language: it shows respect for their intelligence.',
      ru: 'Разбор полётов необязателен — для многих семей само строительство достаточно. Но старшие дети (10+) часто наслаждаются словарём сил. Используйте настоящий инженерный язык: это демонстрирует уважение к их интеллекту.',
    },
    scienceNote: {
      en: "Real pyramid engineering: the Great Pyramid's base is level to within 2.1 centimeters — this was achieved 4,500 years ago without modern instruments. How? Possibly by flooding the base and using water level as a reference. This is a worthy rabbit hole for curious kids.",
      ru: 'Реальная инженерия пирамид: основание Великой пирамиды выровнено с точностью до 2,1 сантиметра — это было достигнуто 4500 лет назад без современных инструментов. Как? Возможно, затопив основание и используя уровень воды как ориентир. Это достойная «нора для любопытных».',
    },
  },
  {
    id: 'four-questions-scientists',
    title: { en: 'Four Questions for Scientists', ru: 'Четыре вопроса для учёных' },
    subtitle: { en: 'Building a Family Science Haggadah', ru: 'Создаём семейную научную Агаду' },
    type: { en: 'Discussion & Writing', ru: 'Обсуждение и письмо' },
    ageRange: '8+',
    duration: { en: '30 min', ru: '30 мин' },
    artifact: {
      en: "A \"Science Haggadah\" — your family's book of Pesach questions and discoveries",
      ru: '«Научная Агада» — семейная книга вопросов и открытий о Песахе',
    },
    materials: [
      { en: 'A blank booklet (stapled pages)', ru: 'Чистая тетрадь (сшитые листы)' },
      { en: 'Pens and colored pencils', ru: 'Ручки и цветные карандаши' },
      { en: 'The Four Questions (Mah Nishtanah) for reference', ru: 'Четыре вопроса (МаНиштана) для справки' },
      { en: 'Curiosity', ru: 'Любопытство' },
    ],
    overview: {
      en: "The Four Questions (Mah Nishtanah) are the engine of the Seder — they teach that asking questions is holy. This activity creates your family's OWN four questions about the science of Passover, generating a document that grows year after year.",
      ru: 'Четыре вопроса (МаНиштана) — двигатель Седера: они учат, что задавать вопросы свято. Это занятие создаёт СОБСТВЕННЫЕ четыре вопроса вашей семьи о науке Песаха — документ, который растёт из года в год.',
    },
    steps: [
      {
        phase: { en: 'The Concept', ru: 'Концепция' },
        content: {
          en: 'Read the traditional Four Questions together (Mah Nishtanah). Discuss: "These questions have been asked for 2,000 years. But every generation has NEW questions. Scientists like Richard Feynman said that knowing the name of something is not the same as knowing it. What do we TRULY not know about Pesach?"',
          ru: 'Прочтите вместе традиционные Четыре вопроса (МаНиштана). Обсудите: «Эти вопросы задают уже 2000 лет. Но у каждого поколения есть НОВЫЕ вопросы. Учёные вроде Ричарда Фейнмана говорили: знать название чего-то — не то же самое, что знать само это. Что мы по-настоящему НЕ ЗНАЕМ о Песахе?»',
        },
      },
      {
        phase: { en: 'Brainstorm: Our Questions', ru: 'Мозговой штурм: наши вопросы' },
        content: {
          en: 'Each person writes down 3 genuine questions about anything in the Pesach story or practice:\n• Why does salt water taste like tears? (Chemistry: sodium chloride + taste receptors)\n• Why does the Haggadah say 600,000 Israelites left Egypt? Could that really be true? (Demographics, historical research)\n• Why does matzah get stale so fast? (The chemistry of starch retrogradation)\n• Could you REALLY part the sea? (Oceanography, historical models)\n• Why do we recline? What does it feel like in our bodies? (Physiology of posture and comfort)',
          ru: 'Каждый записывает 3 настоящих вопроса о чём-либо в истории или практике Песаха:\n• Почему солёная вода на вкус как слёзы? (Химия: хлорид натрия + вкусовые рецепторы)\n• Почему в Агаде говорится, что Египет покинули 600 000 израильтян? Это возможно? (Демография, историческое исследование)\n• Почему маца черствеет так быстро? (Химия ретроградации крахмала)\n• Может ли море действительно расступиться? (Океанология, исторические модели)\n• Почему мы возлежим? Что это ощущается в теле? (Физиология позы и комфорта)',
        },
      },
      {
        phase: { en: 'Choose the Best Four', ru: 'Выбираем лучшие четыре' },
        content: {
          en: 'Vote on the four most interesting questions as a family. These become YOUR Four Questions for this year.',
          ru: 'Проголосуйте за четыре самых интересных вопроса всей семьёй. Они становятся ВАШИМИ Четырьмя вопросами на этот год.',
        },
      },
      {
        phase: { en: 'Research One Question', ru: 'Исследуем один вопрос' },
        content: {
          en: "Pick one question to investigate NOW (using books or a device). Each person reads a different source and reports back. How do the sources agree? Disagree? What's still uncertain?",
          ru: 'Выберите один вопрос для исследования СЕЙЧАС (с книгами или устройством). Каждый читает другой источник и докладывает. В чём источники согласны? В чём расходятся? Что до сих пор неизвестно?',
        },
      },
      {
        phase: { en: 'Write the Science Haggadah', ru: 'Пишем Научную Агаду' },
        content: {
          en: 'In your blank booklet, write:\nPage 1: Title ("The [Your Last Name] Science Haggadah, Pesach 5786")\nPage 2: The Traditional Four Questions\nPage 3: Our Four Questions for This Year\nPages 4–7: One question per page — what we know, what we don\'t know, and what we want to find out\nBack page: One thing each person LEARNED from the Seder this year',
          ru: 'В чистой тетради напишите:\nСтраница 1: Название («Научная Агада семьи [ваша фамилия], Песах 5786»)\nСтраница 2: Традиционные Четыре вопроса\nСтраница 3: Наши Четыре вопроса на этот год\nСтраницы 4–7: По одному вопросу на странице — что мы знаем, чего не знаем и что хотим узнать\nПоследняя страница: Одно, чему каждый НАУЧИЛСЯ на Седере в этом году',
        },
      },
      {
        phase: { en: 'The Artifact Lives On', ru: 'Артефакт живёт дальше' },
        content: {
          en: "Keep the Science Haggadah with your Pesach materials. Next year: read last year's questions and update them. Did you find answers? Have new questions emerged? This document becomes a record of your family's intellectual life across years.",
          ru: 'Храните Научную Агаду вместе с пасхальными принадлежностями. На следующий год: перечитайте прошлогодние вопросы и обновите их. Нашли ли вы ответы? Появились ли новые вопросы? Этот документ становится записью интеллектуальной жизни вашей семьи на протяжении лет.',
        },
      },
    ],
    parentTips: {
      en: "The most important thing: treat children's questions with complete seriousness. \"I don't know, let's find out together\" is the best answer a parent can give. Curiosity is the gift we protect.",
      ru: 'Самое важное: относитесь к вопросам детей с полной серьёзностью. «Я не знаю, давайте узнаем вместе» — лучший ответ, который может дать родитель. Любопытство — это дар, который мы бережём.',
    },
  },
];
