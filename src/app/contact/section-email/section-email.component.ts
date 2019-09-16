import { Component, OnInit } from '@angular/core';
import EmailService from './email.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-section-email',
  templateUrl: './section-email.component.html',
  styleUrls: ['./section-email.component.scss'],
  providers: [EmailService]
})
export class SectionEmailComponent implements OnInit {
  public submitted = false;
  public emailForm = new FormGroup({
    subject: new FormControl(''),
    from: new FormControl(''),
    message: new FormControl('')
  });

  constructor(private readonly email: EmailService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.emailForm.value);
    // this.email.sendEmail(data);
    this.submitted = true;
  }

}
