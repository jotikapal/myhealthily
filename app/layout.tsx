import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

        <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-J9ET5BNH1Q"
    ></script>

        {/* <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-J9ET5BNH1Q");
    </script>

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" /> */}

        <title>MyHealthily</title>

        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="author" content="MyHealthily" />

        <link rel="apple-touch-icon" href="/img/apple-touch-icon.png" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no"
        />
        <meta property="og:image" content="../img/blog/how-employee-census-changes-your-business.jpg" />

        <link
          id="googleFonts"
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800%7CShadows+Into+Light&display=swap"
          rel="stylesheet"
          type="text/css"
        />

        <link rel="stylesheet" href="/vendor/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/vendor/fontawesome-free/css/all.min.css" />
        <link rel="stylesheet" href="/vendor/animate/animate.compat.css" />
        <link
          rel="stylesheet"
          href="/vendor/simple-line-icons/css/simple-line-icons.min.css"
        />
        <link
          rel="stylesheet"
          href="/vendor/owl.carousel/assets/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="/vendor/owl.carousel/assets/owl.theme.default.min.css"
        />
        <link
          rel="stylesheet"
          href="/vendor/magnific-popup/magnific-popup.min.css"
        />
        <link
          rel="stylesheet"
          href="/vendor/circle-flip-slideshow/css/component.css"
        />

        <link rel="stylesheet" href="/css/theme.css" />
        <link rel="stylesheet" href="/css/theme-elements.css" />
        <link rel="stylesheet" href="/css/theme-blog.css" />
        <link rel="stylesheet" href="/css/theme-shop.css" />

        <link id="skinCSS" rel="stylesheet" href="/css/skins/default.css" />

        <link rel="stylesheet" href="/css/custom.css" />

        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
        <script src="/vendor/modernizr/modernizr.min.js"></script>

        {/* <script
      type="text/javascript"
      src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
      async
    ></script> */}

        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script> */}

        {/* <script src="https://cdn.pagesense.io/js/candorusa/60482c77eb8e406a9ccd3127bafff935.js"></script>
        <script src={`/js/custom.js`}></script>
        <script src={`/js/theme.init.js`}></script>
        <script src={`/vendor/circle-flip-slideshow/js/jquery.flipshow.min.js`}></script>
        <script src={`/js/views/view.howitworks.js`}></script>
        <script src={`/js/examples/examples.lightboxes.js`}></script> */}
      </head>
      <body>
        {/* <script>
          import TagManager from "react-gtm-module";
          const tagManagerArgs = {
            gtmId: "G-J9ET5BNH1Q",
      };
          TagManager.initialize(tagManagerArgs);
        </script> */}
        <script src="/vendor/plugins/js/plugins.min.js"></script>
        <script src="/js/theme.js"></script>
        <script src="https://cdn.pagesense.io/js/candorusa/60482c77eb8e406a9ccd3127bafff935.js"></script>
        <script src={`/js/custom.js`}></script>
        <script src={`/js/theme.init.js`}></script>
        <script src={`/vendor/circle-flip-slideshow/js/jquery.flipshow.min.js`}></script>
        <script src={`/js/views/view.howitworks.js`}></script>
        <script src={`/js/examples/examples.lightboxes.js`}></script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

