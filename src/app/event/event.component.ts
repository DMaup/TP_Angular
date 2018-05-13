import {Component, Input} from '@angular/core';
import {Myevent} from '../models/Myevent';
import {LoginService} from '../services/login.service';
import {LinkService} from '../services/link.service';
import {forEach} from '@angular/router/src/utils/collection';
import {Link} from '../models/Link';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  private link_user_id: number;
  private link_event_id: number;
  public links: Link[] = [];
  public link: Link[] = [];

  constructor(private loginService: LoginService, private linkService: LinkService) { }
  @Input() public usedevent: Myevent;

  sub() {
    console.log(this.loginService.user.user_id, this.usedevent.event_id);
    /* forEach(links, function (value, key) {
       let u = new User;
       u = $filter('link_user_id' = );

       console.log(key + ": " + value.name + ": " + value.age);
       }
     });



    forEach(this.link, this.links): void {*/
      this.linkService.sub(this.loginService.user.user_id, this.usedevent.event_id).subscribe(
        (data) => {
          this.link_user_id = this.loginService.user.user_id;
          this.link_event_id = this.usedevent.event_id;
          console.log('inscription ok', data);
        },
        (error) => {
          console.log('erreur requete utilisateur impossible');
        }
      );
    }

  unsub() {
    console.log(this.loginService.user.user_id, this.usedevent.event_id);

    this.linkService.unsub(this.loginService.user.user_id, this.usedevent.event_id).subscribe(
      (data) => {
        this.link_user_id  = this.loginService.user.user_id;
        this.link_event_id = this.usedevent.event_id;
        console.log('désinscription ok', data);
      },
      (error) => {
        console.log('erreur requete utilisateur impossible');
      }
    );
  }

}
