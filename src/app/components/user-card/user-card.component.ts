import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.sass']
})
export class UserCardComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit(): void {
  }

}
