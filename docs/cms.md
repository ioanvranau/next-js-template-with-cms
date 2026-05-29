# CMS — notes & migration path

**Status: not integrated.** This is intentional. Most of these sites launch with
content hard-typed in `data/*.ts`; a CMS is added only when a client needs to
edit content themselves (blog, frequently-changing catalog, team list, etc.).

This doc records the plan so a future session can wire one in without rework.

## The seam (why no rewrite is needed later)
Content already flows through one place:

```
data/types.ts   →  typed shapes (Service, Testimonial, Project, …)
data/*.ts       →  the actual content, conforming to those types
components/…     →  consume the typed data, never fetch directly
```

When a CMS arrives, the component layer doesn't change — only the *source* of
the data does. The migration is: replace the hard-coded arrays in `data/*.ts`
with async functions that fetch from the CMS and **return the same types**.

```ts
// before — data/services.ts
export const services: Service[] = [ /* … */ ];

// after — data/services.ts
export async function getServices(): Promise<Service[]> {
  return sanityClient.fetch(/* GROQ */); // still returns Service[]
}
```
(Server Components can call the async version directly with `await`.)

## Leaning: Sanity
Sanity is the default candidate (a sister project already planned it):
free tier is generous, structured content maps cleanly to our `data/types.ts`
shapes, great image pipeline, and it's host-agnostic.

Alternatives worth a look if the fit is wrong: **Payload** (self-hosted, DB-backed),
or a Git-based CMS (**TinaCMS / Decap**) for very small editing needs.

## When you actually integrate (rough steps)
1. Confirm the editing need with the client (what fields, who edits, how often).
2. Add the SDK + a `lib/cms.ts` client; put the project ID/dataset in env.
3. Define schemas mirroring `data/types.ts`.
4. Swap the `data/*.ts` exports to fetchers returning the same types.
5. Wire images through the CMS image pipeline; replace stock photos.
6. Add revalidation (webhook → `revalidateTag`/`revalidatePath`) for fresh content.

## Hosting note
Keep the stack host-portable (Netlify and Vercel both fine) — avoid host-specific
SDKs (`@vercel/blob`, Netlify Forms hooks, etc.). The contact form already uses a
standard Server Action + Resend for this reason.
