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

export type VideoResource = {
  id: string;
  title: string;
  speaker: string;
  source: string;
  stage: string;
  theme: string;
  duration: string;
  blurb: string;
  url: string;
  embedUrl: string;
};

export type VideoPlaylist = {
  id: string;
  title: string;
  description: string;
  stage: string;
  videos: string[];
};

export type BridgeReference = {
  title: string;
  note: string;
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
  },
  {
    id: "stoic-guide-emotional-intelligence",
    type: "book",
    title: "The Stoic's Guide to Emotional Intelligence (or similar modern Stoic EI books)",
    creator: "Addendum reference",
    blurb: "Applies Seneca/Epictetus/Marcus to listening and relationships without diluting the philosophy.",
    stage: "Addendum",
    themes: ["stoicism", "emotional-intelligence", "relationships"],
    primaryLink: "#",
    secondaryLink: "#"
  },
  {
    id: "stoicism-and-relationships",
    type: "book",
    title: "Stoicism and Relationships",
    creator: "Practical guides",
    blurb: "Focuses on building strong bonds while keeping inner freedom.",
    stage: "Addendum",
    themes: ["stoicism", "relationships", "inner-freedom"],
    primaryLink: "#",
    secondaryLink: "#"
  },
  {
    id: "you-just-dont-understand",
    type: "book",
    title: "You Just Don't Understand: Women and Men in Conversation",
    creator: "Deborah Tannen",
    blurb: "Explains rapport-talk versus report-talk and why venting often builds emotional connection.",
    stage: "Addendum",
    themes: ["rapport-talk", "gender-dynamics", "listening"],
    primaryLink: "#",
    secondaryLink: "#"
  },
  {
    id: "men-are-from-mars",
    type: "book",
    title: "Men Are from Mars, Women Are from Venus",
    creator: "John Gray",
    blurb: "Directly addresses the venting dynamic: empathy first, solutions later.",
    stage: "Addendum",
    themes: ["gender-dynamics", "empathy", "relationships"],
    primaryLink: "#",
    secondaryLink: "#"
  },
  {
    id: "just-listen",
    type: "book",
    title: "Just Listen",
    creator: "Mark Goulston",
    blurb: "Practical techniques to get through to anyone by making them feel truly heard first.",
    stage: "Addendum",
    themes: ["high-agency", "listening", "strategy"],
    primaryLink: "#",
    secondaryLink: "#"
  }
];

export const bridgeReferences: BridgeReference[] = [
  {
    title: "The Lost Art of Listening by Michael P. Nichols",
    note: "Excellent for understanding why people need to be heard beyond venting and how poor listening damages relationships."
  },
  {
    title: "Just Listen by Mark Goulston",
    note: "Great for high-intellect readers who want tools that feel strategic rather than fluffy."
  },
  {
    title: "Nonviolent Communication by Marshall Rosenberg",
    note: "Helps reframe conversations around empathy and needs, including judgmental versus empathic language."
  },
  {
    title: "You're Not Listening by Kate Murphy",
    note: "Explores the cultural loss of listening and why presence matters more than clever responses."
  },
  {
    title: "You Just Don't Understand by Deborah Tannen",
    note: "Useful for rapport-talk versus report-talk and the gender/venting dynamic."
  },
  {
    title: "Men Are from Mars, Women Are from Venus by John Gray",
    note: "A direct, accessible reference for empathy-first responses when someone vents."
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

export const videoResources: VideoResource[] = [
  {
    id: "how-to-know-a-person-trinity",
    title: "How To Know a Person - David Brooks",
    speaker: "David Brooks",
    source: "The Trinity Forum",
    stage: "Stage 5",
    theme: "Illuminating Others",
    duration: "Long-form conversation",
    blurb: "A Brooks-centered on-ramp to seeing others deeply and being deeply seen.",
    url: "https://www.youtube.com/watch?v=NNT0rpBB4Ek",
    embedUrl: "https://www.youtube.com/embed/NNT0rpBB4Ek"
  },
  {
    id: "pbs-how-to-know-person",
    title: "David Brooks writes on the art of seeing others in new book",
    speaker: "David Brooks",
    source: "PBS NewsHour",
    stage: "Stage 5",
    theme: "Illuminating Others",
    duration: "Interview",
    blurb: "A concise introduction to How to Know a Person and the practice of human connection.",
    url: "https://www.pbs.org/video/how-to-know-a-person-1698271715/",
    embedUrl: "https://www.youtube.com/embed/videoseries?list=PLplaceholder"
  },
  {
    id: "second-mountain-aspen",
    title: "The Second Mountain: The Next Big Challenge in Your Life",
    speaker: "David Brooks",
    source: "Aspen Institute",
    stage: "Stage 2",
    theme: "Character & Commitment",
    duration: "Lecture",
    blurb: "A lecture on moving from first-mountain achievement toward moral commitment.",
    url: "https://www.aspeninstitute.org/videos/second-mountain-next-big-challenge-life/",
    embedUrl: "https://www.youtube.com/embed/videoseries?list=PLplaceholder"
  },
  {
    id: "tara-brach-living-presence",
    title: "Guided Meditation: Living Presence (with Body Scan)",
    speaker: "Tara Brach",
    source: "Tara Brach",
    stage: "Stage 3",
    theme: "Presence",
    duration: "12 min",
    blurb: "A short guided practice for coming back to the body and the present moment.",
    url: "https://www.tarabrach.com/meditation-living-presence-body-scan-2/",
    embedUrl: "https://www.youtube.com/embed/videoseries?list=PLplaceholder"
  },
  {
    id: "mindful-presence-tara",
    title: "Mindful Presence & Guided Practice: Being Here",
    speaker: "Tara Brach",
    source: "AudioBuddha / YouTube playlist reference",
    stage: "Stage 3",
    theme: "Presence",
    duration: "17 min",
    blurb: "A presence teaching paired with a guided practice for training attention.",
    url: "https://audiobuddha.org/mindful-presence-by-tara-brach/",
    embedUrl: "https://www.youtube.com/embed/videoseries?list=PLahooTbMXXrTCe-8RCpINiI8iU0CiCg8S"
  },
  {
    id: "thich-nhat-hanh-deep-listening",
    title: "Deep Listening - Thich Nhat Hanh",
    speaker: "Thich Nhat Hanh",
    source: "SuperSoul Sunday clip reference",
    stage: "Stage 4",
    theme: "Deep Listening",
    duration: "Short clip",
    blurb: "A focused teaching on compassionate listening as a way to relieve suffering.",
    url: "https://mensfellowship.net/deep-listening1/",
    embedUrl: "https://www.youtube.com/embed/videoseries?list=PLplaceholder"
  },
  {
    id: "art-of-listening-thich",
    title: "The Art of Listening",
    speaker: "Thich Nhat Hanh",
    source: "Thich Nhat Hanh's Talks",
    stage: "Stage 4",
    theme: "Deep Listening",
    duration: "Full Dharma talk",
    blurb: "A longer teaching on listening and speaking as mindful communication practice.",
    url: "https://tnhtalks.org/2024/07/20/the-art-of-listening/",
    embedUrl: "https://www.youtube.com/embed/0j-XckIQzdY"
  },
  {
    id: "mindfulness-foundation-health",
    title: "Mindfulness as a Foundation for Health",
    speaker: "Thich Nhat Hanh",
    source: "Talks at Google",
    stage: "Stage 3",
    theme: "Presence",
    duration: "Talk",
    blurb: "A practical talk on mindfulness as a foundation for living in the present moment.",
    url: "https://www.youtube.com/watch?v=Ijnt-eXukwk",
    embedUrl: "https://www.youtube.com/embed/Ijnt-eXukwk"
  },
  {
    id: "sinek-art-of-listening",
    title: "The Art of Listening",
    speaker: "Simon Sinek",
    source: "YouTube talk reference",
    stage: "Addendum",
    theme: "High-Agency Listening",
    duration: "Short talk",
    blurb: "Short and clear on creating an environment where people feel heard, not just processing words.",
    url: "https://www.youtube.com/results?search_query=Simon+Sinek+The+Art+of+Listening",
    embedUrl: "https://www.youtube.com/embed/videoseries?list=PLplaceholder"
  },
  {
    id: "great-listener-ted",
    title: "How to Be a Great Listener",
    speaker: "Maegan Stephens & Nicole Lowenbraun",
    source: "TED Talk",
    stage: "Addendum",
    theme: "Listening Styles",
    duration: "Talk",
    blurb: "A framework for different listening styles and practical shifts.",
    url: "https://www.youtube.com/results?search_query=TED+How+to+Be+a+Great+Listener+Maegan+Stephens+Nicole+Lowenbraun",
    embedUrl: "https://www.youtube.com/embed/videoseries?list=PLplaceholder"
  },
  {
    id: "ury-power-of-listening",
    title: "The Power of Listening",
    speaker: "William Ury",
    source: "TEDx",
    stage: "Addendum",
    theme: "De-escalation",
    duration: "Talk",
    blurb: "A negotiation expert showing how listening de-escalates conflict and builds trust.",
    url: "https://www.youtube.com/results?search_query=William+Ury+The+Power+of+Listening+TEDx",
    embedUrl: "https://www.youtube.com/embed/videoseries?list=PLplaceholder"
  },
  {
    id: "brene-empathy-sympathy",
    title: "Empathy vs. Sympathy",
    speaker: "Brene Brown",
    source: "YouTube talk reference",
    stage: "Addendum",
    theme: "Empathy",
    duration: "Short clip",
    blurb: "A clear explanation of why people share pain and what they actually need in response.",
    url: "https://www.youtube.com/results?search_query=Brene+Brown+empathy+vs+sympathy",
    embedUrl: "https://www.youtube.com/embed/videoseries?list=PLplaceholder"
  }
];

export const videoPlaylists: VideoPlaylist[] = [
  {
    id: "brooks-on-ramp",
    title: "Brooks On-Ramp",
    description: "Start here for the intellectual and moral frame behind the path.",
    stage: "Stages 1, 2, 5",
    videos: [
      "How To Know a Person - David Brooks",
      "David Brooks writes on the art of seeing others in new book",
      "The Second Mountain: The Next Big Challenge in Your Life"
    ]
  },
  {
    id: "presence-practice",
    title: "Presence Practice",
    description: "Short practices and talks for building attention before conversation.",
    stage: "Stage 3",
    videos: [
      "Guided Meditation: Living Presence (with Body Scan)",
      "Mindful Presence & Guided Practice: Being Here",
      "Mindfulness as a Foundation for Health"
    ]
  },
  {
    id: "deep-listening-lab",
    title: "Deep Listening Lab",
    description: "Teachings to pair with the Illuminator listening exercise.",
    stage: "Stage 4",
    videos: [
      "Deep Listening - Thich Nhat Hanh",
      "The Art of Listening"
    ]
  },
  {
    id: "strong-talks",
    title: "Strong Talks for High-Agency Listeners",
    description: "Short, practical talks for people who default to analysis, fixing, or control.",
    stage: "Addendum",
    videos: [
      "The Art of Listening",
      "How to Be a Great Listener",
      "The Power of Listening",
      "Empathy vs. Sympathy"
    ]
  }
];
