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
      placement: { anchor: 'body', mode: 'append' },
      html: `
<style>
@keyframes float {
  0% { transform: translate(0,0) rotate(0deg); }
  25% { transform: translate(100px, -50px) rotate(90deg); }
  50% { transform: translate(-100px, 100px) rotate(180deg); }
  75% { transform: translate(50px, -100px) rotate(270deg); }
  100% { transform: translate(0,0) rotate(360deg); }
}

.pogger {
  position: fixed;
  width: 120px;
  z-index: 999999;
  animation: float 5s infinite linear;
}

.big-popup {
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  background: black;
  color: lime;
  padding: 20px;
  font-size: 18px;
  font-family: monospace;
  border: 3px solid red;
  z-index: 9999999;
  box-shadow: 0 0 20px red;
}
</style>

<script>
(function() {
  // Spawn multiple floating meme faces
  const imgUrl = "https://i.imgur.com/4M7IWwP.png"; // pog face
  for (let i = 0; i < 6; i++) {
    const img = document.createElement("img");
    img.src = imgUrl;
    img.className = "pogger";
    img.style.top = Math.random() * 90 + "%";
    img.style.left = Math.random() * 90 + "%";
    img.style.animationDuration = (3 + Math.random() * 5) + "s";
    document.body.appendChild(img);
  }

  // Meme popup with cookies
  const popup = document.createElement("div");
  popup.className = "big-popup";
  popup.innerText = 
    "ENOUGH IMPACT FOR YOU BRO?\\n\\n" +
    "🍪 document.cookie:\\n" +
    document.cookie;
  document.body.appendChild(popup);

  // Make page go slightly unhinged
  setInterval(() => {
    document.body.style.transform = "rotate(" + (Math.random() * 2 - 1) + "deg)";
  }, 200);

  // Random emoji spam
  setInterval(() => {
    const e = document.createElement("div");
    e.innerText = "💀🔥😂";
    e.style.position = "fixed";
    e.style.left = Math.random() * 100 + "%";
    e.style.top = Math.random() * 100 + "%";
    e.style.zIndex = 999999;
    document.body.appendChild(e);

    setTimeout(() => e.remove(), 2000);
  }, 300);

})();
</script>
`,
    },
  ]);
}
