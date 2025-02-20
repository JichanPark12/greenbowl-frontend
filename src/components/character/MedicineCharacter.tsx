"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import MotionPathPlugin from "gsap/MotionPathPlugin";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(MotionPathPlugin);

const MedicineCharacter = ({ isPlay }: { isPlay: boolean }) => {
  const ref = useRef<SVGSVGElement>(null);
  useGSAP(
    () => {
      const items = document.querySelectorAll("#medicines g");
      const tl = gsap.timeline();
      items.forEach((item, index) => {
        const startProgress = index / items.length;

        tl.to(
          item,
          {
            duration: 5,
            repeat: -1,
            ease: "none",
            motionPath: {
              path: "#path",
              align: "#path",
              autoRotate: true,
              start: startProgress,
              end: 1 + startProgress,
            },
            onUpdate: function () {
              let progress = this.progress() + startProgress;
              progress = progress % 1;

              const scaleValue = 0.5 + 0.5 * Math.sin(progress * Math.PI * 2);

              gsap.set(item, { scale: scaleValue });
            },
          },
          0
        );
      });
    },
    { scope: ref, revertOnUpdate: true }
  );
  return (
    <svg
      width="168"
      height="168"
      viewBox="0 0 168 168"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
    >
      <path
        id="path"
        stroke="null"
        fill="null"
        d="m155.54194,114.09415c-14.20328,21.79409 -32.48587,31.50192 -51.52261,33.00664c-13.12952,1.0355 -26.61293,-1.84449 -39.36504,-7.36177c-4.57065,-1.95775 -9.03845,-4.28763 -13.35771,-6.87638c-0.11427,-0.0809 -0.23996,-0.12944 -0.3428,-0.21034c-51.4312,-31.03287 -82.45446,-101.73827 -9.23271,-115.05418c6.26179,-1.13258 13.30058,-1.86067 21.16209,-2.08718c14.66035,-3.23594 38.19952,0.56629 58.97311,10.63008c31.91454,15.484 57.24735,45.7239 33.68566,87.96932l0,-0.01618z"
      />
      <path
        d="M152.463 101.071C140.033 114.541 124.033 120.541 107.373 121.471C95.8827 122.111 84.0827 120.331 72.9227 116.921C68.9227 115.711 65.0127 114.271 61.2327 112.671C61.1327 112.621 61.0227 112.591 60.9327 112.541C15.9227 93.3609 -11.2273 49.6609 52.8527 41.4309C58.3327 40.7309 64.4927 40.2809 71.3727 40.1409C84.2027 38.1409 104.803 40.4909 122.983 46.7109C150.913 56.2809 173.083 74.9709 152.463 101.081V101.071Z"
        fill="#E4F0D9"
      />
      <g id="medicines">
        <g id="one">
          <path
            d="M164.747 46.8615C167.227 44.3615 167.207 40.3315 164.707 37.8515C162.207 35.3715 158.177 35.3915 155.697 37.8915L149.617 44.0215L158.657 52.9915L164.737 46.8615H164.747Z"
            fill="#E7FABE"
          />
          <path
            d="M149.621 44.0195L143.301 50.3895C140.821 52.8895 140.841 56.9195 143.341 59.3995C145.841 61.8795 149.871 61.8595 152.351 59.3595L158.671 52.9895L149.631 44.0195H149.621Z"
            fill="#C0D68B"
          />
        </g>
        <g id="two">
          <path
            d="M87.36 148.631C92.88 148.631 97.47 144.681 98.46 139.441H76.25C77.24 144.681 81.83 148.631 87.36 148.631Z"
            fill="#DADDC8"
          />
          <path
            d="M87.36 126.012C81.83 126.012 77.24 129.962 76.25 135.202H98.46C97.47 129.962 92.88 126.012 87.36 126.012Z"
            fill="#DADDC8"
          />
          <path
            d="M98.459 135.203H76.249C76.119 135.893 76.0391 136.603 76.0391 137.333C76.0391 138.063 76.109 138.773 76.249 139.443H98.459C98.589 138.763 98.6691 138.053 98.6691 137.333C98.6691 136.613 98.599 135.893 98.459 135.203Z"
            fill="#BDC0AE"
          />
        </g>
        <g id="three">
          <path
            d="M164.747 46.8615C167.227 44.3615 167.207 40.3315 164.707 37.8515C162.207 35.3715 158.177 35.3915 155.697 37.8915L149.617 44.0215L158.657 52.9915L164.737 46.8615H164.747Z"
            fill="#E7FABE"
          />
          <path
            d="M149.621 44.0195L143.301 50.3895C140.821 52.8895 140.841 56.9195 143.341 59.3995C145.841 61.8795 149.871 61.8595 152.351 59.3595L158.671 52.9895L149.631 44.0195H149.621Z"
            fill="#C0D68B"
          />
        </g>
        <g id="four">
          <path
            d="M87.36 148.631C92.88 148.631 97.47 144.681 98.46 139.441H76.25C77.24 144.681 81.83 148.631 87.36 148.631Z"
            fill="#DADDC8"
          />
          <path
            d="M87.36 126.012C81.83 126.012 77.24 129.962 76.25 135.202H98.46C97.47 129.962 92.88 126.012 87.36 126.012Z"
            fill="#DADDC8"
          />
          <path
            d="M98.459 135.203H76.249C76.119 135.893 76.0391 136.603 76.0391 137.333C76.0391 138.063 76.109 138.773 76.249 139.443H98.459C98.589 138.763 98.6691 138.053 98.6691 137.333C98.6691 136.613 98.599 135.893 98.459 135.203Z"
            fill="#BDC0AE"
          />
        </g>
        <g id="five">
          <path
            d="M164.747 46.8615C167.227 44.3615 167.207 40.3315 164.707 37.8515C162.207 35.3715 158.177 35.3915 155.697 37.8915L149.617 44.0215L158.657 52.9915L164.737 46.8615H164.747Z"
            fill="#E7FABE"
          />
          <path
            d="M149.621 44.0195L143.301 50.3895C140.821 52.8895 140.841 56.9195 143.341 59.3995C145.841 61.8795 149.871 61.8595 152.351 59.3595L158.671 52.9895L149.631 44.0195H149.621Z"
            fill="#C0D68B"
          />
        </g>
        <g id="six">
          <path
            d="M87.36 148.631C92.88 148.631 97.47 144.681 98.46 139.441H76.25C77.24 144.681 81.83 148.631 87.36 148.631Z"
            fill="#DADDC8"
          />
          <path
            d="M87.36 126.012C81.83 126.012 77.24 129.962 76.25 135.202H98.46C97.47 129.962 92.88 126.012 87.36 126.012Z"
            fill="#DADDC8"
          />
          <path
            d="M98.459 135.203H76.249C76.119 135.893 76.0391 136.603 76.0391 137.333C76.0391 138.063 76.109 138.773 76.249 139.443H98.459C98.589 138.763 98.6691 138.053 98.6691 137.333C98.6691 136.613 98.599 135.893 98.459 135.203Z"
            fill="#BDC0AE"
          />
        </g>
        <g id="seven">
          <path
            d="M164.747 46.8615C167.227 44.3615 167.207 40.3315 164.707 37.8515C162.207 35.3715 158.177 35.3915 155.697 37.8915L149.617 44.0215L158.657 52.9915L164.737 46.8615H164.747Z"
            fill="#E7FABE"
          />
          <path
            d="M149.621 44.0195L143.301 50.3895C140.821 52.8895 140.841 56.9195 143.341 59.3995C145.841 61.8795 149.871 61.8595 152.351 59.3595L158.671 52.9895L149.631 44.0195H149.621Z"
            fill="#C0D68B"
          />
        </g>
        <g id="eight">
          <path
            d="M87.36 148.631C92.88 148.631 97.47 144.681 98.46 139.441H76.25C77.24 144.681 81.83 148.631 87.36 148.631Z"
            fill="#DADDC8"
          />
          <path
            d="M87.36 126.012C81.83 126.012 77.24 129.962 76.25 135.202H98.46C97.47 129.962 92.88 126.012 87.36 126.012Z"
            fill="#DADDC8"
          />
          <path
            d="M98.459 135.203H76.249C76.119 135.893 76.0391 136.603 76.0391 137.333C76.0391 138.063 76.109 138.773 76.249 139.443H98.459C98.589 138.763 98.6691 138.053 98.6691 137.333C98.6691 136.613 98.599 135.893 98.459 135.203Z"
            fill="#BDC0AE"
          />
        </g>
      </g>
      <path
        d="M116.636 105.032C116.616 108.482 115.896 111.442 114.596 113.982C113.006 117.142 110.516 119.622 107.376 121.472C95.8862 122.112 84.0862 120.332 72.9262 116.922C68.9262 115.712 65.0162 114.272 61.2362 112.672C60.2662 110.362 59.7462 107.722 59.7662 104.732C59.7662 103.982 59.8062 103.242 59.8862 102.522C59.9462 101.752 60.0562 100.992 60.2162 100.222C60.4262 99.0916 60.7162 97.9916 61.0762 96.9116C61.8262 94.6916 62.8862 92.5916 64.2062 90.6516C69.2762 83.2216 78.2062 78.3116 88.3662 78.3716C100.156 78.4416 110.226 85.1716 114.466 94.7216C114.696 95.2216 114.896 95.7216 115.096 96.2416C115.886 98.3216 116.376 100.522 116.556 102.792C116.576 103.012 116.606 103.222 116.606 103.442C116.646 103.962 116.656 104.492 116.656 105.022L116.636 105.032Z"
        fill="#C0D68B"
      />
      <path
        d="M129.97 77.6519C128.71 90.1619 122.81 99.1719 113.97 104.552C106.13 109.332 96.26 111.102 85.87 110.342C84.73 110.262 83.57 110.152 82.42 110.002C76.1 109.222 70.08 107.612 64.73 105.122C60.21 103.032 56.14 100.322 52.73 96.9719C45.19 89.5719 41.23 79.3519 42.5 66.8319C43.2 59.9019 45.38 53.5119 48.67 47.9619C52.42 41.6419 56.8 35.6019 61.65 30.0619C69.16 21.4619 79.75 16.4219 91.17 17.8219C101.43 19.0819 109.99 25.3019 115.71 33.9519C120.14 40.6719 123.86 47.9119 126.82 55.3019C129.58 62.1719 130.77 69.7919 129.98 77.6519H129.97Z"
        fill="#C0D68B"
      />
      <path
        d="M121.799 79.8211C121.909 97.0711 106.669 104.701 87.7587 104.701C68.8587 104.701 53.4587 97.0711 53.3287 79.8311C53.2187 62.5811 68.4387 48.6111 87.3487 48.6211C106.259 48.6211 121.669 62.5911 121.789 79.8311L121.799 79.8211Z"
        fill="#F3F3DF"
      />
      <path
        d="M109.999 115.382C107.119 115.382 104.349 113.792 102.979 111.052C101.029 107.172 102.599 102.462 106.479 100.512C109.939 98.7817 115.769 95.2617 116.009 91.2317C116.259 86.9817 110.949 81.5617 108.179 79.7417C104.559 77.3517 103.559 72.4817 105.949 68.8617C108.339 65.2417 113.199 64.2417 116.829 66.6317C122.679 70.4917 132.389 80.2117 131.679 92.1617C131.139 101.242 125.029 108.772 113.519 114.552C112.389 115.122 111.189 115.392 109.999 115.392V115.382Z"
        fill="#C0D68B"
      />
      <path
        d="M77.7294 109.262C77.8294 111.012 77.3294 112.812 76.2094 114.332C75.3394 115.512 74.1894 116.382 72.9194 116.922C68.9194 115.712 65.0094 114.272 61.2294 112.672C61.1294 112.622 61.0194 112.592 60.9294 112.542C53.6594 106.162 49.4694 99.2423 48.4394 91.9123C48.3294 91.1623 48.2594 90.4123 48.2194 89.6523C47.8094 81.4123 51.4294 74.9923 54.6894 70.9323C56.0194 69.2923 57.2794 68.0323 58.1894 67.2023C61.3994 64.2923 66.3794 64.5323 69.2894 67.7423C72.1994 70.9423 71.9594 75.9123 68.7494 78.8323C67.5494 79.9223 63.6494 83.8723 63.9094 88.8623C63.9494 89.4623 64.0294 90.0823 64.1894 90.6723C65.3894 95.6323 70.2294 100.162 74.3994 103.262H74.4194C74.4194 103.262 74.4994 103.332 74.5494 103.372C76.5194 104.822 77.6094 107.022 77.7294 109.282V109.262Z"
        fill="#C0D68B"
      />
      <path
        d="M100.125 95.5221C99.7445 97.6421 98.2446 99.5621 96.2346 100.362C94.8946 100.892 93.3845 100.912 92.0145 100.482C90.1545 99.9021 88.2245 99.9121 86.3945 100.592C85.7945 100.812 85.1645 100.952 84.5345 100.982C80.2345 101.232 76.4845 96.9621 77.5845 92.7221C78.1845 90.4021 80.2145 88.5221 82.5745 88.0921C83.5945 87.9021 84.6545 88.0021 85.6445 88.3221C87.8445 89.0421 90.1645 88.9421 92.4045 88.3821C93.5145 88.1021 94.7046 88.1121 95.8046 88.4621C98.2746 89.2421 100.125 91.6721 100.215 94.2621C100.235 94.6821 100.195 95.1021 100.125 95.5221Z"
        fill="#44443F"
      />
      <path
        d="M104.333 80.633C104.333 80.633 98.6128 81.043 96.3828 77.293"
        stroke="#44443F"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M72.8516 80.633C72.8516 80.633 78.5716 81.043 80.8016 77.293"
        stroke="#44443F"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default MedicineCharacter;
