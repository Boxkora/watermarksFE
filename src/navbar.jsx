import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import React from 'react';
import { Link } from "react-router-dom";
import pic from './assets/spacestationlogo.png';
import {useNavigate} from "react-router-dom";

export default function NavbarMain() {
    const navigate = useNavigate();
    const roundToUpload = () => {
        let path = "/embedwatermark";
        navigate(path);
    }
    const roundToHomePage = () => {
        let path = "/";
        navigate(path);
    }

    return (
        <NavigationMenu.Root className="NavigationMenuRoot">
            <img className='MenuRootImg'  src={pic} width={55} height={42} alt="wrong" onClick={roundToHomePage}/>
            <NavigationMenu.List className="NavigationMenuList">
                <NavigationMenu.Item>
                    <NavigationMenu.Link as = {Link} className="NavigationMenuLink" onClick={roundToHomePage}>
                        Home
                    </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Link as = {Link} className="NavigationMenuLink" onClick={roundToUpload}>
                        Watermarks Embed
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
            </NavigationMenu.List>


            <div className="ViewportPosition">
                <NavigationMenu.Viewport className="NavigationMenuViewport" />
            </div>
        </NavigationMenu.Root>
    );
}