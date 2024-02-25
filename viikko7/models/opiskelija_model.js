const db = require('../database');

const opiskelija = {
  getAll: function(callback) {
    return db.query('select * from opiskelija', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from opiskelija where idOpiskelija=?', [id], callback);
  },
  add: function(newopiskelija, callback) {
    return db.query(
      'insert into opiskelija (idOpiskelija,etunimi,sukunimi,osoite,luokkatunnus) values(?,?,?,?,?)',
      [newopiskelija.idOpiskelija, newopiskelija.etunimi, newopiskelija.sukunimi, newopiskelija.osoite, newopiskelija.luokkatunnus],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opiskelija where idopiskelija=?', [id], callback);
  },
  update: function(id, updatedopiskelija, callback) {
    return db.query(
      'update opiskelija set idopiskelija=?,etunimi=?,sukunimi=?, osoite=?, luokkatunnus=? where idopiskelija=?',
      [updatedopiskelija.idOpiskelija, updatedopiskelija.etunimi, updatedopiskelija.sukunimi, updatedopiskelija.osoite, updatedopiskelija.luokkatunnus, id],
      callback
    );
  }
};
module.exports = opiskelija;
