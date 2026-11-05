/**
 * Static certificate records for Universal Institute, Amritsar.
 * Managed by Aagaz Society.
 *
 * No database or API required — all lookups happen client-side from this file.
 * To add a new certificate, append an entry to the CERTIFICATES array and place
 * the matching image at public/certificates/<imageName>.
 */

export const CERTIFICATES = [
  {
    certificateNumber: '2601000127',
    studentName: 'Navjot Kaur',
    course: 'Data Analytics',
    duration: '3 Months',
    issueDate: '10 November 2026',
    institute: 'Universal Institute, Amritsar',
    managedBy: 'Aagaz Society',
    status: 'Verified / Authentic',
    image: '/certificates/Navjot Kaur.png',
  },
  {
    certificateNumber: '2601000159',
    studentName: 'Ramandeep Kaur',
    course: 'Full Stack Development with AI Integration',
    duration: '4 Months',
    issueDate: '10 November 2026',
    institute: 'Universal Institute, Amritsar',
    managedBy: 'Aagaz Society',
    status: 'Verified / Authentic',
    image: '/certificates/Ramandeep Kaur.png',
  },
  {
    certificateNumber: '2601000129',
    studentName: 'Manpreet Kaur',
    course: 'Full Stack Development with AI Integration',
    duration: '4 Months',
    issueDate: '10 November 2026',
    institute: 'Universal Institute, Amritsar',
    managedBy: 'Aagaz Society',
    status: 'Verified / Authentic',
    image: '/certificates/Manpreet Kaur.png',
  },
];

/**
 * Look up a certificate by its number (case-insensitive, trims whitespace).
 * Returns the certificate object or null if not found.
 *
 * @param {string} number - The certificate number entered by the user.
 * @returns {object|null}
 */
export function findCertificate(number) {
  if (!number || typeof number !== 'string') return null;
  const clean = number.trim().toUpperCase();
  return (
    CERTIFICATES.find(
      (c) => c.certificateNumber.toUpperCase() === clean
    ) || null
  );
}

