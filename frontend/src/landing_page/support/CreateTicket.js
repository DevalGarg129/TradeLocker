import React from "react";

function CreateTicket() {
  const LinkButton = ({ children }) => (
    <button
      type="button"
      className="btn btn-link p-0"
      style={{ textDecoration: "none", lineHeight: "2.5" }}
      onClick={(e) => e.preventDefault()}
    >
      {children}
    </button>
  );

  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h4>
          <LinkButton>Online Account Opening</LinkButton>
          <br />
          <LinkButton>Offline Account Opening</LinkButton>
          <br />
          <LinkButton>Company, Partnership and HUF Account</LinkButton>
          <br />
          <LinkButton>Opening</LinkButton>
          <br />
          <LinkButton>NRI Account Opening</LinkButton>
          <br />
          <LinkButton>Charges at Zerodha</LinkButton>
          <br />
          <LinkButton>Zerodha IDFC FIRST Bank 3-in-1 Account</LinkButton>
          <br />
          <LinkButton>Getting Started</LinkButton>
          <br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h4>
          <LinkButton>Online Account Opening</LinkButton>
          <br />
          <LinkButton>Offline Account Opening</LinkButton>
          <br />
          <LinkButton>Company, Partnership and HUF Account</LinkButton>
          <br />
          <LinkButton>Opening</LinkButton>
          <br />
          <LinkButton>NRI Account Opening</LinkButton>
          <br />
          <LinkButton>Charges at Zerodha</LinkButton>
          <br />
          <LinkButton>Zerodha IDFC FIRST Bank 3-in-1 Account</LinkButton>
          <br />
          <LinkButton>Getting Started</LinkButton>
          <br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h4>
          <LinkButton>Online Account Opening</LinkButton>
          <br />
          <LinkButton>Offline Account Opening</LinkButton>
          <br />
          <LinkButton>Company, Partnership and HUF Account</LinkButton>
          <br />
          <LinkButton>Opening</LinkButton>
          <br />
          <LinkButton>NRI Account Opening</LinkButton>
          <br />
          <LinkButton>Charges at Zerodha</LinkButton>
          <br />
          <LinkButton>Zerodha IDFC FIRST Bank 3-in-1 Account</LinkButton>
          <br />
          <LinkButton>Getting Started</LinkButton>
          <br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h4>
          <LinkButton>Online Account Opening</LinkButton>
          <br />
          <LinkButton>Offline Account Opening</LinkButton>
          <br />
          <LinkButton>Company, Partnership and HUF Account</LinkButton>
          <br />
          <LinkButton>Opening</LinkButton>
          <br />
          <LinkButton>NRI Account Opening</LinkButton>
          <br />
          <LinkButton>Charges at Zerodha</LinkButton>
          <br />
          <LinkButton>Zerodha IDFC FIRST Bank 3-in-1 Account</LinkButton>
          <br />
          <LinkButton>Getting Started</LinkButton>
          <br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h4>
          <LinkButton>Online Account Opening</LinkButton>
          <br />
          <LinkButton>Offline Account Opening</LinkButton>
          <br />
          <LinkButton>Company, Partnership and HUF Account</LinkButton>
          <br />
          <LinkButton>Opening</LinkButton>
          <br />
          <LinkButton>NRI Account Opening</LinkButton>
          <br />
          <LinkButton>Charges at Zerodha</LinkButton>
          <br />
          <LinkButton>Zerodha IDFC FIRST Bank 3-in-1 Account</LinkButton>
          <br />
          <LinkButton>Getting Started</LinkButton>
          <br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h4>
          <LinkButton>Online Account Opening</LinkButton>
          <br />
          <LinkButton>Offline Account Opening</LinkButton>
          <br />
          <LinkButton>Company, Partnership and HUF Account</LinkButton>
          <br />
          <LinkButton>Opening</LinkButton>
          <br />
          <LinkButton>NRI Account Opening</LinkButton>
          <br />
          <LinkButton>Charges at Zerodha</LinkButton>
          <br />
          <LinkButton>Zerodha IDFC FIRST Bank 3-in-1 Account</LinkButton>
          <br />
          <LinkButton>Getting Started</LinkButton>
          <br />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
