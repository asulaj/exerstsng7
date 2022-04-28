import { Component, Input, OnInit } from '@angular/core';
import {User} from '../models/IUser'
@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
@Input() userUno: User[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
