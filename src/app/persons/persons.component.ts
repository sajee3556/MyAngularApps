import { Component, OnInit, OnDestroy} from '@angular/core';
import { PersonService } from './person.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-persons',
    templateUrl: './persons.component.html'
})
export class PersonComponent implements OnInit, OnDestroy{
    // @Input()
    personSubList : Subscription;
    personList: string[];
    isFetching = false ;
    // private personService : PersonService; instead of this use private / public

    constructor(private personService : PersonService){
            // this.personService = personService;
    }

    ngOnInit(){
        // this.personList = this.personService.persons;
        this.personSubList = this.personService.personsChanged.subscribe(persons => {
            this.personList = persons;
            this.isFetching = false;
        });
        this.isFetching = true;
        this.personService.fetchPersons();
    }

    removedPerson(name: string){
        this.personService.removePerson(name);
    }

    ngOnDestroy(){
        this.personSubList.unsubscribe();
    }
}