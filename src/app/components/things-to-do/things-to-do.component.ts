import { Component } from '@angular/core';

@Component({
  selector: 'app-things-to-do',
  templateUrl: './things-to-do.component.html',
  styleUrls: [
    './things-to-do.component.css',
    '../../styles/card.css'
  ]
})
export class ThingsToDoComponent {
  public title = 'things-to-do';

  public things = [
    {
      name: 'File taxes',
      dueDate: new Date('5/15/17'),
    },
    {
      name: 'Meet with client',
      dueDate: new Date('5/17/17'),
    },
    {
      name: 'Update stock',
      dueDate: new Date('5/28/17'),
    }
  ];
}
