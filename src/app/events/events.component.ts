
import {Component, OnInit} from '@angular/core';
import {EventLiteral, Myevent} from '../models/Myevent';
import {EventService} from '../services/event.service';
import {ActivatedRoute} from '@angular/router';
import * as events from 'events';
import {Link} from '../models/Link';
import {LinkService} from '../services/link.service';
import {LoginService} from '../services/login.service';
import {User} from '../models/User';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [EventService]
})

export class EventsComponent implements OnInit {

  title = 'app';

  public events: Myevent[] = [];
  public links: Link[] = [];
  public user= [];
  public link_user_id: number = null;
  public $current_username: string;

  constructor(private loginService: LoginService, private eventService: EventService, private activatedRoute: ActivatedRoute, private linkService: LinkService) {

  }


  ngOnInit(): void {
    this.link_user_id = this.loginService.user.user_id;
    this.$current_username = this.loginService.user.username;
    console.log(this.$current_username);

    this.activatedRoute.params.subscribe(
      (data) => {
        const category: string = data.category;

        /*console.log(this.link_user_id);*/

        if (!category) {
          this.getAllEvents();
          this.getLinksByUser(this.link_user_id);

        }
        else {
          this.getEventsByCatName(category);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

 /* populateEvents(events: EventLiteral[]) {
    for (let event_json of events) {
      const date = new Date(event_json.date);
      const event: Myevent = new Myevent(event_json.event_title, event_json.description, event_json.address, date, event_json.category);
      event.event_id = event_json.event_id;

      this.events.push(event);
    }
  }*/

  getAllEvents() {
    this.eventService.getAllEvents().subscribe((data) => {
        if (data.success) {
          this.events = data.events as Myevent[];
        }
      }
    );
  }

  getEventsByCatName(category) {
    this.eventService.getEventsByCatName(category).subscribe((data) => {
        if (data.success) {
          this.events = data.events as Myevent[];


        }
      }
    );
  }

  getAllLinks() {
    this.linkService.getAllLinks().subscribe((data) => {
        if (data.success) {
          console.log(data);
          this.links = data.links as Link[];
        }
      }
    );

  }

  getLinksByUser(link_user_id) {
    /*console.log(link_user_id);*/
    this.linkService.getLinksByUser(link_user_id).subscribe((data) => {
        if (data.success) {
          console.log(data);
          this.links = data.links as Link[];
        }
      }
    );

  }
}
