import PROMPT_MSG from '../config/constants';

const validateElements = (
  elements: NodeListOf<Element> | null,
): Element | NodeListOf<Element> => {
  if (!elements) {
    throw new Error(PROMPT_MSG.empty_elem);
  }

  return elements;
};

const validateAttr = (attr: string, value: string): boolean => {
  const isValidAttr = attr === value;

  if (!isValidAttr) {
    throw new Error(PROMPT_MSG.wrong_attr);
  }

  return isValidAttr;
};

const validateAttrInList = (attr: string, validAttrs: string[]): boolean => {
  const isValidAttr = validAttrs.includes(attr);

  if (isValidAttr) {
    throw new Error(PROMPT_MSG.wrong_attr);
  }

  return validAttrs.includes(attr);
};

const validateText = (text: string | null): string => {
  if (!text) {
    throw new Error(PROMPT_MSG.empty_text);
  }

  return text;
};

export { validateElements, validateAttr, validateAttrInList, validateText };
