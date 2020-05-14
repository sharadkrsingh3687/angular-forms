import { Component, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') submitForm: NgForm;

  defaultQuestion: string = "teacher";
  secretAns: string = "";
  genders: string[] = ['Male', 'Female'];
  submited: boolean = false;

  user: any = {
      username: '',
      email: '',
      secret: '',
      answer: '',
      gender: ''
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.submitForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'Male'
    // });

    this.submitForm.form.patchValue({
      userData: {
        username: suggestedName        
      }
    });
  }

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }

  onSubmit(){
    console.log(this.submitForm.value.userData)
    this.submited = true;
    this.user.username = this.submitForm.value.userData.username;
    this.user.email = this.submitForm.value.userData.email;
    this.user.secret = this.submitForm.value.secret;
    this.user.answer = this.submitForm.value.questionAnswer;
    this.user.gender = this.submitForm.value.gender;

    this.submitForm.reset();
    // it not only reset the data , it also reset state of the form.
  }
}
