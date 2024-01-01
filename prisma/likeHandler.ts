import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function likeMovie(userId: string, movieId: string, like: boolean) {
    // Check if the user exists
    const user = await prisma.user.findUnique({
        where: {
            clerkId: userId,
        },
    });

    if (!user) {
        throw new Error("User not found");
    }

    // Check if the movie exists
    const movie = await prisma.movie.findUnique({
        where: {
            movieId: movieId,
        },
    });

    if (!movie) {
        await prisma.movie.create({
            data: {
                movieId: movieId,
                title: "title",
                description: "description",
                likedByUsers: {
                    create: [],
                },
                likeCount: 0,
            },
        });
    }

    // Check if the like relationship already exists
    const existingLike = await prisma.like.findFirst({
        where: {
            userId: userId,
            movieId: movieId,
        },
    });

    if (like && !existingLike) {
        // If like is true and the relationship doesn't exist, create the like relationship
       const newLike = await prisma.like.create({
            data: {
                userId: userId,
                movieId: movieId,
            },
        });

        // Connect the movie to the user's likedMovies
        await prisma.user.update({
            where: {
                clerkId: userId,
            },
            data: {
                likedMovies: {
                    connect: {
                        id: newLike.id,
                    },
                },
            },
        });

        // Connect the user to the movie's likedByUsers 
        await prisma.movie.update({
            where: {
                movieId: movieId,
            },
            data: {
                likedByUsers: {
                    connect: {
                        id: newLike.id,
                    },
                },
            },
        });
    } 
    
    else if (!like && existingLike) {
        // If like is false and the relationship exists, remove the like relationship
        await prisma.like.delete({
            where: {
                id: existingLike.id,
            },
        });

        // Disconnect the movie from the user's likedMovies

        // Disconnect the user from the movie's likedByUsers
    }
}

export default likeMovie;

