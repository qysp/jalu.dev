import Container from '@/components/Container';
import Title, { TitleSize } from '@/shared/typography/Title';
import { fgColor } from '@/util/style';
import styled from '@emotion/styled';
import type { NextPage } from 'next';

const Subtitle = styled.p({
    color: fgColor(),
    fontSize: '1.25rem',
    fontWeight: 300,
    margin: 0,
});

const Home: NextPage = () => {
    return (
        <Container>
            <Title size={TitleSize.LG} noMargin>
                Hey, this is Jalu.
            </Title>
            <Subtitle>
                Full Stack Webdeveloper from Germany.
            </Subtitle>
        </Container>
    );
};

export default Home;
