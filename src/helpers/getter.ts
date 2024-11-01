import { validateElements } from './validator';

export const getElements = (selector: string): NodeListOf<Element> => {
  const elements = document.querySelectorAll(selector);
  validateElements(elements);

  return elements
};