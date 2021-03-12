interface Iadd {
  (a: number, b: number): number;
}

export let add: Iadd = (a, b) => a + b;
