import React from "react";

function PasswordStrengthMeter({password}) {
  return (
    <div>
      <div className="progress mt-3">
        <div
          className="progress-bar bg-sccess"
          role="progressbar"
          style={{ width: "25%" }}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <p style={{color:'green'}}>قوی</p>
    </div>
  );
}

export default PasswordStrengthMeter;
