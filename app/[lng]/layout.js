// app/[lng]/layout.js
import "./style.css";
import Sidebar from "@/components/Sidebar";
import { locales } from "@/config.js";
import { Footer } from "@/components/Footer";
import CkProvider from "@/components/CkProvider";

export async function generateStaticParams() {
  return locales.map((lng) => ({ lng }));
}

export default async function RootLayout({ children, params }) {
  const { lng } = await params;

  return (
    <html lang={lng}>
      <body>
        <div className="container">
          <div className="main">
            <CkProvider>
              <Sidebar lng={lng} />
              <section className="col note-viewer">{children}</section>
            </CkProvider>
          </div>
          <Footer lng={lng} />
        </div>
      </body>
    </html>
  );
}
