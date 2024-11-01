import { PROMPT_MSG } from '../core/constants';

export const validateElements = (elements: NodeListOf<Element> | null): Element | NodeListOf<Element> => {
  if (!elements) {
    throw new Error(PROMPT_MSG.EMPTY_ELEM);
  }

  return elements;
};

export const validateElementsAttr = (elements: NodeListOf<Element>, customAttr: string, value: string): boolean => {
  return Array.from(elements).some((elem: Element) => {
    const customAttrValue = elem.getAttribute(customAttr);
    return customAttrValue === value;
  });
};

export const validateElementsText = (text: string | null): string => {
  if (!text) {
    throw new Error(PROMPT_MSG.EMPTY_TEXT);
  }

  return text;
};