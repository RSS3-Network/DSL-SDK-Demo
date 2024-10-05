import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { getActivities } from '@rss3/sdk'

const app = new Hono()

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

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
