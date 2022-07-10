import GlobalStyles from '@/shared/GlobalStyles';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

class Document extends NextDocument {

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="preload"
                        href="/fonts/Satoshi-Variable.woff2"
                        type="font/woff2"
                        as="font"
                        crossOrigin="anonymous"
                    />
                    <link rel="icon" href="/favicons/favicon.ico" />
                    <link
                        href="/site.webmanifest"
                        rel="manifest"
                    />
                    <meta name="robots" content="noindex, nofollow" />
                </Head>
                <body>
                    <GlobalStyles />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }

}

export default Document;
