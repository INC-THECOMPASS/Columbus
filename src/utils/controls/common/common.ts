const disableContextMenu = (): void => {
  document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
  });
};

const disableDrag = (): void => {
  document.addEventListener('dragstart', (event) => {
    event.preventDefault();
  });
};

const disableKeydown = (): void => {
  document.addEventListener('keydown', (event) => {
    event.preventDefault();
  });
};

export { disableContextMenu, disableDrag, disableKeydown };
