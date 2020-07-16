const pool = require('../../databasePool');
const DragonTraitTable = require('../dragonTrait/table');

class DragonTable {
  static storeDragon(dragon) {
    const { birthdate, nickname, generationId } = dragon;

    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO dragon(birthdate, nickname, "generationId" )
                 VALUES($1, $2, $3) RETURNING id`,
        [birthdate, nickname, generationId],
        (error, response) => {
          if (error) return reject(error);

          const dragonId = response.rows[0].id;

          Promise.all(
            dragon.traits.map(({ traitType, traitValue }) => {
              return DragonTraitTable.storeDragonTrait({
                dragonId,
                traitType,
                traitValue,
              });
            })
          )
            .then(() => resolve({ dragonId }))
            .catch(error => reject(error));

          resolve({ dragonId });
        }
      );
    });
  }
  static getDragon({ dragonId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT birthdate, nickname, "generationId"
              FROM dragon
              WHERE dragon.id = $1`,
        [dragonId],
        (error, response) => {
          if (error) return reject(error);

          if (response.rowCount.length === 0)
            return reject(new Error('no dragon'));

          resolve(response.rows[0]);
        }
      );
    });
  }
  static updateDragon({ dragonId, nickname, 
    // isPublic, saleValue, sireValue 
  }) {
    //const settingsMap = { nickname, isPublic, saleValue, sireValue };

    // const validQueries = Object.entries(settingsMap).filter(
    //   ([settingKey, settingValue]) => {
    //     if (settingValue !== undefined) {
          return new Promise((resolve, reject) => {
            pool.query(
              `UPDATE dragon SET nickname = $1 WHERE id = $2`,
              // [settingValue, dragonId],
              [nickname, dragonId],
              (error, response) => {
                if (error) return reject(error);

                resolve();
              }
            );
          });
      //   }
      // }
    // );
        }
  //   return Promise.all(validQueries);
  // }
}
// to debugg  run on terminal ---->  node app/dragon/table.js
// DragonTable.getDragon({ dragonId: 1 })
//   .then(dragon => console.log(dragon))
//   .catch(error => console.error('error', error));
module.exports = DragonTable;
