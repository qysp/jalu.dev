import { cubicBezier, fgColor } from '@/util/style';
import styled from '@emotion/styled';

export type ButtonProps = {};

const Button = styled.button<ButtonProps>({
    cursor: 'pointer',
    backgroundColor: fgColor(0.125),
    color: fgColor(),
    borderRadius: '0.25rem',
    border: 'none',
    padding: '0.3rem',
    textDecoration: 'none',
    transition: `background-color 0.125s ${cubicBezier()}`,

    '&:hover': {
        backgroundColor: fgColor(0.2),
    }
});

export default Button;
