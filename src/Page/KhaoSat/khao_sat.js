import React, { useState } from "react";

import KhaoSat0 from "./khao_sat0";
import KhaoSat1 from "./khao_sat1";
import KhaoSat2 from "./khao_sat2";
import KhaoSat3 from "./khao_sat3";
import KhaoSat4 from "./khao_sat4";
import KhaoSat5 from "./khao_sat5";
import KhaoSat6 from "./khao_sat6";
import KhaoSat7 from "./khao_sat7";

import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

let steps = [
  KhaoSat0,
  KhaoSat1,
  KhaoSat2,
  KhaoSat3,
  KhaoSat4,
  KhaoSat5,
  KhaoSat6,
  KhaoSat7,
];

export default function KhaoSat() {
  const [khaoSatPoint, setKhaoSatPoint] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const theme = useTheme();

  const handleStartClick = (value) => {
    setKhaoSatPoint(value);
    setCurrentStep(currentStep + 1);
  };

  const handleBackClick = () => {
    setCurrentStep(currentStep - 1);
  };

  const isLastStep = currentStep === steps.length - 1;

  return (
    <div className="bg-neutral-950 h-160 flex justify-center items-center">
      <div className="ml-20 bg-white h-128 w-256 ">
        <div className="h-4/5">
          {currentStep !== 0 && currentStep !== 8 && (
            <MobileStepper
              variant="progress"
              steps={8}
              position="static"
              activeStep={currentStep}
              disabled={currentStep === 0}
              sx={{
                "& .MuiLinearProgress-root": {
                  backgroundColor: "#e6e6e6",
                  width: "100%",
                },
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#FF5500",
                },
              }}
            />
          )}

          {isLastStep ? (
            <KhaoSat7 />
          ) : currentStep === 0 ? (
            <KhaoSat0 setKhaoSatValue={handleStartClick} />
          ) : currentStep === 1 ? (
            <KhaoSat1 />
          ) : currentStep === 2 ? (
            <KhaoSat2 />
          ) : currentStep === 3 ? (
            <KhaoSat3 />
          ) : currentStep === 4 ? (
            <KhaoSat4 />
          ) : currentStep === 5 ? (
            <KhaoSat5 />
          ) : currentStep === 6 ? (
            <KhaoSat6 />
          ) : (
            <div>Chúc mừng, bạn đã hoàn thành khảo sát!</div>
          )}
        </div>

        <div className="h-1/5 flex items-center justify-center bg-ys-lightblue">
          {currentStep !== 0 && currentStep !== 8 && (
            <div className="h-1/5 flex items-center justify-center bg-ys-lightblue">
              <Button
                variant="contained"
                startIcon={<ArrowLeftIcon style={{ fontSize: "18px" }} />}
                style={{
                  backgroundColor: "transparent",
                  color: "grey",
                  boxShadow: "0px 0px 0px rgba(0, 0, 0, 0) ",
                  fontWeight: "bold",
                  fontSize: "18px",
                  margin: "0 10px",
                }}
                onClick={handleBackClick}
              >
                Trở lại
              </Button>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon style={{ fontSize: "18px" }} />}
                style={{
                  backgroundColor: "#FF5500",
                  fontWeight: "bold",
                  fontSize: "18px",
                  margin: "0 10px",
                }}
                onClick={() => handleStartClick(1)}
              >
                Tiếp tục
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
