const htmlStringExample = `<section>
  <header>
    <h1>Legal</h1>
    <p>This page includes our Terms of Service and Privacy Policy.</p>
    <p><strong>Last updated:</strong> February 12, 2026</p>
  </header>

  <article aria-label="Terms of Service">
    <h2>Terms of Service</h2>

    <h3>Overview</h3>
    <p>
      These Terms govern your use of the service. By using the service, you agree to follow these Terms and all applicable laws.
    </p>

    <h3>Your responsibilities</h3>
    <ul>
      <li>Provide accurate account information.</li>
      <li>Maintain the confidentiality of your login credentials.</li>
      <li>Use the service in a lawful manner.</li>
    </ul>

    <h3>Prohibited behavior</h3>
    <ul>
      <li>Attempting to bypass security measures or access restricted areas.</li>
      <li>Interfering with normal operation (spam, scraping, attacks, excessive requests).</li>
      <li>Using the service to violate the rights of others.</li>
    </ul>

    <h3>Third-party services</h3>
    <p>
      Some features may rely on third-party services. Their terms may apply in addition to ours.
    </p>

    <h3>Termination</h3>
    <p>
      We can suspend or terminate access if we believe you violated these Terms, or to protect the service and its users.
    </p>

    <h3>Contact</h3>
    <p>
      Support: <a href="mailto:support@example.com">support@example.com</a>
    </p>
  </article>

  <hr />

  <article aria-label="Privacy Policy">
    <h2>Privacy Policy</h2>

    <h3>Information we collect</h3>
    <ul>
      <li><strong>Identifiers:</strong> email, account IDs, optional profile details.</li>
      <li><strong>Logs:</strong> IP address, approximate location, timestamps, device and browser data.</li>
      <li><strong>Analytics:</strong> event metrics to understand usage (e.g., feature adoption).</li>
    </ul>

    <h3>How we use information</h3>
    <ul>
      <li>To provide authentication and core functionality</li>
      <li>To detect abuse, fraud, and technical issues</li>
      <li>To improve features, reliability, and support</li>
    </ul>

    <h3>Legal bases (where applicable)</h3>
    <ul>
      <li><strong>Contract:</strong> to provide the service you requested</li>
      <li><strong>Legitimate interests:</strong> security, product improvement</li>
      <li><strong>Consent:</strong> where you opt into certain cookies or communications</li>
      <li><strong>Legal obligation:</strong> when laws require processing or retention</li>
    </ul>

    <h3>Data sharing</h3>
    <p>
      We may share information with vendors that help us run the service (hosting, email, analytics) under agreements requiring appropriate safeguards.
      We may also disclose information to comply with legal requests.
    </p>

    <h3>Your choices</h3>
    <ul>
      <li>Request access, correction, or deletion of your data (where applicable).</li>
      <li>Opt out of non-essential cookies via browser settings.</li>
    </ul>

    <h3>Contact</h3>
    <p>
      Privacy: <a href="mailto:privacy@example.com">privacy@example.com</a>
    </p>
  </article>

  <footer>
    <p>© 2026 Your Company. All rights reserved.</p>
  </footer>
</section>`;

export default function Page() {
  return (
    <article
      className="mx-auto prose w-full pt-10 pb-16"
      dangerouslySetInnerHTML={{ __html: htmlStringExample }}
    />
  );
}
