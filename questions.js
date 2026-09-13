// ======================================================
// DATABÁZE OTÁZEK – TRIVIÁLNÍ NÁZVY
// ======================================================
//
// U otázky může být jedna nebo více odpovědí s correct: true.
// U otázek s více správnými odpověďmi je nastaveno multiple: true.
//
// Herní logika všechny otázky zobrazuje stejně,
// takže žák předem nepozná, zda je správná jedna
// nebo více odpovědí.
//
// ======================================================

const QUESTIONS = [

  {
    type: "text",
    question: "Pálené vápno je triviální název pro:",
    answers: [
      { text: "CaO", correct: true },
      { text: "Ca(OH)₂", correct: false },
      { text: "CaF₂", correct: false },
      { text: "CaCO₃", correct: false }
    ]
  },

  {
    type: "text",
    question: "Sádra je triviální název pro:",
    answers: [
      { text: "CaSO₄ · ½H₂O", correct: true },
      { text: "Ca(OH)₂", correct: false },
      { text: "CaSO₄ · 2H₂O", correct: false },
      { text: "CaCO₃", correct: false }
    ]
  },

  {
    type: "text",
    question: "Glauberova sůl je triviální název pro:",
    answers: [
      { text: "Na₂SO₄ · 10H₂O", correct: true },
      { text: "ZnSO₄ · 5H₂O", correct: false },
      { text: "MgSO₄ · 10H₂O", correct: false },
      { text: "CaSO₄ · ½H₂O", correct: false }
    ]
  },

  {
    type: "text",
    question: "Pod názvem \"hašené vápno\" rozumíme:",
    answers: [
      { text: "Ca(OH)₂", correct: true },
      { text: "CaCO₃", correct: false },
      { text: "CaO", correct: false },
      { text: "CaSO₄", correct: false }
    ]
  },

  {
    type: "text",
    question: "Chilskému ledku přísluší vzorec:",
    answers: [
      { text: "NaNO₃", correct: true },
      { text: "NH₄NO₃", correct: false },
      { text: "KNO₃", correct: false },
      { text: "Ca(NO₃)₂", correct: false }
    ]
  },

  {
    type: "text",
    question: "Modré skalici přísluší vzorec:",
    answers: [
      { text: "CuSO₄ · 5H₂O", correct: true },
      { text: "FeSO₄ · 7H₂O", correct: false },
      { text: "ZnSO₄ · 7H₂O", correct: false },
      { text: "K₃[Fe(CN)₆]", correct: false }
    ]
  },

  {
    type: "text",
    question: "Pod názvem \"bílá skalice\" rozumíme:",
    answers: [
      { text: "ZnSO₄ · 7H₂O", correct: true },
      { text: "KCr(SO₄)₂ · 12H₂O", correct: false },
      { text: "FeSO₄ · 7H₂O", correct: false },
      { text: "CuSO₄ · 5H₂O", correct: false }
    ]
  },

  {
    type: "text",
    multiple: true,
    question: "K₂CO₃ je vzorec:",
    answers: [
      { text: "potaše", correct: true },
      { text: "uhličitanu draselného", correct: true },
      { text: "karbidu draselného", correct: false },
      { text: "sody", correct: false }
    ]
  },

  {
    type: "text",
    multiple: true,
    question: "NH₄NO₃ je vzorec:",
    answers: [
      { text: "dusičnanu amonného", correct: true },
      { text: "ledku amonného", correct: true },
      { text: "dusitanu amonného", correct: false },
      { text: "salmiaku", correct: false }
    ]
  },

  {
    type: "text",
    question: "Lučavka královská je směsí kyselin:",
    answers: [
      { text: "HNO₃ a HCl", correct: true },
      { text: "H₂SO₄ a HCl", correct: false },
      { text: "H₂SO₄ a HNO₃", correct: false },
      { text: "HNO₃ a HBr", correct: false }
    ]
  },

  {
    type: "text",
    question: "Sublimát je triviální název pro:",
    answers: [
      { text: "chlorid rtuťnatý", correct: true },
      { text: "chlorid rtuťný", correct: false },
      { text: "rtuť", correct: false },
      { text: "dusičnan rtuťnatý", correct: false }
    ]
  },

  {
    type: "text",
    question: "Kalomel je triviální název pro:",
    answers: [
      { text: "chlorid rtuťný", correct: true },
      { text: "chlorid rtuťnatý", correct: false },
      { text: "rtuť", correct: false },
      { text: "dusičnan rtuťnatý", correct: false }
    ]
  },

  {
    type: "text",
    question: "„Rajský plyn“ má vzorec:",
    answers: [
      { text: "N₂O", correct: true },
      { text: "CO", correct: false },
      { text: "NO", correct: false },
      { text: "N₂O₃", correct: false }
    ]
  },

  {
    type: "text",
    question: "Kalomel má vzorec:",
    answers: [
      { text: "Hg₂Cl₂", correct: true },
      { text: "HgCl", correct: false },
      { text: "HgCl₂", correct: false },
      { text: "Hg₂Cl", correct: false }
    ]
  },

  {
    type: "text",
    multiple: true,
    question: "NaCl je vzorec:",
    answers: [
      { text: "halitu", correct: true },
      { text: "soli kamenné", correct: true },
      { text: "salmiaku", correct: false },
      { text: "sylvínu", correct: false }
    ]
  },

  {
    type: "text",
    question: "Magnezit má vzorec:",
    answers: [
      { text: "MgCO₃", correct: true },
      { text: "MgSO₄", correct: false },
      { text: "CaCO₃", correct: false },
      { text: "MgO", correct: false }
    ]
  },

  {
    type: "text",
    question: "Kazivec má vzorec:",
    answers: [
      { text: "CaF₂", correct: true },
      { text: "CaCl₂", correct: false },
      { text: "CaCO₃", correct: false },
      { text: "NaF", correct: false }
    ]
  },

  {
    type: "text",
    question: "Hypermangan má vzorec:",
    answers: [
      { text: "KMnO₄", correct: true },
      { text: "MnO₂", correct: false },
      { text: "K₂MnO₄", correct: false },
      { text: "K₂CrO₄", correct: false }
    ]
  },

  {
    type: "text",
    question: "Pyrit má vzorec:",
    answers: [
      { text: "FeS₂", correct: true },
      { text: "FeS", correct: false },
      { text: "CuFeS₂", correct: false },
      { text: "PbS", correct: false }
    ]
  },

  {
    type: "text",
    question: "Lapis má vzorec:",
    answers: [
      { text: "NaNO₃", correct: false },
      { text: "Ag₂S", correct: false },
      { text: "AgCl", correct: false },
      { text: "AgNO₃", correct: true }
    ]
  },

  {
    type: "text",
    question: "Sfalerit má vzorec:",
    answers: [
      { text: "ZnS", correct: true },
      { text: "ZnO", correct: false },
      { text: "ZnSO₄", correct: false },
      { text: "FeS₂", correct: false }
    ]
  },

  {
    type: "text",
    question: "Rumělka má vzorec:",
    answers: [
      { text: "HgS", correct: true },
      { text: "HgCl₂", correct: false },
      { text: "Hg₂Cl₂", correct: false },
      { text: "HgO", correct: false }
    ]
  },

  {
    type: "text",
    question: "Salmiak má vzorec:",
    answers: [
      { text: "NH₄Cl", correct: true },
      { text: "NH₄NO₃", correct: false },
      { text: "NaCl", correct: false },
      { text: "NH₃", correct: false }
    ]
  },

  {
    type: "text",
    question: "Kamenec má vzorec:",
    answers: [
      { text: "KAl(SO₄)₂ · 12H₂O", correct: true },
      { text: "Na₂SO₄ · 10H₂O", correct: false },
      { text: "MgSO₄ · 7H₂O", correct: false },
      { text: "CaSO₄ · 2H₂O", correct: false }
    ]
  },

  {
    type: "text",
    question: "Borax má vzorec:",
    answers: [
      { text: "Na₂B₄O₇ · 10H₂O", correct: true },
      { text: "NaHCO₃", correct: false },
      { text: "Na₂CO₃", correct: false },
      { text: "H₃BO₃", correct: false }
    ]
  },

  {
    type: "text",
    question: "Kryolit má vzorec:",
    answers: [
      { text: "Na₃[AlF₆]", correct: true },
      { text: "CaF₂", correct: false },
      { text: "K₄[Fe(CN)₆]", correct: false },
      { text: "Al₂O₃", correct: false }
    ]
  },

  {
    type: "text",
    question: "Sylvín je triviální název pro:",
    answers: [
      { text: "chlorid draselný", correct: true },
      { text: "chlorid sodný", correct: false },
      { text: "fluorid vápenatý", correct: false },
      { text: "chlorid amonný", correct: false }
    ]
  },

  {
    type: "text",
    question: "Mramor je triviální označení pro:",
    answers: [
      { text: "uhličitan vápenatý", correct: true },
      { text: "uhličitan hořečnatý", correct: false },
      { text: "oxid vápenatý", correct: false },
      { text: "síran vápenatý", correct: false }
    ]
  },

  {
    type: "text",
    question: "Burel je triviální název pro:",
    answers: [
      { text: "oxid manganičitý", correct: true },
      { text: "oxid manganatý", correct: false },
      { text: "manganistan draselný", correct: false },
      { text: "oxid manganitý", correct: false }
    ]
  },

  {
    type: "text",
    question: "Zelená skalice je triviální název pro:",
    answers: [
      { text: "heptahydrát síranu železnatého", correct: true },
      { text: "pentahydrát síranu měďnatého", correct: false },
      { text: "heptahydrát síranu zinečnatého", correct: false },
      { text: "pentahydrát síranu železnatého", correct: false }
    ]
  },

  {
    type: "text",
    question: "Galenit je triviální název pro:",
    answers: [
      { text: "sulfid olovnatý", correct: true },
      { text: "sulfid stříbrný", correct: false },
      { text: "sulfid rtuťnatý", correct: false },
      { text: "disulfid železnatý", correct: false }
    ]
  },

  {
    type: "text",
    question: "Arsenik je triviální název pro:",
    answers: [
      { text: "oxid arsenitý", correct: true },
      { text: "oxid arseničný", correct: false },
      { text: "sulfid arsenitý", correct: false },
      { text: "kyselinu arsenitou", correct: false }
    ]
  },

  {
    type: "text",
    question: "Cyankáli je triviální název pro:",
    answers: [
      { text: "kyanid draselný", correct: true },
      { text: "kyanid sodný", correct: false },
      { text: "kyanovodík", correct: false },
      { text: "hexakyanidoželeznatan draselný", correct: false }
    ]
  },

  {
    type: "text",
    question: "Baryt je triviální název pro:",
    answers: [
      { text: "síran barnatý", correct: true },
      { text: "uhličitan barnatý", correct: false },
      { text: "chlorid barnatý", correct: false },
      { text: "sulfid barnatý", correct: false }
    ]
  },

  {
    type: "text",
    question: "Karborundum je triviální název pro:",
    answers: [
      { text: "karbid křemičitý", correct: true },
      { text: "oxid křemičitý", correct: false },
      { text: "oxid hlinitý", correct: false },
      { text: "karbid vápenatý", correct: false }
    ]
  },

  {
    type: "text",
    question: "Ag₂S je vzorec:",
    answers: [
      { text: "argentitu", correct: true },
      { text: "lapisu", correct: false },
      { text: "galenitu", correct: false },
      { text: "sfaleritu", correct: false }
    ]
  },

  {
    type: "text",
    multiple: true,
    question: "KNO₃ je vzorec:",
    answers: [
      { text: "sanytru", correct: true },
      { text: "draselného ledku", correct: true },
      { text: "salmiaku", correct: false },
      { text: "lapisu", correct: false }
    ]
  },

  {
    type: "text",
    question: "Ca(NO₃)₂ je vzorec:",
    answers: [
      { text: "norského ledku", correct: true },
      { text: "draselného ledku", correct: false },
      { text: "halitu", correct: false },
      { text: "magnezitu", correct: false }
    ]
  },

  {
    type: "text",
    multiple: true,
    question: "NaHCO₃ je vzorec:",
    answers: [
      { text: "jedlé sody", correct: true },
      { text: "hydrogenuhličitanu sodného", correct: true },
      { text: "uhličitanu sodného", correct: false },
      { text: "sody", correct: false }
    ]
  },

  {
    type: "text",
    multiple: true,
    question: "Fe₂O₃ je vzorec:",
    answers: [
      { text: "hematitu", correct: true },
      { text: "krevelu", correct: true },
      { text: "pyritu", correct: false },
      { text: "korundu", correct: false }
    ]
  },

  {
    type: "text",
    question: "Al₂O₃ je vzorec:",
    answers: [
      { text: "korundu", correct: true },
      { text: "bauxitu", correct: false },
      { text: "křemene", correct: false },
      { text: "kryolitu", correct: false }
    ]
  },

  {
    type: "text",
    question: "Pb₃O₄ je vzorec:",
    answers: [
      { text: "suříku", correct: true },
      { text: "galenitu", correct: false },
      { text: "rumělky", correct: false },
      { text: "burelu", correct: false }
    ]
  },

  {
    type: "text",
    question: "MgSO₄ · 7H₂O je vzorec:",
    answers: [
      { text: "hořké soli", correct: true },
      { text: "zelené skalice", correct: false },
      { text: "kamence", correct: false },
      { text: "sádrovce", correct: false }
    ]
  },

  {
    type: "text",
    question: "Na₂CO₃ je vzorec:",
    answers: [
      { text: "sody", correct: true },
      { text: "jedlé sody", correct: false },
      { text: "boraxu", correct: false },
      { text: "halitu", correct: false }
    ]
  },

  {
    type: "text",
    multiple: true,
    question: "H₂SO₄ je vzorec:",
    answers: [
      { text: "vitriolu", correct: true },
      { text: "kyseliny sírové", correct: true },
      { text: "kyseliny solné", correct: false },
      { text: "borové vody", correct: false }
    ]
  }

];