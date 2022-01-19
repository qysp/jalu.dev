import { css, Global } from '@emotion/react';
import { FC } from 'react';

export type GlobalStylesProps = {};

const GlobalStyles: FC<GlobalStylesProps> = () => (
    <Global
        styles={css`
            @font-face {
                font-family: 'Satoshi';
                src: url('/fonts/Satoshi-Variable.woff2') format('woff2');
                font-weight: 300 900;
                font-display: optional;
                font-style: normal;
            }

            :root {
                --fg: 255, 255, 255;
                --bg: 13, 13, 13;
            }
            
            * {
                box-sizing: border-box;
            }

            html, body {
                min-height: 100vh;
                padding: 0;
                margin: 0;
                font-family: Satoshi, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
                    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
            }

            #__next {
                min-height: 100vh;
                display: grid;
                grid-template-rows: auto 1fr auto;
                justify-content: center;
                color: rgb(var(--fg));
                background-color: rgb(var(--bg));
            }
        `}
    />
);

export default GlobalStyles;
