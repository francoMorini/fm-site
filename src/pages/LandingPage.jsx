import { Contact } from "../components/contact/Contact";
import { Gamification } from "../components/gamification/Gamification";
import { Keystore } from "../components/keystore/Keystore";
import { Madewith } from "../components/made/Madewith";
import { Presentation } from "../components/presentation/Presentation";
import { Projects } from "../components/projects/Projects";

export function LandingPage () 
{
    return (
        <main>

            <Presentation />
            <Gamification />
            <Projects />
            <Madewith />
            <Contact />
            <Keystore />
        
        </main>
    );
}