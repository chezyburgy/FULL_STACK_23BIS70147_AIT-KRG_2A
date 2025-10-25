const svg = document.getElementById('canvas');
const undoBtn = document.getElementById('undo-btn');
let drawings = [];

svg.addEventListener('mousedown', (e) => {
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', e.offsetX);
  circle.setAttribute('cy', e.offsetY);
  circle.setAttribute('r', '8');
  circle.setAttribute('fill', 'blue');
  svg.appendChild(circle);
  drawings.push(circle);
});

undoBtn.addEventListener('click', () => {
  const last = drawings.pop();
  if (last) {
    svg.removeChild(last);
  }
});
