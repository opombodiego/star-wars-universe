import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-review',
  templateUrl: './form-review.component.html',
  styleUrls: ['./form-review.component.scss']
})
export class FormReviewComponent implements OnInit {
  public form?: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      firstname: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      review: [null, [Validators.required]],
    });
  }

  onSend() {
    if (this.form?.valid) {
      const review = {
        firstname: this.form.value.firstname,
        email: this.form.value.email,
        review: this.form.value.review
      }

      localStorage.setItem("review", JSON.stringify(review));
      this.form.reset();
    }
  }

}
