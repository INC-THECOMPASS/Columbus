import { onEvent } from '../../helpers/lifecycleManager';
import { getElementAttr, getElements } from '../../helpers/getter';
import { validateAttr } from '../../helpers/validator';
import { disableContextMenu } from './common/common';

const preventContextMenu = () => {
  const customAttr = 'tc-prevent-contextmenu';
  const attrValue = 'true';

  const elements = getElements(`[${customAttr}]`);

  elements.forEach((elem: Element) => {
    const attr = getElementAttr(elem, customAttr);

    if (validateAttr(attr, attrValue)) {
      disableContextMenu(elem);
    }
  });
};

onEvent('DOMContentLoaded', preventContextMenu);

export default preventContextMenu;
