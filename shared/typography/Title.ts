import { fgColor } from '@/util/style';
import styled from '@emotion/styled';

export enum TitleSize {
    SM = 1.25,
    MD = 1.75,
    LG = 2.25,
    XL = 3.00,
    XXL = 4.00,
    XXXL = 5.00,
}

export type TitleProps = {
    size?: TitleSize;
    noMargin?: boolean;
    fitContent?: boolean;
    light?: boolean;
};

const Title = styled.h1<TitleProps>({
    color: fgColor(),
}, ({
    size = TitleSize.MD,
    noMargin = false,
    fitContent = false,
    light = false,
}) => ({
    fontSize: `${size}rem`,
    ...(noMargin && { margin: 0 }),
    ...(fitContent && { width: 'fit-content' }),
    ...(light && { fontWeight: 'lighter' }),
}));

export default Title;
