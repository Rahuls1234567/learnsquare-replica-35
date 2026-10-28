/** Shared validation for every public form, so all fields marked * behave and read the same. */

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Indian mobile number: 10 digits starting 6-9, optional +91/91, spaces and dashes allowed. */
export const isValidPhone = (value: string) => /^(\+?91)?[6-9]\d{9}$/.test(value.replace(/[\s-]/g, ""));

/** Subset of react-hook-form's RegisterOptions that fits any form's register(), whatever its field names. */
type Rules = {
    required?: string;
    validate?: (value: unknown) => true | string;
    pattern?: { value: RegExp; message: string };
    minLength?: { value: number; message: string };
};

const notBlank = (label: string) => (value: unknown) =>
    (typeof value === "string" && value.trim() !== "") || `${label} is required`;

export const rules = {
    required: (label: string): Rules => ({ required: `${label} is required`, validate: notBlank(label) }),
    email: (): Rules => ({
        required: "Email is required",
        pattern: { value: EMAIL_RE, message: "Enter a valid email address, like name@example.com" },
    }),
    phone: (label = "Mobile number"): Rules => ({
        required: `${label} is required`,
        validate: (value: unknown) => isValidPhone(String(value ?? "")) || "Enter a valid 10-digit mobile number",
    }),
    password: (min = 6): Rules => ({
        required: "Password is required",
        minLength: { value: min, message: `Password must be at least ${min} characters` },
    }),
};
