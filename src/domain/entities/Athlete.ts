/**
 * Represents the parameters required to construct an Athlete object.
 */
type ConstructorParams = {
  athleteId: number;
  athleteName: string;
  athleteLastName: string;
  email: string;
  phoneNumber: string;
  birthDate: string | Date;
  genre: string;
  status: boolean;
  token: string | null;
  refreshToken: string | null;
  startDate: string | Date | null;
  endDate: string | Date | null;
  membershipName: string | null;
  membershipId: number | null;
  idGym: number;
};

/**
 * Represents an Athlete.
 */
export class Athlete {
  public athleteId: number;
  public athleteName: string;
  public athleteLastName: string;
  public email: string;
  public phoneNumber: string;
  public birthDate: string | Date;
  public genre: string;
  public status: boolean;
  public token: string | null;
  public refreshToken: string | null;
  public startDate: string | Date | null;
  public endDate: string | Date | null;
  public membershipName: string | null;
  public membershipId: number | null;
  public idGym: number;

  /**
   * Constructs an instance of the Athlete class.
   * @param {ConstructorParams} params - The parameters to initialize the Athlete object.
   */
  constructor({
    athleteId,
    athleteName,
    athleteLastName,
    email,
    phoneNumber,
    birthDate,
    genre,
    status,
    token,
    refreshToken,
    startDate,
    endDate,
    membershipName,
    membershipId,
    idGym,
  }: ConstructorParams) {
    this.athleteId = athleteId;
    this.athleteName = athleteName;
    this.athleteLastName = athleteLastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.birthDate = birthDate;
    this.genre = genre;
    this.status = status;
    this.token = token;
    this.refreshToken = refreshToken;
    this.startDate = startDate;
    this.endDate = endDate;
    this.membershipName = membershipName;
    this.membershipId = membershipId;
    this.idGym = idGym;
  }
}
