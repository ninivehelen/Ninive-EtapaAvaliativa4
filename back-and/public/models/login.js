const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema(
}
        nome: String,
        senha: Intenger,
        codigofunc: Integer

}
);
module.exports = mongoose.model('login',loginSchema);