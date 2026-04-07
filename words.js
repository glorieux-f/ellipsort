const words = [
  // SUJET
  // moi, toi, personne, gens, on, chose
  // VERBES
  // penser, savoir, vouloir, sentir, voir, entendre
  // dire, mot, vrai, nom
  // faire, arriver, bouger, toucher
  // , être, avoir
  // TEMPS
  // quand, maintenant, avant, après, longtemps, jour, nuit
  // LIEU
  // lieu, où, ici, sur, sous, près, loin, dans, contre, devant, autour
  // ciel, terre, soleil, lune, étoile, sol, 
  // NOMBRE
  // un, deux, quelques, plusieurs, même, autre, très, plus, grand petit
  // QUALITÉ
  // comme, bien, mal, espèce, genre
  // long, rond, plat, fin, dur, doux, lourd, lisse
  // bois, pierre
  // CORPS
  // corps, main, bouche, œil, tête, oreille, nez, visage, dent, doigt, ventre, torse, peau, os, sang, queue, œuf, aile, plume
  // naître, vivre, manger, grandir, mourir, tenir, faire, tuer, respirer, jouer, rire, chanter


];

const words2 = [
  "âge",
  "air",
  "âme",
  "ami",
  // "âne"
  "arc",
  "axe",
  "bal",
  "bas",
  "bec",
  "blé",
  "bol",
  "bon",
  "cas",
  "clé",
  "cou",
  "cri",
  "crû",
  "dit",
  "dru",
  "duc",
  "dur",
  "eau",
  "écu",
  "élu",
  "épi",
  "ère",
  "été",
  "fée",
  "fer",
  "feu",
  "fin",
  "foi",
  "for",
  "fou",
  "gai",
  "gel",
  "gré",
  "gué",
  "île",
  "jeu",
  "lys",
  "mal",
  "mât",
  "mer",
  "mue",
  "mot",
  "mou",
  "mur",
  "mûr",
  "nef",
  "net",
  "nez",
  "nom",
  "non",
  "nul",
  "ode",
  "œil",
  "œuf",
  "osé",
  "oui",
  "pas",
  "peu",
  "pic",
  "pli",
  "pot",
  "pou",
  "pré",
  "pur",
  "sac",
  "sec",
  "sel",
  "sol",
  "sot",
  "sou",
  "sur",
  "tas",
  "tic",
  "tôt",
  "tri",
  "ver",
  "vie",
  "vin",
  "vœu",
  "zoo",

];

const wordsTest = [
  "vert", "fort", "sale",  // 4
  "rouge",// 5
  "propre", // 6
  "mouillé", // 7
  // 8
  "important", // 9
  "tranquille?", // 10
  "il", "je", // 2
  "ici", "pur",  // 3
];

const words3 = [
  // Prépositons
  "à", "après", "avant", "avec", "chez", "contre", "dans", "de", "depuis", "derrière", "dès", "devant", "durant", "en", "entre", "envers", "hormis", "jusque", "malgré", "par", "parmi", "pendant", "pour", "sans", "sauf", "selon", "sous", "sur", "vers",
  // Connectecteurs
  "afin", "aussi", "car", "comme", "comment", "donc", "dont", "et", "lorsque", "mais", "non", "ou", "où", "parce que", "pourquoi", "puisque", "quand", "que", "qui", "quoi", "quoique", "si", "sinon", "soit", "tel",
  // personnels
  "eux", "je", "moi", "nous", "on", "soi", "toi", "tu", "vous",
  // auxilliaires
  "aller", "avoir", "devoir", "dire", "donner", "être", "faire", "falloir", "pouvoir", "prendre", "trouver", "venir", "voir", "vouloir",
  // Adverbes
  "ailleurs", "alors", "ainsi", "assez", "aussi", "autant", "aujourd'hui", "beaucoup", "bien", "bientôt", "cependant", "certainement", "dehors", "déjà", "demain", "encore", "enfin", "ensuite", "hier", "ici", "jamais", "là", "maintenant", "même", "moins", "parfois", "peu", "peut-être", "plus", "près", "presque", "probablement", "rarement", "seulement", "simplement", "souvent", "surtout", "tard", "tôt", "toujours", "très", "trop", "vite", "vraiment",

  // Adjectifs
  "assis", "bas", "beau", "blanc", "bleu", "bon", "calme", "carré", "chaud", "cher", "clair", "content", "couché", "court", "creux", "cuit", "dangereux", "dernier", "différent", "doux", "dur", "égal", "électrique", "entier", "facile", "fatigué", "fort", "fou", "froid", "gentil", "grand", "gris", "gros", "haut", "humide", "important", "jaune", "jeune", "large", "lisse", "loin", "long", "lourd", "malade", "mauvais", "méchant", "mince", "mouillé", "moyen", "mort", "neuf", "noir", "nu", "petit", "plat", "plein", "premier", "propre", "rond", "rouge", "roux", "sale", "sec", "second", "seul", "solide", "sombre", "tordu", "tranquille", "usé", "utile", "vert", "vide", "vieux", "vivant",
  // substantifs
  "chose", "jour", "lieu", "moment", "monde", "personne", "temps", "vie",
  // déterminants
  "aucun", "quelques", "tous", "tout", "un", "une",
  // ponctuation
  " … ", ".", ",", ":", "?", "!", "(", ")", "«", "»",
  "—", "+", "/", "×", "=", "≠", "<", ">", "∑", "%", "↑", "↓", "←", "→", "↔",

]