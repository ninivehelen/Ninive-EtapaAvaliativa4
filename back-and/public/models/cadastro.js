const mongoose = require('mongoose');

const cadastroSchema = new mongoose.Schema(
}
        cod: Integer,
        nomeprod: String,
        utilidade: String,
        validade: Integer
}
);
module.exports = mongoose.model('cadastro',cadastroSchema);