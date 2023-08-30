import { Parameters } from "src/type";

/**
 * Returns an array of unique parameters by removing duplicate elements.
 *
 * @param {Parameters[]} params - The array of parameters to be made unique.
 * @return {Array} - An array of unique parameters.
 */
export default function uniqueParams(params: Parameters[]) {
  return Array.from(new Set(params));
}
