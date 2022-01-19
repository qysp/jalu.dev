import { fgColor } from '@/util/style';
import styled from '@emotion/styled';

export type SubtitleProps = {};

const Subtitle = styled.h1<SubtitleProps>`
    color: ${fgColor()};
    font-size: 1.25rem;
    font-weight: 300;
`;

export default Subtitle;
