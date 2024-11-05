import { PROMPT_MSG } from '../core/constants';

export const validateElements = (
  elements: NodeListOf<Element> | null,
): Element | NodeListOf<Element> => {
  if (!elements) {
    throw new Error(PROMPT_MSG.empty_elem);
  }

  return elements;
};

export const validateElementAttr = (attr: string, value: string): boolean => {
  return attr === value;
};

export const validateText = (text: string | null): string => {
  if (!text) {
    throw new Error(PROMPT_MSG.empty_text);
  }

  return text;
};
