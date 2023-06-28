const User = require("../models/user.model");

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);
    if (!user) {
      return res.status(401).json({
        error: "Erro ao Logar! Verifique as suas credenciais de autenticação!",
      });
    }
    const token = await user.generateAuthToken();
    return res.status(201).json({ message: "Usuário(a) logado com sucesso!", user, token });
  } catch (err) {
    return res.status(400).json({ err });
  }
};

exports.returnUserProfile = async (req, res) => {
  await res.json(req.userData);
};

exports.registerNewUser = async (req, res) => {
  try {
    // => Antes vamos fazer uma verificação se o usuário já possui algum e-mail já cadastrado:
    const isUser = await User.find({ email: req.body.email });
    if (isUser.length >= 1) {
      return res.status(409).json({ message: "Atenção! Este e-mail já possui registro!" });
    }

    const newUser = new User(req.body);
    const user = await newUser.save();
    //const token = await newUser.generateAuthToken();
    //return res.status(201).json({ message: "Usuário(a) criado(a) com sucesso!", user, token });
    return res.status(201).json({ message: "Usuário(a) criado(a) com sucesso!", user });
  } catch (err) {
    console.log('erro');
    return res.status(400).json({ err });
  }
};
