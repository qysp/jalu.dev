import ExternalLink from '@/components/ExternalLink';
import Navigation from '@/components/Navigation/Navigation';
import Footer from '@/shared/layout/Footer';
import Header from '@/shared/layout/Header';
import Main from '@/shared/layout/Main';
import { url } from '@/util/url';
import Head from 'next/head';
import { FC, Fragment } from 'react';

export type Meta = {
    title: string;
    description: string;
    image: string;
};

export type ContainerProps = Partial<Meta>;

const Container: FC<ContainerProps> = ({ children, ...customMeta }) => {
    const meta: Meta = {
        title: 'Hey, this is Jalu 👋',
        description: 'Full Stack Webdeveloper from Germany.',
        image: url('/images/avatar.jpg'),
        ...customMeta,
    };

    return (
        <Fragment>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />

                <meta property="og:site_name" content="Jalu" />
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={meta.image} />

                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <Header>
                <Navigation />
            </Header>
            <Main>
                {children}
            </Main>
            <Footer>
                <ExternalLink href="https://github.com/qysp">
                    GitHub
                </ExternalLink>
            </Footer>
        </Fragment>
    );
};

export default Container;