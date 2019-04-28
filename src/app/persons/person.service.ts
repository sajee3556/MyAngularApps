import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PersonService{
    personsChanged = new Subject<string[]>();
    persons: string[] = ['Sajee','Maya','Thanu'];

    constructor(private http: HttpClient){}

    fetchPersons(){
        this.http.get<any>('https://swapi.co/api/people')
        .pipe(map(resData =>        //map operator fron rxjs
            {
                return resData.results.map(character => character.name); //normal javascript map
            }))
        .subscribe(
            transformData => 
            {
                this.personsChanged.next(transformData);
            });
    }

    addPerson(name: string){
        this.persons.push(name);
        console.log(this.persons);
        this.personsChanged.next(this.persons);
    }

    removePerson(name: string){
        this.persons = this.persons.filter(
            person => {return person !== name;}
        );
        this.personsChanged.next(this.persons);
    }
}