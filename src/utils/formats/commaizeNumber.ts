import { getElements } from '../../helpers/getter';
import { validateElementsAttr, validateElementsText } from '../../helpers/validator';
import { onEvent } from '../../helpers/lifecycleManager';

export const commaizeNumber = () => {
  const elements = getElements('[tc-format-number]');
  const hasAttr = validateElementsAttr(elements, 'tc-format-number', 'comma');

  if (hasAttr) {
    elements.forEach((elem: Element) => {
      const hasText = validateElementsText(elem.textContent);
      const number = parseInt(hasText, 10);

      if (!Number.isNaN(number)) {
        elem.textContent = number.toLocaleString('ko-KR');
      }
    });
  }
};

onEvent('DOMContentLoaded', commaizeNumber);
