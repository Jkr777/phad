import nodeMailer from 'nodemailer';

export default async function handler(req, res) {
  const { method, body } = req

  switch (method) {
    case 'POST':

      const transporter = nodeMailer.createTransport({
        service: "gmail",
        auth: {
            user: "skan8755@gmail.com",
            pass: process.env.NEXT_PUBLIC_EMAIL_PASS
          }
        });
        
        const option = {
          from: "skan8755@gmail.com",
          to: "badircea92@gmail.com",
          subject: "Nuovo Messaggio",
          html: `
            <p>email: ${body.email}</p>
            <p>name: ${body.firstName} ${body.lastName}</p>
            <p>createdAt: ${Date(body.createdAt)}</p>
            <p>message: ${body.mess}</p>
          `
        }

        transporter.sendMail(option, function(error, info) {
          if(error) {
            cconsole.log(error);
          } else {
            console.log('mail send')
          }
        })

      return res.status(201).send("ok");
    default:
      return res.status(400).send("error");
  }
}