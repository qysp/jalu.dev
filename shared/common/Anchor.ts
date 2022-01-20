import { fgColor } from '@/util/style';
import styled from '@emotion/styled';

const Anchor = styled.a({
    color: fgColor(0.8),
    textDecoration: 'none',

    '&:hover': {
        background: 'linear-gradient(to right, rgb(248, 212, 83), rgb(255, 93, 91))',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
});

export default Anchor;
