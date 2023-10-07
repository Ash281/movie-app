import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query // this is the movie id
    const { userId } = req.body // this is the user id
}

try {
    // find the user and movie id
    const user = await prisma.user.findUnique({
        where: { id: parseInt(userId) },
    });

    const movie = await prisma.movie.findUnique({
        where: { id: parseInt(id) }
    })

    // now update the movie's likes count and the user's liked movies
    await prisma.movie.update({
        where: { id: parseInt(id) },
        data: {
            likes: movie.likes + 1,
            likedBy: {
                connect: { id: userId },
            },
        },
    });

    await prisma.user.update({
        where: { id: parseInt(userId) },
        data: {
            favourites: {
                connect: { id: parseInt(id) },
            },
        },
    });

    res.status(200).json({ message: "movie liked "})
}
catch (error){
    console.error(error);
    res.status(500).json({ message: "an error occurred"};)
};

