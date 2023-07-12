const nodemailer = require('nodemailer');

exports.SendEmail = async(dadosPedido) =>  {
    try {
        let remetente = nodemailer.createTransport({
            host: 'smtp.titan.email',
            port: 465, // or 587
            service: 'smtp.titan.email',
            secure: true,
            auth: {
                user: 'jorge@empiric.com.br',
                pass: 'Senha321#'
            },
            tls: { rejectUnauthorized: false }
        })

        let tabelaHTML = '<table>';
        tabelaHTML += '<tr><th>ID</th><th>Nome</th><th>Quantidade</th><th>Preço</th></tr>';

        let carrinho = dadosPedido.sacola;
        let total = 0
        carrinho.forEach(item => {
            tabelaHTML += `<tr><td>${item.id}</td><td>${item.nome}</td><td>${item.quantidade}</td><td>${item.preco}</td></tr>`;
            total += item.preco * item.quantidade
        });

        tabelaHTML += '</table>';

        let message = {
            from: 'jorge@empiric.com.br',
            to: 'jorge@empiric.com.br',
            subject: dadosPedido.nome,
            //text: `Email: ${dadosPedido.email}, Mensagem: ${dadosPedido.sacola}`,
            amp: `<!doctype html>
            <html ⚡4email>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h3>Nome: ${dadosPedido.nome}</h3>
                <h3>Email: ${dadosPedido.email}</h3>
                <h3>Telefone: ${dadosPedido.telefone}</h3>
                ${tabelaHTML}
                <h2>Valor total do Pedido: ${total}</h2>
            </body>
            </html>`
        }

        remetente.sendMail(message, (err) => {
            if(err) {
                console.log('erro ao enviar email ', err)
            } else {
                console.log('Email enviado com sucesso')
            }
        })
    }
    catch {
        console.log('erro ao enviar email')
    }
}

exports.SendPdf = async() => {
    try {
        let remetente = nodemailer.createTransport({
            host: 'smtp.titan.email',
            port: 465, // or 587
            //service: 'smtp.titan.email',
            secure: true,
            auth: {
                user: 'jorge@empiric.com.br',
                pass: 'Senha321#'
            },
            tls: { rejectUnauthorized: false }
        })

        let message = {
            from: '',
            to: '',
            //to: '',
            subject: 'Lista de confirmados',
            attachments: [
                {
                    filename: 'confirmados.pdf', // <= Here: made sure file name match
                    path: './confirmados.pdf', // <= Here
                    contentType: 'application/pdf'
                }
            ]
        }

        remetente.sendMail(message, (err) => {
            if(err) {
                console.log('erro ao enviar email ', err)
            } else {
                console.log('Email enviado com sucesso')
            }
        })
    }
    catch(error) {
        console.log('erro ao enviar email', error)
    }
}