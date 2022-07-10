import Container from '@/components/Container';
import UnderlinedText from '@/components/UnderlinedText';
import pageNotFound from '@/public/images/page_not_found.svg';
import Button from '@/shared/common/Button';
import Title, { TitleSize } from '@/shared/typography/Title';
import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const Section = styled.section({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
    marginTop: '2rem',
});

const Centered = styled.div({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
});

const NotFound: NextPage = () => {
    return (
        <Container title="404 - Jalu">
            <Section>
                <Image src={pageNotFound} alt="404" height={384} priority />
                <Centered>
                    <Title size={TitleSize.XL} fitContent>
                        Oh no, this page is {''}
                        <UnderlinedText direction="to left">
                            gone
                        </UnderlinedText>
                    </Title>
                    <Link href="/" passHref>
                        <Button as="a">
                            Go back home
                        </Button>
                    </Link>
                </Centered>
            </Section>
        </Container>
    );
};

export default NotFound;
