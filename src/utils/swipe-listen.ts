export type SwipeDirection = 'left' | 'right' | 'up' | 'down' | 'tap';

function handleGesture(
  lastTouchStartX: number,
  lastTouchStartY: number,
  lastTouchEndX: number,
  lastTouchEndY: number,
): SwipeDirection {
  const deltaX = lastTouchEndX - lastTouchStartX;
  const deltaY = lastTouchEndY - lastTouchStartY;
  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    if (deltaX > 0) return 'right';
    return 'left';
  }
  if (Math.abs(deltaX) < Math.abs(deltaY)) {
    if (deltaY > 0) return 'down';
    return 'up';
  }
  return 'tap';
}

type SwipeListenProps = {
  onTouchStart: (event: React.TouchEvent) => void;
  onTouchEnd: (event: React.TouchEvent) => void;
};

export function swipeListen(
  callback: (direction: SwipeDirection) => void,
): SwipeListenProps {
  let lastTouchStartX = 0;
  let lastTouchStartY = 0;
  let lastTouchEndX = 0;
  let lastTouchEndY = 0;

  return {
    onTouchStart: (event) => {
      lastTouchStartX = event.changedTouches[0].screenX;
      lastTouchStartY = event.changedTouches[0].screenY;
    },
    onTouchEnd: (event) => {
      lastTouchEndX = event.changedTouches[0].screenX;
      lastTouchEndY = event.changedTouches[0].screenY;
      callback(
        handleGesture(
          lastTouchStartX,
          lastTouchStartY,
          lastTouchEndX,
          lastTouchEndY,
        ),
      );
    },
  };
}
