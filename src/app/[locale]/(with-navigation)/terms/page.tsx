const htmlStringExample = `<main>
  <h1>Terms of Service</h1>
  <p><strong>Last updated:</strong> February 12, 2026</p>

  <h2>1) Acceptance of these terms</h2>
  <p>
    By accessing or using this service, you agree to these Terms. If you do not agree, do not use the service.
  </p>

  <h2>2) Eligibility</h2>
  <p>
    You must be legally able to form a contract in your country and comply with applicable laws.
  </p>

  <h2>3) Accounts and access</h2>
  <p>
    You are responsible for activity under your account and for keeping your access methods secure.
  </p>

  <h2>4) Acceptable use</h2>
  <ul>
    <li>Do not misuse the service or attempt to disrupt it.</li>
    <li>Do not access data you do not have permission to access.</li>
    <li>Do not use the service for unlawful purposes.</li>
  </ul>

  <h2>5) Content and intellectual property</h2>
  <p>
    The service, its features, and its branding are owned by us or our licensors and are protected by applicable laws.
  </p>

  <h2>6) Payment and refunds (if applicable)</h2>
  <p>
    If the service includes paid plans, prices, billing cycles, and refund rules will be shown at checkout or in your plan details.
  </p>

  <h2>7) Service changes and availability</h2>
  <p>
    We may modify, suspend, or discontinue parts of the service. We do not guarantee uninterrupted availability.
  </p>

  <h2>8) Disclaimer</h2>
  <p>
    The service is provided “as is” and “as available” without warranties of any kind, to the maximum extent permitted by law.
  </p>

  <h2>9) Limitation of liability</h2>
  <p>
    To the maximum extent permitted by law, we are not liable for indirect, incidental, special, consequential, or punitive damages.
  </p>

  <h2>10) Termination</h2>
  <p>
    We may suspend or terminate your access if you violate these Terms or if required to comply with law.
  </p>

  <h2>11) Contact</h2>
  <p>
    Questions about these Terms: <a href="mailto:support@example.com">support@example.com</a>
  </p>

  <hr />

  <h1>Privacy Policy</h1>
  <p><strong>Last updated:</strong> February 12, 2026</p>

  <h2>1) What we collect</h2>
  <ul>
    <li><strong>Account data:</strong> email address, name (optional), account identifiers.</li>
    <li><strong>Usage data:</strong> pages viewed, actions taken, device/browser info.</li>
    <li><strong>Verification data:</strong> login verification status and timestamps.</li>
  </ul>

  <h2>2) How we use data</h2>
  <ul>
    <li>Provide and maintain the service</li>
    <li>Authenticate users and prevent fraud/abuse</li>
    <li>Improve performance and user experience</li>
    <li>Comply with legal obligations</li>
  </ul>

  <h2>3) Cookies</h2>
  <p>
    We may use cookies or similar technologies for login sessions, preferences, and analytics. You can control cookies in your browser settings.
  </p>

  <h2>4) Sharing</h2>
  <p>
    We do not sell your personal data. We may share data with service providers (e.g., hosting, analytics, email delivery) under confidentiality obligations,
    or when required by law.
  </p>

  <h2>5) Data retention</h2>
  <p>
    We keep personal data only as long as needed for the purposes described here, unless a longer retention period is required by law.
  </p>

  <h2>6) Security</h2>
  <p>
    We use reasonable safeguards designed to protect your data. No method of transmission or storage is 100% secure.
  </p>

  <h2>7) Your rights</h2>
  <p>
    Depending on your location, you may have rights to access, correct, delete, or export your personal data, and to object to certain processing.
  </p>

  <h2>8) Contact</h2>
  <p>
    Privacy questions: <a href="mailto:privacy@example.com">privacy@example.com</a>
  </p>
</main>
`;

export default function Page() {
  return (
    <article
      className="mx-auto prose w-full pt-10 pb-16"
      dangerouslySetInnerHTML={{ __html: htmlStringExample }}
    />
  );
}
