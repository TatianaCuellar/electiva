import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private firestore: AngularFirestore,
  ) { }

  create(data: any) {
    console.log(data)
    return this.firestore.collection("peticion").add(data);
  }
}
