import { selector } from 'rxjs/operator/multicast';
import { Component } from '@angular/core';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html'
})
export class EventComponent {
    public title = 'Events';
}
