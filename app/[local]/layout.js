import "./style.css";

import Sidebar from "@/components/Sidebar";
import { NextIntlClientProvider } from "next-intl";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <div className="main">
            <NextIntlClientProvider>
              <Sidebar />
              <section className="col note-viewer">{children}</section>
            </NextIntlClientProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
