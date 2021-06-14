import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IndirizzoIP } from '../indirizzoIP.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit {
  ipAddress = '';
  listUsers: Array<any> = [];
  form: FormGroup;
  constructor(public fb: FormBuilder, public http: IndirizzoIP) {
    this.form = fb.group({
      user: fb.control(null, Validators.required),
      email: fb.control(null,Validators.required),
      optional: fb.control(null, Validators.required)
    })
  }

  saveUser() {
    const user = {
      username: this.form.controls.user.value,
      email: this.form.controls.email.value,
      optional: this.form.controls.optional.value
    }
    if(this.form.valid){
      this.listUsers.push(user);
      console.log(this.listUsers);
    } else {
      alert("Campi obbligatori per la registrazione dell'utente");
    }

    
  }

  deleteUser(index: number) {
    if (confirm("Sei sicuro di voler eliminare l'utente?")) {
      this.listUsers.splice(index, 1);
      console.log(this.listUsers);
    }

  }

  checkEmail() {
    let email = this.form.controls.email.value;
    if(email == null) {
      this.form.controls.email.setErrors({incorect: true});
    } else {
      this.form.controls.email.setErrors(null);
    }
  }


  ngOnInit(): void {
    this.http.loadIP().subscribe((res: any) => {
      this.ipAddress = res.ip;
    });
  }
}
