/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/.
 */

export default {
  async fetch(request, env, ctx) {
    return new Response('<!DOCTYPE><html lang="en-US"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1" /><title>Mattle.WTF</title></head><body><h1>Hello Monsters! 🦖</h1></body></html>', {
      headers: {
        "Content-Type":"text/html",
        "Content-Encoding":"utf-8",
        "X-Frame-Options": "DENY",
        "X-Content-Type-Options": "nosniff",
        "Referrer-Policy": "no-referrer",
        "Permissions-Policy": "document-domain=()",
        "Content-Security-Policy": "script-src 'self'; frame-ancestors 'none';",
        "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
        "X-Robots-Tag": "noindex, noarchive, nosnippet"
      },
    });
  },
};
