import { cubicBezier, linearGradient } from '@/util/style';
import styled from '@emotion/styled';
import { FC } from 'react';

export type UnderlinedTextProps = UnderlineProps;

type UnderlineProps = {
    withTransition?: boolean;
    direction?: string;
};

const Underline = styled.span<UnderlineProps>({
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
        transition: `all 0.15s ${cubicBezier()}`,
    },
}, ({
    withTransition = false,
    direction,
}) => ({
    '::after': {
        ...(direction && {
            background: linearGradient(direction),
        }),
    },
    ...(withTransition && {
        '&:hover::after': {
            top: 0,
            height: '100%',
            filter: 'brightness(0.8)',
        },
    }),
}));

const Relative = styled.span({
    position: 'relative',
    zIndex: 1,
});

const UnderlinedText: FC<UnderlinedTextProps> = ({ children, ...props }) => {
    return (
        <Underline {...props}>
            <Relative>
                {children}
            </Relative>
        </Underline>
    );
};

export default UnderlinedText;
