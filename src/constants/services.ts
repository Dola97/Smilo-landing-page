import { DenturesIcon } from "@/assest/svgs/dentures";
import { ImplantsIcon } from "@/assest/svgs/implants";
import { RootCanalIcon } from "@/assest/svgs/root-canal";
import { WhiteningIcon } from "@/assest/svgs/whitening";

export const Services = [
  {
    name: "Dentures",
    decription: "Removable dental appliances that replace missing teeth",
    Icon: DenturesIcon,
    bg: "bg-sky",
  },
  {
    name: "Implants",
    decription: "Permanent dental prosthetics that replace missing teeth",
    Icon: ImplantsIcon,
    bg: "bg-violet",
  },
  {
    name: "Whitening",
    decription:
      "Process of lightening teeth to achieve a brighter, whiter smile",
    Icon: WhiteningIcon,
    bg: "bg-fuchsia",
  },
  {
    name: "Root Canal",
    decription: "Procedure to remove infected or damaged pulp from a tooth",
    Icon: RootCanalIcon,
    bg: "bg-pink",
  },
];
