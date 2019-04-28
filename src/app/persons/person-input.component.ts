import { Component, Output, EventEmitter } from '@angular/core';
import { PersonService } from './person.service';

@Component({
    selector: 'app-person-input',
    templateUrl: './person-input.component.html',
    styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
    // @Output() personCreated = new EventEmitter<string>();
    personEnteredName = '';

    constructor(private personService : PersonService){}

    onCreatePerson(){ //personName: string
        console.log("Craete a person "+this.personEnteredName);
        // this.personCreated.emit(this.personEnteredName);
        this.personService.addPerson(this.personEnteredName);
        this.personEnteredName = '';
    }
}