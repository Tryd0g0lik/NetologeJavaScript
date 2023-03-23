import { Hero } from "../heroes";

const heroList = test.each([
  ["healthy 49 False", { name: 'Маг1', health: 49 }, "healthy"],
  ["healthy 51 True", { name: 'Маг2', health: 51 }, "healthy"],
  ["healthy 100 True", { name: 'Маг3', health: 100 }, "healthy"],
  ["healthy 149 True", { name: 'Маг4', health: 149 }, "healthy"],
  ["healthy 1049 True", { name: 'Маг5', health: 1049 }, "healthy"],
  ["wounded 51 False", { name: 'Маг1', health: 51 }, "wounded"],
  ["wounded 14 False", { name: 'Маг2', health: 14 }, "wounded"],
  ["wounded 50 True", { name: 'Маг3', health: 50 }, "wounded"],
  ["wounded 15 True", { name: 'Маг4', health: 15 }, "wounded"],
  ["wounded 30 True", { name: 'Маг5', health: 30 }, "wounded"],
  ["critical 15 False", { name: 'Маг1', health: 15 }, "critical"],
  ["critical 14 True", { name: 'Маг2', health: 14 }, "critical"],
  ["critical 0 True", { name: 'Маг3', health: 0 }, "critical"],
  ["critical -15 True", { name: 'Маг4', health: -15 }, "critical"],
  ["critical 1 True", { name: 'Маг5', health: 1 }, "critical"]
]);

heroList('test the healtly statuses wich has been equal ==> "%s"', async (a, b, expected) => {
  const testHeroes = await new Hero(b);
  const healtly = await testHeroes.statusHealtly;
  expect(healtly).toBe(expected);
});
