import { EnergyType } from '../Energy';
import Archetype from './Archetype';

const warriors: Warrior[] = [];

class Warrior extends Archetype {
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    warriors.push(this);
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static override createdArchetypeInstances(): number {
    return warriors.length;
  }
}

export default Warrior;
