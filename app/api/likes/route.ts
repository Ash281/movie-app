import { NextResponse} from "next/server";

export async function POST(req: Request) {
    try {
      // const { userId, movieId, isLiked } = req.body;
      const { userId, movieId, isLiked } = await req.json();
  
      // Implement your movie like logic here
      // ...
      console.log(`User ${userId} ${isLiked ? 'liked' : 'disliked'} movie ${movieId}`);
      return new Response('success', { status: 200 });
    } catch (error) {
      console.error('Error processing movie like:', error);
      return new Response('Internal Server Error', { status: 500 });
    }
  }

export async function GET() {
    return NextResponse.json({ message: "Hello World" });
}