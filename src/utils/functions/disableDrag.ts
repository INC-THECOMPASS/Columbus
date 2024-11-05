import { onEvent } from '../../helpers/lifecycleManager';
import { getElementAttr, getElements } from '../../helpers/getter';
import { PROMPT_MSG } from '../../core/constants';

export const disableDrag = () => {
  const customAttr = 'tc-functions-element';
  const attrValue = ['disable-drag', 'disable-drag-except-menu'];

  const elements = getElements(`[${customAttr}]`);

  elements.forEach((elem: Element) => {
    const attr = getElementAttr(elem, customAttr);

    switch (attr) {
      case attrValue[0]:
        _disableContextMenu(elem);
        _disableKeyDown(elem);
        _disableDragStart(elem);
        break;
      case attrValue[1]:
        _disableKeyDown(elem);
        _disableDragStart(elem);
        break;
      default:
        throw new Error(PROMPT_MSG.wrong_attr);
    }
  });
};

const _disableContextMenu = (elem: Element): void => {
  elem.addEventListener('contextmenu', (event) => {
    event.preventDefault();
  });
};

const _disableKeyDown = (elem: Element): void => {
  elem.addEventListener('selectstart', (event) => {
    event.preventDefault();
  });
};

const _disableDragStart = (elem: Element): void => {
  elem.addEventListener('dragstart', (event) => {
    event.preventDefault();
  });
};

onEvent('DOMContentLoaded', disableDrag);
