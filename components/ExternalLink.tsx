import Anchor from '@/shared/common/Anchor';
import { FC } from 'react';

export type ExternalLinkProps = {
    href: string;
};

const ExternalLink: FC<ExternalLinkProps> = ({ children, href }) => {
    return (
        <Anchor
            href={href}
            rel="noopener noreferrer external"
            target="_blank"
        >
            {children}
        </Anchor>
    );
};

export default ExternalLink;