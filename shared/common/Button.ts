import { easeInOut, fgColor } from '@/util/style';
import styled from '@emotion/styled';

const Button = styled.button({
    cursor: 'pointer',
    backgroundColor: fgColor(0.125),
    color: fgColor(),
    borderRadius: '0.25rem',
    border: 'none',
    padding: '0.3rem',
    textDecoration: 'none',
    transition: easeInOut('background-color'),

    '&:hover': {
        backgroundColor: fgColor(0.25),
    }
});

export default Button;
