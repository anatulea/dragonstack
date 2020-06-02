const TRAITS = require('../data/traits.json');

const DEFAULT_PROPRETIES = {
  nickname: 'unnamed',
  generationId: undefined,
  get birthdate() {
    return new Date();
  },
  get randomTraits() {
    const traits = [];

    TRAITS.forEach(TRAIT => {
      const traitType = TRAIT.type;
      const traitValues = TRAIT.values;

      const traitValue =
        traitValues[Math.floor(Math.random() * traitValues.length)];
      traits.push({ traitType, traitValue });
    });
    return traits;
  },
};

class Dragon {
  constructor({ birthdate, nickname, traits, generationId } = {}) {
    this.birthdate = birthdate || DEFAULT_PROPRETIES.birthdate;
    this.nickname = nickname || DEFAULT_PROPRETIES.nickname;
    this.traits = traits || DEFAULT_PROPRETIES.randomTraits;
    this.generationId = generationId || DEFAULT_PROPRETIES.generationId;
  }
}
module.exports = Dragon;
