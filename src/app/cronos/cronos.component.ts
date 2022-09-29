import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cronos',
  templateUrl: './cronos.component.html',
  styleUrls: ['./cronos.component.less']
})
export class CronosComponent implements OnInit {
	theme = 'dark';

  constructor() { }

  ngOnInit(): void {
  }

	toggleTheme() {
		this.theme === 'dark' ? this.theme = 'light' :  this.theme = 'dark';
	}
}
