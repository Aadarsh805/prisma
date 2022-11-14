import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main(){
    // const user = prisma.user.create({data: {name: 'Aadarsh'}})
    // await prisma.user.deleteMany()
    // console.log(user)

   const user = await prisma.user.create({
        data: {
            name: "Aadarsh",
            email: "aadarsh@test.com",
            age: 2
        }
    })

    console.log(user)
}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })