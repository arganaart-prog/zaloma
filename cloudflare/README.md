# Cloudflare R2 image API

Product images are uploaded to the `zaloma-images` R2 bucket through this Worker. Public reads use `https://cdn.zalomaflorist.com`; admin uploads and deletes use `https://images-api.zalomaflorist.com`.

## Deploy

1. Revoke any R2 API token or S3 key that was pasted into chat. This Worker uses an R2 bucket binding, so it does not need R2 API credentials.
2. Deploy `cloudflare/worker.js` as the `zaloma-image-api` Worker, either from the Cloudflare dashboard or with Wrangler from this folder.
3. Add an R2 bucket binding named `IMAGES` and select the `zaloma-images` bucket.
4. Configure the `images-api.zalomaflorist.com` custom domain for the Worker. Keep it separate from the R2 public-image domain `cdn.zalomaflorist.com`.
5. Add Worker variables from `wrangler.jsonc` (`SUPABASE_URL`, `SUPABASE_ANON_KEY`, `IMAGE_BASE_URL`, and `ALLOWED_ORIGINS`).
6. Add `ADMIN_EMAILS` as a Worker secret containing the authorized Supabase admin email addresses separated by commas. Never put these addresses in frontend code.
7. Add `GEMINI_API_KEY` as a Worker secret for the banner prompt assistant. It uses the text model `gemini-3.1-flash-lite` by default; set `GEMINI_TEXT_MODEL` if you need another supported text model. Never put API keys in frontend code.
8. Keep the R2 bucket public for reads through its R2 custom domain only. Do not expose R2 write credentials to the browser.

The Worker verifies the Supabase access token against Supabase Auth and permits mutations only for email addresses listed in `ADMIN_EMAILS`. It accepts WebP uploads up to 8 MB and restricts deletion to objects under `products/`.

## Banner AI endpoint

`POST /assist-banner-prompt` with JSON `{ "request": "..." }` returns a JSON suggestion containing a badge, headline, description, and separate desktop/mobile image prompts. The assistant does not generate images; upload the chosen image separately. Its response is restricted to a JSON schema, and promo details are not invented.

Deploy the Worker after adding the secret with `npx wrangler secret put GEMINI_API_KEY` and setting `GEMINI_TEXT_MODEL` if desired.

## Website data

Only product photos move to R2. Product URLs are saved in Supabase `products.image` and `products.images`; articles, banners, and city photos continue using the existing Supabase Storage bucket.
