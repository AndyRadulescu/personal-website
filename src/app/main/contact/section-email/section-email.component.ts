import { Component, OnInit } from '@angular/core';
import EmailService from './email.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-section-email',
  templateUrl: './section-email.component.html',
  styleUrls: ['./section-email.component.scss'],
  providers: [EmailService]
})
export class SectionEmailComponent implements OnInit {
  public submitted = false;
  public isLoading = false;
  public isFormInvalid = false;
  public emailForm = new FormGroup({
    subject: new FormControl(''),
    from: new FormControl('', Validators.email),
    message: new FormControl('')
  });

  constructor(private readonly email: EmailService) {
  }

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.emailForm.status === 'INVALID') {
      this.isFormInvalid = true;
      return;
    }
    this.isFormInvalid = false;
    this.isLoading = true;
    this.email.sendEmail(this.emailForm.value).subscribe(() => {
      this.isLoading = false;
      this.submitted = true;
      this.emailForm.reset();
    }, err => {
      console.log(err);
      this.isLoading = false;
      this.emailForm.reset();  // TODO: take this out in the future (shouldn't be her) => Enters catch because of firebase response
    });
  }

}
