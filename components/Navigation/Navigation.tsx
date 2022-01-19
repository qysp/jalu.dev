import NavigationItem from '@/components/Navigation/NavigationItem';
import Nav from '@/shared/common/Nav';
import { FC } from 'react';

export type NavigationProps = {};

const Navigation: FC<NavigationProps> = () => {
    return (
        <Nav>
            <NavigationItem href="/">
                Home
            </NavigationItem>
        </Nav>
    );
};

export default Navigation;