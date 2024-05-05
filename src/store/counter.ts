import { atom, computed } from "nanostores";

export const productCount = atom(0);
export const productMessage = computed(
  productCount,
  (v) => `${v} items selected`
);

export const increaseProdutCount = () => {
  productCount.set(productCount.get() + 1);
};
