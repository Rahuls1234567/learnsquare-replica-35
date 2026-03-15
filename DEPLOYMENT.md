# Server Deployment Guide

## Prerequisites on Server
- **Node.js** 18+ (recommend 20 LTS)
- **PostgreSQL** (or a hosted DB like Supabase, Neon, Railway)
- **Git**

---

## Step 1: Clone / Pull the Repository

```bash
# If first time
git clone https://github.com/Rahuls1234567/learnsquare-replica-35.git
cd learnsquare-replica-35

# If already cloned, pull latest
cd learnsquare-replica-35
git pull origin main
```

---

## Step 2: Install Dependencies

```bash
npm install
```

*(Postinstall will run `prisma generate` automatically)*

---

## Step 3: Configure Environment Variables

Create `.env` file (copy from `.env.example` if exists, or create new):

```bash
# Database - update with YOUR server/hosted DB URL
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DATABASE?schema=public"

# Your site URL (for emails, links, etc.)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

**Examples:**
- Local PostgreSQL: `postgresql://postgres:password@localhost:5432/learnsquare_db?schema=public`
- Supabase: `postgresql://postgres:[PASSWORD]@db.[PROJECT].supabase.co:5432/postgres`
- Neon / Railway: copy `DATABASE_URL` from their dashboard

---

## Step 4: Run Database Migrations

```bash
npx prisma migrate deploy
```

*(Use `migrate deploy` in production, not `migrate dev`)*

---

## Step 5: Seed Admin (First Time Only)

```bash
npm run db:seed
```

Creates admin: `admin@learnsquare.co` / `Admin@123`

---

## Step 6: Build the App

```bash
npm run build
```

---

## Step 7: Run the App

**Option A – Direct run (for testing)**
```bash
npm run start
```
App runs on **port 8080**.

**Option B – PM2 (recommended for production)**
```bash
npm install -g pm2
pm2 start npm --name "learnsquare" -- start
pm2 save
pm2 startup   # Enable auto-start on reboot
```

**Option C – systemd** (alternative to PM2)
Create `/etc/systemd/system/learnsquare.service`:
```ini
[Unit]
Description=LearnSquare Next.js App
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/path/to/learnsquare-replica-35
ExecStart=/usr/bin/npm run start
Restart=on-failure
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```
Then:
```bash
sudo systemctl daemon-reload
sudo systemctl enable learnsquare
sudo systemctl start learnsquare
```

---

## Step 8: Reverse Proxy (Nginx)

If using Nginx to serve on port 80/443:

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Quick Deployment Checklist

| Step | Command |
|------|---------|
| 1 | `git pull` |
| 2 | `npm install` |
| 3 | Create `.env` with `DATABASE_URL` and `NEXT_PUBLIC_SITE_URL` |
| 4 | `npx prisma migrate deploy` |
| 5 | `npm run db:seed` *(first time only)* |
| 6 | `npm run build` |
| 7 | `npm run start` or `pm2 restart learnsquare` |

---

## Troubleshooting

- **Port 8080 in use?** Change in `package.json`: `"start": "next start -p 3000"` (or any free port)
- **DB connection fails?** Check `DATABASE_URL`, firewall, and that PostgreSQL accepts remote connections if DB is on another host
- **Prisma errors?** Run `npx prisma generate` before build
