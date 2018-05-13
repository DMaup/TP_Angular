export class User {

  static empty(): User {
    return new User('', '');
  }

  public _user_id: number;
  public _username: string;
  public _password: string;

  constructor(username: string, password: string) {

    // this._user_id  = user_id;
    this._username = username;
    this._password = password;
  }

  toJson() {
    return {
      // user_id: this._user_id,
      username: this._username,
      password: this._password
    };
  }
  get user_id(): number {
    return this._user_id;
  }

  set user_id(value: number) {
    this._user_id = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }
}

export interface UserLiteral {
  user_id: number;
  username: string;
  password: string;
}
