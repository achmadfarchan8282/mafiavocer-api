export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      return new Response("MAFIA VOCER API ONLINE", {
        headers: { "Content-Type": "text/plain" },
      });
    }

    if (url.pathname === "/bing") {
      const q = url.searchParams.get("q") || "";
      return new Response(
        JSON.stringify({
          link: "https://www.bing.com/search?q=" + encodeURIComponent(q),
        }),
        { headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response("404 Not Found", { status: 404 });
  },
};
