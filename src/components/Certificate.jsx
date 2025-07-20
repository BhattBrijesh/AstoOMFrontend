import React, { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";

const Certificate = () => {
  useEffect(() => {
    document.title = "Certificate | OM Astro Solution";
  }, []);

  return (
    <div>
      <Breadcrumb title="Certificate" />
      <div className="ast_testimonial_wrapper ast_toppadder70 ast_bottompadder70 bg2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ast_heading">
                <h1>
                  Our <span> Certificate</span>
                </h1>
                <p>
                  We are grateful to be recognized for our dedication and
                  efforts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
