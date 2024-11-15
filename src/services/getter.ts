import { validateElements, validateText } from './validator';

const getElements = (selector: string): NodeListOf<Element> => {
  const elements = document.querySelectorAll(selector);
  validateElements(elements);

  return elements;
};

const getElementAttr = (element: Element, customAttr: string): string => {
  const attr = element.getAttribute(validateText(customAttr));
  return validateText(attr);
};

export { getElements, getElementAttr };
