const disableContextMenu = (elem: Element): void => {
  elem.addEventListener('contextmenu', (event) => {
    event.preventDefault();
  });
};

const disableDrag = (elem: Element): void => {
  elem.addEventListener('dragstart', (event) => {
    event.preventDefault();
  });
};

const disableKeydown = (elem: Element): void => {
  elem.addEventListener('keydown', (event) => {
    event.preventDefault();
  });
};

export {disableContextMenu, disableDrag, disableKeydown}