import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ServerStatusComponent } from './components/server-status/server-status.component';
import { TrafficComponent } from './components/traffic/traffic.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { DashboardItemComponent } from './components/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ServerStatusComponent, TrafficComponent, TicketsComponent, DashboardItemComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

}
