type LifecycleEvent = 'DOMContentLoaded' | 'load' | 'beforeunload' | 'unload';

const lifecycleEvents: { [key in LifecycleEvent]?: Array<() => void> } = {
  DOMContentLoaded: [],
  load: [],
  beforeunload: [],
  unload: [],
};

const eventFired: { [key in LifecycleEvent]?: boolean } = {
  DOMContentLoaded: false,
  load: false,
  beforeunload: false,
  unload: false,
};

// 콜백 등록 함수
export function onEvent(event: LifecycleEvent, callback: () => void) {
  if (eventFired[event]) {
    callback();
    return;
  }

  lifecycleEvents[event]?.push(callback);
}

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
