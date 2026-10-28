/** Single source for public support contact details. Change them here only. */
export const SUPPORT_PHONE = "9000177063";
export const SUPPORT_EMAIL = "hello@learnsquare.co";
export const SUPPORT_WHATSAPP_URL = `https://wa.me/91${SUPPORT_PHONE}`;

/** Office address exactly as on the Google Maps listing that OFFICE_MAP_URL opens. */
export const OFFICE_ADDRESS = "GST Bhaswa Business Park, 6-3-866, By Lane, beside Paryatak Bhavan, Greenlands, Begumpet, Hyderabad, Telangana 500016";
export const OFFICE_FLOOR = "3rd Floor";
export const OFFICE_MAP_URL = "https://maps.app.goo.gl/XetUsuvtNXGpzQqy7";
// Embedded map pinned by the same address, so the thumbnail and the text always agree.
export const OFFICE_MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(OFFICE_ADDRESS)}&z=16&output=embed`;
