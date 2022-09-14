const express = require('express');
const app = express();
const nodemailer = require('nodemailer');


app.post('/send-email', (req, res) => {
    const trasnporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        post: 587,
        secure: false,
        auth: {
            user:"john.fisher@ethereal.email",
            pass:"Dceh6Ff18SX7Vj2gRy"
        }
    })
    const mailOptions ={
        from: "Remitente",
        to: "lucasmontoby@gmail.com",
        subject:"Enviado desde nodemailer",
        text: "Enviado con éxito"
    }
    trasnporter.sendMail(mailOptions, (error, info) =>{
        if(error){
            res.status(500).send(error.message);
        }
        else{
            console.log("Email enviado")
            res.status(200).jsonp(req.body);
        }
    })
});

app.listen(3000, ()=>{
    console.log("Servidor en -> http://localhost:3000");
});
