import sgMail from '@sendgrid/mail';
import { readFileSync } from 'fs';
import path from 'path';

const apiKey = process.env.SENDGRID_API_KEY;
if (apiKey) {
    sgMail.setApiKey(apiKey);
}

const LOGO_CID = 'learnsquare-logo';

function loadLogoBase64(): string | null {
    try {
        const logoPath = path.join(process.cwd(), 'public', 'images', 'learnsquare_icon.png');
        return readFileSync(logoPath).toString('base64');
    } catch (error) {
        console.warn('Could not load logo for enquiry email:', error);
        return null;
    }
}

interface EnquiryNotificationParams {
    product: string;
    fields: Record<string, string | undefined>;
}

function escapeHtml(value: string) {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function buildEmailHtml(product: string, fields: Record<string, string | undefined>, hasLogo: boolean) {
    const entries = Object.entries(fields).filter(([, value]) => value) as [string, string][];
    const messageEntry = entries.find(([key]) => key.toLowerCase() === 'message');
    const detailEntries = entries.filter(([key]) => key.toLowerCase() !== 'message');
    const name = fields['Name'] ?? '';
    const logoUrl = hasLogo ? `cid:${LOGO_CID}` : '';
    const timestamp = new Date().toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short',
        timeZone: 'Asia/Kolkata',
    });

    const rows = detailEntries
        .map(
            ([key, value]) => `
              <tr>
                <td style="padding:12px 16px;border-bottom:1px solid #2a2a3d;font-size:12px;letter-spacing:0.05em;text-transform:uppercase;color:#8b8fa8;white-space:nowrap;vertical-align:top;width:150px;">${escapeHtml(key)}</td>
                <td style="padding:12px 16px;border-bottom:1px solid #2a2a3d;font-size:14px;color:#f1f1f7;font-weight:500;">${escapeHtml(value)}</td>
              </tr>`
        )
        .join('');

    const messageBlock = messageEntry
        ? `
          <tr>
            <td style="padding:24px 32px 0 32px;">
              <div style="font-size:12px;letter-spacing:0.05em;text-transform:uppercase;color:#8b8fa8;margin-bottom:8px;">Message</div>
              <div style="background:#1a1a2b;border-left:3px solid #7c5cff;border-radius:8px;padding:16px 18px;font-size:14px;line-height:1.6;color:#e4e4f0;">${escapeHtml(messageEntry[1]).replace(/\n/g, '<br/>')}</div>
            </td>
          </tr>`
        : '';

    return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New ${escapeHtml(product)} Enquiry</title>
  </head>
  <body style="margin:0;padding:0;background-color:#0a0a12;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">New ${escapeHtml(product)} enquiry from ${escapeHtml(name)}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0a12;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#12121e;border-radius:16px;overflow:hidden;border:1px solid #23233a;">
            <tr>
              <td style="background:linear-gradient(135deg,#6d28d9 0%,#7c3aed 45%,#4f46e5 100%);padding:28px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="vertical-align:middle;">
                      <table role="presentation" cellpadding="0" cellspacing="0">
                        <tr>
                          ${logoUrl ? `<td style="vertical-align:middle;padding-right:10px;"><img src="${logoUrl}" width="30" height="34" alt="Learnsquare" style="display:block;border:0;border-radius:6px;background:rgba(255,255,255,0.15);" /></td>` : ''}
                          <td style="vertical-align:middle;font-size:20px;font-weight:800;color:#ffffff;letter-spacing:0.02em;">
                            LEARN<span style="color:#d9c9ff;">SQUARE</span>
                          </td>
                        </tr>
                      </table>
                    </td>
                    <td align="right" style="vertical-align:middle;">
                      <span style="display:inline-block;background:rgba(255,255,255,0.18);color:#ffffff;font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;padding:6px 12px;border-radius:999px;border:1px solid rgba(255,255,255,0.35);">${escapeHtml(product)}</span>
                    </td>
                  </tr>
                </table>
                <div style="margin-top:16px;font-size:22px;font-weight:700;color:#ffffff;">New Enquiry Received</div>
                <div style="margin-top:4px;font-size:13px;color:#e6ddff;">${escapeHtml(name)} just submitted a request through the website.</div>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 16px 8px 16px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #23233a;border-radius:10px;overflow:hidden;">
                  ${rows}
                </table>
              </td>
            </tr>
            ${messageBlock}
            <tr>
              <td style="padding:28px 32px 28px 32px;">
                <div style="height:1px;background-color:#23233a;margin-bottom:16px;"></div>
                <div style="font-size:12px;color:#6f7290;">Received on ${escapeHtml(timestamp)} IST &middot; Automated notification from the Learnsquare enquiry system.</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function buildEmailText(product: string, fields: Record<string, string | undefined>) {
    const entries = Object.entries(fields).filter(([, value]) => value) as [string, string][];
    return [`New ${product} Enquiry`, '', ...entries.map(([key, value]) => `${key}: ${value}`)].join('\n');
}

export async function sendEnquiryNotification({ product, fields }: EnquiryNotificationParams) {
    if (!apiKey) {
        console.warn('SENDGRID_API_KEY not set, skipping enquiry email notification');
        return;
    }

    const fromEmail = process.env.DEFAULT_FROM_EMAIL;
    const toEmail = process.env.DEFAULT_TO_EMAIL;
    if (!fromEmail || !toEmail) {
        console.warn('DEFAULT_FROM_EMAIL/DEFAULT_TO_EMAIL not set, skipping enquiry email notification');
        return;
    }

    try {
        const logoBase64 = loadLogoBase64();
        await sgMail.send({
            to: toEmail,
            from: { email: fromEmail, name: 'Learnsquare Enquiries' },
            replyTo: fields['Email'],
            subject: `New ${product} Enquiry — ${fields['Name'] ?? ''}`.trim(),
            html: buildEmailHtml(product, fields, Boolean(logoBase64)),
            text: buildEmailText(product, fields),
            attachments: logoBase64
                ? [
                      {
                          content: logoBase64,
                          filename: 'learnsquare-logo.png',
                          type: 'image/png',
                          disposition: 'inline',
                          content_id: LOGO_CID,
                      } as unknown as sgMail.MailDataRequired['attachments'][number],
                  ]
                : undefined,
        });
    } catch (error) {
        console.error(`Failed to send ${product} enquiry email:`, error);
    }
}
