const fs = require('fs');
const express = require('express');

const app = express();
const PORT = 3000;

function generateStarPoints(cx, cy, spikes, outerRadius, innerRadius) {
  let rot = (Math.PI / 2) * 3;
  let x = cx;
  let y = cy;
  let step = Math.PI / spikes;

  let points = '';

  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    points += `${x},${y} `;

    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    points += `${x},${y} `;

    rot += step;
  }

  return points;
}

const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <polygon points="${generateStarPoints(100, 100, 5, 80, 40)}" style="fill:gold;stroke:black;stroke-width:2" />
</svg>
`;

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(svgContent);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

const opn = require('opn');
opn(`http://localhost:${PORT}`);