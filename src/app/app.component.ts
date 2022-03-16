import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataloadService } from './dataload.service';
import { Observable } from 'rxjs';
import { Person } from './person';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dataFromServer: Observable<any>;

  constructor(private load: DataloadService) {}

  ngOnInit() {}

  people: Person[];
  person = new Person();

  addPerson() {
    this.load.addPerson(this.person).subscribe((data) => {
      console.log(data);
    });
  }
}
