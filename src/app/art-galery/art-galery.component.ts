import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-art-galery',
  templateUrl: './art-galery.component.html',
  styleUrls: ['./art-galery.component.less']
})
export class ArtGaleryComponent implements OnInit {


	// testForm = this.formBuilder.group({
	// 	name: '',
	// 	surname: '',
	// 	phone_number: ''
	// })

  constructor(
		// private formBuilder: FormBuilder,
	) { }

  ngOnInit(): void {}


	onSubmit() {

	}
}
