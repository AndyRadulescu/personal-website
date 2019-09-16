import { Injectable } from '@angular/core';
import EmailDto from './email.dto';
import { HttpClient } from '@angular/common/http';

@Injectable()
export default class EmailService {

  constructor(private readonly http: HttpClient) {
  }

  public sendEmail(message: EmailDto) {
    return this.http.post('https://us-central1-personal-website-eb34f.cloudfunctions.net/sendMail', message);
  }
}
