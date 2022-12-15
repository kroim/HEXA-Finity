import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <g clip-path="url(#clip0_1847_4265)">
        <path
          d="M15.4806 3.82864L13.4733 1.11664C13.2264 0.771526 12.9009 0.490216 12.5236 0.296021C12.1464 0.101826 11.7282 0.00033863 11.3039 -2.93427e-05H4.69727C4.27502 -0.000425674 3.85872 0.0994527 3.48262 0.291386C3.10652 0.483319 2.78137 0.761821 2.53393 1.10397L0.490601 3.8353C0.15791 4.30443 -0.013902 4.86869 0.00087986 5.44362C0.0156617 6.01855 0.216243 6.57323 0.572601 7.02464L6.43393 15.2433C6.62073 15.4798 6.8588 15.6708 7.1302 15.8019C7.40159 15.933 7.69921 16.0007 8.0006 16C8.30716 15.9994 8.6095 15.9284 8.88434 15.7926C9.15918 15.6568 9.3992 15.4598 9.58594 15.2166L15.4006 7.0893C15.7729 6.63129 15.9828 6.0627 15.9972 5.47263C16.0117 4.88256 15.83 4.30436 15.4806 3.82864V3.82864ZM12.3953 1.90064L14.4073 4.6193C14.4179 4.63397 14.4206 4.6513 14.4313 4.66664H11.1699L10.2179 1.3333H11.3039C11.5179 1.33397 11.7286 1.38581 11.9185 1.48451C12.1083 1.5832 12.2718 1.72588 12.3953 1.90064V1.90064ZM8.0006 12.7453L6.2006 5.99997H9.8006L8.0006 12.7453ZM6.21794 4.66664L7.16993 1.3333H8.83127L9.78327 4.66664H6.21794ZM3.61193 1.8913C3.73563 1.7189 3.89857 1.57838 4.08728 1.48136C4.27599 1.38434 4.48507 1.33359 4.69727 1.3333H5.78327L4.83127 4.66664H1.54593C1.55527 4.65197 1.55793 4.63397 1.5686 4.61997L3.61193 1.8913ZM1.6326 6.21664C1.58447 6.14865 1.54315 6.07607 1.50927 5.99997H4.82193L6.81793 13.4866L1.6326 6.21664ZM9.18127 13.4933L11.1813 5.99997H14.5053C14.4623 6.09948 14.408 6.19367 14.3433 6.28064L9.18127 13.4933Z"
          fill="#7645D9"
        />
      </g>
      <defs>
        <clipPath id="clip0_1847_4265">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Icon;
