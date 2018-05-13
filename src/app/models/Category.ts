export class Category {

  private _category_id: number;
  private _category: string;

  constructor(category: string) {

    this._category = category;
  }

  get category_id(): number {
    return this._category_id;
  }

  set category_id(value: number) {
    this._category_id = value;
  }

  get category(): string {
    return this._category;
  }

  set category(value: string) {
    this._category = value;
  }
}


