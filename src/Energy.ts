export type EnergyType = 'mana' | 'stamina';

interface Energy {
  amount: EnergyType,
  type_: string,
}

export default Energy;
