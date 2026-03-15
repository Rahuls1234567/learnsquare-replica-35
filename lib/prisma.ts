import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

function createPrismaClient() {
    const connectionString = process.env.DATABASE_URL
    if (!connectionString) {
        throw new Error('DATABASE_URL environment variable is not set')
    }
    const adapter = new PrismaPg({ connectionString })
    return new PrismaClient({ adapter })
}

export const prisma =
    globalForPrisma.prisma ||
    createPrismaClient()

// Forced refresh: 2026-03-14T17:15:00Z
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
