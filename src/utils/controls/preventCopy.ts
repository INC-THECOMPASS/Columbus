import { onEvent } from '../../services/lifecycleManager';
import { getElementAttr, getElements } from '../../services/getter';
import { validateAttrInList } from '../../services/validator';
import {
  disableContextMenu,
  disableDrag,
  disableKeydown,
} from './common/common';
import PROMPT_MSG from '../../config/constants';

type PreventAction = 'left_click' | 'drag' | 'keydown';
type PreventHandler = (elem: Element) => void;

const preventActionMap: Record<PreventAction, PreventHandler> = {
  left_click: disableContextMenu,
  drag: disableDrag,
  keydown: disableKeydown,
};

const preventCopy = () => {
  const customAttr = 'tc-prevent-copy';
  const attrValue = ['left_click', 'drag', 'keydown'];

  const elements = getElements(`[${customAttr}]`);

  elements.forEach((elem: Element) => {
    const attr = getElementAttr(elem, customAttr);

    const validAttrs = attr
      .split(',')
      .map((action) => action.trim())
      .filter((action): action is PreventAction =>
        validateAttrInList(action, attrValue),
      );

    if (validAttrs) {
      validAttrs.forEach((attr) => {
        preventActionMap[attr](elem);
      });
    } else throw new Error(PROMPT_MSG.wrong_attr);
  });
};

onEvent('DOMContentLoaded', preventCopy);

export default preventCopy;
