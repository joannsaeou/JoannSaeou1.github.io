import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../../person.service';
import { Person } from '../../person.interface';


@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html',
  styleUrls: ['./detail-dialog.component.css']
})
export class DetailDialogComponent implements OnInit {

  personId: number;
  person: Person;  // exporting from the interface file

  constructor(private router: ActivatedRoute, private personService: PersonService) {
    this.personId = parseInt(this.router.snapshot.paramMap.get('personId'), 10);



  // to create an If statement if the person ID has a value
    if (this.personId) {
  this.person = this.personService.getPerson(this.personId);

}
  }



  ngOnInit(): void {
  }

}
