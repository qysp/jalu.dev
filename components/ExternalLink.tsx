import Anchor from '@/shared/common/Anchor';
import styled from '@emotion/styled';
import { FC } from 'react';

// Tabler Icon
export const externalLinkIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
            d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"
        />
        <line x1="10" y1="14" x2="20" y2="4" />
        <polyline points="15 4 20 4 20 9" />
    </svg>
);

export type ExternalLinkProps = {
    href: string;
    withIcon?: boolean;
};

const ExternalAnchor = styled(Anchor)({
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
});

const ExternalLink: FC<ExternalLinkProps> = ({
    children,
    href,
    withIcon = false,
}) => {
    return (
        <ExternalAnchor
            href={href}
            rel="noopener noreferrer external"
            target="_blank"
        >
            {children}
            {withIcon && externalLinkIcon}
        </ExternalAnchor>
    );
};

export default ExternalLink;