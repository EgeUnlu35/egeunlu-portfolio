import { Redis } from "@upstash/redis"
import { NextResponse } from "next/server"

const redis =
  process.env.UPSTASH_REDIS_REST_KV_REST_API_URL && process.env.UPSTASH_REDIS_REST_KV_REST_API_TOKEN
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_KV_REST_API_URL,
        token: process.env.UPSTASH_REDIS_REST_KV_REST_API_TOKEN,
      })
    : null

export async function GET() {
  if (!redis) {
    return NextResponse.json({ count: null })
  }
  const count = await redis.get<number>("portfolio:views")
  return NextResponse.json({ count: count ?? 0 })
}

export async function POST() {
  if (!redis) {
    return NextResponse.json({ count: null })
  }
  const count = await redis.incr("portfolio:views")
  return NextResponse.json({ count })
}
