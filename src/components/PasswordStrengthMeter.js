import React from "react";
import zxcvbn from "zxcvbn";

function PasswordStrengthMeter({password}) {
    const testResult = zxcvbn(password);
    const num = testResult.score *100/4;
    const createpasslabel = () =>{
        switch(testResult.score){
            case 0 :
                return 'خیلی ضعیف';
            case 1:
                return 'ضعیف';
            case 2:
                return 'متوسظ';
            case 3:
                return 'خوب';
            case 4:
                return 'قوی';
            default:
                return '';
        }
    }
    const functionprogresscolor = () =>{
        switch(testResult.score){
            case 0 :
                return '#828282';
            case 1:
                return '#ea1111';
            case 2:
                return '#ffad00';
            case 3:
                return '#9bc158';
            case 4:
                return '#00b500';
            default:
                return 'none';
        }
    }
    const changepasswordcolor = () =>({
        width:`${num}%`,
        background:functionprogresscolor(),
        height:'7px'
    })
    

  return (
    <div>
      <div className="progress mt-3">
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width:`${num}%` }}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <p style={{color:functionprogresscolor()}}>{createpasslabel()}</p>
    </div>
  );
}

export default PasswordStrengthMeter;
