import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {EventLiteral} from '../models/Myevent';
import {Link} from '../models/Link';

interface EventJson {
  success: boolean;
  link_user_id: number;
  events: EventLiteral[];
}

interface LinkJson{
  success: boolean;
  link_user_id: number;
  link_event_id: number;
  links: Link[];
}

@Injectable()
export class EventService {

  private service_url: string = 'http://localhost/APIS/TP_Webservice/';

  constructor(private http: HttpClient) {
  }

  getAllEvents(): Observable<EventJson> {
    return this.http.get(this.service_url + 'events') as Observable<EventJson>;
  }

  getEventsByCatName(category): Observable<EventJson> {
    return this.http.get(this.service_url + 'events/category/' + category) as Observable<EventJson>;
  }

  getAllLinks(): Observable<LinkJson> {
    return this.http.get(this.service_url + 'links') as Observable<LinkJson>;
  }
}
