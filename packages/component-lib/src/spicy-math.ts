import { add } from "@mylibrary/client-lib/src/math";

export function spicyAdd(a: number, b: number) {
  return `SPICY! ${add(a, b)}`;
}
