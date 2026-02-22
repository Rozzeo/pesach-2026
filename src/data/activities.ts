export interface Activity {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  ageRange: string;
  duration: string;
  artifact: string;
  materials: string[];
  overview: string;
  steps: {
    phase: string;
    content: string;
  }[];
  parentTips: string;
  scienceNote?: string;
}

export const activities: Activity[] = [
  {
    id: 'parting-sea',
    title: 'Parting the Sea',
    subtitle: 'Surface Tension and Soap Magic',
    type: 'Water Experiment',
    ageRange: '4–10',
    duration: '15 min',
    artifact: 'A hand-drawn "Yam Suf" (Red Sea) map with your experiment annotated',
    materials: [
      'A large shallow dish or baking pan',
      'Water',
      'Ground black pepper (lots of it)',
      'One drop of dish soap',
      'Blue food coloring (optional)',
      'Paper and crayons for the map',
    ],
    overview: 'How did the sea part? This classic experiment uses surface tension to make pepper "part like the sea" — and leads to a conversation about scientific wonder vs. miraculous wonder.',
    steps: [
      {
        phase: 'The Question',
        content: 'Ask: "If you could part the sea, how would you do it? What would you need?" Listen to all ideas without judgment. Then: "Scientists have a concept called surface tension — water molecules holding hands at the surface. What do you think happens if you break those connections?"',
      },
      {
        phase: 'The Story',
        content: 'The Israelites stood at the edge of the Red Sea (Yam Suf — Sea of Reeds). The Egyptian army was behind them. Nowhere to go. Then Moses stretched out his staff, and a great wind blew all night — and the sea parted. They walked through on dry land. When the Egyptians followed, the waters returned. It\'s the most dramatic moment in the Exodus.',
      },
      {
        phase: 'The Science',
        content: 'Water molecules love each other — they\'re attracted to each other and create a kind of elastic film at the water\'s surface. This is surface tension. Pepper is light enough to sit on this film. Soap molecules are attracted to both water AND oil/fat — when soap touches the water surface, it breaks the surface tension and rushes outward, dragging the pepper with it. The pepper "parts."',
      },
      {
        phase: 'The Experiment',
        content: '1. Fill the dish with water. Add blue food coloring if you like.\n2. Generously sprinkle black pepper over the entire surface (this is your "sea of Israelites").\n3. Place your fingertip in the center. Nothing happens!\n4. Touch one finger to the dish soap, then touch the CENTER of the water.\n5. WHOOSH — the pepper flies to the edges! The sea parts!\n6. Try it again. Why doesn\'t it work as dramatically the second time? (Soap has spread through the water.)',
      },
      {
        phase: 'The Artifact',
        content: 'Draw a map of the Exodus route together: Egypt → Desert → Yam Suf → Sinai. Mark where the sea parted. Write one question each person has about how the parting might have worked. These become your "family theology discussion" for the Seder table.',
      },
    ],
    parentTips: 'Let children predict before each step: "What will happen if...?" This is the scientific method in miniature. Don\'t rush to explain — let them wonder first.',
    scienceNote: 'A Jewish text connects this to wind: "And the Lord drove the sea back by a strong east wind all that night." Geologists have actually modeled this — a sustained 60+ mph wind could temporarily expose the shallow Reed Sea floor. Science and faith can coexist.',
  },
  {
    id: 'ten-plagues-lab',
    title: '10 Plagues Science Lab',
    subtitle: 'Four Mini-Experiments for Four Plagues',
    type: 'Science Lab',
    ageRange: '7–14',
    duration: '1–2 hours',
    artifact: 'A "Plagues Lab Notebook" with drawings and observations',
    materials: [
      'Red food coloring and a bowl of water (Blood)',
      'Rubber frogs or green ping-pong balls (Frogs)',
      'A flashlight and a box (Darkness)',
      'Ping-pong balls or ice cubes (Hail)',
      'A lab notebook (blank paper folded into a booklet)',
      'Pens and colored pencils',
    ],
    overview: 'The 10 plagues are among the most vivid stories in world literature. This activity examines four plagues through a scientific lens: what natural events could produce these phenomena? Children document observations like real scientists.',
    steps: [
      {
        phase: 'Setup: The Lab Notebook',
        content: 'Fold paper into a little booklet. Title it: "[Child\'s Name]\'s Plagues Lab." Each experiment gets its own page with: Plague Name, My Hypothesis (what I think will happen), Observation (what actually happened), One Question I Still Have.',
      },
      {
        phase: 'Experiment 1: Blood (Dam)',
        content: 'Fill a clear bowl with water. Slowly add red food coloring to one side. Watch it spread — or not spread, depending on how you add it.\nScience question: "Some scientists think the Nile turned red from toxic algae called Karenia brevis — a red tide. What makes water turn red? What happens to fish when the water changes?" Observe how food coloring disperses. Draw it in your notebook.',
      },
      {
        phase: 'Experiment 2: Darkness (Choshech)',
        content: 'Set up a box with a small hole. Let light come in through the hole. Cover the hole — complete darkness. Then: open a flashlight and gradually shine it in.\nScience question: "A solar eclipse? A sandstorm? The Hebrew says the darkness was so thick it could be felt — what kind of darkness is that? What\'s the darkest place you\'ve ever been?" Measure how long it takes your eyes to adjust. Record in notebook.',
      },
      {
        phase: 'Experiment 3: Frogs (Tzfardea)',
        content: 'Scatter rubber frogs or ping-pong balls around the room — everywhere: shoes, couch, refrigerator, pockets. Have children find them all.\nScience question: "Scientists think a drought followed by the Nile flooding drove frogs out of the water in massive numbers. What happens to animals when their habitat is disturbed? Where would you go if your home suddenly flooded?" Count how many frogs you hid vs. found. Were any missed?',
      },
      {
        phase: 'Experiment 4: Hail (Barad)',
        content: 'Drop ice cubes or ping-pong balls from various heights onto paper. The higher the drop, the bigger the dent.\nScience question: "The Torah says fire was inside the hail — some scholars say this was ball lightning. What is ball lightning? How does hail form in the sky? How big can hailstones get? (Record: 8 inches / 20 cm in South Dakota, 2010.)" Measure the dents. Which height caused the most damage?',
      },
      {
        phase: 'Synthesis: The Lab Report',
        content: 'After all experiments: "If you were an ancient Egyptian scientist, how would you explain what was happening? If you were an Israelite prophet, how would you explain it? Can both explanations be true at the same time?"',
      },
    ],
    parentTips: 'The goal is not to "debunk" the plagues but to encourage multiple ways of knowing. Children can hold scientific curiosity and religious meaning simultaneously — in fact, the best scientists often do.',
    scienceNote: 'Actual academic research: Dr. John Marr and Curtis Malloy published a scientific model (1996) where all 10 plagues follow as a cascade from one initial event — a toxic algae bloom in the Nile. Each plague triggers the next in ecological sequence.',
  },
  {
    id: 'exodus-map',
    title: 'Exodus Map Quest',
    subtitle: 'Cartography as Family Memory',
    type: 'Creative Craft',
    ageRange: '6–12',
    duration: '45 min',
    artifact: 'A large illustrated wall map of the Exodus route',
    materials: [
      'Large sheet of paper or poster board (at least 18"x24")',
      'Colored pencils, markers, or watercolors',
      'An atlas or printed map of the Middle East/North Africa',
      'Stickers, stamps, or small illustrated symbols',
      'Reference: a Haggadah with the Exodus route',
    ],
    overview: 'Where did the Israelites actually walk? How far was it? How long would it take today? This project makes the Exodus geographically real — turning abstract history into a physical journey children can trace with their fingers.',
    steps: [
      {
        phase: 'The Question',
        content: 'Spread a modern map of Egypt, Sinai, and Israel on the table. Ask: "The Israelites left Egypt and wandered for 40 years before reaching Israel. Look at the map — could you walk that distance? How long do you think it really took to WALK from Egypt to Israel without roads or cars?"',
      },
      {
        phase: 'Research Together',
        content: 'Look up key locations: Ancient Egypt (today\'s Cairo/Giza area), the land of Goshen (northeast Nile Delta), the Red Sea or Reed Sea crossing (several scholarly theories on location), Mount Sinai (traditional location: southern Sinai Peninsula), and Canaan (today\'s Israel).',
      },
      {
        phase: 'Draw the Map',
        content: 'On the large paper, sketch the outline of Egypt, Sinai Peninsula, Red Sea, and Canaan. This doesn\'t need to be precise — it\'s YOUR family\'s interpretation. Add:\n• The Nile River (blue)\n• Goshen (where the Israelites lived — mark with a house symbol)\n• The Exodus route (dotted line with arrows)\n• The Red Sea crossing point (dramatic wavy lines)\n• Mount Sinai (draw a mountain)\n• The Promised Land (Canaan) destination',
      },
      {
        phase: 'Populate the Map',
        content: 'Add illustrated symbols: pyramids in Egypt, frogs near the Nile (plagues!), a burning bush at Sinai, a harp for David\'s later kingdom. Draw the cloud pillar that led the Israelites by day and the fire pillar by night. Add a compass rose.',
      },
      {
        phase: 'The Distance Calculation',
        content: 'Look up the actual distance from Cairo to Jerusalem: about 550 km / 340 miles. If someone walks 20 km per day, how many days is that? (27 days!) Why did it take 40 years? Discuss: the 40 years were about transformation, not distance. It takes time to go from "slave thinking" to "free thinking."',
      },
      {
        phase: 'Hang the Map',
        content: 'Hang the finished map in your home before the Seder. During the Seder, point to key locations as you read the Haggadah. The map becomes a year-round conversation piece.',
      },
    ],
    parentTips: 'Resist the urge to correct imprecise geography. The meaning is in the making. Let children draw the route as they imagine it — some things in Exodus are genuinely uncertain, and that\'s part of the conversation.',
  },
  {
    id: 'afikoman-detective',
    title: 'Afikoman Detective Agency',
    subtitle: 'Design Your Own Family Quest',
    type: 'Family Game Design',
    ageRange: '4–12',
    duration: 'Evening activity (clue design: 30 min; quest: varies)',
    artifact: 'A set of handwritten clue cards in a treasure envelope',
    materials: [
      'Index cards or small paper cards',
      'Pens and markers',
      'A small envelope or pouch for clues',
      'The Afikoman (broken middle matzah)',
      'Prizes (stickers, small toys, chocolate coins)',
      'Optional: wax seal for dramatic effect',
    ],
    overview: 'Instead of simply hiding the Afikoman, children design a multi-clue treasure hunt — then adults solve IT. This flips the traditional dynamic: children become the creators and adults become the puzzlers.',
    steps: [
      {
        phase: 'The Concept',
        content: 'Explain the twist: "This year, YOU are hiding the Afikoman AND creating the clue hunt. The grown-ups will have to solve your riddles to find it. You are the Afikoman Detective Agency — and you get to set the rules."',
      },
      {
        phase: 'Write the Clues',
        content: 'Children write 4–6 location clues leading to the Afikoman. Each clue hints at the NEXT location. Clue style ideas:\n• Rhyme: "Where do we go when our hands need to be clean? Find me where good hygiene is seen."\n• Riddle: "I am tall but I sit. I hold your coat when you forget. What am I?" (Coat rack)\n• Drawing: A picture of the refrigerator handle\n• Hebrew word: "Shulchan" (table) — look it up in the Haggadah',
      },
      {
        phase: 'Hide Everything',
        content: 'Place each clue in sequence at the location it describes. Hide the Afikoman with the final clue. Put the FIRST clue in a dramatic envelope marked "From the Afikoman Detective Agency."',
      },
      {
        phase: 'The Hunt Begins',
        content: 'After the meal, produce the envelope with ceremony. Adults open it and read the first clue aloud. Children watch and suppress giggles. Adults search for each clue in sequence, consulting children for "warm/cold" hints.',
      },
      {
        phase: 'The Negotiation',
        content: 'When adults find the Afikoman, they must negotiate the ransom — but this year, the children SET the terms. What do they want? (Dessert first? An extra bedtime story? A hug from every person?) Negotiate seriously.',
      },
      {
        phase: 'The Artifact',
        content: 'After Pesach, save the clue cards. Write the date on the envelope. Add them to a "Pesach box" each year — a growing archive of your family\'s Seder memories.',
      },
    ],
    parentTips: 'Let younger children dictate clues to older siblings or parents to write. Even scribbled drawings are valid clues. The detective role gives children enormous pride and agency.',
  },
  {
    id: 'build-pyramid',
    title: 'Build the Pyramid',
    subtitle: 'Engineering Under Constraints',
    type: 'Engineering Challenge',
    ageRange: '6–14',
    duration: '30 min',
    artifact: 'A standing pyramid — photograph it for the family record',
    materials: [
      'Sugar cubes (the "bricks")',
      'Regular toothpicks (the "tools")',
      'Marshmallows (the "mortar")',
      'A flat surface',
      'A ruler',
      'Optional: sand (put sugar cubes in a tray of sand for extra challenge)',
    ],
    overview: 'The Israelites built with bricks and mortar. What does that actually mean structurally? Children discover the engineering principles of pyramids — why do pyramids not fall? — while connecting to the story of their ancestors.',
    steps: [
      {
        phase: 'The Question',
        content: 'Ask: "The Pyramid of Giza is 4,500 years old and still standing. Why doesn\'t it fall down? What shape do you think is the most stable for a building? A square? A triangle? A circle? Let\'s test your theory."',
      },
      {
        phase: 'The Challenge',
        content: 'Mission: Build the tallest freestanding structure you can using ONLY sugar cubes and marshmallows. You have 10 minutes. Then we\'ll discuss what worked and why.',
      },
      {
        phase: 'Round 1: Free Build',
        content: 'Children build any shape they choose. Time them. Measure height. Test stability: Can it survive a gentle table-tap? A book placed on top?',
      },
      {
        phase: 'Round 2: Pyramid Challenge',
        content: 'Now build specifically a pyramid shape — wider base, narrowing toward the top. Discuss: "The pyramid shape distributes weight outward and downward. The base has MORE surface area, so the weight per square inch is LESS." Test the pyramid against the Round 1 structure.',
      },
      {
        phase: 'The Human Connection',
        content: 'As you build: "The Torah says the Israelites built the store cities of Pithom and Raamses. Archaeologists have found these cities — real bricks with real straw mixed in, exactly as described. Some bricks even have no straw (like later in Exodus when Pharaoh cuts the straw ration). Physical evidence in the sand."',
      },
      {
        phase: 'The Engineering Debrief',
        content: 'After building: "Engineers who build things think about three forces: compression (pushing down), tension (pulling apart), and shear (sliding sideways). Which force threatens your pyramid most? How does the pyramid shape resist each force?" Older children can draw a force diagram.',
      },
    ],
    parentTips: 'The engineering debrief is optional — for many families, the building itself is enough. But older children (10+) often enjoy the vocabulary of forces. Use real engineering language: it shows respect for their intelligence.',
    scienceNote: 'Real pyramid engineering: the Great Pyramid\'s base is level to within 2.1 centimeters — this was achieved 4,500 years ago without modern instruments. How? Possibly by flooding the base and using water level as a reference. This is a worthy rabbit hole for curious kids.',
  },
  {
    id: 'four-questions-scientists',
    title: 'Four Questions for Scientists',
    subtitle: 'Building a Family Science Haggadah',
    type: 'Discussion & Writing',
    ageRange: '8+',
    duration: '30 min',
    artifact: 'A "Science Haggadah" — your family\'s book of Pesach questions and discoveries',
    materials: [
      'A blank booklet (stapled pages)',
      'Pens and colored pencils',
      'The Four Questions (Mah Nishtanah) for reference',
      'Curiosity',
    ],
    overview: 'The Four Questions (Mah Nishtanah) are the engine of the Seder — they teach that asking questions is holy. This activity creates your family\'s OWN four questions about the science of Passover, generating a document that grows year after year.',
    steps: [
      {
        phase: 'The Concept',
        content: 'Read the traditional Four Questions together (Mah Nishtanah). Discuss: "These questions have been asked for 2,000 years. But every generation has NEW questions. Scientists like Richard Feynman said that knowing the name of something is not the same as knowing it. What do we TRULY not know about Pesach?"',
      },
      {
        phase: 'Brainstorm: Our Questions',
        content: 'Each person writes down 3 genuine questions about anything in the Pesach story or practice:\n• Why does salt water taste like tears? (Chemistry: sodium chloride + taste receptors)\n• Why does the Haggadah say 600,000 Israelites left Egypt? Could that really be true? (Demographics, historical research)\n• Why does matzah get stale so fast? (The chemistry of starch retrogradation)\n• Could you REALLY part the sea? (Oceanography, historical models)\n• Why do we recline? What does it feel like in our bodies? (Physiology of posture and comfort)',
      },
      {
        phase: 'Choose the Best Four',
        content: 'Vote on the four most interesting questions as a family. These become YOUR Four Questions for this year.',
      },
      {
        phase: 'Research One Question',
        content: 'Pick one question to investigate NOW (using books or a device). Each person reads a different source and reports back. How do the sources agree? Disagree? What\'s still uncertain?',
      },
      {
        phase: 'Write the Science Haggadah',
        content: 'In your blank booklet, write:\nPage 1: Title ("The [Your Last Name] Science Haggadah, Pesach 5786")\nPage 2: The Traditional Four Questions\nPage 3: Our Four Questions for This Year\nPages 4–7: One question per page — what we know, what we don\'t know, and what we want to find out\nBack page: One thing each person LEARNED from the Seder this year',
      },
      {
        phase: 'The Artifact Lives On',
        content: 'Keep the Science Haggadah with your Pesach materials. Next year: read last year\'s questions and update them. Did you find answers? Have new questions emerged? This document becomes a record of your family\'s intellectual life across years.',
      },
    ],
    parentTips: 'The most important thing: treat children\'s questions with complete seriousness. "I don\'t know, let\'s find out together" is the best answer a parent can give. Curiosity is the gift we protect.',
  },
];
