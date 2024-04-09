function merge(nums1: number[], m: number, nums2: number[], n: number): number[] {
  let i: number = m - 1;
  let j: number = n - 1;
  let k: number;

  m >= n ? k = i : k = n;

  if (nums1.length >= m) nums1.splice(m);

  for (k; k >= 0; k--) {
    if (n == 0) return nums1;
    nums1.splice(k, 0, nums2[j]);
    j--;
  }
  return nums1.sort();
}




console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1, 2, 3, 0, 0, 0], 3, [4, 5, 6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));
