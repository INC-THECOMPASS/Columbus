import { onEvent } from '../../helpers/lifecycleManager';
import { getElementAttr, getElements } from '../../helpers/getter';
import { validateAttr } from '../../helpers/validator';
import { disableDrag } from './common/common';

const preventDrag = () => {
  const customAttr = 'tc-prevent-drag';
  const attrValue = 'true';

  const elements = getElements(`[${customAttr}]`);

  elements.forEach((elem: Element) => {
    const attr = getElementAttr(elem, customAttr);

    if (validateAttr(attr, attrValue)) {
      disableDrag(elem);
    }
  });
};

onEvent('DOMContentLoaded', preventDrag);

export default preventDrag;
