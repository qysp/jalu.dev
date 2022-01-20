import Container from '@/components/Container';
import Introduction from '@/components/Introduction';
import LatestProjects from '@/components/Projects/LatestProjects';
import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <Container>
            <Introduction />
            <LatestProjects />
        </Container>
    );
};

export default Home;
