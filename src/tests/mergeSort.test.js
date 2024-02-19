import { mergeSort } from "../questionSetOne/mergeSort";

let nums1, m, nums2, n;

export const example = () => (
  (nums1 = [1, 2, 3, 0, 0, 0]), (m = 3), (nums2 = [2, 5, 6]), (n = 3)
);

export const example2 = () => ((nums1 = [1]), (m = 1), (nums2 = []), (n = 0));

export const example3 = () => ((nums1 = [0]), (m = 0), (nums2 = [1]), (n = 1));

test("test mergeSort example 1", () => {
  example();
  mergeSort(nums1, m, nums2, n);
  expect(nums1).toStrictEqual([1, 2, 2, 3, 5, 6]);
});

test("test mergeSort example 2", () => {
  example2();
  mergeSort(nums1, m, nums2, n);
  expect(nums1).toStrictEqual([1]);
});

test("test mergeSort example 3", () => {
  example3();
  mergeSort(nums1, m, nums2, n);
  expect(nums1).toStrictEqual([1]);
});
