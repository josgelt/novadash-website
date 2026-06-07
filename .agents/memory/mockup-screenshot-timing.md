---
name: Mockup preview screenshot timing
description: Why a mockup-sandbox preview can screenshot as a blank white box even though it renders fine
---

When verifying canvas mockups via the `external_url` screenshot tool, a section backed by a
large image (~1MB+) can capture as an empty white box even though the component is correct.

**Why:** the external screenshot service does not always wait for big images (especially with
CSS filters like grayscale/contrast) to finish loading before capturing. The live canvas iframe,
rendered in the user's real browser, loads the image normally.

**How to apply:** before "fixing" a seemingly blank mockup image, confirm the asset actually
serves: `curl -s -o /dev/null -w "%{http_code} %{size_download}" <preview-domain>/__mockup/images/<file>`.
A 200 with real bytes + a correct `<img src>` path means it is a screenshot-timing artifact, not a bug.
