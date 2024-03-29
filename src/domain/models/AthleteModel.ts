import {Athlete} from '../entities/Athlete';

type ConstructorParams = {
  athleteId: number;
  athleteName: string;
  athleteLastName: string;
  email: string;
  phoneNumber: string;
  birthDate: string | Date;
  genre: string;
  status: boolean;
  stateAthlete: string;
  token: string | null;
  refreshToken: string | null;
  startDate: string | Date | null;
  endDate: string | Date | null;
  membershipName: string | null;
  cost: number | null;
  membershipId: number | null;
  cardAccessCode: string | null;
  idGym: number;
};

/**
 * Represents the AthleteModel class.
 */
export class AthleteModel {
  public athleteId: number;
  public athleteName: string;
  public athleteLastName: string;
  public email: string;
  public phoneNumber: string;
  public birthDate: string | Date;
  public genre: string;
  public status: boolean;
  public stateAthlete: string;
  public token: string | null;
  public refreshToken: string | null;
  public startDate: string | Date | null;
  public endDate: string | Date | null;
  public membershipName: string | null;
  public cost: number | null;
  public membershipId: number | null;
  public cardAccessCode: string | null;
  public idGym: number;

  /**
   * Creates an instance of AthleteModel.
   * @param {ConstructorParams} params - The constructor parameters.
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
    stateAthlete,
    token,
    refreshToken,
    startDate,
    endDate,
    membershipName,
    cost,
    membershipId,
    cardAccessCode,
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
    this.stateAthlete = stateAthlete;
    this.token = token;
    this.refreshToken = refreshToken;
    this.startDate = startDate;
    this.endDate = endDate;
    this.membershipName = membershipName;
    this.cost = cost;
    this.membershipId = membershipId;
    this.cardAccessCode = cardAccessCode;
    this.idGym = idGym;
  }

  /**
   * Converts an AthleteModel object to an AthleteModel instance.
   * @param {AthleteModel} athlete - The AthleteModel object to convert.
   * @returns {AthleteModel} - The converted AthleteModel instance.
   */
  public static toAthleteModel(athlete: AthleteModel): AthleteModel {
    return new AthleteModel({
      athleteId: athlete.athleteId,
      athleteName: athlete.athleteName,
      athleteLastName: athlete.athleteLastName,
      email: athlete.email,
      phoneNumber: athlete.phoneNumber,
      birthDate: athlete.birthDate,
      genre: athlete.genre,
      status: athlete.status,
      stateAthlete: athlete.stateAthlete,
      token: athlete.token,
      refreshToken: athlete.refreshToken,
      startDate: athlete.startDate,
      endDate: athlete.endDate,
      membershipName: athlete.membershipName,
      cost: athlete.cost,
      membershipId: athlete.membershipId,
      cardAccessCode: athlete.cardAccessCode,
      idGym: athlete.idGym,
    });
  }

  /**
   * Converts the AthleteModel instance to an Athlete instance.
   * @returns {Athlete} - The converted Athlete instance.
   */
  public toDomain(): Athlete {
    return new Athlete({
      athleteId: this.athleteId,
      athleteName: this.athleteName,
      athleteLastName: this.athleteLastName,
      email: this.email,
      phoneNumber: this.phoneNumber,
      birthDate: this.birthDate,
      genre: this.genre,
      status: this.status,
      token: this.token,
      refreshToken: this.refreshToken,
      startDate: this.startDate,
      endDate: this.endDate,
      membershipName: this.membershipName,
      membershipId: this.membershipId,
      idGym: this.idGym,
    });
  }
}
