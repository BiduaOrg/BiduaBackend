// src/email/email.service.ts
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { SendEmailInput } from './dto/send-email.input';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor(private readonly configService: ConfigService) {
    const host = this.configService.get<string>('SMTP_HOST');
    const port = this.configService.get<number>('SMTP_PORT');
    const user = this.configService.get<string>('SMTP_USER');
    const pass = this.configService.get<string>('SMTP_PASS');

    this.transporter = nodemailer.createTransport({
      host,
      port,
      secure: false, // false for 587
      auth: {
        user,
        pass,
      },
    });
  }

  async sendEmail(sendEmailInput: SendEmailInput): Promise<boolean> {
    const mailOptions = {
      from: this.configService.get<string>('SMTP_USER'),
      to: sendEmailInput.to,
      subject: sendEmailInput.subject,
      text: sendEmailInput.text,
      html: sendEmailInput.html || '',
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log('✅ Email sent successfully');
      return true;
    } catch (error) {
      console.error('❌ Error sending email:', error);
      return false;
    }
  }
}
