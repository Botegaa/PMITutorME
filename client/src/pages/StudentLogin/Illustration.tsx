import Img from "@/assets/images/ttm_login-img.svg";

import "@/styles/StudentLogin/LoginImg.css";

export default function LoginImg() {
  return (
    <>
      <div className="login-img drop-shadow">
        <img src={Img} aria-hidden="true" />
      </div>
    </>
  );
}
