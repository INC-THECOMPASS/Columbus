import { onEvent } from '../../services/lifecycleManager';
import { getElementAttr, getElements } from '../../services/getter';
import { validateAttr } from '../../services/validator';
import { disableContextMenu } from './common/common';

const preventContextMenu = () => {
  const customAttr = 'tc-prevent-contextmenu';
  const attrValue = 'true';

  const elements = getElements(`[${customAttr}]`);

  elements.forEach((elem: Element) => {
    const attr = getElementAttr(elem, customAttr);

    if (validateAttr(attr, attrValue)) {
      disableContextMenu();
    }
  });
};

onEvent('DOMContentLoaded', preventContextMenu);

export default preventContextMenu;
