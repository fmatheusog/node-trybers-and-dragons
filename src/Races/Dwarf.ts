import Race from './Race';

const dwarfs: Dwarf[] = [];

class Dwarf extends Race {
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    dwarfs.push(this);
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return dwarfs.length;
  }
}

export default Dwarf;
