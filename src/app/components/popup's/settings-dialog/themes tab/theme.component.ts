import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit { 

  userProfilePicture: string
  selectedFile: File = null
  userNameMeta: string

  constructor() { }

  ngOnInit(): void {

  }



}

