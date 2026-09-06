# Datalay website (static)

Production static site for [www.datalay.com](https://www.datalay.com), deployed on Cloudflare Pages (`datalay-website`).

- English at `/`, Spanish at `/es/`
- Apex `datalay.com` redirects to `www`
- Astro/source project is separate (`Fsanchezan/datalay-site`, maintained with ChatGPT)

## Local preview

```bash
python3 -m http.server 8080 --directory .
```

Open http://localhost:8080/

## Deploy

Cloudflare Pages project: `datalay-website`  
`wrangler pages deploy . --project-name=datalay-website`
