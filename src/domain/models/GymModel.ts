import {Gym} from '../entities/Gym';

/**
 * Represents the constructor parameters for the GymModel class.
 */
type ConstructorParams = {
  gymId: number;
  gymName: string;
  email: string;
  address: string;
  phoneNumber: string;
  subscriptionPlan: string;
  memberNumber: number;
  comments: string;
  status: boolean;
  stateGym: string;
  token: null;
  refreshToken: null;
  nit: string;
};

/**
 * Represents a gym model.
 */
export class GymModel {
  public gymId: number;
  public gymName: string;
  public email: string;
  public address: string;
  public phoneNumber: string;
  public subscriptionPlan: string;
  public memberNumber: number;
  public comments: string;
  public status: boolean;
  public stateGym: string;
  public token: null;
  public refreshToken: null;
  public nit: string;

  /**
   * Creates an instance of GymModel.
   * @param {ConstructorParams} params - The constructor parameters.
   */
  constructor({
    gymId,
    gymName,
    email,
    address,
    phoneNumber,
    subscriptionPlan,
    memberNumber,
    comments,
    status,
    stateGym,
    token,
    refreshToken,
    nit,
  }: ConstructorParams) {
    this.gymId = gymId;
    this.gymName = gymName;
    this.email = email;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.subscriptionPlan = subscriptionPlan;
    this.memberNumber = memberNumber;
    this.comments = comments;
    this.status = status;
    this.stateGym = stateGym;
    this.token = token;
    this.refreshToken = refreshToken;
    this.nit = nit;
  }

  /**
   * Converts a JSON object to a GymModel instance.
   * @param {GymModel} json - The JSON object representing a GymModel.
   * @returns {GymModel} - The converted GymModel instance.
   */
  public static toGymModel(json: GymModel): GymModel {
    return new GymModel({
      gymId: json.gymId,
      gymName: json.gymName,
      email: json.email,
      address: json.address,
      phoneNumber: json.phoneNumber,
      subscriptionPlan: json.subscriptionPlan,
      memberNumber: json.memberNumber,
      comments: json.comments,
      status: json.status,
      stateGym: json.stateGym,
      token: json.token,
      refreshToken: json.refreshToken,
      nit: json.nit,
    });
  }

  /**
   * Converts the GymModel instance to a Gym instance.
   * @returns {Gym} - The converted Gym instance.
   */
  public toDomain(): Gym {
    return new Gym({
      gymId: this.gymId,
      gymName: this.gymName,
      address: this.address,
    });
  }
}
