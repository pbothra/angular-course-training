import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { UserserviceService } from '../userservice.service';
import { User } from '../user';
@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  regForm:FormGroup;
  datasaved = false;
  message: string;
  constructor(private formbuilder: FormBuilder, private userservice: UserserviceService) { }

  ngOnInit() {
    this.setFormState();
  }
  setFormState(): void {
    this.regForm = this.formbuilder.group({
      LastName: ['', [Validators.required]],
      FirstName: ['', [Validators.required]],
      EmailId: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    })
  }
  onSubmit() {
    let user = this.regForm.value;
    this.createuser(user);
    this.regForm.reset();
  }
  createuser(user: User) {
    this.userservice.createuser(user).subscribe(
      () => {
        this.datasaved = true;
        this.message = "User Created";
       this.regForm.reset();
      }
    )
  }
}
