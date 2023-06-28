const PDFDocument = require('pdfkit');
const fs = require('fs');

exports.Create = async (pedido) => {
    try {
        const pdf = new PDFDocument();

        pdf.pipe(fs.createWriteStream('pedido.pdf'))

        pedido.forEach(item => {
            newConfirmados = {
                nome: item.nome,
                email: item.email,
                telefone: item.telefone, 
                produtos: item.sacola
            };
        });

        pdf.fillColor('black').fontSize(17).text(pedido, 50, 30);
        pdf.end();
    } catch {
        console.log('erro ao gerar PDF');
    }
}
