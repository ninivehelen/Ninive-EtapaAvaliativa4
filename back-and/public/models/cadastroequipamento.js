const mongoose = require('mongoose');

const cadastroequipamentoSchema = new mongoose.Schema(
}
        nome: String,
        senha: Intenger,
        codigofunc: Integer

}
);
module.exports = mongoose.model('cadastro',cadastroSchema);