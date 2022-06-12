import { render } from "@testing-library/react";
import React from "react";
import { Button } from "reactstrap";
import Navbar from "../../components/Navbar";
import Phase4 from "../../components/Movies/Phase4";
import WhatsNext from "../../components/Movies/WhatsNext";
import "./NextSaga.css";

const NextSaga = () => {
  return (
    <div className="container-fluid">
      <h1 className="header-text">TO PHASE 4 AND BEYOND</h1>
      <h5 className="black-text">
        The Infinity Saga is complete. The world is changed forever and there's
        no going back. Now what?
      </h5>
      <div className="text">
        <Button
          size="lg"
          className="phaseBtn navColor phase1"
          color="danger"
          href="#phase4"
          style={{ marginBottom: "1rem" }}
        >
          Phase 4
        </Button>
        <Button
          size="lg"
          className="phaseBtn navColor phase2"
          color="danger"
          href="#whatsnext"
          style={{ marginBottom: "1rem" }}
        >
          What's Next?
        </Button>
      </div>
      <div className="row text-center" id="phase4">
        <Phase4 />
      </div>
      <div className="row text-center" id="whatsnext">
        <WhatsNext />
      </div>
    </div>
  );
};

export default NextSaga;
