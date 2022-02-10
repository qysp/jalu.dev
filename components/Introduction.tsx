import UnderlinedText from '@/components/UnderlinedText';
import Title, { TitleSize } from '@/shared/typography/Title';
import styled from '@emotion/styled';
import { FC } from 'react';

export type IntroductionProps = {};

const Subtitle = styled.p({
    fontSize: '1.25rem',
    fontWeight: 300,
    margin: 0,
});

const Section = styled.section({
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1.5rem',
});

const Text = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
});

// const RoundedImage = styled(Image)({
//     borderRadius: '50%',
// });

const Introduction: FC<IntroductionProps> = () => {
    return (
        <Section>
            <Text>
                <Title size={TitleSize.XL} noMargin>
                    Hey, this is {''}
                    <UnderlinedText withTransition>Jalu</UnderlinedText>
                </Title>
                <Subtitle>
                    Full Stack Webdeveloper from Germany.
                </Subtitle>
            </Text>
            {/* <RoundedImage
                src={avatar}
                alt="Jalu"
                height={100}
                width={100}
                priority
            /> */}
        </Section>
    );
};

export default Introduction;
