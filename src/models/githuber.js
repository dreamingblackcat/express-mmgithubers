import connection from '../config/db';

export default class Githhuber {
  constructor() {
  }

  static all() {
    return new Promise( (resolve, reject) => {
      const findGithubers = (db) => {
        return db.collection('githubers').find();               
      }
      connection.then(findGithubers)
                .then( data => resolve(data.toArray()) )
                .catch( err => reject(err) );
    });
  }
}
