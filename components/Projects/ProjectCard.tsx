import ExternalLink from '@/components/ExternalLink';
import Title, { TitleSize } from '@/shared/typography/Title';
import { linearGradient } from '@/util/style';
import styled from '@emotion/styled';
import { FC } from 'react';

export type ProjectCardProps = {
    title: string;
    href: string;
    description: string;
};

// TODO: maxWidth
const Card = styled.article({
    padding: '0.25rem',
    borderRadius: '7px',
    background: 'rgb(26, 26, 26)',
    position: 'relative',
    zIndex: 0,

    '::before': {
        opacity: 0,
        background: linearGradient(),
        transition: 'opacity 0.225s ease-in-out',
        borderRadius: 'inherit',
        content: '""',
        display: 'block',
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
    },

    '&:hover::before': {
        opacity: 1,
    },
});

const InnerCard = styled.div({
    padding: '1rem 0.75rem',
    borderRadius: '5px',
    background: 'rgb(26, 26, 26)',
    position: 'relative',
    zIndex: 1,
});

const Description = styled.p({
    margin: '0.5rem 0 0 0',
});

const ProjectCard: FC<ProjectCardProps> = ({
    title,
    href,
    description,
}) => {
    return (
        <Card>
            <InnerCard>
                <Title
                    size={TitleSize.SM}
                    as="h2"
                    noMargin
                    fitContent
                >
                    <ExternalLink href={href} withIcon>
                        {title}
                    </ExternalLink>
                </Title>
                <Description>
                    {description}
                </Description>
            </InnerCard>
        </Card>
    );
};

export default ProjectCard;
