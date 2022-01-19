import Container from '@/components/Container';
import Subtitle from '@/shared/typography/Subtitle';
import Title, { TitleSize } from '@/shared/typography/Title';
import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <Container>
            <Title size={TitleSize.LG}>
                Hey, this is Jalu.
            </Title>
            <Subtitle>
                Full Stack Webdeveloper from Germany.
            </Subtitle>
        </Container>
    );
};

export default Home;
