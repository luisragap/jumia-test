import { Component, OnInit } from '@angular/core';
import { User } from './models/User.model';
import { UserService } from './services/user.service';
import { Nationality } from './utils/Nationality.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  userList: User[];
  testUser: User;
  isLoading = true;
  selectedGender: 'both' | 'male' | 'female' = 'both';
  selectedNat: Nationality = Nationality.ALL;
  nationalities = Nationality;
  csvUrl: string;
  xmlUrl: string;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUserData();
    this.csvUrl = this.userService.getCSVURL();
    this.xmlUrl = this.userService.getXMLURL();
  }

  getUserData(): void {
    this.isLoading = true;
    this.userService.fetch(this.selectedGender, this.selectedNat).subscribe(data => {
      this.userList = data.results;
      this.testUser = this.userList[0];
      this.isLoading = false;
    }, error => {
      // TODO: notify user of error
      this.isLoading = false;
      console.error(error);
    });
  }

}
