import Energy from '../Energy';

interface Fighter {
  lifePoints: number,
  strength: number,
  defense: number,
  energy?: Energy,

  attack(Enemy: Fighter): void,
  special(enemy: Fighter): void, 
  levelUp(): void,
  receiveDamage(attackPoints: number): void,
}

export default Fighter;
