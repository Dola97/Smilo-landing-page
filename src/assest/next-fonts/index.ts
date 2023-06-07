import localFont from "next/font/local";
const Reg = localFont({
  src: "../fonts/EudoxusSans-Regular.woff2",
  variable: "--font-reg",
  weight: "normal",
});
const Med = localFont({
  src: "../fonts/EudoxusSans-Medium.woff2",
  variable: "--font-med",
  weight: "normal",
});
const Bold = localFont({
  src: "../fonts/EudoxusSans-Bold.woff2",
  variable: "--font-bold",
  weight: "bold",
});
const ExBold = localFont({
  src: "../fonts/EudoxusSans-ExtraBold.woff2",
  variable: "--font-xbold",
  weight: "bolder",
});

export { Reg, Med, Bold, ExBold };
