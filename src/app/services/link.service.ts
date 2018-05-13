import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {LinkComponent} from '../link/link.component';
import {Link} from '../models/Link';

interface LinkJson{
  success: boolean;
  link_user_id: number;
  link_event_id: number;
  links: Link[];
}

@Injectable()
export class LinkService {
  private service_url: string = 'http://localhost/APIS/TP_Webservice/';


  constructor(private http: HttpClient) { }

  sub(link_user_id, link_event_id): Observable<LinkJson>  {
    return this.http.post(this.service_url + 'link', {link_user_id, link_event_id}) as  Observable<LinkJson>;
  }

  unsub(link_user_id, link_event_id): Observable<{success: boolean}> {
    return this.http.delete(this.service_url + 'link/' + link_user_id + '/' + link_event_id) as Observable<{success: boolean}>;
  }

  getAllLinks(): Observable<LinkJson> {
    return this.http.get(this.service_url + 'links') as Observable<LinkJson>;
  }

  getLinksByUser(link_user_id): Observable<LinkJson> {
    return this.http.get(this.service_url + 'links/link/' + link_user_id) as Observable<LinkJson>;
  }

}


