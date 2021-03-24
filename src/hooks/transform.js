const useZoom = (

  targetElement,
  movingElement = targetElement,
  minScale = 0.125,
  maxScale = 4,
  zoomSpeed = 0.1

) => {

  let pointer = { x: 0, y: 0 };
  let target = { x: 0, y: 0 };
  let pos = { x: 0, y: 0 };

  targetElement.addEventListener('wheel', (e) => {
    pointer.x = e.clientX - movingElement.offsetLeft;
    pointer.y = e.clientY - movingElement.offsetTop;

    target.x = (pointer.x - pos.x) / this.scale;
    target.y = (pointer.y - pos.y) / this.scale;

    this.scale = Math.min(Math.max(
      this.scale + Math.sign(e.deltaY) * -zoomSpeed,
      minScale), maxScale
    );

    pos.x = -target.x * this.scale + pointer.x;
    pos.y = -target.y * this.scale + pointer.y;

    movingElement.style.transform = `translate(${pos.x}px, ${pos.y}px) scale(${this.scale})`;
    // localStorage.setItem(movingElement.id + 'Pos', JSON.stringify(pos));
    // localStorage.setItem('scale', this.scale);
  }, true);
};

export { useZoom };