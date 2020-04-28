import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private firestore: AngularFirestore) {}
  succ = 0;
  ngOnInit(): void {
  }
  OnSubmit(data){
    console.log(data.name, data.emailid, data.passwd);
    return new Promise<any>((resolve, reject) => {
      this.firestore
          .collection('Users')
          .add(data)
          .then(res => { this.succ = 1 ; }, err => reject(err));
  });
  }

}
