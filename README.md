# RSS3 DSL SDK Demo

## Init hono project

```bash
npm create hono@latest
```

## Install @rss3/sdk

```bash
cd rss3-dsl-demo
npm install @rss3/sdk
```

## Run project

```bash
npm run dev
```

## Modify src/index.js logic

```js
//...keep other imports
import { getActivities } from '@rss3/sdk'

// Modify logics here
app.get('/', async (c) => {
  const socialActivities = await getActivities({
    account: "vitalik.eth",
    tag: ["social"],
    type: ["comment"],
    platform: ["Farcaster"],
    limit: 3,
  });
  return c.json(socialActivities)
})

// ...keep other logics
```

## Invoke api

```bash
curl 'http://localhost:3000'
```
