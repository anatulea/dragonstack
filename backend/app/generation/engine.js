const Generation = require('./index.js');
const GenerationTable = require('./table.js');

class GenerationEngine {
  constructor() {
    this.generation = null;
    this.timer = null;
  }
  start() {
    this.buildNuwGeneration();
  }
  stop() {
    clearTimeout(this.timer);
  }

  buildNuwGeneration() {
    const generation = new Generation();

    GenerationTable.storeGeneration(generation)
      .then(({ generationId }) => {
        this.generation = generation; 

        this.generation.generationId = generationId;
        console.log('New generation', this.generation);

        this.timer = setTimeout(
          () => this.buildNuwGeneration(),
          this.generation.expiration.getTime() - Date.now()
        );
      })
      .catch(error => console.error(error));
  }
}
module.exports = GenerationEngine;
