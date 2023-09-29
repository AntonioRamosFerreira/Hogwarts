import { NextResponse } from "next/server";

export function middleware(request) {
    if (!request.cookies.has('user_email'))  {
        return NextResponse.redirect(new URL('/login', request.url))
    }
}

  export const config = {
    matcher: ['/:path','/favoritos:patch' ]
    // localhost:300/ 
    // localhost:300/login
    // localhost:300/favoritos - sem asterisco para ficar só na rota principal

  }