import { removeDuplicates } from "../questionSetOne/removeDuplicatess";

let nums = [];

const example = () => (nums = [1, 1, 2]);
const example2 = () => (nums = [0,0,1,1,1,2,2,3,3,4]);

test("test removeDuplicates example 1", () => {
  example();
  const length = removeDuplicates(nums);
  expect(length).toStrictEqual(2);
  nums.length = length
  expect(nums).toStrictEqual([1, 2]);
});

test("test removeDuplicates example 2", () => {
    example2();
    const length = removeDuplicates(nums);
    expect(length).toStrictEqual(5);
    nums.length = length
    expect(nums).toStrictEqual([0,1,2,3,4]);
});
