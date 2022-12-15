import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <g clip-path="url(#clip0_1847_2840)">
        <path
          d="M10.0607 10.6667C14.4407 10.6427 16 8.32266 16 6.33332C15.9996 5.80002 15.8165 5.28296 15.4812 4.86823C15.1459 4.4535 14.6787 4.16614 14.1573 4.05399C14.248 3.79599 14.3267 3.55932 14.3793 3.37999C14.4957 2.98995 14.5186 2.57799 14.4461 2.17747C14.3736 1.77695 14.2077 1.39914 13.962 1.07466C13.7143 0.739913 13.3912 0.468196 13.019 0.281496C12.6467 0.0947965 12.2358 -0.00164067 11.8193 -1.01815e-05H4.18067C3.76423 -0.00164067 3.35326 0.0947965 2.98102 0.281496C2.60878 0.468196 2.28572 0.739913 2.038 1.07466C1.79227 1.39914 1.62644 1.77695 1.55393 2.17747C1.48143 2.57799 1.50429 2.98995 1.62067 3.37999C1.67333 3.55932 1.754 3.79599 1.84267 4.05399C1.32129 4.16614 0.854062 4.4535 0.518785 4.86823C0.183509 5.28296 0.00041752 5.80002 0 6.33332C0 8.32266 1.55933 10.6427 5.93933 10.6667C5.97827 10.869 5.99858 11.0746 6 11.2807V13.3333C6.01146 13.5114 5.98482 13.6899 5.92186 13.8568C5.85891 14.0238 5.76108 14.1754 5.63491 14.3016C5.50874 14.4277 5.35712 14.5256 5.19016 14.5885C5.0232 14.6515 4.84473 14.6781 4.66667 14.6667H4C3.82319 14.6667 3.65362 14.7369 3.5286 14.8619C3.40357 14.9869 3.33333 15.1565 3.33333 15.3333C3.33333 15.5101 3.40357 15.6797 3.5286 15.8047C3.65362 15.9298 3.82319 16 4 16H12C12.1768 16 12.3464 15.9298 12.4714 15.8047C12.5964 15.6797 12.6667 15.5101 12.6667 15.3333C12.6667 15.1565 12.5964 14.9869 12.4714 14.8619C12.3464 14.7369 12.1768 14.6667 12 14.6667H11.3387C11.1602 14.6787 10.9813 14.6525 10.8138 14.5898C10.6462 14.5271 10.494 14.4294 10.3673 14.3032C10.2406 14.177 10.1423 14.0252 10.0789 13.8579C10.0156 13.6907 9.98868 13.5118 10 13.3333V11.28C10.0015 11.0741 10.0218 10.8688 10.0607 10.6667ZM13.6667 5.33332C13.9319 5.33332 14.1862 5.43868 14.3738 5.62622C14.5613 5.81375 14.6667 6.06811 14.6667 6.33332C14.6667 7.68932 13.594 9.13332 10.6427 9.31332C10.7903 9.11186 10.9608 8.92819 11.1507 8.76599C12.2133 7.80865 13.0603 6.63628 13.6353 5.32666C13.646 5.32732 13.6553 5.33332 13.6667 5.33332ZM1.33333 6.33332C1.33333 6.06811 1.43869 5.81375 1.62623 5.62622C1.81376 5.43868 2.06812 5.33332 2.33333 5.33332C2.34467 5.33332 2.354 5.32732 2.36467 5.32666C2.9397 6.63628 3.78666 7.80865 4.84933 8.76599C5.03925 8.92819 5.20972 9.11186 5.35733 9.31332C2.406 9.13332 1.33333 7.68932 1.33333 6.33332ZM7.00867 14.6667C7.22907 14.2573 7.34085 13.7982 7.33333 13.3333V11.2807C7.33565 10.6099 7.19187 9.94666 6.912 9.33706C6.63213 8.72747 6.22287 8.18612 5.71267 7.75066C4.35702 6.45503 3.38376 4.81156 2.89933 2.99999C2.84241 2.80877 2.83146 2.60681 2.86737 2.41056C2.90328 2.21431 2.98505 2.02932 3.106 1.87066C3.23036 1.70301 3.39246 1.567 3.57916 1.47365C3.76587 1.38029 3.97193 1.33222 4.18067 1.33332H11.8193C12.0283 1.33253 12.2345 1.38101 12.4212 1.47484C12.608 1.56866 12.7699 1.70518 12.894 1.87332C13.015 2.03199 13.0967 2.21698 13.1326 2.41323C13.1685 2.60948 13.1576 2.81144 13.1007 3.00266C12.6158 4.81326 11.6426 6.45576 10.2873 7.75066C9.77715 8.18599 9.36789 8.72721 9.08802 9.3367C8.80814 9.94619 8.66436 10.6093 8.66667 11.28V13.3333C8.65915 13.7982 8.77093 14.2573 8.99133 14.6667H7.00867Z"
          fill="#7645D9"
        />
      </g>
      <defs>
        <clipPath id="clip0_1847_2840">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Icon;
