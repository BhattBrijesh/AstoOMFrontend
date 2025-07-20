import React from "react";

const FloatingButtons = () => {
  return (
    <div
      className="col-xs-12 col-sm-12 col-md-12 col-lg-12 fixed"
      style={{ zIndex: 99999 }}
    >
      <ul className="end">
        <li className="phone ph-fx">
          <a
            href="tel:+919417339708"
            target="_blank"
            rel="noopener noreferrer"
            data-attr="phone"
            data-toggle="tooltip"
            title="Contact"
          >
            <i className="fa fa-phone element2"></i>
          </a>
        </li>
        <li className="what1 wh-fx">
          <a
            href="https://api.whatsapp.com/send?phone=919417339708&text=I'd like to know more about your astrology services. Please contact me"
            target="_blank"
            rel="noopener noreferrer"
            data-attr="whatsapp_contact"
            data-toggle="tooltip"
            title="Whatsapp"
          >
            <i className="fa fa-whatsapp element2"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FloatingButtons;
