import { getElementAttr, getElements } from '../../helpers/getter';
import { validateElementAttr, validateText } from '../../helpers/validator';
import { onEvent } from '../../helpers/lifecycleManager';

export const commaizeNumber = () => {
  const customAttr = 'tc-format-number';
  const attrValue = 'comma';

  const elements = getElements(`[${customAttr}]`);

  elements.forEach((elem: Element) => {
    const attr = getElementAttr(elem, customAttr);

    if (validateElementAttr(attr, attrValue)) {
      const hasText = validateText(elem.textContent);
      const number = parseInt(hasText, 10);

      if (!Number.isNaN(number)) {
        elem.textContent = number.toLocaleString('ko-KR');
      }
    }
  });
};

onEvent('DOMContentLoaded', commaizeNumber);
