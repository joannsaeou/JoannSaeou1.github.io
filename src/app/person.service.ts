import { Injectable } from '@angular/core';
import { Person } from './person.interface';  // interface file
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  
  persons: Array<Person>;


  constructor() {
    this.persons = [
      {personId: 10001, fullName: 'Joann Saeou', email: 'joannssaeou@gmail.com'},

]
  }


  getPersons(): Observable<Person[]> {
    return of (this.persons);   // must match the property name

}

getPerson(personId: number) {
  for (const person of this.persons) {
      if (person.personId === personId){
          return person;


          }
      }
    }

    filterPersons(name: string): Observable<Person[]> {
      return of (this.persons).pipe(
        map(persons =>
          persons.filter(person => person.fullName.toLowerCase().indexOf(name) > -1)))
  }
}












