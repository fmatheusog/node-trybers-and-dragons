import { EnergyType } from '../Energy';
import Archetype from './Archetype';

const mages: Mage[] = [];

class Mage extends Archetype {
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    mages.push(this);
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static override createdArchetypeInstances(): number {
    return mages.length;
  }
}

export default Mage;
