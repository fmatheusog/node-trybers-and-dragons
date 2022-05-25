import Race from './Race';

const orcs: Orc[] = [];

class Orc extends Race {
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    orcs.push(this);
  }

  maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return orcs.length;
  }
}

export default Orc;
