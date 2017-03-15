import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-inputtest',
  templateUrl: './inputtest.component.html',
  styleUrls: ['./inputtest.component.css']
})
export class InputtestComponent implements OnInit {

  spaceScreens: Array<any>;

  constructor(private http: Http) {

    // this.http.get('./data.json')
    //   .map(response => response.json().screenshots)
    //   .subscribe(res => this.spaceScreens = res);

    this.spaceScreens = [
      {
        "img": "assets/images/space1.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "liked": "0"
      },
      {
        "img": "assets/images/space2.jpg",
        "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "liked": "0"
      },
      {
        "img": "assets/images/space3.jpg",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "liked": "0"
      }
    ]


  }

  likeMe(i) {
    if (this.spaceScreens[i].liked == 0)
      this.spaceScreens[i].liked = 1;
    else
      this.spaceScreens[i].liked = 0;
  }

  deleteMe(i) {
    this.spaceScreens.splice(i, 1);
    console.log(i);
  }

  ngOnInit() {
  }

}
