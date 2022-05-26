import { EnergyType } from '../Energy';
import Archetype from './Archetype';

const necromancers: Necromancer[] = [];

class Necromancer extends Archetype {
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    necromancers.push(this);
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static override createdArchetypeInstances(): number {
    return necromancers.length;
  }
}

export default Necromancer;
