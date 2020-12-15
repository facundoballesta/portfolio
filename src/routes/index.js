const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

router.post('/',(req,res)=>{
    const {nombre, apellido, email, mensaje} = req.body;
    contentHtml = '<h1>Datos de contacto:</h1><ul><li>Nombre: '+nombre+'</li><li>Apellido: '+apellido+'</li><li>Email: '+email+'</li><li>Mensaje: '+mensaje+'</li></ul>';
    console.log(contentHtml);
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'joelle.schumm0@ethereal.email',
            pass: 'VtcD8AzNarThS667rk'
        }
    });

    let mailOptions = {
        from: 'joelle.schumm0@ethereal.email', // sender address (who sends)
        to: 'joelle.schumm0@ethereal.email', // list of receivers (who receives)
        subject: 'Portfolio Contact ', // Subject line
        text: mensaje, // plaintext body
        html: contentHtml // html body
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        } else{
            console.log("Mail enviado")
        }
    });
    console.log(mailOptions)
    res.json({
        status: "Mail Enviado"
    });
})

module.exports = router;

