export function sum(items) {
  let result = 0;
  for (const item of items) {
    result += item;
  }
  return result;
};


export class Hero {
  constructor(hero) {
    this.name = hero.name;
    this.health = hero.health;

  }

  get statusHealtly() {
    this.healthyHero = (this.health > 50) ? 'healthy'
    : (this.health >= 15 && this.healyh <= 50) ? 'wounded' : 'critical';
    
    return this.healthyHero;
  };
};
