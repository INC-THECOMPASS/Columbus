import PROMPT_MSG from '../core/constants';

const validateElements = (
  elements: NodeListOf<Element> | null,
): Element | NodeListOf<Element> => {
  if (!elements) {
    throw new Error(PROMPT_MSG.empty_elem);
  }

  return elements;
};

const validateAttr = (attr: string, value: string): boolean => {
  return attr === value;
};

const validateAttrInList = (attr: string, validAttrs: string[]): boolean => {
  return validAttrs.includes(attr);
}

const validateText = (text: string | null): string => {
  if (!text) {
    throw new Error(PROMPT_MSG.empty_text);
  }

  return text;
};

export { validateElements, validateAttr, validateAttrInList, validateText };
