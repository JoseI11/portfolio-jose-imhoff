import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ignacio8686@gmail.com',
      pass: 'acbc erkp mdxi hmro'
    }
  });

export const enviarMensaje = (data) => {
    const mailOptions = {
      from: 'ignacio8686@gmail.com',
      to: 'jose-imhoff@hotmail.com',
      subject: `${data.su}`,
      text: `Nombre: ${data.name}\nCorreo Electrónico: ${data.email}\nMensaje: ${data.message}`
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error al enviar el mensaje:', error);
      } else {
        console.log('Mensaje enviado:', info.response);
      }
    });
  };

