import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-stats',
  templateUrl: './dashboard-stats.component.html',
  styleUrls: [
    './dashboard-stats.component.css',
    '../../styles/card.css'
  ]
})
export class DashboardStatsComponent {
  public title = 'Home';

  public tiles = [
    {title: 'Sales', value: '£243,343', cols: 1, rows: 1},
    {title: 'Total Units Sold', value: '54,922', cols: 1, rows: 1},
    {title: 'Current Growth', value: '67%', cols: 1, rows: 1},
    {title: 'Projected Sales', value: '£343,223', cols: 1, rows: 1},
  ];
}
