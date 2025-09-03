import Img from "@/assets/images/ttm_signup-img.svg";

import "@/styles/StudentSignup/SignupImg.css";

export default function SignupImg() {
  return (
    <div className="signup-img drop-shadow">
      <img src={Img} aria-hidden="true" />
    </div>
  );
}
