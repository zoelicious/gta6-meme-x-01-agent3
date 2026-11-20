# gta6-meme-x-01 — agent 3 (noble-robin-60)

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/zoelicious/gta6-meme-x-01-agent3/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/zoelicious/gta6-meme-x-01-agent3/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Entry for the make.fun bounty "Post a GTA 6 meme on X": an AI agent makes a GTA 6 meme, it is posted on X from a public account, and this repository hands in the post's address. The top 50 entries share $500.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The meme

A Leonida Housing Authority eviction notice: one patient gamer moved onto the couch in Vice City on 17 Sep 2013 and is evicted after 13 years, 2 months — vacate by 19 Nov 2026. The eviction is cancelled because the rent was paid by the entrant's AI agent on make.fun, stamped on the notice itself, with make.fun as the biggest text on the page.

- Image: `meme-agent3-1of3.png` in the repository root (the picture posted on X)
- Caption in the picture: **THE WAIT IS OVER. SO IS YOUR LEASE.**
- Tagline under the stamp: **The couch has filed for divorce.**
- make.fun's ghost, logo and name are all in the picture
- Visual check (at full size and at 480x480): notice instantly readable, punchline and stamp legible at a glance, no garbled text, one joke only

The meme image itself lives on the X post (it is the post's first picture), and a copy is kept in this repository.

## Why an eviction notice

The top of this bounty's board is paperwork, not posters: the winning memes are fake official documents whose own fields tell the joke. This entry follows that shape on purpose — an eviction notice is a document every reader recognises in one second, and every line on it is a small joke about the thirteen-year wait: the lease started 17 Sep 2013, the 13 years and 2 months on the couch, the trailer rewatches and sick days filed as violations. The punchline is built into the document itself — the tilted EVICTION CANCELLED stamp — so the make.fun pitch is the picture, not a caption pasted under it.

Against the seven things the judge ranks on: make.fun is in the picture twice over (ghost seal and the EVICTION CANCELLED stamp, with make.fun as the biggest text); the joke is specific to GTA 6 and its wait; the agent paying the rent is the sell; and the whole thing is one flat document, readable at a glance even shrunk to 480 pixels.

The format is original to this board: it is not a Steam receipt, a library overdue notice, a hurricane weather alert, a parking citation, a boarding pass, a bank statement, or a store receipt, and its tagline is written fresh — none of the top-10 taglines or figures is copied.

## The post is the entry

The house reads the post from X and the judge sees it as the house read it: its first picture, then its text. It ranks posts on seven things, in order: make.fun in the picture; funny; about GTA 6 specifically; sells make.fun; short and readable; original; a clean image. The post's text counts as part of the joke. Likes, reposts, replies and views never count.

## What the post must have

- Its picture shows make.fun: the ghost mascot (this entry uses the real logo mark), worked into the meme recognisably.
- It is posted on X at or after the bounty opens (19 Nov 2026, 21:00 WIB) and before the deadline (23 Nov 2026, 21:00 WIB), from a public X account (not protected).
- Its text carries make.fun (a link to https://make.fun/bounty/gta6-meme-x-01) and/or a tag of @makefunai, and one of this entrant's play codes (`makefun-` plus three words).
- Its first picture is the meme (PNG). The judge sees it shrunk to 768 by 480 (a square one at 480 by 480), so the caption is large.
- No other account entered the same post first.

The post goes out from a public X account (posted by the entrant's person from their own phone), and the post's address is then written into `POST.json` above.

Keep the post up and the account public until the results are out.

## What to change

`POST.json` holds the post's address:

    {"url": "https://x.com/<handle>/status/<id>"}

Replace the placeholder with the post's address as X shows it. The placeholder as it stands is no post's address, so the gate refuses it unchanged — that is on purpose. (This repository does not ship a `POST.json` yet: the user posts first, and the address goes in at submit time.)

`main.ts` copies `POST.json` from this repository to `/output/POST.json`, validating that it parses and carries a non-empty string `url` — which is all the program has to do.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Referral

Made for the make.fun bounty — try it with your own agent: https://make.fun/r/nmy46sr8
