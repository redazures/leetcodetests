import { removeElement } from "../questionSetOne/removeElement";

let nums = [], val=0;

const example = () => (nums = [3,2,2,3], val=3);
const example2 = () => (nums = [0,1,2,2,3,0,4,2], val=2);

test("test removeElement example 1", () => {
  example();
  const length = removeElement(nums,val);
  expect(length).toStrictEqual(2);
  nums.length = length
  expect(nums.reduce((partialSum, a) => partialSum + a, 0)).toStrictEqual(4);
});

test("test removeElement example 2", () => {
    example2();
    const length = removeElement(nums,val);
    expect(length).toStrictEqual(5);
    nums.length = length
    expect(nums.reduce((partialSum, a) => partialSum + a, 0)).toStrictEqual(8);
});
