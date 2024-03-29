type ConstructorParams = {
  email: string;
  password: string;
};

export class LoginModel {
  public email: string;
  public password: string;

  constructor({email, password}: ConstructorParams) {
    this.email = email;
    this.password = password;
  }
}
