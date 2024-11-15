import { onEvent } from '../../services/lifecycleManager';
import { getElementAttr, getElements } from '../../services/getter';
import { validateAttr } from '../../services/validator';
import { disableDrag } from './common/common';

const preventDrag = () => {
  const customAttr = 'tc-prevent-drag';
  const attrValue = 'true';

  const elements = getElements(`[${customAttr}]`);

  elements.forEach((elem: Element) => {
    const attr = getElementAttr(elem, customAttr);

    if (validateAttr(attr, attrValue)) {
      disableDrag();
    }
  });
};

onEvent('DOMContentLoaded', preventDrag);

export default preventDrag;
