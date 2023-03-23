export function sum(items) {
  let result = 0;
  for (const item of items) {
    result += item;
  }
  return result;
}


export class Hero {
  constructor(hero) {
    this.name = hero.name;
    this.health = hero.health;
  }

  get statusHealtly() {
    let healthyHero;
    if (this.health > 50) {
      healthyHero = 'healthy';
    } elsif (this.health >= 15 && this.healyh <= 50){
      healthyHero = 'wounded';
    } else {
      healthyHero = 'critical';
    }
    this.healthyHero = healthyHero;
    return healthyHero;
  }
}
