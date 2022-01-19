import { easeInOut, fgColor } from '@/util/style';
import styled from '@emotion/styled';

const Button = styled.button`
    cursor: pointer;
    background-color: ${fgColor(0.125)};
    color: ${fgColor()};
    border-radius: 0.25rem;
    border: none;
    padding: 0.3rem;
    text-decoration: none;
    transition: ${easeInOut('background-color')};

    &:hover {
        background-color: ${fgColor(0.25)};
    }
`;

export default Button;
