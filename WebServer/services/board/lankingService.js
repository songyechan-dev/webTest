const db = require('../../config/database');

async function getLanking() {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM player ORDER BY score DESC limit 10';
    db.query(sql, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = {
  getLanking
};
