# Media compression

Create web derivatives by default for every selected image and video. Preserve the source file byte-for-byte and work only in a temporary directory outside the repository and input folder.

## Selected local scripts

Use:

```text
/Users/computer/Desktop/dev/tools/Scripts/compressPhoto.sh
/Users/computer/Desktop/dev/tools/Scripts/convertVideoForWeb.sh
```

`compressPhoto.sh` is the preferred image script because it keeps original dimensions by default, auto-orients, converts to sRGB, removes metadata, and applies format-aware high-quality compression. It can also use lossless PNG cleanup tools when installed.

`convertVideoForWeb.sh` is the preferred general video script because it preserves frame dimensions and audio while producing a browser-compatible H.264/AAC MP4. Do not use `compressVideo.sh` for ordinary post media because it forces a 640-pixel VP9/Opus WebM and can remove too much visual detail from animation artwork.

## Prepare a safe workspace

1. Verify the selected script exists and is executable.
2. Verify `magick` or `convert`, `ffmpeg`, and `ffprobe` are available.
3. Copy only selected source files into a new temporary directory.
4. Give each temporary copy a simple lowercase ASCII filename without spaces or additional dots. The video script derives its output name from the first dot.
5. Retain a mapping from original path to temporary copy to derivative.

Do not install missing tools automatically. Report the missing dependency and leave that media item uncompressed.

## Compress images

Run the photo script without a size argument to preserve dimensions:

```bash
/Users/computer/Desktop/dev/tools/Scripts/compressPhoto.sh /tmp/WORK/item.png
```

The output is `/tmp/WORK/item-compressed.png`, with the original extension normalized to lowercase.

Supply a maximum dimension only when the source is materially larger than its intended display size and the user has approved resizing. A plain `2560` means a 2560 by 2560 bounding box without upscaling:

```bash
/Users/computer/Desktop/dev/tools/Scripts/compressPhoto.sh /tmp/WORK/item.jpg 2560
```

Default rules:

- Preserve pixel dimensions.
- Preserve alpha when the source needs transparency.
- Preserve animation for GIF input.
- Do not convert artwork to JPEG merely to reduce size.
- Treat JPEG, WebP, and pngquant output as visually lossless, not mathematically lossless.
- Compare the source and derivative at full size, including line art, gradients, dark areas, transparency edges, and text.
- Use the derivative only when it is smaller and passes inspection. Keep the verified source format when recompression makes the file larger.

## Compress videos

Run the video script from the temporary working directory:

```bash
cd /tmp/WORK
/Users/computer/Desktop/dev/tools/Scripts/convertVideoForWeb.sh item.mov
```

The output is `/tmp/WORK/item_compressed.mp4`.

After conversion:

1. Use `ffprobe` to confirm H.264 video, AAC audio when the source contains audio, original width and height, frame rate, duration, and stream count.
2. Reject truncated output, missing intended audio, changed aspect ratio, unexpected frame-rate conversion, or zero-byte output.
3. Inspect the first, middle, and final frames at full size for line breakup, banding, blocking, color shifts, and damaged subtitles.
4. Compare byte sizes. If a browser-compatible MP4 source is already smaller and passes playback checks, retain it rather than publishing a larger re-encode.
5. If the source is MOV, MKV, or otherwise unsuitable for direct browser playback, prefer the verified MP4 derivative even when the size reduction is small.
6. Apply fast-start placement to the temporary derivative before upload when needed, using a stream-copy remux so no second lossy encode occurs.

Do not remove audio unless the user asks or the source is intentionally silent. Do not resize by default. Do not describe H.264 conversion as mathematically lossless.

## Select and name outputs

- Upload only the chosen derivative, never both source and derivative unless the post explicitly needs both.
- Use a descriptive lowercase name plus a content hash as required by `gcs-media.md`.
- Record original bytes, derivative bytes, percentage saved, dimensions, duration, codecs, and the visual inspection result in the private inventory.
- If compression does not produce an acceptable result, keep the source out of GCS and report the item for manual review.
