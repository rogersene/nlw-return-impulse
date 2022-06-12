import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';



const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ebf8bb5e6e6d83",
    pass: "be31583968b821"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {

  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Roger Crescencio <rogersenefaria@gmail.com>',
    subject,
    html: body
  })
  };
}