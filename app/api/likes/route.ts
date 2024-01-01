import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';
import likeMovie from  '@/prisma/likeHandler';

export async function POST(req: Request) {
  
  try {
    const { userId, movieId, isLiked } = await req.json();

    await likeMovie(userId, movieId, isLiked); // Call the function without Prisma in the route

    console.log(`User ${userId} ${isLiked ? 'liked' : 'disliked'} movie ${movieId}`);

    return NextResponse.json({ message: 'Movie liked successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error processing movie like:', error);
    return NextResponse.json({ error: 'Failed to process like' }, { status: 500 });
  }
}

export async function GET() {
    return NextResponse.json({ message: "Hello World" });
}