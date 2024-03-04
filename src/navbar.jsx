import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import React from 'react';
import { Link } from "react-router-dom";
import pic from './assets/spacestationlogo.png';


export default function NavbarMain() {
    return (
        <NavigationMenu.Root className="NavigationMenuRoot">
            <img className='MenuRootImg'  src={pic} width={55} height={42} alt="wrong"/>
            <NavigationMenu.List className="NavigationMenuList">
                <NavigationMenu.Item>
                    <NavigationMenu.Link as = {Link} className="NavigationMenuLink" href="/">
                        Home
                    </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Link as = {Link} className="NavigationMenuLink" href="/upload">
                        Watermarks Embed
                    </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Link as = {Link} className="NavigationMenuLink" href="/download">
                        Watermarks Identify
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
            </NavigationMenu.List>


            <div className="ViewportPosition">
                <NavigationMenu.Viewport className="NavigationMenuViewport" />
            </div>
        </NavigationMenu.Root>
    );
}