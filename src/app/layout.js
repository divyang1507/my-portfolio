import { Nunito, Open_Sans } from "next/font/google";
import "./globals.css";

const OpenSans = Open_Sans({
  weight: ["300", "400","500", "600","700", "800"],
  subsets: ["latin"],
});
const nunito = Nunito({
  weight: ["200", "300", "400","500", "600","700", "800","900" ],
  subsets: ["latin"],
});



export const metadata = {
  title: "Kindev",
  description: "UI/UX Designer | Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${OpenSans.className}  ${nunito.className}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
