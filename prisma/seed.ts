import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const projects = await prisma.project.createMany({
        data: [
            {
                name: 'alice@prisma.io',
                description: ''
            },
            {
                name: 'Hipster Project #1',
                description: 'I\'m baby big mood cronut fanny pack, af JOMO yr meditation activated charcoal seitan adaptogen normcore hoodie viral man braid drinking vinegar. Ascot biodiesel roof party, leggings DIY messenger bag locavore deep v. IPhone chambray pop-up pok pok etsy sq',
            },
            {
                name: 'Cupcake Project',
                description: 'Apple pie candy canes bonbon halvah toffee dessert. Macaroon brownie powder cookie icing macaroon. Topping chocolate bar gingerbread jelly beans jelly cookie candy canes. Dessert gummies lollipop jelly icing. Pastry chocolate bar toffee cake chupa chups m',
            },
            {
                name: 'Hipster Project #2',
                description: 'Chia mlkshk echo park waistcoat. Raclette pop-up celiac venmo sustainable leggings vaporware locavore. Typewriter mumblecore everyday carry tonx bicycle rights ugh vexillologist shaman XOXO before they sold out woke vinyl PBR&B deep v. Authentic dreamcatc',
            },
            {
                name: 'Samuel Project',
                description: 'You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don\'t know exactly when we turned on each other, bu',
            },
            {
                name: 'Lorem Project',
                description: 'Lorem Impsum'
            },
            {
                name: 'Zombie Project',
                description: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas',
            }
        ]
    })
    console.log(projects)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
