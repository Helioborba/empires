import db from '../connections/my-con.js';

// retorna o objeto da conexao para execultar queries
export default class Create {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    save() {
        return db.execute(
            'INSERT INTO tester (title, content) VALUES (?, ?)', [this.title, this.content]
        );
    }

    static fetchAll() {
        return db.execute('SELECT title, content FROM `heroku_3f91cda5aaca95a`.`tester`');
    };
}