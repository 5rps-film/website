# GCS media procedure

Read this file only when the user requests media upload or verified GCS URLs are needed for the post.

## Preconditions

Before uploading, establish all of the following from repository configuration or the user:

- Google Cloud project and dedicated public-media bucket;
- approved object prefix for the post;
- authenticated CLI or workload identity;
- permission to make the derivative public;
- confirmed credit and publication rights.

Never discover or broaden IAM policy as a side effect of drafting. Never place a service-account key in the repository. If configuration is absent, stop at an upload manifest with proposed object names.

## Object rules

- Upload web derivatives, not production originals.
- Use a dedicated bucket containing only public material.
- Use a path such as `posts/YYYYMMDD-short-slug/<descriptive-name>-<content-hash>.<ext>`.
- Set the correct `Content-Type`.
- For immutable hashed assets, use `Cache-Control: public,max-age=31536000,immutable`.
- Do not overwrite an existing hashed object with different bytes.
- Remove sensitive EXIF and location metadata unless it is intentionally public.
- Verify the public URL with a HEAD request and confirm content type, content length, cache control, and browser accessibility.

Use the browser-facing form:

```text
https://storage.googleapis.com/BUCKET_NAME/OBJECT_NAME
```

Do not use `storage.cloud.google.com` in a public post.

## Video

- Prefer H.264 video with AAC audio in MP4 for broad playback.
- Enable fast-start metadata placement.
- Generate a poster image.
- Use `preload="metadata"`, native controls, and `playsInline`.
- Direct GCS playback is suitable for modest public clips. Recommend a streaming service when adaptive bitrate, long-form delivery, or high traffic is required.

## Upload boundary

Show the planned local derivative to object-name mapping before the first production upload unless the user has already approved the exact mapping. Uploading is an external state change and must not be hidden inside validation.
