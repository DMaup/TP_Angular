import { Component, OnInit } from '@angular/core';
import {LinkService} from '../services/link.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EventLiteral, Myevent} from '../models/Myevent';
import {Link} from '../models/Link';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  private link_user_id: number;
  private link_event_id: number;
  public links: Link[] = [];

  constructor(private linkService: LinkService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {


  }

  /*sub() {

    this.linkService.sub( this.link_user_id, this.link_event_id ).subscribe(
      (data) => {
        if (data.success) {
          console.log('Inscription enregistrée!');

          this.route.navigate(['home']);
          return (data);
        }
        else {
          console.log('Inscription non enregistrée!');
        }
      },
      (error) => {
        console.log('erreur requete mot de passe impossible');
      }
    );

  }*/

 /* unsub() {

    this.linkService.unsub( this.link_user_id, this.link_event_id  ).subscribe(
      (data) => {
        if (data.success) {
          this.link_user_id = data.link_user_id;
          this.link_event_id = data.link_event_id;
          console.log('Inscription supprimée');
          this.route.navigate(['home']);
          return data;

        }
        else {
          console.log('Problème à la désinscription');

        }
      },
      (error) => {
        console.log('Problème à la désinscription');
      }
    );

  }*/

  /*populateLinks() {
    for (let link of links) {
      const date = new Date(event_json.date);
      const event: Myevent = new Myevent(event_json.event_title, event_json.description, event_json.address, date, event_json.category);
      event.event_id = event_json.event_id;

      this.links.push(link);
    }
  }*/
/*
  getAllLinks() {
    this.linkService.getAllLinks().subscribe((data) => {
        if (data.success) {
          console.log(data);
          this.links = data.links as Link[];
        }
      }
    );

  }*/
}
