// TODO: write your code here;
import sum from './basic';
import * as Hero from './heroes';


console.log('worked');

console.log(sum([1, 2]));


const hero = { name: 'Маг', health: 49 };
try {
  if ((!!hero.name) || (hero.name.length <= 1 && hero.name.length >= 30)) {
    const heroes = new Hero(hero);
    console.log(heroes.statusHealtly);
  } else {
    throw new SyntaxError('Длина имени от 1 до 30 символов');
  }
} catch (e) {
  console.log(e.message);
}
