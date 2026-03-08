import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

const DEFAULT_ADMIN_EMAIL = "admin@learnsquare.co";
const DEFAULT_ADMIN_PASSWORD = "Admin@123"; // Change this after first login via Profile

async function main() {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) throw new Error("DATABASE_URL is required");
    const adapter = new PrismaPg({ connectionString });
    const prisma = new PrismaClient({ adapter });

    const existing = await prisma.admin.findUnique({ where: { email: DEFAULT_ADMIN_EMAIL } });
    if (existing) {
        console.log("Admin already exists in database");
        return;
    }

    const hash = await bcrypt.hash(DEFAULT_ADMIN_PASSWORD, 10);
    await prisma.admin.create({
        data: { email: DEFAULT_ADMIN_EMAIL, password: hash },
    });
    console.log("Admin created. Email:", DEFAULT_ADMIN_EMAIL, "| Password: Admin@123 (change via Profile)");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => process.exit(0));
