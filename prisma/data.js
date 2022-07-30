const {PrismaClient} = require("@prisma/client");
const userData = require("./data/user.js");
const productsData = require("./data/products.js")
const prismaClient = new PrismaClient();

const load = async() => {
  try {
    const user = userData
    const products = productsData
    
    await prismaClient.user.create({data : user})
    console.log("user imported")
    await prismaClient.product.createMany({data : products})
    console.log("products imported")
  } catch (e) {
    console.error(e)
  } finally {
    prismaClient.$disconnect()
  }
}

load();

