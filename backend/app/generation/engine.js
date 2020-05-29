const Generation = require('./index.js');

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
    this.generation = new Generation();

    console.log('nwe generation', this.generation);

    this.timer = setTimeout(
      () => this.buildNuwGeneration(),
      this.generation.expiration.getTime() - Date.now()
    );
  }
}
module.exports = GenerationEngine;
