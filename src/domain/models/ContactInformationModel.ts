import {ContactInformation} from '../entities/ContactInformation';

type ConstructorParams = {
  email: string;
  whatsApp: string;
  web: string;
  phoneNumber: string;
};

export class ContactInformationModel {
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

  public static toContactInformationModel = (
    data: ContactInformationModel,
  ): ContactInformationModel => {
    return new ContactInformationModel({
      email: data.email,
      whatsApp: data.whatsApp,
      web: data.web,
      phoneNumber: data.phoneNumber,
    });
  };

  public toDomain = (): ContactInformation => {
    return new ContactInformation({
      email: this.email,
      whatsApp: this.whatsApp,
      web: this.web,
      phoneNumber: this.phoneNumber,
    });
  };
}
