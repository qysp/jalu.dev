import { easeInOut, fgColor } from '@/util/style';
import styled from '@emotion/styled';

const Anchor = styled.a`
    color: ${fgColor(0.8)};
    text-decoration: none;
    font-weight: 500;
    transition: ${easeInOut()};

    &:hover {
        color: ${fgColor()};
        font-weight: 600;
    }
`;

export default Anchor;
