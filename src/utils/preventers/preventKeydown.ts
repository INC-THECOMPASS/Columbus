import { onEvent } from '../../helpers/lifecycleManager';
import { getElementAttr, getElements } from '../../helpers/getter';
import { validateAttr } from '../../helpers/validator';
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
