import React from 'react';
import {Navbarsection,Logo,LogoText,UlList,UlListItems,Anchor,NavLink} from './style.js';
const Navbar = () => {
    return (
        <Navbarsection>

            <div className="container">
                <Logo>
                    <LogoText>Level Up</LogoText>
                </Logo>

                <UlList>
                    <UlListItems><NavLink to="/">Home</NavLink></UlListItems>
                    <UlListItems><Anchor href="#">My Jobs</Anchor></UlListItems>
                    <UlListItems><Anchor href="#">Teams</Anchor></UlListItems>
                    <UlListItems><Anchor href="#">Resume</Anchor></UlListItems>
                    <UlListItems><Anchor href="#">About</Anchor></UlListItems>
                    <UlListItems><NavLink to="/contact">Contact</NavLink></UlListItems>
                </UlList>
                
            </div>

        </Navbarsection>
    )
}
export default Navbar;