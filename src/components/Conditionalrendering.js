import { useState } from "react";
import "./Condrener.css";
// import green from "@material-ui/core/colors/green";

import VerifiedIcon from "@mui/icons-material/Verified";

const ConditionalRendering = () => {
  const [isVerified, setisVerified] = useState(false);

  return (
    <>
      <div className="conditional-render">
        <h1>@Rani Singh Nagvanshi</h1>
        {isVerified ? (
          <p>
            @Rani Singh Nagvanshi is Verified
            <VerifiedIcon style={{ fill: "#0072ea" }} />
          </p>
        ) : null}
        <button
          className="btn"
          type="button"
          onClick={() => setisVerified(true)}
        >
          Get Verified
        </button>
      </div>
    </>
  );
};
export default ConditionalRendering;
