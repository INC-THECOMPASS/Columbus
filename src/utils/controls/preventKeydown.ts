import { onEvent } from '../../services/lifecycleManager';
import { getElementAttr, getElements } from '../../services/getter';
import { validateAttr } from '../../services/validator';
import { disableKeydown } from './common/common';

const preventKeydown = () => {
  const customAttr = 'tc-prevent-keydown';
  const attrValue = 'true';

  const elements = getElements(`[${customAttr}]`);

  elements.forEach((elem: Element) => {
    const attr = getElementAttr(elem, customAttr);

    if (validateAttr(attr, attrValue)) {
      disableKeydown(elem);
    }
  });
};

onEvent('DOMContentLoaded', preventKeydown);

export default preventKeydown;
