import { linearGradient } from '@/util/style';
import styled from '@emotion/styled';
import { FC } from 'react';

export type UnderlinedTextProps = {};

const Underline = styled.span({
    position: 'relative',

    '::after': {
        content: '""',
        position: 'absolute',
        top: '85%',
        width: '100%',
        left: 0,
        height: '3px',
        borderRadius: '5px',
        background: linearGradient(),
        transition: 'all 0.225s ease-in-out',
    },

    '&:hover::after': {
        top: 0,
        height: '100%',
        filter: 'brightness(0.8)',
    },
});

const Relative = styled.span({
    position: 'relative',
    zIndex: 1,
});

const UnderlinedText: FC<UnderlinedTextProps> = ({ children }) => {
    return (
        <Underline>
            <Relative>
                {children}
            </Relative>
        </Underline>
    );
};

export default UnderlinedText;
