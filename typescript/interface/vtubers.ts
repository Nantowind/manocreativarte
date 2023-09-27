
export interface Vtuber {
    id: string;
    name: string;
    description: string;
    price: number;
    saleStatus: SaleStatus;
    SaleStatusText: SaleStatusText;
    urlVideo: string;
    urlFullVideo?: string;
    owner?: string;
    actionList?: VtuberActions[]; // Usa el nuevo enum aquí
    accessoriesList?: Accessories[];
    streamingPlatformsList?: StreamingPlatforms[];
}


export enum SaleStatus{
  Sold = "sold",
  OnSale = "on-sale",
  InProgress = "in-progress",
}

export enum SaleStatusText{
    Sold = "Sold",
    OnSale = "On sale",
    InProgress = "In progress",
}

export enum VtuberActions {
    Angry = "angry",
    Blush = "blush",
    CatFace = "cat-face",
    Crying = "crying",
    Derpy = "derpy",
    Disgusted = "disgusted",
    HeartInLove = "heart-in-love",
    HypnotizedFace = "hypnotized-face",
    KinkyFace = "kinky-face",
    RedFaceBlush = "red-face-blush",
    Sad = "sad",
    Scared = "scared",
    Smug = "smug",
    SparklingEyes = "sparkling-eyes",
    Stunned = "stunned",
    VeryHappy = "very-happy",
}


export enum Accessories {
    Amulets = "amulets",
    Armor = "armor",
    Backpacks = "backpacks",
    Belts = "belts",
    Books = "books",
    Boots = "boots",
    Bows = "bows",
    Bracelets = "bracelets",
    Capes = "capes",
    Chains = "chains",
    Cloaks = "cloaks",
    Crowns = "crowns",
    Earrings = "earrings",
    Ears = "ears",
    Feathers = "feathers",
    Flowers = "flowers",
    Glasses = "glasses",
    Gloves = "gloves",
    Goggles = "goggles",
    Guns = "guns",
    Hairpins = "hairpins",
    Halos = "halos",
    Hats = "hats",
    Headphones = "headphones",
    Hoods = "hoods",
    Horns = "horns",
    Instruments = "instruments",
    Keyblades = "keyblades",
    Leggings = "leggings",
    Masks = "masks",
    Microphones = "microphones",
    Necklaces = "necklaces",
    Pendants = "pendants",
    Ribbons = "ribbons",
    Rings = "rings",
    Scarves = "scarves",
    Scepters = "scepters",
    Shields = "shields",
    Staffs = "staffs",
    Stoles = "stoles",
    Swords = "swords",
    Tails = "tails",
    Tattoos = "tattoos",
    Tiaras = "tiaras",
    Ties = "ties",
    Wands = "wands",
    Wings = "wings",
    Wristwatches = "wristwatches",
}

export enum Pets {
    Cat = "cat",
    Dog = "dog",
    Bird = "bird",
    Rabbit = "rabbit",
    Hamster = "hamster",
    GuineaPig = "guinea-pig",
    Fish = "fish",
    Snake = "snake",
    Turtle = "turtle",
    Lizard = "lizard",
    Frog = "frog",
    Hedgehog = "hedgehog",
    Ferret = "ferret",
    Chameleon = "chameleon",
    Octopus = "octopus",
    Sloth = "sloth",
    Koala = "koala",
    Panda = "panda",
    Fox = "fox",
    Raccoon = "raccoon",
    Bear = "bear",
    Penguin = "penguin",
    Dolphin = "dolphin",
    Owl = "owl",
    Bat = "bat",
    Dragon = "dragon",
    Unicorn = "unicorn",
    Alien = "alien",
    Slime = "slime",
    Robot = "robot",
    Ghost = "ghost",
    ElementalSpirit = "elemental-spirit",
}



export enum StreamingPlatforms {
    AfreecaTV = "AfreecaTV",
    BigoLive = "Bigo Live",
    Caffeine = "Caffeine",
    DLive = "DLive",
    FacebookGaming = "Facebook Gaming",
    GosuGamers = "GosuGamers",
    Mobcrush = "Mobcrush",
    Owncast = "Owncast",
    RedditLive = "Reddit Live",
    TikTokLive = "TikTok Live",
    Twitch = "Twitch",
    TwitterLive = "Twitter Live",
    Uscreen = "Uscreen",
    Wowza = "Wowza",
    YouTubeGaming = "YouTube Gaming",
}

