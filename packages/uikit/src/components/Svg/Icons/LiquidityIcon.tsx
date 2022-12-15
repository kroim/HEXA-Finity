import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 16 16" {...props}>
      <g clip-path="url(#clip0_1836_1672)">
    <path
      d="M12.6668 5.33333V4.712C12.6659 3.81619 12.3097 2.95733 11.6763 2.3239C11.0428 1.69046 10.184 1.33422 9.28816 1.33333H8.66683V0H7.3335V1.33333H6.71216C5.91037 1.33419 5.13502 1.62016 4.52469 2.14012C3.91436 2.66008 3.50884 3.38015 3.3806 4.17162C3.25236 4.96308 3.40977 5.77436 3.82469 6.46044C4.23961 7.14652 4.885 7.66268 5.6455 7.91667L7.3335 8.48V13.3333H6.71216C6.16987 13.3328 5.64994 13.1171 5.26648 12.7337C4.88302 12.3502 4.66736 11.8303 4.66683 11.288V10.6667H3.3335V11.288C3.33438 12.1838 3.69063 13.0427 4.32406 13.6761C4.95749 14.3095 5.81636 14.6658 6.71216 14.6667H7.3335V16H8.66683V14.6667H9.28816C10.09 14.6658 10.8653 14.3798 11.4756 13.8599C12.086 13.3399 12.4915 12.6199 12.6197 11.8284C12.748 11.0369 12.5906 10.2256 12.1756 9.53956C11.7607 8.85348 11.1153 8.33732 10.3548 8.08333L8.66683 7.52V2.66667H9.28816C9.83046 2.6672 10.3504 2.88286 10.7338 3.26632C11.1173 3.64978 11.333 4.16971 11.3335 4.712V5.33333H12.6668ZM9.9335 9.34733C10.3943 9.50071 10.7856 9.81309 11.0371 10.2285C11.2887 10.644 11.3843 11.1354 11.3066 11.6149C11.229 12.0943 10.9833 12.5305 10.6135 12.8454C10.2437 13.1602 9.77386 13.3332 9.28816 13.3333H8.66683V8.92467L9.9335 9.34733ZM7.3335 7.07533L6.06683 6.65267C5.60599 6.49929 5.21477 6.18691 4.96319 5.77146C4.7116 5.356 4.61607 4.86457 4.6937 4.38512C4.77132 3.90566 5.01703 3.46948 5.38685 3.15463C5.75667 2.83978 6.22647 2.6668 6.71216 2.66667H7.3335V7.07533Z"
      fill="#7645D9"
    />
  </g>
  <defs>
    <clipPath id="clip0_1836_1672">
      <rect width="16" height="16" fill="white" />
    </clipPath>
  </defs>
    </Svg>
  );
};

export default Icon;
