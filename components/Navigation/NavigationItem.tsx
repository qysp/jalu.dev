import Anchor from '@/shared/common/Anchor';
import Link from 'next/link';
import { FC } from 'react';
import { UrlObject } from 'url';

export type NavigationItemProps = {
    href: string | UrlObject;
};

const NavigationItem: FC<NavigationItemProps> = ({ children, href }) => {
    return (
        <Link href={href} passHref>
            <Anchor>
                {children}
            </Anchor>
        </Link>
    );
};

export default NavigationItem;