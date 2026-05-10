export type ResourceType = "book" | "podcast";

export type Resource = {
  id: string;
  type: ResourceType;
  title: string;
  creator: string;
  blurb: string;
  stage: string;
  themes: string[];
  primaryLink: string;
  secondaryLink: string;
};

export type Stage = {
  id: string;
  title: string;
  focus: string;
  description: string;
  resources: string[];
  practices: string[];
  reflections: string[];
};

export const stages: Stage[] = [
  {
    id: "intellectual-awakening",
    title: "Intellectual Awakening",
    focus: "Move from surface success to deeper questions.",
    description: "Build the foundation of ideas and self-reflection.",
    resources: [
      "The Road to Character",
      "Man's Search for Meaning",
      "Select Ezra Klein Show episodes"
    ],
    practices: ["Daily journaling on \"What is a good life?\""],
    reflections: [
      "Where has surface success shaped your choices?",
      "What would a good life require of you this week?"
    ]
  },
  {
    id: "character-commitment",
    title: "Character & Commitment",
    focus: "Virtues, purpose, community over self.",
    description: "The moral turn: Brooks' second mountain.",
    resources: [
      "The Second Mountain",
      "Falling Upward",
      "From Strength to Strength"
    ],
    practices: ["Identify one \"eulogy virtue\" to cultivate this month."],
    reflections: [
      "What commitment is asking more of you than achievement does?",
      "Which virtue would your closest people most welcome in you?"
    ]
  },
  {
    id: "cultivating-presence",
    title: "Cultivating Presence",
    focus: "Mindfulness as prerequisite for truly seeing others.",
    description: "From mind to body and moment.",
    resources: [
      "The Power of Now",
      "Wherever You Go, There You Are",
      "Radical Acceptance",
      "Tara Brach",
      "10% Happier with Dan Harris"
    ],
    practices: [
      "10-minute daily presence meditation.",
      "\"One mindful conversation\" per day."
    ],
    reflections: [
      "What pulls you away from the person in front of you?",
      "Where did you notice your body during conversation today?"
    ]
  },
  {
    id: "active-listening-empathy",
    title: "Active Listening & Empathy",
    focus: "Techniques for deep listening without agenda.",
    description: "The craft of seeing.",
    resources: [
      "The Lost Art of Listening",
      "You're Not Listening",
      "Nonviolent Communication",
      "Emotional Intelligence"
    ],
    practices: [
      "\"Illuminator listening\" exercise: full presence, no interrupting, reflect back."
    ],
    reflections: [
      "When do you most often listen in order to reply?",
      "What changed when you reflected back before offering advice?"
    ]
  },
  {
    id: "becoming-an-illuminator",
    title: "Becoming an Illuminator",
    focus: "Apply everything; become the light for others.",
    description: "Live it and elevate others in community.",
    resources: [
      "How to Know a Person",
      "Daring Greatly",
      "The Art of Communicating",
      "Community discussions"
    ],
    practices: [
      "Host a small \"serious conversation\" gathering.",
      "Track acts of illumination weekly.",
      "Capstone: mentor someone or start a local circle."
    ],
    reflections: [
      "Who felt more seen because of your presence this week?",
      "What kind of circle would help others practice this path?"
    ]
  }
];

export const resources: Resource[] = [
  {
    id: "road-to-character",
    type: "book",
    title: "The Road to Character",
    creator: "David Brooks",
    blurb: "résumé vs. eulogy virtues.",
    stage: "Stage 1-2",
    themes: ["character", "head-to-heart"],
    primaryLink: "#",
    secondaryLink: "#"
  },
  {
    id: "second-mountain",
    type: "book",
    title: "The Second Mountain",
    creator: "David Brooks",
    blurb: "commitment, purpose, the moral life.",
    stage: "Stage 1-2",
    themes: ["commitment", "purpose"],
    primaryLink: "#",
    secondaryLink: "#"
  },
  {
    id: "falling-upward",
    type: "book",
    title: "Falling Upward",
    creator: "Richard Rohr",
    blurb: "second half of life, from ego to soul.",
    stage: "Stage 1-2",
    themes: ["ego-to-soul", "character"],
    primaryLink: "#",
    secondaryLink: "#"
  },
  {
    id: "from-strength-to-strength",
    type: "book",
    title: "From Strength to Strength",
    creator: "Arthur C. Brooks",
    blurb: "success to significance in later life.",
    stage: "Stage 1-2",
    themes: ["significance", "purpose"],
    primaryLink: "#",
    secondaryLink: "#"
  },
  {
    id: "mans-search-for-meaning",
    type: "book",
    title: "Man's Search for Meaning",
    creator: "Viktor Frankl",
    blurb: "finding purpose amid suffering.",
    stage: "Stage 1-2",
    themes: ["purpose", "suffering"],
    primaryLink: "#",
    secondaryLink: "#"
  },
  {
    id: "power-of-now",
    type: "book",
    title: "The Power of Now",
    creator: "Eckhart Tolle",
    blurb: "presence and self-awareness.",
    stage: "Stage 3",
    themes: ["presence", "self-awareness"],
    primaryLink: "#",
    secondaryLink: "#"
  },
  {
    id: "wherever-you-go",
    type: "book",
    title: "Wherever You Go, There You Are",
    creator: "Jon Kabat-Zinn",
    blurb: "mindfulness basics.",
    stage: "Stage 3",
    themes: ["mindfulness", "presence"],
    primaryLink: "#",
    secondaryLink: "#"
  },
  {
    id: "radical-acceptance",
    type: "book",
    title: "Radical Acceptance",
    creator: "Tara Brach",
    blurb: "presence and self-compassion.",
    stage: "Stage 3",
    themes: ["self-compassion", "presence"],
    primaryLink: "#",
    secondaryLink: "#"
  },
  {
    id: "how-to-know-a-person",
    type: "book",
    title: "How to Know a Person: The Art of Seeing Others Deeply and Being Deeply Seen",
    creator: "David Brooks",
    blurb: "core text on Illuminators vs. Diminishers.",
    stage: "Stage 4-5",
    themes: ["illuminating", "empathy"],
    primaryLink: "#",
    secondaryLink: "#"
  },
  {
    id: "lost-art-listening",
    type: "book",
    title: "The Lost Art of Listening",
    creator: "Michael P. Nichols",
    blurb: "active listening and empathy.",
    stage: "Stage 4-5",
    themes: ["listening", "empathy"],
    primaryLink: "#",
    secondaryLink: "#"
  },
  {
    id: "youre-not-listening",
    type: "book",
    title: "You're Not Listening: What You're Missing and Why It Matters",
    creator: "Kate Murphy",
    blurb: "what you're missing and why it matters.",
    stage: "Stage 4-5",
    themes: ["listening", "empathy"],
    primaryLink: "#",
    secondaryLink: "#"
  },
  {
    id: "nonviolent-communication",
    type: "book",
    title: "Nonviolent Communication",
    creator: "Marshall B. Rosenberg",
    blurb: "relational mastery through compassionate communication.",
    stage: "Stage 4-5",
    themes: ["communication", "empathy"],
    primaryLink: "#",
    secondaryLink: "#"
  },
  {
    id: "crucial-conversations",
    type: "book",
    title: "Crucial Conversations",
    creator: "Kerry Patterson et al.",
    blurb: "conversations that matter under pressure.",
    stage: "Stage 4-5",
    themes: ["communication", "listening"],
    primaryLink: "#",
    secondaryLink: "#"
  },
  {
    id: "win-friends",
    type: "book",
    title: "How to Win Friends and Influence People",
    creator: "Dale Carnegie",
    blurb: "timeless foundation.",
    stage: "Stage 4-5",
    themes: ["connection", "communication"],
    primaryLink: "#",
    secondaryLink: "#"
  },
  {
    id: "art-of-communicating",
    type: "book",
    title: "The Art of Communicating",
    creator: "Thich Nhat Hanh",
    blurb: "mindful communication.",
    stage: "Stage 4-5",
    themes: ["presence", "communication"],
    primaryLink: "#",
    secondaryLink: "#"
  },
  {
    id: "emotional-intelligence",
    type: "book",
    title: "Emotional Intelligence",
    creator: "Daniel Goleman",
    blurb: "emotional intelligence and connection.",
    stage: "Stage 4-5",
    themes: ["empathy", "self-awareness"],
    primaryLink: "#",
    secondaryLink: "#"
  },
  {
    id: "daring-greatly",
    type: "book",
    title: "Daring Greatly",
    creator: "Brene Brown",
    blurb: "vulnerability and connection.",
    stage: "Stage 4-5",
    themes: ["vulnerability", "connection"],
    primaryLink: "#",
    secondaryLink: "#"
  },
  {
    id: "zen-of-listening",
    type: "book",
    title: "The Zen of Listening",
    creator: "Rebecca Shafir",
    blurb: "mindful communication.",
    stage: "Stage 4-5",
    themes: ["listening", "presence"],
    primaryLink: "#",
    secondaryLink: "#"
  },
  {
    id: "listening-well",
    type: "book",
    title: "Listening Well",
    creator: "William R. Miller",
    blurb: "Bonus deeper read.",
    stage: "Bonus",
    themes: ["listening"],
    primaryLink: "#",
    secondaryLink: "#"
  },
  {
    id: "compassionate-connection",
    type: "book",
    title: "The Compassionate Connection",
    creator: "David Rakel",
    blurb: "Bonus deeper read.",
    stage: "Bonus",
    themes: ["compassion", "connection"],
    primaryLink: "#",
    secondaryLink: "#"
  },
  {
    id: "aom-social-skills",
    type: "podcast",
    title: "Art of Manliness: \"Social Skills as the Road to Character\"",
    creator: "with David Brooks",
    blurb: "Great on-ramp.",
    stage: "Brooks-centric",
    themes: ["brooks", "character"],
    primaryLink: "#",
    secondaryLink: "#"
  },
  {
    id: "recent-brooks-appearances",
    type: "podcast",
    title: "Any recent David Brooks appearances on The Ezra Klein Show, Unmistakable Creative, or Lemonada Media (\"How to Really Know Someone\")",
    creator: "David Brooks",
    blurb: "Brooks-centric episodes.",
    stage: "Brooks-centric",
    themes: ["brooks", "knowing"],
    primaryLink: "#",
    secondaryLink: "#"
  },
  {
    id: "ten-percent-happier",
    type: "podcast",
    title: "10% Happier with Dan Harris",
    creator: "Dan Harris",
    blurb: "practical, science-backed mindfulness.",
    stage: "Presence & Mindfulness",
    themes: ["mindfulness", "presence"],
    primaryLink: "#",
    secondaryLink: "#"
  },
  {
    id: "tara-brach",
    type: "podcast",
    title: "Tara Brach",
    creator: "Tara Brach",
    blurb: "guided meditations + talks on presence and self-compassion.",
    stage: "Presence & Mindfulness",
    themes: ["presence", "self-compassion"],
    primaryLink: "#",
    secondaryLink: "#"
  },
  {
    id: "way-out-is-in",
    type: "podcast",
    title: "The Way Out Is In",
    creator: "Plum Village / Thich Nhat Hanh lineage",
    blurb: "deep presence and compassion.",
    stage: "Presence & Mindfulness",
    themes: ["presence", "compassion"],
    primaryLink: "#",
    secondaryLink: "#"
  },
  {
    id: "metta-hour",
    type: "podcast",
    title: "Metta Hour with Sharon Salzberg",
    creator: "Sharon Salzberg",
    blurb: "loving-kindness and relational mindfulness.",
    stage: "Presence & Mindfulness",
    themes: ["loving-kindness", "mindfulness"],
    primaryLink: "#",
    secondaryLink: "#"
  },
  {
    id: "being-well",
    type: "podcast",
    title: "Being Well with Rick Hanson",
    creator: "Rick Hanson",
    blurb: "neuroscience of presence and compassion.",
    stage: "Presence & Mindfulness",
    themes: ["presence", "compassion"],
    primaryLink: "#",
    secondaryLink: "#"
  },
  {
    id: "on-being",
    type: "podcast",
    title: "On Being with Krista Tippett",
    creator: "Krista Tippett",
    blurb: "profound conversations on what it means to be human.",
    stage: "Listening, Empathy & Relational Growth",
    themes: ["conversation", "humanity"],
    primaryLink: "#",
    secondaryLink: "#"
  },
  {
    id: "hidden-brain",
    type: "podcast",
    title: "Hidden Brain",
    creator: "Hidden Brain",
    blurb: "psychology of connection and perception.",
    stage: "Listening, Empathy & Relational Growth",
    themes: ["connection", "perception"],
    primaryLink: "#",
    secondaryLink: "#"
  },
  {
    id: "where-should-we-begin",
    type: "podcast",
    title: "Episodes from Where Should We Begin? with Esther Perel",
    creator: "Esther Perel",
    blurb: "real conversations that model deep listening.",
    stage: "Listening, Empathy & Relational Growth",
    themes: ["deep-listening", "conversation"],
    primaryLink: "#",
    secondaryLink: "#"
  }
];

export const practiceDownloads = [
  {
    title: "Daily Good Life Journal",
    description: "A printable page for the question \"What is a good life?\"",
    href: "#"
  },
  {
    title: "Eulogy Virtue Month",
    description: "A monthly practice sheet for cultivating one eulogy virtue.",
    href: "#"
  },
  {
    title: "Illuminator Listening Exercise",
    description: "Full presence, no interrupting, reflect back.",
    href: "#"
  },
  {
    title: "Serious Conversation Gathering",
    description: "A simple guide for hosting a small serious conversation.",
    href: "#"
  }
];

export const audioGuides = [
  {
    title: "10-Minute Presence Meditation",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    title: "One Mindful Conversation Reset",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    title: "Reflect Back Practice",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  }
];
