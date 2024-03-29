type ConstructorParams = {
  email: string;
  whatsApp: string;
  web: string;
  phoneNumber: string;
};

export class ContactInformation {
  public email: string;
  public whatsApp: string;
  public web: string;
  public phoneNumber: string;

  constructor({email, whatsApp, web, phoneNumber}: ConstructorParams) {
    this.email = email;
    this.whatsApp = whatsApp;
    this.web = web;
    this.phoneNumber = phoneNumber;
  }
}
