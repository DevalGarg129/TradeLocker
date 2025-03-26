import React from "react";

function FooterColumn({ title, links }) {
  return (
    <div className="col">
      <p>{title}</p>
      <ul className="list-unstyled">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="text-decoration-none">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-light mt-5">
      <div className="container border-top py-4">
        <div className="row">
          <div className="col">
            <img
              src="media/images/logo.svg"
              alt="Company Logo"
              style={{ width: "50%" }}
            />
            <p>&copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.</p>
          </div>

          <FooterColumn
            title="Company"
            links={[
              { label: "About", href: "#" },
              { label: "Products", href: "#" },
              { label: "Pricing", href: "#" },
              { label: "Referral programme", href: "#" },
              { label: "Careers", href: "#" },
              { label: "Zerodha.tech", href: "#" },
              { label: "Press & media", href: "#" },
              { label: "Zerodha cares (CSR)", href: "#" },
            ]}
          />

          <FooterColumn
            title="Support"
            links={[
              { label: "Contact", href: "#" },
              { label: "Support portal", href: "#" },
              { label: "Z-Connect blog", href: "#" },
              { label: "List of charges", href: "#" },
              { label: "Downloads & resources", href: "#" },
            ]}
          />

          <FooterColumn
            title="Account"
            links={[
              { label: "Open an account", href: "#" },
              { label: "Fund transfer", href: "#" },
              { label: "60 day challenge", href: "#" },
            ]}
          />
        </div>

        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities Pvt. Ltd.
            – SEBI Registration no.: IN-DP-100-2015 Commodity Trading through Zerodha
            Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.: INZ000038238
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars
            Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078,
            Karnataka, India. For any complaints, please write to
            <a href="mailto:complaints@zerodha.com"> complaints@zerodha.com</a>.
          </p>
          <p>
            Investments in securities market are subject to market risks; read all the
            related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
