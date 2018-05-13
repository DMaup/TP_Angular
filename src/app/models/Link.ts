
export class Link {


  private _link_user_id: number;
  private _link_event_id: number;

  static empty(): Link {
    return new Link(null, null);
  }

  constructor(link_user_id: number, link_event_id: number) {

    // this._user_id  = user_id;
    this._link_user_id = link_user_id;
    this._link_event_id = link_event_id;
  }

  get link_user_id(): number {
    return this._link_user_id;
  }

  set link_user_id(value: number) {
    this._link_user_id = value;
  }

  get link_event_id(): number {
    return this._link_event_id;
  }

  set link_event_id(value: number) {
    this._link_event_id = value;
  }
}
