import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main(){
    // const user = prisma.user.create({data: {name: 'Aadarsh'}})
    // await prisma.user.deleteMany()
    // console.log(user)

//    const user = await prisma.user.createMany({
//         data: [{
//             name: "Aadarsh",
//             email: "aadarsh@test.com",
//             age: 2,
//             // userPreference: {
//             //     create: {
//             //         emailUpdates: true,
//             //     }
//             // }
//         },
//         {
//             name: "Aadarsh2",
//             email: "aadarsh2@test.com",
//             age: 23,
//             // userPreference: {
//             //     create: {
//             //         emailUpdates: true,
//             //     }
//             // }
//         }
//     ],
//         // include: {
//         //     userPreference: true,
//         // }
//         // select: {
//         //     name: true,
//         //     userPreference: { select: {id: true}}
//         // }
//     })

    // console.log(user)

    // const user = await prisma.user.findUnique({
    const user = await prisma.user.findFirst({
        where: {
            // age_name: {
            //     age: 2,
            //     name: 'aadarsh'
            // }
            name: 'sally'
        }
    })
}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })