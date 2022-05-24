import Db from "../models/mysql.js";
let mensagem= "";

// Novelty function, only used to test the loading bar from the client.
function sleep(ms) {
    return new Promise( (resolve) => {
      setTimeout(resolve, ms);
    });
}

// controls
export async function postTest(req, res, next) { 
    const indice = req.body.indice;
    console.log("data received: ", indice);
    res.send({ message: 'funcinou'});
    mensagem = indice;
}

export async function getTest(req, res, next) { 
    console.log("Data sent");
    res.send({ indice: mensagem});
}

export async function postGres(req, res, next) { 
    const gp = req.body.indice;
    res.send({ message: 'good'});
    console.log("request post:", gp);
}


export async function getGres(req, res, next) { // Pega todos os valores na linha
    // This sleep is just for checking the loading page in the app
    // await sleep(2000); // dont forget to remove this later!
    
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    Db
    .allValues()
    .then( (data) => {
        data.rows.sort( (a, b) => a.id - b.id) // takes 2 rows per sort, then check its ID for sorting 
        res.send( {posts:data.rows});
    })
    .catch( err => console.log(err));
    // }

}
