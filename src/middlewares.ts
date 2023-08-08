import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  
  console.log("Middleware")
  console.log(request.method)
  console.log(request.url)

  const origin = request.headers.get('origin')
  console.log(origin) 
}
