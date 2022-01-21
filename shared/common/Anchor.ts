import { fgColor } from '@/util/style';
import styled from '@emotion/styled';

const Anchor = styled.a({
    color: fgColor(0.75),
    textDecoration: 'none',
    transition: 'color 0.125s ease-in-out',

    '&:hover': {
        // background: linearGradient(),
        // backgroundClip: 'text',
        // WebkitTextFillColor: 'transparent',
        color: fgColor(),
    },
});

export default Anchor;
