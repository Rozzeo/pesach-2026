import type { LocalizedString } from '../i18n/translations';

export interface ChecklistTask {
  id: string;
  phase: number;
  title: LocalizedString;
  explanation: LocalizedString;
  category?: string;
}

export interface ChecklistPhase {
  id: number;
  title: LocalizedString;
  when: LocalizedString;
  description: LocalizedString;
  startDaysOut: number;
  endDaysOut: number;
  tasks: ChecklistTask[];
}

export const checklistPhases: ChecklistPhase[] = [
  {
    id: 1,
    title: { en: "4+ Weeks Before", ru: "За 4+ недели" },
    when: { en: "Now through March 3", ru: "Сейчас до 3 марта" },
    description: { en: "Strategic planning and early orders", ru: "Стратегическое планирование и ранние заказы" },
    startDaysOut: 999,
    endDaysOut: 28,
    tasks: [
      {
        id: "1-1",
        phase: 1,
        title: { en: "Order shmurah matzah", ru: "Заказать шмура-мацу" },
        explanation: {
          en: "Hand-made shmurah matzah sells out early. Order from your local bakery or online source. Plan 1 lb per 4–6 adults for the Seder; more if you eat matzah all week.",
          ru: "Шмура-маца ручной работы быстро разбирается. Закажите в местной пекарне или онлайн. Рассчитывайте примерно 450 г на 4–6 взрослых для Седера; больше — если едите мацу всю неделю.",
        },
      },
      {
        id: "1-2",
        phase: 1,
        title: { en: "Plan your guest list", ru: "Составить список гостей" },
        explanation: {
          en: "Confirm who's coming for the Seder. Consider dietary restrictions (vegan, nut allergies, gluten-sensitive guests who may need rice or potato-based alternatives in Sephardic style).",
          ru: "Подтвердите список гостей на Седер. Учтите диетические ограничения (веганы, аллергия на орехи, непереносимость глютена — таким гостям можно предложить рисовые или картофельные альтернативы в сефардском стиле).",
        },
      },
      {
        id: "1-3",
        phase: 1,
        title: { en: "Stock up on wine and grape juice", ru: "Закупить вино и виноградный сок" },
        explanation: {
          en: "Each person drinks four cups. Plan roughly one 750ml bottle per 2 adults. Make sure all wine/grape juice is certified Kosher for Passover (KFP).",
          ru: "Каждый участник Седера выпивает четыре бокала. Рассчитывайте примерно одну бутылку 750 мл на 2 взрослых. Убедитесь, что вино и виноградный сок имеют сертификат кошерности для Песаха (КФП).",
        },
      },
      {
        id: "1-4",
        phase: 1,
        title: { en: "Source your Haggadahs", ru: "Подготовить Агадот" },
        explanation: {
          en: "Count your guests and ensure you have enough Haggadahs. Consider family-friendly illustrated versions for children. Many beautiful free PDFs are also printable.",
          ru: "Подсчитайте гостей и убедитесь, что у вас достаточно Агадот. Рассмотрите иллюстрированные версии для детей. Многие красивые PDF-версии можно бесплатно скачать и распечатать.",
        },
      },
      {
        id: "1-5",
        phase: 1,
        title: { en: "Plan your Seder menu", ru: "Составить меню Седера" },
        explanation: {
          en: "Decide on all courses: appetizer, soup, main, sides, and dessert. Remember everything must be Kosher for Passover — no chametz (leavened grain products).",
          ru: "Определитесь со всеми блюдами: закуска, суп, горячее, гарниры и десерт. Помните, всё должно быть кошерным для Песаха — никакого хамеца (квасных хлебных изделий).",
        },
      },
      {
        id: "1-6",
        phase: 1,
        title: { en: "Buy heavy-duty aluminum foil", ru: "Купить прочную алюминиевую фольгу" },
        explanation: {
          en: "Foil is essential for covering countertops, stovetop grates, and surfaces that can't be kashered. Buy several large rolls — you'll use more than you think. Heavy-duty or extra-wide rolls make covering easier.",
          ru: "Фольга необходима для накрытия столешниц, конфорок и поверхностей, которые нельзя кашеровать. Купите несколько больших рулонов — понадобится больше, чем кажется. Прочная или широкая фольга упрощает накрытие.",
        },
      },
      {
        id: "1-7",
        phase: 1,
        title: { en: "Arrange sleeping accommodations for guests", ru: "Организовать ночлег для гостей" },
        explanation: {
          en: "If hosting out-of-town guests, confirm sleeping arrangements, towels, and any special needs early so nothing is rushed.",
          ru: "Если у вас останавливаются гости издалека, заблаговременно уточните места для ночлега, полотенца и особые пожелания, чтобы ничего не откладывать на последний момент.",
        },
      },
      {
        id: "1-8",
        phase: 1,
        title: { en: "Review chametz-selling process with your rabbi", ru: "Уточнить у раввина порядок продажи хамеца" },
        explanation: {
          en: "Chametz you won't use or can't dispose of before Pesach can be halakhically 'sold' to a non-Jew. Contact your rabbi or use a reputable online mechiyas chametz service.",
          ru: "Хамец, который вы не успеете использовать или уничтожить до Песаха, можно галахически «продать» нееврею. Обратитесь к своему раввину или воспользуйтесь проверенным онлайн-сервисом продажи хамеца.",
        },
      },
      {
        id: "1-9",
        phase: 1,
        title: { en: "Buy or prepare Seder plate items", ru: "Купить или подготовить компоненты тарелки Седера" },
        explanation: {
          en: "The Seder plate needs: shank bone (or beet for vegetarians), roasted egg, bitter herbs (horseradish/romaine), charoset, karpas (parsley/celery), and chazeret (additional bitter herb).",
          ru: "Для тарелки Седера нужны: баранья кость (или свёкла для вегетарианцев), поджаренное яйцо, горькие травы (хрен/латук), харосет, карпас (петрушка/сельдерей) и хазерет (дополнительная горькая трава).",
        },
      },
    ],
  },
  {
    id: 2,
    title: { en: "2–3 Weeks Before", ru: "За 2–3 недели" },
    when: { en: "March 4 – March 17", ru: "4–17 марта" },
    description: { en: "Deep cleaning and kitchen preparation", ru: "Генеральная уборка и подготовка кухни" },
    startDaysOut: 28,
    endDaysOut: 14,
    tasks: [
      {
        id: "2-1",
        phase: 2,
        title: { en: "Deep-clean the kitchen", ru: "Сделать генеральную уборку кухни" },
        explanation: {
          en: "The goal is removing all chametz crumbs, not just tidying. Remove everything from cabinets and clean shelves. Pay special attention to corners, hinges, and rubber seals.",
          ru: "Цель — избавиться от всех крошек хамеца, а не просто прибраться. Вытащите всё из шкафов и вымойте полки. Особое внимание уделите углам, петлям и резиновым уплотнителям.",
        },
      },
      {
        id: "2-2",
        phase: 2,
        title: { en: "Clean the refrigerator and freezer", ru: "Вымыть холодильник и морозильник" },
        explanation: {
          en: "Empty completely, remove drawers and shelves, wash with warm soapy water. Don't forget the rubber door gaskets where crumbs hide. Clean freezer coils and drip tray.",
          ru: "Полностью опустошите, извлеките ящики и полки, вымойте тёплой мыльной водой. Не забудьте резиновые уплотнители дверей, где прячутся крошки. Почистите испарительную камеру и поддон.",
        },
      },
      {
        id: "2-3",
        phase: 2,
        title: { en: "Clean the oven", ru: "Вычистить духовку" },
        explanation: {
          en: "Run the self-clean cycle or scrub thoroughly. For kashering, the oven will need to reach its maximum temperature after cleaning (libun kal).",
          ru: "Запустите режим самоочистки или тщательно отмойте духовку. Для кашеровки духовку нужно нагреть до максимальной температуры после очистки (либун каль).",
        },
      },
      {
        id: "2-4",
        phase: 2,
        title: { en: "Clean the dishwasher", ru: "Почистить посудомоечную машину" },
        explanation: {
          en: "Remove and clean the filter, wipe the door gasket, run an empty hot cycle. Check your rabbi's guidance on kashering a dishwasher — many require 24 hours unused before running a full hot cycle.",
          ru: "Извлеките и промойте фильтр, протрите уплотнитель дверцы, запустите пустой горячий цикл. Уточните у раввина порядок кашеровки посудомойки — многие требуют 24 часов простоя перед запуском горячего цикла.",
        },
      },
      {
        id: "2-5",
        phase: 2,
        title: { en: "Clean your car", ru: "Убрать в машине" },
        explanation: {
          en: "Check under seats, in seat creases, cup holders, and door pockets for crackers, cookies, bread crumbs. Vacuum thoroughly. The car is a common chametz hotspot.",
          ru: "Проверьте пространство под сиденьями, складки, подстаканники и карманы дверей на наличие крекеров, печенья и хлебных крошек. Тщательно пропылесосьте. Машина — одно из самых распространённых мест скопления хамеца.",
        },
      },
      {
        id: "2-6",
        phase: 2,
        title: { en: "Clean bags, backpacks, and purses", ru: "Вычистить сумки, рюкзаки и кошельки" },
        explanation: {
          en: "Empty and shake out all bags. Check every pocket — granola bars, cereal, cracker wrappers. School backpacks especially need thorough attention.",
          ru: "Опустошите и вытрясите все сумки. Проверьте каждый карман — мюсли-батончики, хлопья, упаковки от крекеров. Особенно тщательно осмотрите школьные рюкзаки.",
        },
      },
      {
        id: "2-7",
        phase: 2,
        title: { en: "Sort and organize Pesach dishes", ru: "Разобрать и подготовить посуду для Песаха" },
        explanation: {
          en: "Locate your Pesach dishes, pots, and cutlery. Wash and inspect them. If you don't have a full set, decide what needs to be purchased or what chametz items can be kashered.",
          ru: "Найдите пасхальную посуду, кастрюли и столовые приборы. Вымойте и осмотрите их. Если комплект неполный, решите, что нужно докупить или что из хамецной посуды можно кашеровать.",
        },
      },
      {
        id: "2-8",
        phase: 2,
        title: { en: "Kasher or purchase new pots and pans", ru: "Кашеровать или купить новые кастрюли и сковородки" },
        explanation: {
          en: "Metal pots used for chametz can be kashered by hag'alah (immersion in boiling water). Glass — consult your rabbi. Check that all utensils are either kashered or dedicated Pesach items.",
          ru: "Металлические кастрюли, использовавшиеся для хамеца, можно кашеровать методом хаг'ала (погружение в кипящую воду). Стекло — проконсультируйтесь с раввином. Убедитесь, что вся утварь либо кашерована, либо специально для Песаха.",
        },
      },
      {
        id: "2-9",
        phase: 2,
        title: { en: "Clean children's rooms and play areas", ru: "Убрать детские комнаты и игровые зоны" },
        explanation: {
          en: "Children's rooms — especially high chairs, booster seats, toy kitchens, and play food — are notorious chametz zones. Clean with the kids and make it a teaching moment.",
          ru: "Детские комнаты — особенно стульчики для кормления, бустеры, игрушечные кухни и игровая еда — настоящие очаги хамеца. Убирайте вместе с детьми и превратите это в обучающий момент.",
        },
      },
      {
        id: "2-10",
        phase: 2,
        title: { en: "Check couch and sofa cushions", ru: "Проверить подушки дивана" },
        explanation: {
          en: "Remove all cushions and vacuum every crease. The couch is second only to the car for hidden chametz crumbs.",
          ru: "Снимите все подушки и пропылесосьте каждую складку. Диван — второе по важности место после машины для скрытых крошек хамеца.",
        },
      },
    ],
  },
  {
    id: 3,
    title: { en: "1 Week Before", ru: "За 1 неделю" },
    when: { en: "March 18 – March 24", ru: "18–24 марта" },
    description: { en: "Kasher kitchen and final shopping", ru: "Кашеровка кухни и последние покупки" },
    startDaysOut: 14,
    endDaysOut: 7,
    tasks: [
      {
        id: "3-1",
        phase: 3,
        title: { en: "Kasher the kitchen counters", ru: "Кашеровать кухонные столешницы" },
        explanation: {
          en: "Stone/granite counters can be kashered by wiping, waiting 24 hours since chametz use, then pouring boiling water over them. Laminate counters are typically covered with foil or contact paper.",
          ru: "Каменные/гранитные столешницы кашеруют: протирают, выжидают 24 часа с момента последнего хамеца, затем обдают кипятком. Ламинированные столешницы обычно накрывают фольгой или самоклеящейся плёнкой.",
        },
      },
      {
        id: "3-2",
        phase: 3,
        title: { en: "Kasher the sink", ru: "Кашеровать раковину" },
        explanation: {
          en: "Stainless steel sinks: don't use for chametz for 24 hours, then pour boiling water over all surfaces (including strainer). Porcelain sinks require a liner or insert.",
          ru: "Нержавеющая раковина: не используйте для хамеца 24 часа, затем обдайте кипятком все поверхности (включая сетку). Для фарфоровых раковин нужна вставка или вкладыш.",
        },
      },
      {
        id: "3-3",
        phase: 3,
        title: { en: "Cover chametz cabinet space", ru: "Закрыть отведённое место для хамеца" },
        explanation: {
          en: "Designate a cabinet or area for remaining chametz (food to be used up or sold). Seal it with tape and consider marking it. This space becomes off-limits during Pesach.",
          ru: "Выделите шкаф или место для оставшегося хамеца (продукты для использования или продажи). Опечатайте его лентой и пометьте. На время Песаха это место становится запретным.",
        },
      },
      {
        id: "3-4",
        phase: 3,
        title: { en: "Do major Pesach grocery shopping", ru: "Сделать основные покупки для Песаха" },
        explanation: {
          en: "Buy: fresh produce, eggs, meat, fish, dairy (if needed), potatoes, KFP oils, fresh herbs for karpas and bitter herbs. Fresh unprocessed items don't require KFP certification.",
          ru: "Купите: свежие овощи и фрукты, яйца, мясо, рыбу, молочное (при необходимости), картофель, масла с маркировкой КФП, свежую зелень для карпаса и горьких трав. Свежие необработанные продукты не требуют сертификата КФП.",
        },
      },
      {
        id: "3-5",
        phase: 3,
        title: { en: "Buy horseradish for maror", ru: "Купить хрен для марора" },
        explanation: {
          en: "Fresh horseradish root is traditional and most potent. Grate it yourself for the full effect. Pre-ground bottled horseradish should be KFP certified. You'll need it for the Seder plate and as a condiment.",
          ru: "Свежий корень хрена — традиционный и самый острый вариант. Натрите его самостоятельно для максимального эффекта. Готовый тёртый хрен в банках должен иметь маркировку КФП. Он нужен для тарелки Седера и как соус.",
        },
      },
      {
        id: "3-6",
        phase: 3,
        title: { en: "Check and count your Haggadahs", ru: "Проверить и пересчитать Агадот" },
        explanation: {
          en: "Count by family and guests. Decide if you want matching Haggadahs or a colorful mix. Order children's activity Haggadahs if desired. Maxwell House Haggadahs are free at many Jewish institutions.",
          ru: "Посчитайте по членам семьи и гостям. Решите, нужны ли одинаковые Агадот или разнообразные. При желании закажите детские Агадот с заданиями. В многих еврейских организациях Агадот Maxwell House раздают бесплатно.",
        },
      },
      {
        id: "3-7",
        phase: 3,
        title: { en: "Prepare Pesach tablecloth and table settings", ru: "Подготовить скатерть и сервировку стола для Песаха" },
        explanation: {
          en: "Set aside your Pesach tablecloth, white napkins, Seder plate, matzah cover, Elijah's cup, and any special Seder decorations. Iron the tablecloth now to avoid last-minute scrambling.",
          ru: "Приготовьте пасхальную скатерть, белые салфетки, тарелку Седера, покрывало для мацы, бокал Элиягу и украшения. Погладьте скатерть заранее, чтобы не делать это в последний момент.",
        },
      },
      {
        id: "3-8",
        phase: 3,
        title: { en: "Designate the Seder leader chair/pillow", ru: "Подготовить кресло и подушку для ведущего Седера" },
        explanation: {
          en: "The leader reclines on a pillow as a symbol of freedom. Prepare the special pillow, cushion, or chair. This is also a great time to assign roles for the Seder — who reads what, who leads which song.",
          ru: "Ведущий возлежит на подушке как символ свободы. Приготовьте специальную подушку или кресло. Также отличное время распределить роли на Седере — кто что читает, кто ведёт какую песню.",
        },
      },
      {
        id: "3-9",
        phase: 3,
        title: { en: "Prepare children's activity materials", ru: "Подготовить реквизит для детских заданий" },
        explanation: {
          en: "Print plagues props, Afikoman bag materials, plagues re-enactment costumes or puppets. Having these ready makes the Seder more engaging and memorable for children.",
          ru: "Распечатайте реквизит для казней, материалы для мешочка афикомана, костюмы или кукол для инсценировки казней. Всё подготовленное заранее сделает Седер более увлекательным и запоминающимся для детей.",
        },
      },
    ],
  },
  {
    id: 4,
    title: { en: "3–5 Days Before", ru: "За 3–5 дней" },
    when: { en: "March 26 – March 28", ru: "26–28 марта" },
    description: { en: "Cooking, selling chametz, and final prep", ru: "Готовка, продажа хамеца и финальная подготовка" },
    startDaysOut: 7,
    endDaysOut: 3,
    tasks: [
      {
        id: "4-1",
        phase: 4,
        title: { en: "Sell chametz (Mechiyas Chametz)", ru: "Продать хамец (Мехиас хамец)" },
        explanation: {
          en: "Authorize your rabbi to sell your chametz before Pesach. This is a halakhic transaction where chametz is legally sold and then repurchased after Pesach. Use your synagogue's form or an online service.",
          ru: "Уполномочьте раввина продать ваш хамец до Песаха. Это галахическая сделка, при которой хамец юридически продаётся и выкупается обратно после Песаха. Воспользуйтесь бланком синагоги или онлайн-сервисом.",
        },
      },
      {
        id: "4-2",
        phase: 4,
        title: { en: "Cook and freeze Seder dishes", ru: "Приготовить и заморозить блюда для Седера" },
        explanation: {
          en: "Brisket, chicken soup, and many kugels freeze beautifully. Cook them now and freeze in clearly labeled containers. This frees up the stove and oven for Erev Pesach day.",
          ru: "Грудинка, куриный суп и многие кугели отлично замораживаются. Приготовьте сейчас и уложите в чётко подписанные контейнеры. Это освободит плиту и духовку в день накануне Песаха.",
        },
      },
      {
        id: "4-3",
        phase: 4,
        title: { en: "Make charoset", ru: "Приготовить харосет" },
        explanation: {
          en: "Charoset keeps well refrigerated for 5–7 days. Make a large batch: Ashkenazi (apples, walnuts, wine, cinnamon) or Sephardic (dates, figs, nuts, spices). Double the recipe — people love it.",
          ru: "Харосет хранится в холодильнике 5–7 дней. Приготовьте большую порцию: ашкеназский (яблоки, грецкие орехи, вино, корица) или сефардский (финики, инжир, орехи, специи). Удвойте рецепт — его всегда съедают.",
        },
      },
      {
        id: "4-4",
        phase: 4,
        title: { en: "Prepare matzah ball mixture", ru: "Приготовить смесь для кнейдлах" },
        explanation: {
          en: "Mix the matzah ball batter and refrigerate (or make and freeze the balls). Cold batter makes firmer balls; hot water and resting time make them fluffy. Prepare soup stock now too.",
          ru: "Замесите тесто для кнейдлах и уберите в холодильник (или слепите шарики и заморозьте). Холодное тесто даёт более плотные шарики; горячая вода и время отдыха делают их пышными. Параллельно приготовьте бульон.",
        },
      },
      {
        id: "4-5",
        phase: 4,
        title: { en: "Make flourless chocolate cake or macaroons", ru: "Испечь шоколадный торт без муки или макаруны" },
        explanation: {
          en: "Flourless cake freezes perfectly — bake now, wrap tightly in plastic, and freeze. Coconut macaroons last a week at room temperature in an airtight container.",
          ru: "Торт без муки отлично замораживается — испеките сейчас, плотно заверните в плёнку и заморозьте. Кокосовые макаруны хранятся неделю при комнатной температуре в герметичном контейнере.",
        },
      },
      {
        id: "4-6",
        phase: 4,
        title: { en: "Prepare potato kugel", ru: "Приготовить картофельный кугель" },
        explanation: {
          en: "Kugel can be made ahead and refrigerated, then reheated covered with foil. Make extra — it disappears fast. The crispy edges are the best part; don't cover while reheating.",
          ru: "Кугель можно приготовить заранее и убрать в холодильник, затем разогреть, накрыв фольгой. Приготовьте побольше — он исчезает мгновенно. Хрустящие края — самое вкусное; при разогреве не накрывайте.",
        },
      },
      {
        id: "4-7",
        phase: 4,
        title: { en: "Use up chametz creatively", ru: "Творчески использовать остатки хамеца" },
        explanation: {
          en: "Cook meals using chametz items from your pantry: pasta dinners, sandwiches, pizza. Donate unopened chametz to food banks. Plan meals so no chametz remains by the morning of Erev Pesach.",
          ru: "Готовьте блюда из хамеца в кладовой: паста, бутерброды, пицца. Жертвуйте нераспечатанный хамец в банки продовольственной помощи. Планируйте меню так, чтобы к утру накануне Песаха не осталось хамеца.",
        },
      },
      {
        id: "4-8",
        phase: 4,
        title: { en: "Set up the Pesach kitchen", ru: "Организовать пасхальную кухню" },
        explanation: {
          en: "Bring out all Pesach pots, pans, dishes, and utensils. Cover surfaces if needed. Designate spots for everything. Having an organized Pesach kitchen makes cooking much easier.",
          ru: "Достаньте все пасхальные кастрюли, сковородки, посуду и приборы. При необходимости накройте поверхности. Определите место для каждого предмета. Организованная пасхальная кухня значительно упрощает готовку.",
        },
      },
      {
        id: "4-9",
        phase: 4,
        title: { en: "Prepare Seder plate elements", ru: "Подготовить компоненты тарелки Седера" },
        explanation: {
          en: "Order or roast the shank bone (or beet). Hard-boil and roast an egg (char it over an open flame or broil). Prep romaine lettuce for chazeret. Keep fresh parsley and salt water ready.",
          ru: "Закажите или поджарьте баранью кость (или свёклу). Сварите вкрутую и обожгите яйцо (над открытым огнём или в гриле). Подготовьте листья латука для хазерет. Держите наготове свежую петрушку и солёную воду.",
        },
      },
    ],
  },
  {
    id: 5,
    title: { en: "Erev Pesach — March 31", ru: "Эрев Песах — 31 марта" },
    when: { en: "The day before the Seder", ru: "День накануне Седера" },
    description: { en: "Bedikat chametz, burning, and final readiness", ru: "Бдикат хамец, сжигание и финальная готовность" },
    startDaysOut: 3,
    endDaysOut: 1,
    tasks: [
      {
        id: "5-1",
        phase: 5,
        title: { en: "Bedikat Chametz (Search for chametz) — night of March 30", ru: "Бдикат хамец (Поиск хамеца) — вечером 30 марта" },
        explanation: {
          en: "After nightfall on March 30, perform the candlelight search for chametz. Traditionally, 10 pieces of wrapped chametz are hidden for children to find. Recite the blessing before searching, then say the bitul (nullification) formula afterward.",
          ru: "После наступления темноты 30 марта проведите поиск хамеца при свечах. По традиции для детей прячут 10 кусочков завёрнутого хамеца. Перед поиском прочтите благословение, затем произнесите формулу битуль (аннулирования).",
        },
      },
      {
        id: "5-2",
        phase: 5,
        title: { en: "Fast of the Firstborns (Taanit Bechorot)", ru: "Пост первенцев (Таанит Бехорот)" },
        explanation: {
          en: "Firstborn sons traditionally fast on Erev Pesach. Many attend a siyum (completion of a Torah study) in the morning, which permits breaking the fast. Check your synagogue's schedule.",
          ru: "Первенцы-мужчины традиционно постятся накануне Песаха. Многие участвуют в сиюме (завершении изучения раздела Торы) утром, что позволяет прервать пост. Узнайте расписание в своей синагоге.",
        },
      },
      {
        id: "5-3",
        phase: 5,
        title: { en: "Biur Chametz — burn remaining chametz by 11 AM", ru: "Биур хамец — сжечь оставшийся хамец до 11:00" },
        explanation: {
          en: "All chametz must be burned (or otherwise destroyed) before the fifth halakhic hour on Erev Pesach — approximately 11 AM in most locations. Burn the chametz found during Bedikat Chametz plus any remaining chametz.",
          ru: "Весь хамец должен быть сожжён (или уничтожен иным способом) до пятого галахического часа накануне Песаха — примерно до 11:00 в большинстве мест. Сожгите хамец, найденный при бдике, и любые оставшиеся хамецные продукты.",
        },
      },
      {
        id: "5-4",
        phase: 5,
        title: { en: "Final chametz nullification (Kol Chamira)", ru: "Окончательное аннулирование хамеца (Коль хамира)" },
        explanation: {
          en: "After burning, recite Kol Chamira — a declaration nullifying all chametz in your possession, even if unknown. This nullification is recited both the night before (after the search) and the morning of Erev Pesach.",
          ru: "После сжигания прочтите Коль хамиру — объявление об аннулировании всего хамеца в вашем владении, даже неизвестного вам. Аннулирование произносится как вечером (после поиска), так и утром накануне Песаха.",
        },
      },
      {
        id: "5-5",
        phase: 5,
        title: { en: "Finish cooking all Seder foods", ru: "Завершить приготовление всех блюд Седера" },
        explanation: {
          en: "Complete any remaining cooking. Reheat frozen dishes. Make the soup and add matzah balls. Prepare salads and cold appetizers. Taste everything and adjust seasonings.",
          ru: "Доготовьте всё оставшееся. Разогрейте замороженные блюда. Приготовьте суп с кнейдлах. Сделайте салаты и холодные закуски. Попробуйте всё и скорректируйте приправы.",
        },
      },
      {
        id: "5-6",
        phase: 5,
        title: { en: "Set the Seder table", ru: "Накрыть стол для Седера" },
        explanation: {
          en: "Lay the tablecloth, place settings, Haggadahs at each seat, wine glasses (4 per person plus Elijah's cup), Seder plate in center, matzah cover with 3 matzahs, bowls of salt water, and the leader's special pillow.",
          ru: "Постелите скатерть, расставьте столовые приборы, положите Агадот на каждое место, бокалы для вина (4 на человека плюс бокал Элиягу), тарелку Седера в центре, покрывало для мацы с 3 листами мацы, миски с солёной водой и специальную подушку для ведущего.",
        },
      },
      {
        id: "5-7",
        phase: 5,
        title: { en: "Prepare Afikoman hiding spot", ru: "Подготовить место для афикомана" },
        explanation: {
          en: "Plan where you'll hide the Afikoman and what 'ransom' prizes are available. Stock small prizes or treats for children to claim in exchange for returning the Afikoman.",
          ru: "Решите, где спрячете афикоман и какой «выкуп» предложите детям. Припасите небольшие призы или угощения, которые дети получат в обмен на возвращённый афикоман.",
        },
      },
      {
        id: "5-8",
        phase: 5,
        title: { en: "Candle lighting and Yom Tov onset", ru: "Зажигание свечей и наступление Йом Това" },
        explanation: {
          en: "Candles are lit at sundown on April 1 (check your local time). Recite the Yom Tov candle blessing. The Seder begins after nightfall. Allow time for Maariv prayer if attending synagogue.",
          ru: "Свечи зажигают на закате 1 апреля (уточните местное время). Прочтите благословение на зажигание свечей Йом Това. Седер начинается с наступлением ночи. Оставьте время для вечерней молитвы, если идёте в синагогу.",
        },
      },
    ],
  },
  {
    id: 6,
    title: { en: "Seder Day — April 1", ru: "День Седера — 1 апреля" },
    when: { en: "The Seder begins at nightfall", ru: "Седер начинается с наступлением темноты" },
    description: { en: "The culmination — conducting your Seder with joy", ru: "Кульминация — проведите Седер с радостью" },
    startDaysOut: 1,
    endDaysOut: 0,
    tasks: [
      {
        id: "6-1",
        phase: 6,
        title: { en: "Morning: Burn any remaining chametz", ru: "Утром: сжечь оставшийся хамец" },
        explanation: {
          en: "If any chametz was missed, burn it by the deadline (check your city's exact time, usually around 11 AM). Once burned, the kitchen is fully Pesach.",
          ru: "Если какой-то хамец остался, сожгите его до установленного времени (уточните точное время для вашего города, обычно около 11:00). После сжигания кухня полностью готова к Песаху.",
        },
      },
      {
        id: "6-2",
        phase: 6,
        title: { en: "Prepare Seder plate fresh items", ru: "Подготовить свежие компоненты тарелки Седера" },
        explanation: {
          en: "Grate fresh horseradish if not done yet. Prepare fresh karpas (parsley sprigs). Fill small bowls with salt water for each guest. These items are best prepared close to the Seder.",
          ru: "Натрите свежий хрен, если ещё не сделали. Приготовьте свежий карпас (веточки петрушки). Наполните небольшие миски солёной водой для каждого гостя. Эти компоненты лучше готовить непосредственно перед Седером.",
        },
      },
      {
        id: "6-3",
        phase: 6,
        title: { en: "Chill the wine and grape juice", ru: "Охладить вино и виноградный сок" },
        explanation: {
          en: "Many prefer wine at room temperature, but grape juice is better chilled. Set out decanters. For the four cups, you'll need approximately 86ml (3 oz) minimum per cup per person.",
          ru: "Многие предпочитают вино комнатной температуры, но виноградный сок лучше охладить. Приготовьте графины. Для четырёх бокалов нужно не менее 86 мл (3 унции) на бокал на человека.",
        },
      },
      {
        id: "6-4",
        phase: 6,
        title: { en: "Rehearse the Seder order with children", ru: "Повторить с детьми порядок Седера" },
        explanation: {
          en: "Briefly go over what will happen at the Seder with younger children — the hand-washing, the dipping, the matzah, the plagues. Children who know what's coming are less anxious and more engaged.",
          ru: "Кратко расскажите младшим детям, что будет происходить на Седере — умывание рук, обмакивание, маца, казни. Дети, знающие, чего ожидать, чувствуют себя увереннее и участвуют активнее.",
        },
      },
      {
        id: "6-5",
        phase: 6,
        title: { en: "Assign Seder roles", ru: "Распределить роли на Седере" },
        explanation: {
          en: "Decide who will lead each section, who will ask the Four Questions, who will recite the Dayenu verses. Giving everyone a role keeps engagement high throughout the long Seder.",
          ru: "Решите, кто ведёт каждый раздел, кто задаёт Четыре вопроса, кто читает Даейну. Когда у каждого есть роль, участие на протяжении всего Седера остаётся высоким.",
        },
      },
      {
        id: "6-6",
        phase: 6,
        title: { en: "Prepare plagues props for children", ru: "Подготовить реквизит «казней» для детей" },
        explanation: {
          en: "Small plastic frogs, ping-pong balls (hail), sunglasses (darkness), stuffed animals (wild beasts) — props make the plagues come alive for kids. Set them aside for the right moment in the Haggadah.",
          ru: "Маленькие пластиковые лягушки, мячи для пинг-понга (град), солнечные очки (тьма), мягкие игрушки (звери) — реквизит оживляет казни для детей. Отложите их для нужного момента в Агаде.",
        },
      },
      {
        id: "6-7",
        phase: 6,
        title: { en: "Light Yom Tov candles at sundown", ru: "Зажечь свечи Йом Това на закате" },
        explanation: {
          en: "Light the candles from a pre-existing flame (matches lit before Shabbat/Yom Tov, or a pilot light). Recite the blessing: 'Asher kidshanu b'mitzvotav v'tzivanu l'hadlik ner shel Yom Tov.'",
          ru: "Зажигайте свечи от уже горящего огня (спичка, зажжённая до Шабата/Йом Това, или газовая горелка). Прочтите благословение: «Ашер кидшану бемицвотав вецивану леадлик нер шель Йом Тов».",
        },
      },
      {
        id: "6-8",
        phase: 6,
        title: { en: "Begin the Seder with joy!", ru: "Начать Седер с радостью!" },
        explanation: {
          en: "The Haggadah's 15 steps (Kadesh, Urchatz, Karpas...) guide the evening. Don't rush — the Seder is meant to linger over freedom. Engage questions, encourage discussion, embrace the chaos of children.",
          ru: "Пятнадцать шагов Агады (Кадеш, Урхац, Карпас...) ведут весь вечер. Не торопитесь — Седер создан для неспешного переживания свободы. Поощряйте вопросы, обсуждайте, радуйтесь детскому энтузиазму.",
        },
      },
    ],
  },
];

export const getAllTasks = (): ChecklistTask[] =>
  checklistPhases.flatMap(phase => phase.tasks);

export const getPhaseByDate = (): number => {
  const today = new Date();
  const sederDate = new Date('2026-04-01');
  const daysOut = Math.ceil((sederDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  if (daysOut > 28) return 1;
  if (daysOut > 14) return 2;
  if (daysOut > 7) return 3;
  if (daysOut > 3) return 4;
  if (daysOut > 1) return 5;
  return 6;
};
