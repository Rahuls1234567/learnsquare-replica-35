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

    // --- SEED REVIEWS ---
    const reviewCount = await prisma.review.count();
    if (reviewCount === 0) {
        await prisma.review.createMany({
            data: [
                {
                    name: "Rishab",
                    role: "II Year CSE Student",
                    image: "/images/semister/user1.jpeg",
                    text: "I am such a kind of Student who always do Last Minute Preparation. 😆. This App Really helped me alot where I found all Previous Year Question Papers and Answers. User Interface is Amazing. Most Importantly its Subscription Fee is Pocket Friendly 😂 😂",
                    page: "semester-prep",
                    rating: 5
                },
                {
                    name: "Ashritha",
                    role: "III Year ECE Student",
                    image: "/images/semister/user2.jpeg",
                    text: "SemesterPrep is a New Platform where I Found my PYQs & Answers of my Semester End Examinations. This App Really helped me during my Final Examinations. Guys you have PYQs for all Universities 👍",
                    page: "semester-prep",
                    rating: 5
                },
                {
                    name: "Yashwant",
                    role: "IV Year IT student",
                    image: "/images/semister/user3.jpeg",
                    text: "Thanks for Putting all the PYQs at a Single Place. Its a Good App",
                    page: "semester-prep",
                    rating: 5
                },
                {
                    name: "Rahul Sharma",
                    role: "Final Year Student, SVIT",
                    text: "The AICAS platform significantly reduced my manual work for semester exam registration. Everything is so streamlined now!",
                    page: "home",
                    rating: 5
                },
                {
                    name: "Priya Varma",
                    role: "Placed at TCS, GPREC",
                    text: "MySkillForge's training was the turning point for my career. The industry-focused curriculum helped me crack my dream company's interview.",
                    page: "home",
                    rating: 5
                },
                {
                    name: "Sandeep Kumar",
                    role: "B.Tech Student, Malla Reddy University",
                    text: "SemesterPrep's resources are exactly what a student needs. The content is so precise and directly helps in scoring better in exams.",
                    page: "home",
                    rating: 5
                }
            ]
        });
        console.log("Default reviews seeded.");
    }

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
