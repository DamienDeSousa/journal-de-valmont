/**
 * Poèmes d'exemple — TEXTES ORIGINAUX (écrits pour la maquette) afin d'éviter
 * tout problème de droits d'auteur. À remplacer par les poèmes réels de Damien.
 */
export type Poem = {
  id: string;
  title: string;
  lines: string[];
};

export const samplePoems: Poem[] = [
  {
    id: "veilles",
    title: "Veilles",
    lines: [
      "Je n'ai pas d'or à mettre à vos poignets,",
      "seulement l'encre lente de mes veilles —",
      "ces quelques mots, pliés, que le matin",
      "posera, tout tremblants, contre vos mains.",
    ],
  },
  {
    id: "la-cire",
    title: "La cire",
    lines: [
      "J'ai scellé sur ce pli le rouge d'un aveu ;",
      "rompez-le doucement, comme on ouvre une porte.",
      "Ce que la cire tait, la flamme le rapporte :",
      "tout l'hiver de mon cœur tenait dans ce peu.",
    ],
  },
  {
    id: "courrier",
    title: "À celle qui lira",
    lines: [
      "Si ces lignes vous trouvent un soir, près d'une lampe,",
      "lisez-les lentement, à la hauteur du cœur ;",
      "j'ai mis dans chaque lettre un peu de ma rumeur,",
      "et tout ce que je tais quand votre regard campe.",
    ],
  },
];
