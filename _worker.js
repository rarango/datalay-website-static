export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "datalay.com") {
      url.hostname = "www.datalay.com";
      return Response.redirect(url.toString(), 301);
    }
    const p = url.pathname;
    if (p === "/google98554f8a03f49a24.html" || p === "/google98554f8a03f49a24") {
      return new Response("google-site-verification: google98554f8a03f49a24.html\n", {
        status: 200,
        headers: {
          "content-type": "text/html; charset=utf-8",
          "cache-control": "no-store",
        },
      });
    }
    return env.ASSETS.fetch(request);
  },
};
