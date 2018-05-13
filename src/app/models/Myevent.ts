export class Myevent {

  static empty(): Myevent {
    return new Myevent('', '', '', new Date(), '');
  }

  public _event_id: number;
  public _event_title: string;
  public _description: string;
  public _address: string;
  public _date: Date;
  public _category: string;

  constructor(event_title: string, description: string, address: string, date: Date, category: string) {

    this._event_title = event_title;
    this._description = description;
    this._address = address;
    this._date = date;
    this._category = category;
  }

  get event_id(): number {
    return this._event_id;
  }

  set event_id(value: number) {
    this._event_id = value;
  }

  get event_title(): string {
    return this._event_title;
  }

  set event_title(value: string) {
    this._event_title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get category(): string {
    return this._category;
  }

  set category(value: string) {
    this._category = value;
  }

  toJson() {
    return {
      event_title: this._event_title,
      description: this._description,
      address: this._address,
      date: this._date,
      category: this._category
    };
  }
}

  export interface EventLiteral {
  event_id: number;
  _event_id: number;
  event_title: string;
  _event_title: string;
  description: string;
  _description: string;
  address: string;
  _address: string;
  date: Date;
  _date: Date;
  category: string;
  _category: string;
}
