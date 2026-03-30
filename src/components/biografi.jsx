import ScrollReveal from "./ScrollReveal"
import StaggeredMenu from './StaggeredMenu';
export default function Biografi(){
    const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Services', ariaLabel: 'View our services', link: '/services' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
    ];

    const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
    ];
    return(
        <div className="w-screen bg-white min-h-screen max-h-screen flex items-center justify-center flex-col mb-0">
            <div className="flex justify-center w-[80%]">
                <ScrollReveal
                    baseOpacity={0.1}
                    enableBlur={true}
                    baseRotation={0}
                    blurStrength={8}
                    textClassName="text-black/40 font-medium text-[38px] h-screen inline justify-center w-[80vw] leading-tight max-md:text-[24px]"
                >
                 {"“ I’m *Glenndovin,* a *Game* *Developer* *specializing* *in* *Art* *&* *UI/UX* focused on creating *stylized* *visuals* and *interactive* *experiences.* I specialize in *character* *design,* *game* *visuals,* and bringing concepts into *playable* *form.* I use tools such as *Blender,* *Figma,* *Aseprite,* and *Unity,* and I’m currently exploring game development through personal projects while continuously improving my skills.” "}
                </ScrollReveal>
            </div>

        </div>
    )
}
