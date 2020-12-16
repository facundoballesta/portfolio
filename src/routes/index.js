const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

const email_pass = process.env.PASSWORD_EMAIL;

router.post('/',(req,res)=>{
    const {nombre, apellido, email, mensaje} = req.body;
    contentHtml = '<h1>Datos de contacto:</h1><ul><li>Nombre: '+nombre+'</li><li>Apellido: '+apellido+'</li><li>Email: '+email+'</li><li>Mensaje: '+mensaje+'</li></ul>';
    const transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        auth: {
            user: 'facundoballesteros01@hotmail.com',
            pass: process.env.PASSWORD //Password del e-Mail en variable de entorno
        }
    });

    let mailOptions = {
        from: 'facundoballesteros01@hotmail.com', // sender address (who sends)
        to: 'facundoballesteros01@hotmail.com', // list of receivers (who receives)
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

