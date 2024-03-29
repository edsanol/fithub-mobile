type ConstructorParams = {
  athleteName: string;
  athleteLastName: string;
  email: string;
  phoneNumber: string;
  birthDate: string | Date;
  genre: string;
};

export class AthleteEditRequestModel {
  public athleteName: string;
  public athleteLastName: string;
  public email: string;
  public phoneNumber: string;
  public birthDate: string | Date;
  public genre: string;

  constructor({
    athleteName,
    athleteLastName,
    email,
    phoneNumber,
    birthDate,
    genre,
  }: ConstructorParams) {
    this.athleteName = athleteName;
    this.athleteLastName = athleteLastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.birthDate = birthDate;
    this.genre = genre;
  }
}
