/**
 * Represents the parameters required to construct a Gym object.
 */
type ConstructorParams = {
  gymId: number;
  gymName: string;
  address: string;
};

/**
 * Represents a Gym entity.
 */
export class Gym {
  public gymId: number;
  public gymName: string;
  public address: string;

  /**
   * Constructs a new Gym object.
   * @param {ConstructorParams} params - The parameters required to construct the Gym object.
   */
  constructor({gymId, gymName, address}: ConstructorParams) {
    this.gymId = gymId;
    this.gymName = gymName;
    this.address = address;
  }
}
