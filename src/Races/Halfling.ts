import Race from './Race';

const halflings: Halfling[] = [];

class Halfling extends Race {
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    halflings.push(this);
  }

  maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return halflings.length;
  }
}

export default Halfling;
