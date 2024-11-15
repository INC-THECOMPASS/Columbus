type LifecycleEvent = 'DOMContentLoaded' | 'load' | 'beforeunload' | 'unload';
type lifecycleHandler = () => void;

const lifecycleEvents: { [key in LifecycleEvent]?: Array<() => void> } = {
  DOMContentLoaded: [],
  load: [],
  beforeunload: [],
  unload: [],
};

// 이벤트 발생여부 파악
const eventFired: { [key in LifecycleEvent]?: boolean } = {
  DOMContentLoaded: false,
  load: false,
  beforeunload: false,
  unload: false,
};

// 이벤트 발생여부를 파악해, 즉시 실행에 대한 여부를 결정
const onEvent = (event: LifecycleEvent, callback: lifecycleHandler) => {
  if (eventFired[event]) {
    callback();
    return;
  }

  lifecycleEvents[event]?.push(callback);
};

// 각 이벤트 발생 시 콜백 실행
document.addEventListener('DOMContentLoaded', () => {
  eventFired.DOMContentLoaded = true;
  lifecycleEvents.DOMContentLoaded?.forEach((callback) => callback());
});

window.addEventListener('load', () => {
  eventFired.load = true;
  lifecycleEvents.load?.forEach((callback) => callback());
});

window.addEventListener('beforeunload', () => {
  eventFired.beforeunload = true;
  lifecycleEvents.beforeunload?.forEach((callback) => callback());
});

window.addEventListener('unload', () => {
  eventFired.unload = true;
  lifecycleEvents.unload?.forEach((callback) => callback());
});

export { LifecycleEvent, onEvent };
