import { IconProps } from "../types/IconProps";

export const EditIcon = ({
  bg = "#649FBF",
  w = "100%",
  h = "100%",
}: IconProps) => (
  <svg
    width={w}
    height={h}
    viewBox="0 0 21 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.335 2.88147L17.5467 6.00913C17.682 6.1409 17.682 6.35588 17.5467 6.48764L9.7703 14.0606L6.46606 14.4178C6.02455 14.4663 5.65068 14.1022 5.70053 13.6723L6.06727 10.4544L13.8436 2.88147C13.9789 2.74971 14.1997 2.74971 14.335 2.88147ZM20.1032 2.08742L18.3656 0.395292C17.8244 -0.131764 16.9449 -0.131764 16.4002 0.395292L15.1397 1.62278C15.0044 1.75454 15.0044 1.96953 15.1397 2.10129L18.3514 5.22895C18.4867 5.36071 18.7074 5.36071 18.8427 5.22895L20.1032 4.00147C20.6444 3.47094 20.6444 2.61448 20.1032 2.08742ZM13.6727 12.0009V15.5308H2.27879V4.4349H10.4611C10.575 4.4349 10.6818 4.38982 10.7637 4.31354L12.188 2.92655C12.4586 2.66302 12.2663 2.21572 11.8853 2.21572H1.70909C0.76553 2.21572 0 2.96122 0 3.8801V16.0856C0 17.0045 0.76553 17.75 1.70909 17.75H14.2424C15.186 17.75 15.9515 17.0045 15.9515 16.0856V10.6139C15.9515 10.2429 15.4922 10.0591 15.2216 10.3192L13.7973 11.7062C13.719 11.7859 13.6727 11.89 13.6727 12.0009Z"
      fill={bg}
    />
  </svg>
);