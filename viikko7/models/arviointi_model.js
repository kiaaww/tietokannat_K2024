const db = require('../database');

const arviointi = {
  getAll: function(callback) {
    return db.query('select * from arviointi', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from arviointi where idArviointi=?', [id], callback);
  },
  add: function(newarviointi, callback) {
    return db.query(
      'insert into arviointi (idArviointi,paivamaara,Arvosana,idOpiskelija,idOpintojakso) values(?,?,?,?,?)',
      [newarviointi.idArviointi, newarviointi.paivamaara, newarviointi.Arvosana, newarviointi.idOpiskelija, newarviointi.idOpintojakso],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from arviointi where idarviointi=?', [id], callback);
  },
  update: function(id, updatedarviointi, callback) {
    return db.query(
      'update arviointi set idArviointi=?,paivamaara=?,Arvosana=?, idOpiskelija=?, idOpintojakso=?, where id_arviointi=?',
      [updatedarviointi.idArviointi, updatedarviointi.paivamaara, updatedarviointi.Arvosana, updatedarviointi.idOpiskelija, updatedarviointi.idOpintojakso, id],
      callback
    );
  }
};
module.exports = arviointi;