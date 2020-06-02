const express = require('express');
const GenerationEngine = require('./generation/engine.js');
const dragonRouter = require('./api/dragon.js');
const generationRouter = require('./api/generation.js');

const app = express();
const engine = new GenerationEngine();

app.locals.engine = engine;

app.use('/dragon', dragonRouter);
app.use('/generation', generationRouter);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    type: 'error',
    message: err.message,
  });
});

engine.start();

module.exports = app;
//---------------------------------------------------------------
// const GenerationEngine = require('./engine.js');

// const engine = new GenerationEngine();

// engine.start();

// setTimeout(() => {
//   engine.stop();
// }, 20000);

// -----------------------------------------------------------------
// const Generation = require('./generation');
// const generation = new Generation();
// console.log('generation', generation);

// const gooby = generation.newDragon();
// console.log('gooby', gooby);

// setTimeout(() => {
//   const mimar = generation.newDragon();
//   console.log('mimar', mimar);
// }, 15000);
//----------------------------------------------------------------------------
// const Dragon = require('./dragon.js');

// const fooey = new Dragon({ birthdate: new Date(), nickname: 'fooey' });
// const baloo = new Dragon({
//   birthdate: new Date(),
//   nickname: 'baloo',
//   traits: [{ traitType: 'backgroundColor', traitValue: 'green' }],
// });
// const mimar = new Dragon();

// setTimeout(() => {
//   const gooby = new Dragon();
//   console.log('gooby', gooby);
// }, 3000);

// console.log('fooey', fooey);
// console.log('baloo', baloo);
// console.log('mimar', mimar);
