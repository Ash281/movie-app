import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getLikedMoviesCount(userId: string) {
    // Check if the user exists
    const user = await prisma.user.findUnique({
        where: {
            clerkId: userId,
        },
    });

    if (!user) {
        throw new Error("User not found");
    }

    const likedMovies = await prisma.like.findMany({
        where: {
            userId: userId,
        },
    });

    return likedMovies.length;
}

export default getLikedMoviesCount;