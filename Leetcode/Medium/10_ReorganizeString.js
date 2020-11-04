/*

Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.

If possible, output any possible result.  If not possible, return the empty string.


Input: S = "aab"
Output: "aba"

Input: S = "aaab"
Output: ""

*/

/*

todo: Get every possible permutation of the characters given. Each time we get a permutation, check if the character adjacent are all different



todo: Build a hash based on character count, sort the hash from the largest count to smallest
A character count that is larger than half of the string length is considered invalid
Start filling characters to all the even indexs, i.e. 0, 2, 4,..., when we got to the end, start filling odd indexes i.e. 1,3,5,...
By filling the characters this way, we can make sure that no same characters will be adjacent to each other
*/
