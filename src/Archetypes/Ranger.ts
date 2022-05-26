import { EnergyType } from '../Energy';
import Archetype from './Archetype';

const rangers: Ranger[] = [];

class Ranger extends Archetype {
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    rangers.push(this);
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static override createdArchetypeInstances(): number {
    return rangers.length;
  }
}

export default Ranger;
