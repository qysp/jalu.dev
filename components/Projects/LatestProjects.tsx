import ProjectCard from '@/components/Projects/ProjectCard';
import Title, { TitleSize } from '@/shared/typography/Title';
import styled from '@emotion/styled';
import { FC } from 'react';

export type LatestProjectsProps = {};

const Section = styled.section({
    display: 'flex',
    flexDirection: 'column',
});

const Grid = styled.div({
    display: 'grid',
    // TODO: Make it responsive.
    gridTemplateColumns: '1fr',
    gridGap: '0.25rem',
});

const LatestProjects: FC<LatestProjectsProps> = () => {
    return (
        <Section>
            <Title size={TitleSize.LG}>
                Latest Projects
            </Title>
            <Grid>
                <ProjectCard
                    title="Nothing here yet!"
                    href="https://github.com/qysp"
                    description="This is still work in progress."
                />
            </Grid>
        </Section>
    );
};

export default LatestProjects;
