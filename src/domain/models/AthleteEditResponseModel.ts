type ConstructorParams = {
  athleteId: number;
  athleteName: string;
  athleteLastName: string;
  email: string;
  phoneNumber: string;
  birthDate: string | Date;
  genre: string;
  status: boolean;
};

export class AthleteEditResponseModel {
  public athleteId: number;
  public athleteName: string;
  public athleteLastName: string;
  public email: string;
  public phoneNumber: string;
  public birthDate: string | Date;
  public genre: string;
  public status: boolean;

  constructor({
    athleteId,
    athleteName,
    athleteLastName,
    email,
    phoneNumber,
    birthDate,
    genre,
    status,
  }: ConstructorParams) {
    this.athleteId = athleteId;
    this.athleteName = athleteName;
    this.athleteLastName = athleteLastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.birthDate = birthDate;
    this.genre = genre;
    this.status = status;
  }
}
