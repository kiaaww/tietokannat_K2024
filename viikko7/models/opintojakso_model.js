const db = require('../database');

const opintojakso = {
  getAll: function(callback) {
    return db.query('select * from opintojakso', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from opintojakso where idOpintojakso=?', [id], callback);
  },
  add: function(newopintojakso, callback) {
    return db.query(
      'insert into opintojakso (idOpintojakso,koodi,laajuus,nimi) values(?,?,?,?)',
      [newopintojakso.idOpintojakso, newopintojakso.koodi, newopintojakso.laajuus, newopintojakso.nimi],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opintojakso where idOpintojakso=?', [id], callback);
  },
  update: function(id, updatedopintojakso, callback) {
    return db.query(
      'update opintojakso set idOpintojakso=?,koodi=?,laajuus=?, nimi=? where id_Opintojakso=?',
      [updatedopintojakso.idOpintojakso, updatedopintojakso.koodi, updatedopintojakso.laajuus, updatedopintojakso.nimi, id],
      callback
    );
  }
};
module.exports = opintojakso;