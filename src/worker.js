/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
  async fetch(request, env, ctx) {
    return new Response('Hello Monsters! 🦖🧌', {
      headers: {
        "X-Frame-Options": "DENY",
        "X-Content-Type-Options": "nosniff",
        "Referrer-Policy": "no-referrer",
        "Permissions-Policy": "document-domain=()",
        "Content-Security-Policy": "script-src 'self'; frame-ancestors 'none';",
        "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
      },
    });
  },
};
