import { Component, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalendarService } from 'app/service/event.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  @ViewChild('myModal', { static: false }) myModal: ElementRef;
  elm: HTMLElement;
  eventForm !:FormGroup;
  events:any=[]
  calendarVisible = true;
  calendarOptions: CalendarOptions ;
  
  currentEvents: EventApi[] = [];

  constructor(private datePipe: DatePipe,private changeDetector: ChangeDetectorRef,private toastService:ToastrService,
    private calendarService:CalendarService,private fb:FormBuilder) {
  }
  ngOnInit(): void {
    this.eventForm=this.fb.group({
      title:['',Validators.required],
      start:['',Validators.required],
      end:['',Validators.required],
    })
    this.getAll()
  }
  getAll(){
    this.calendarService.getAll().subscribe(res=>{
      res.forEach(element => {
        let el={
          id:element.id+"",
          start:this.formatDate(element.start),
          end:this.formatDate(element.end),
          title:element.title
        }
        console.log(el);
        this.calendarOptions = {
          plugins: [
            interactionPlugin,
            dayGridPlugin,
            timeGridPlugin,
            listPlugin,
          ],
          headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
          },
          initialView: 'dayGridMonth',
          initialEvents :this.events, // alternatively, use the `events` setting to fetch from a feed
          weekends: true,
          editable: true,
          selectable: true,
          selectMirror: true,
          dayMaxEvents: true,
          select: this.handleDateSelect.bind(this),
          eventClick: this.handleEventClick.bind(this),
          eventsSet: this.handleEvents.bind(this)
          /* you can update a remote database when these fire:
          eventAdd:
          eventChange:
          eventRemove:
          */
        };
       
        this.events.push(el)
      });
     
   
    })
    console.log(this.events);
      }
      private formatDate(date) {
        const d = new Date(date);
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        const year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        return [year, month, day].join('-');
      }
  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    //const calendarApi = selectInfo.view.calendar;

  //  calendarApi.unselect(); // clear date selection

    if (title) {
  
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    //if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      //clickInfo.event.remove();
    //}
  }

  handleEvents(events: EventApi[]) {
    //this.currentEvents = events;
    //this.changeDetector.detectChanges();
  }

  ngAfterViewInit(): void {
    this.elm = this.myModal.nativeElement as HTMLElement;
 }
 close(): void {
     this.elm.classList.remove('show');
     setTimeout(() => {
       this.elm.style.width = '0';
     }, 75);
 }
 open(): void {
   console.log("oppp");
     this.elm.classList.add('show');
     this.elm.style.width = '100vw';
 }
 onSubmit(){
 
   this.calendarService.addEvent(this.eventForm.value).subscribe(res=>{
    this.getAll();
    this.toastService.success("Event addd with success !!");
    this.close()
    this.getAll();
   })
}
}