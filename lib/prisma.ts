import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

function createPrismaClient() {
    const connectionString = process.env.DATABASE_URL
    if (!connectionString) {
        throw new Error('DATABASE_URL environment variable is not set')
    }
    const pool = new Pool({ connectionString, max: 20 })
    const adapter = new PrismaPg(pool)
    return new PrismaClient({ adapter })
}

export const prisma =
    globalForPrisma.prisma ||
    createPrismaClient()

// Forced refresh: 2026-03-14T17:15:00Z
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
