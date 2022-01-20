import Anchor from '@/shared/common/Anchor';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { UrlObject } from 'url';

export type NavigationItemProps = {
    href: string | UrlObject;
};

const NavigationAnchor = styled(Anchor)<{ active?: boolean; }>(({ active }) => ({
    ...(active && { fontWeight: 600 }),
}));

const NavigationItem: FC<NavigationItemProps> = ({ children, href }) => {
    const router = useRouter();

    return (
        <Link href={href} passHref>
            <NavigationAnchor active={router.asPath === href}>
                {children}
            </NavigationAnchor>
        </Link>
    );
};

export default NavigationItem;