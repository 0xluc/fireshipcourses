import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as firebase from 'firebase/app';
import { Board } from './board.model';


@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore
  ) { }

  async createBoard(data: Board) {
    const user= await this.afAuth.currentUser;
    return this.db.collection('boards').add({
      ...data,
      uid: user?.uid,
      tasks: [{description: 'Hello!', label: 'yellow'}]
    })
  }
  deleteBoard(boardId: string){
    return this.db.collection('boards')
    .doc(boardId)
    .delete()
  }
}
