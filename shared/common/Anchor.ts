import { fgColor, linearGradient } from '@/util/style';
import styled from '@emotion/styled';

const Anchor = styled.a({
    color: fgColor(0.8),
    textDecoration: 'none',

    '&:hover': {
        background: linearGradient(),
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
});

export default Anchor;
