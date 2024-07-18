import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
    openGraph: {
      title: 'UI Design Studio',
      description: 'Creating beautiful and functional websites for restaurants.',
      url: 'https://www.ui-design-studio.com/',
      siteName: 'ui-design-studio.com',
      images: [
        {
          url: 'https://www.ui-design-studio.com/og.png',
          width: 800,
          height: 800,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    title: 'UI Design Studio',
    description: 'Creating beautiful and functional websites for restaurants.',
  };

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
