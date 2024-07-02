import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient({log: ["info", "query"]});

async function main(){
   await prisma.post.create({
        data: {
            title: 'My Second post',
            content: 'This is my Second post',
            published: true,
            author: {
                connect: {
                    id: 1
                }
            }
        }
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
        console.log("Post created");
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })