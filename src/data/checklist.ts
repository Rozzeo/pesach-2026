export interface ChecklistTask {
  id: string;
  phase: number;
  title: string;
  explanation: string;
  category?: string;
}

export interface ChecklistPhase {
  id: number;
  title: string;
  when: string;
  description: string;
  startDaysOut: number;
  endDaysOut: number;
  tasks: ChecklistTask[];
}

export const checklistPhases: ChecklistPhase[] = [
  {
    id: 1,
    title: "4+ Weeks Before",
    when: "Now through March 3",
    description: "Strategic planning and early orders",
    startDaysOut: 999,
    endDaysOut: 28,
    tasks: [
      {
        id: "1-1",
        phase: 1,
        title: "Order shmurah matzah",
        explanation: "Hand-made shmurah matzah sells out early. Order from your local bakery or online source. Plan 1 lb per 4–6 adults for the Seder; more if you eat matzah all week.",
      },
      {
        id: "1-2",
        phase: 1,
        title: "Plan your guest list",
        explanation: "Confirm who's coming for the Seder. Consider dietary restrictions (vegan, nut allergies, gluten-sensitive guests who may need rice or potato-based alternatives in Sephardic style).",
      },
      {
        id: "1-3",
        phase: 1,
        title: "Stock up on wine and grape juice",
        explanation: "Each person drinks four cups. Plan roughly one 750ml bottle per 2 adults. Make sure all wine/grape juice is certified Kosher for Passover (KFP).",
      },
      {
        id: "1-4",
        phase: 1,
        title: "Source your Haggadahs",
        explanation: "Count your guests and ensure you have enough Haggadahs. Consider family-friendly illustrated versions for children. Many beautiful free PDFs are also printable.",
      },
      {
        id: "1-5",
        phase: 1,
        title: "Plan your Seder menu",
        explanation: "Decide on all courses: appetizer, soup, main, sides, and dessert. Remember everything must be Kosher for Passover — no chametz (leavened grain products).",
      },
      {
        id: "1-6",
        phase: 1,
        title: "Buy heavy-duty aluminum foil",
        explanation: "Foil is essential for covering countertops, stovetop grates, and surfaces that can't be kashered. Buy several large rolls — you'll use more than you think. Heavy-duty or extra-wide rolls make covering easier.",
      },
      {
        id: "1-7",
        phase: 1,
        title: "Arrange sleeping accommodations for guests",
        explanation: "If hosting out-of-town guests, confirm sleeping arrangements, towels, and any special needs early so nothing is rushed.",
      },
      {
        id: "1-8",
        phase: 1,
        title: "Review chametz-selling process with your rabbi",
        explanation: "Chametz you won't use or can't dispose of before Pesach can be halakhically 'sold' to a non-Jew. Contact your rabbi or use a reputable online mechiyas chametz service.",
      },
      {
        id: "1-9",
        phase: 1,
        title: "Buy or prepare Seder plate items",
        explanation: "The Seder plate needs: shank bone (or beet for vegetarians), roasted egg, bitter herbs (horseradish/romaine), charoset, karpas (parsley/celery), and chazeret (additional bitter herb).",
      },
    ],
  },
  {
    id: 2,
    title: "2–3 Weeks Before",
    when: "March 4 – March 17",
    description: "Deep cleaning and kitchen preparation",
    startDaysOut: 28,
    endDaysOut: 14,
    tasks: [
      {
        id: "2-1",
        phase: 2,
        title: "Deep-clean the kitchen",
        explanation: "The goal is removing all chametz crumbs, not just tidying. Remove everything from cabinets and clean shelves. Pay special attention to corners, hinges, and rubber seals.",
      },
      {
        id: "2-2",
        phase: 2,
        title: "Clean the refrigerator and freezer",
        explanation: "Empty completely, remove drawers and shelves, wash with warm soapy water. Don't forget the rubber door gaskets where crumbs hide. Clean freezer coils and drip tray.",
      },
      {
        id: "2-3",
        phase: 2,
        title: "Clean the oven",
        explanation: "Run the self-clean cycle or scrub thoroughly. For kashering, the oven will need to reach its maximum temperature after cleaning (libun kal).",
      },
      {
        id: "2-4",
        phase: 2,
        title: "Clean the dishwasher",
        explanation: "Remove and clean the filter, wipe the door gasket, run an empty hot cycle. Check your rabbi's guidance on kashering a dishwasher — many require 24 hours unused before running a full hot cycle.",
      },
      {
        id: "2-5",
        phase: 2,
        title: "Clean your car",
        explanation: "Check under seats, in seat creases, cup holders, and door pockets for crackers, cookies, bread crumbs. Vacuum thoroughly. The car is a common chametz hotspot.",
      },
      {
        id: "2-6",
        phase: 2,
        title: "Clean bags, backpacks, and purses",
        explanation: "Empty and shake out all bags. Check every pocket — granola bars, cereal, cracker wrappers. School backpacks especially need thorough attention.",
      },
      {
        id: "2-7",
        phase: 2,
        title: "Sort and organize Pesach dishes",
        explanation: "Locate your Pesach dishes, pots, and cutlery. Wash and inspect them. If you don't have a full set, decide what needs to be purchased or what chametz items can be kashered.",
      },
      {
        id: "2-8",
        phase: 2,
        title: "Kasher or purchase new pots and pans",
        explanation: "Metal pots used for chametz can be kashered by hag'alah (immersion in boiling water). Glass — consult your rabbi. Check that all utensils are either kashered or dedicated Pesach items.",
      },
      {
        id: "2-9",
        phase: 2,
        title: "Clean children's rooms and play areas",
        explanation: "Children's rooms — especially high chairs, booster seats, toy kitchens, and play food — are notorious chametz zones. Clean with the kids and make it a teaching moment.",
      },
      {
        id: "2-10",
        phase: 2,
        title: "Check couch and sofa cushions",
        explanation: "Remove all cushions and vacuum every crease. The couch is second only to the car for hidden chametz crumbs.",
      },
    ],
  },
  {
    id: 3,
    title: "1 Week Before",
    when: "March 18 – March 24",
    description: "Kasher kitchen and final shopping",
    startDaysOut: 14,
    endDaysOut: 7,
    tasks: [
      {
        id: "3-1",
        phase: 3,
        title: "Kasher the kitchen counters",
        explanation: "Stone/granite counters can be kashered by wiping, waiting 24 hours since chametz use, then pouring boiling water over them. Laminate counters are typically covered with foil or contact paper.",
      },
      {
        id: "3-2",
        phase: 3,
        title: "Kasher the sink",
        explanation: "Stainless steel sinks: don't use for chametz for 24 hours, then pour boiling water over all surfaces (including strainer). Porcelain sinks require a liner or insert.",
      },
      {
        id: "3-3",
        phase: 3,
        title: "Cover chametz cabinet space",
        explanation: "Designate a cabinet or area for remaining chametz (food to be used up or sold). Seal it with tape and consider marking it. This space becomes off-limits during Pesach.",
      },
      {
        id: "3-4",
        phase: 3,
        title: "Do major Pesach grocery shopping",
        explanation: "Buy: fresh produce, eggs, meat, fish, dairy (if needed), potatoes, KFP oils, fresh herbs for karpas and bitter herbs. Fresh unprocessed items don't require KFP certification.",
      },
      {
        id: "3-5",
        phase: 3,
        title: "Buy horseradish for maror",
        explanation: "Fresh horseradish root is traditional and most potent. Grate it yourself for the full effect. Pre-ground bottled horseradish should be KFP certified. You'll need it for the Seder plate and as a condiment.",
      },
      {
        id: "3-6",
        phase: 3,
        title: "Check and count your Haggadahs",
        explanation: "Count by family and guests. Decide if you want matching Haggadahs or a colorful mix. Order children's activity Haggadahs if desired. Maxwell House Haggadahs are free at many Jewish institutions.",
      },
      {
        id: "3-7",
        phase: 3,
        title: "Prepare Pesach tablecloth and table settings",
        explanation: "Set aside your Pesach tablecloth, white napkins, Seder plate, matzah cover, Elijah's cup, and any special Seder decorations. Iron the tablecloth now to avoid last-minute scrambling.",
      },
      {
        id: "3-8",
        phase: 3,
        title: "Designate the Seder leader chair/pillow",
        explanation: "The leader reclines on a pillow as a symbol of freedom. Prepare the special pillow, cushion, or chair. This is also a great time to assign roles for the Seder — who reads what, who leads which song.",
      },
      {
        id: "3-9",
        phase: 3,
        title: "Prepare children's activity materials",
        explanation: "Print plagues props, Afikoman bag materials, plagues re-enactment costumes or puppets. Having these ready makes the Seder more engaging and memorable for children.",
      },
    ],
  },
  {
    id: 4,
    title: "3–5 Days Before",
    when: "March 26 – March 28",
    description: "Cooking, selling chametz, and final prep",
    startDaysOut: 7,
    endDaysOut: 3,
    tasks: [
      {
        id: "4-1",
        phase: 4,
        title: "Sell chametz (Mechiyas Chametz)",
        explanation: "Authorize your rabbi to sell your chametz before Pesach. This is a halakhic transaction where chametz is legally sold and then repurchased after Pesach. Use your synagogue's form or an online service.",
      },
      {
        id: "4-2",
        phase: 4,
        title: "Cook and freeze Seder dishes",
        explanation: "Brisket, chicken soup, and many kugels freeze beautifully. Cook them now and freeze in clearly labeled containers. This frees up the stove and oven for Erev Pesach day.",
      },
      {
        id: "4-3",
        phase: 4,
        title: "Make charoset",
        explanation: "Charoset keeps well refrigerated for 5–7 days. Make a large batch: Ashkenazi (apples, walnuts, wine, cinnamon) or Sephardic (dates, figs, nuts, spices). Double the recipe — people love it.",
      },
      {
        id: "4-4",
        phase: 4,
        title: "Prepare matzah ball mixture",
        explanation: "Mix the matzah ball batter and refrigerate (or make and freeze the balls). Cold batter makes firmer balls; hot water and resting time make them fluffy. Prepare soup stock now too.",
      },
      {
        id: "4-5",
        phase: 4,
        title: "Make flourless chocolate cake or macaroons",
        explanation: "Flourless cake freezes perfectly — bake now, wrap tightly in plastic, and freeze. Coconut macaroons last a week at room temperature in an airtight container.",
      },
      {
        id: "4-6",
        phase: 4,
        title: "Prepare potato kugel",
        explanation: "Kugel can be made ahead and refrigerated, then reheated covered with foil. Make extra — it disappears fast. The crispy edges are the best part; don't cover while reheating.",
      },
      {
        id: "4-7",
        phase: 4,
        title: "Use up chametz creatively",
        explanation: "Cook meals using chametz items from your pantry: pasta dinners, sandwiches, pizza. Donate unopened chametz to food banks. Plan meals so no chametz remains by the morning of Erev Pesach.",
      },
      {
        id: "4-8",
        phase: 4,
        title: "Set up the Pesach kitchen",
        explanation: "Bring out all Pesach pots, pans, dishes, and utensils. Cover surfaces if needed. Designate spots for everything. Having an organized Pesach kitchen makes cooking much easier.",
      },
      {
        id: "4-9",
        phase: 4,
        title: "Prepare Seder plate elements",
        explanation: "Order or roast the shank bone (or beet). Hard-boil and roast an egg (char it over an open flame or broil). Prep romaine lettuce for chazeret. Keep fresh parsley and salt water ready.",
      },
    ],
  },
  {
    id: 5,
    title: "Erev Pesach — March 31",
    when: "The day before the Seder",
    description: "Bedikat chametz, burning, and final readiness",
    startDaysOut: 3,
    endDaysOut: 1,
    tasks: [
      {
        id: "5-1",
        phase: 5,
        title: "Bedikat Chametz (Search for chametz) — night of March 30",
        explanation: "After nightfall on March 30, perform the candlelight search for chametz. Traditionally, 10 pieces of wrapped chametz are hidden for children to find. Recite the blessing before searching, then say the bitul (nullification) formula afterward.",
      },
      {
        id: "5-2",
        phase: 5,
        title: "Fast of the Firstborns (Taanit Bechorot)",
        explanation: "Firstborn sons traditionally fast on Erev Pesach. Many attend a siyum (completion of a Torah study) in the morning, which permits breaking the fast. Check your synagogue's schedule.",
      },
      {
        id: "5-3",
        phase: 5,
        title: "Biur Chametz — burn remaining chametz by 11 AM",
        explanation: "All chametz must be burned (or otherwise destroyed) before the fifth halakhic hour on Erev Pesach — approximately 11 AM in most locations. Burn the chametz found during Bedikat Chametz plus any remaining chametz.",
      },
      {
        id: "5-4",
        phase: 5,
        title: "Final chametz nullification (Kol Chamira)",
        explanation: "After burning, recite Kol Chamira — a declaration nullifying all chametz in your possession, even if unknown. This nullification is recited both the night before (after the search) and the morning of Erev Pesach.",
      },
      {
        id: "5-5",
        phase: 5,
        title: "Finish cooking all Seder foods",
        explanation: "Complete any remaining cooking. Reheat frozen dishes. Make the soup and add matzah balls. Prepare salads and cold appetizers. Taste everything and adjust seasonings.",
      },
      {
        id: "5-6",
        phase: 5,
        title: "Set the Seder table",
        explanation: "Lay the tablecloth, place settings, Haggadahs at each seat, wine glasses (4 per person plus Elijah's cup), Seder plate in center, matzah cover with 3 matzahs, bowls of salt water, and the leader's special pillow.",
      },
      {
        id: "5-7",
        phase: 5,
        title: "Prepare Afikoman hiding spot",
        explanation: "Plan where you'll hide the Afikoman and what 'ransom' prizes are available. Stock small prizes or treats for children to claim in exchange for returning the Afikoman.",
      },
      {
        id: "5-8",
        phase: 5,
        title: "Candle lighting and Yom Tov onset",
        explanation: "Candles are lit at sundown on April 1 (check your local time). Recite the Yom Tov candle blessing. The Seder begins after nightfall. Allow time for Maariv prayer if attending synagogue.",
      },
    ],
  },
  {
    id: 6,
    title: "Seder Day — April 1",
    when: "The Seder begins at nightfall",
    description: "The culmination — conducting your Seder with joy",
    startDaysOut: 1,
    endDaysOut: 0,
    tasks: [
      {
        id: "6-1",
        phase: 6,
        title: "Morning: Burn any remaining chametz",
        explanation: "If any chametz was missed, burn it by the deadline (check your city's exact time, usually around 11 AM). Once burned, the kitchen is fully Pesach.",
      },
      {
        id: "6-2",
        phase: 6,
        title: "Prepare Seder plate fresh items",
        explanation: "Grate fresh horseradish if not done yet. Prepare fresh karpas (parsley sprigs). Fill small bowls with salt water for each guest. These items are best prepared close to the Seder.",
      },
      {
        id: "6-3",
        phase: 6,
        title: "Chill the wine and grape juice",
        explanation: "Many prefer wine at room temperature, but grape juice is better chilled. Set out decanters. For the four cups, you'll need approximately 86ml (3 oz) minimum per cup per person.",
      },
      {
        id: "6-4",
        phase: 6,
        title: "Rehearse the Seder order with children",
        explanation: "Briefly go over what will happen at the Seder with younger children — the hand-washing, the dipping, the matzah, the plagues. Children who know what's coming are less anxious and more engaged.",
      },
      {
        id: "6-5",
        phase: 6,
        title: "Assign Seder roles",
        explanation: "Decide who will lead each section, who will ask the Four Questions, who will recite the Dayenu verses. Giving everyone a role keeps engagement high throughout the long Seder.",
      },
      {
        id: "6-6",
        phase: 6,
        title: "Prepare plagues props for children",
        explanation: "Small plastic frogs, ping-pong balls (hail), sunglasses (darkness), stuffed animals (wild beasts) — props make the plagues come alive for kids. Set them aside for the right moment in the Haggadah.",
      },
      {
        id: "6-7",
        phase: 6,
        title: "Light Yom Tov candles at sundown",
        explanation: "Light the candles from a pre-existing flame (matches lit before Shabbat/Yom Tov, or a pilot light). Recite the blessing: 'Asher kidshanu b'mitzvotav v'tzivanu l'hadlik ner shel Yom Tov.'",
      },
      {
        id: "6-8",
        phase: 6,
        title: "Begin the Seder with joy!",
        explanation: "The Haggadah's 15 steps (Kadesh, Urchatz, Karpas...) guide the evening. Don't rush — the Seder is meant to linger over freedom. Engage questions, encourage discussion, embrace the chaos of children.",
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
