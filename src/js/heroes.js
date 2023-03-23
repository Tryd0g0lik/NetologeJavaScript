export class Hero {

  constructor(hero) {
    this.name = hero.name;
    this.health = hero.health;
  }

  get statusHealtly() {
    let healthyHero = '';
    if (this.health > 50) {
      healthyHero = 'healthy';
    } else if (this.health >= 15 && this.health <= 50) {
      healthyHero = 'wounded';
    } else {
      healthyHero = 'critical';
    }
    this.healthyHero = healthyHero;
    return healthyHero;
  }
}