import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { ControlComponent } from "../../shared/control/control.component";
import { FormsModule } from '@angular/forms';
import { Ticket } from '../tickets.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  // using two way binding
  enteredTitle = ""
  enteredTicket = ""

  @Output() add = new EventEmitter()
  // using ViewChild, ViewChildren for multiple elements
  @ViewChild('form') form?: ElementRef<HTMLFormElement>

  ngOnInit(): void {
    console.log("ONINIT")
    console.log(this.form?.nativeElement)
  }
  ngAfterViewInit(): void {
    console.log("AFTER VIEW INIT")
    console.log(this.form?.nativeElement)
  }
  //using template variables
  onSubmit(title: string, request: string, form2: HTMLFormElement
  ) {
    console.log(title)
    console.log(request)
    this.form?.nativeElement.reset()
    this.add.emit({ title: title, request: request })

  }
}
