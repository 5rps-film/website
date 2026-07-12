# GCS media procedure

Read this file only when the user requests media upload or verified GCS URLs are needed for the post.

## Fixed configuration

- Google Cloud project: `akiyamasho-portfolio`
- Bucket: `gs://5rps-film-public-media`
- Public base URL: `https://storage.googleapis.com/5rps-film-public-media`
- Location: `us-central1`
- Storage class: `STANDARD`
- Access: uniform bucket-level access with public object viewer
- Allowed browser origins: `https://5rps.jp`, `https://www.5rps.jp`, and `http://localhost:3000`

This is a public-only bucket. Anyone can read published objects, and bucket-level public access can expose object names through listing APIs. Never upload working files, private notes, credentials, embargoed material, or assets that have not been approved for public release.

## Post prefixes

Create exactly one top-level prefix per post:

```text
YYYYMMDD_short-description/
```

Rules:

- Match `YYYYMMDD` to the post date and MDX filename.
- Use one concise lowercase ASCII description.
- Separate words inside the description with hyphens.
- Use only `a-z`, `0-9`, and hyphens after the underscore.
- Reuse the same prefix when revising a post. Never create `final`, `final-2`, or similar prefixes.
- Put every derivative for that post directly inside its prefix unless a large post clearly requires `images/` and `video/` sub-prefixes.

Current prefixes:

```text
20250101_instagram-release/
20250902_first-clip/
20251211_trailer/
20260711_screenplay-complete/
```

GCS uses object-name prefixes rather than filesystem directories. Existing empty prefixes are represented by zero-byte `.keep` objects. Remove the marker only if cleanup is useful after real media exists; it is harmless if retained.

## Preconditions

Before uploading, establish all of the following from repository configuration or the user:

- active `gcloud` account authorized for project `akiyamasho-portfolio`;
- approved post prefix following the rule above;
- authenticated CLI or workload identity;
- permission to make the derivative public;
- confirmed credit and publication rights.

Never discover or broaden IAM policy as a side effect of drafting. Never place a service-account key in the repository. If configuration is absent, stop at an upload manifest with proposed object names.

## Object rules

- Upload only web derivatives selected under `media-compression.md`, not production originals.
- Use only the configured public-media bucket.
- Use a path such as `YYYYMMDD_short-description/<descriptive-name>-<content-hash>.<ext>`.
- Set the correct `Content-Type`.
- For immutable hashed assets, use `Cache-Control: public,max-age=31536000,immutable`.
- Do not overwrite an existing hashed object with different bytes.
- Remove sensitive EXIF and location metadata unless it is intentionally public.
- Verify the public URL with a HEAD request and confirm content type, content length, cache control, and browser accessibility.
- When the website renders the object with Next.js `next/image`, also add or verify a narrow `images.remotePatterns` entry for `storage.googleapis.com` and the configured bucket path. After deployment, require a successful `/_next/image` optimizer response; direct GCS HTTP 200 alone is insufficient.

Use the browser-facing form:

```text
https://storage.googleapis.com/5rps-film-public-media/YYYYMMDD_short-description/OBJECT_NAME
```

Do not use `storage.cloud.google.com` in a public post.

## Video

- Prefer H.264 video with AAC audio in MP4 for broad playback.
- Enable fast-start metadata placement.
- Generate a poster image.
- Use `preload="metadata"`, native controls, and `playsInline`.
- Direct GCS playback is suitable for modest public clips. Recommend a streaming service when adaptive bitrate, long-form delivery, or high traffic is required.

## Upload boundary

Show the planned local derivative to object-name mapping before upload unless the user has already approved the exact mapping. Uploading is an external state change and must not be hidden inside validation. After upload, verify every public URL with a HEAD request before inserting it into MDX.
