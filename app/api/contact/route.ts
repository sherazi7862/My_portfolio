// Contact form now submits directly to Web3Forms from the frontend.
// This API route is kept as a fallback placeholder.
import { NextResponse } from 'next/server'

export async function POST() {
  return NextResponse.json(
    { error: 'Use client-side submission to Web3Forms instead.' },
    { status: 200 },
  )
}