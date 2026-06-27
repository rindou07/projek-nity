import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const typeDefs = `#graphql
  type Product {
    id: Int!
    name: String!
    description: String
    category: String!
    price: Float!
    stock: Int!
    image: String
  }

  type Query {
    products(category: String, search: String): [Product]
    product(id: Int!): Product
  }
`;

const resolvers = {
  Query: {
    products: async (_, { category, search }) => {
      let whereClause = {};
      if (category && category !== 'Semua') {
        whereClause.category = category;
      }
      if (search) {
        whereClause.OR = [
          { name: { contains: search, mode: 'insensitive' } },
          { description: { contains: search, mode: 'insensitive' } },
        ];
      }
      return await prisma.product.findMany({
        where: whereClause,
        orderBy: { createdAt: 'desc' }
      });
    },
    product: async (_, { id }) => {
      return await prisma.product.findUnique({ where: { id } });
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
