import * as ExpoSQLite from 'expo-sqlite';

const db = ExpoSQLite.openDatabase('places.db');

export const initDatabase = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, images TEXT NOT NULL, address TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL);',
        [],
        (_) => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
};

export const fetchPlaces = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM places',
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
};

export const insertPlace = (title, images, address, lat, lng) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO places (title, images, address, lat, lng) VALUES (?, ?, ?, ?, ?);',
        [title, JSON.stringify(images), address, lat, lng],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
};
