export async function POST(req: Request) {
    const { userId, movieId, isLiked } = req.body;

    // Implement your movie like logic here
    // ...

    return new Response('success', { status: 200 });
}