type ConstructorParams = {
  email: string;
};

export class VerifyLoginModel {
  public email: string;

  constructor({email}: ConstructorParams) {
    this.email = email;
  }
}
