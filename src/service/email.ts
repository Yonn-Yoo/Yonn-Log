import nodemailer from 'nodemailer';

export type EmailData = {
  from: string;
  name: string;
  subject: string;
  message: string;
};

const authUser = process.env.AUTH_USER;

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: authUser,
    pass: process.env.AUTH_PASSWORD,
  },
});

export async function sendEmail({ subject, from, name, message }: EmailData) {
  const mailData = {
    to: authUser,
    subject: `[YonnLog] ${subject}`,
    from,
    html: `
    <h1>${subject}</h1>
    <div>${message}</div>
    <br/>
    <span>보낸사람: ${name}</span>
    <span>보낸사람의 이메일: ${from}</span>
    `,
  };

  return transporter.sendMail(mailData);
}
