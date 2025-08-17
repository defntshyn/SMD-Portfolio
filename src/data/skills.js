import { BiGlobe, BiCodeAlt, BiCodeCurly } from "react-icons/bi";
import { CgWebsite, CgFigma } from "react-icons/cg";
import { HiCursorClick } from "react-icons/hi";
import { TbForms, TbLayoutNavbarFilled, TbLassoPolygon, TbPhotoEdit, TbAdjustmentsHorizontal } from "react-icons/tb";
import { BsFillMenuButtonFill } from "react-icons/bs";
import { RiPaintFill, RiDragDropFill } from "react-icons/ri";
import { PiLasso } from "react-icons/pi";
import { BiVideo, BiSolidVideos, BiLogoBlender } from "react-icons/bi";
import { LiaPhotoVideoSolid } from "react-icons/lia";
import { SiAdobephotoshop, SiCanva } from "react-icons/si";
import { LuLayoutDashboard } from "react-icons/lu";
import { Md3dRotation } from "react-icons/md";
import { DiHtml53dEffects } from "react-icons/di";

const skills = [
    {
        name: "Web Development",
        icons: [BiGlobe, BiCodeAlt, BiCodeCurly],
        description: "I enjoy creating websites, with a stronger focus on front-end development where I work on layouts, styling, and making designs user-friendly. I also have knowledge in back-end development, which helps me understand how the entire system works. In addition, I can build websites using popular website builders for faster or simpler projects.",
        tags: ["HTML", "CSS", "JS", "PHP", "SQL", "Tailwind", "Bootstrap", "React", "Vite", "Wix", "Shopify", "WordPress"]
    },
    {
        name: "UI Design",
        icons: [CgWebsite, HiCursorClick, CgFigma],
        description: "I create simple and clean user interface designs, focusing on visuals, layout, and color harmony. My goal is to make designs that are easy on the eyes and straightforward for users to navigate.",
        tags: ["Figma", "Canva"]
    },
    {
        name: "Forms Development",
        icons: [TbForms, TbLayoutNavbarFilled, BsFillMenuButtonFill],
        description: "I can create basic forms and simple applications using Visual Basic in Visual Studio, as well as design and manage databases in Microsoft Access. This allows me to build straightforward tools that integrate both interface and data, ensuring they perform their intended functions effectively.",
        tags: ["Visual Basic", "MS Access"]
    },
    {
        name: "Vector Art",
        icons: [RiPaintFill, PiLasso, TbLassoPolygon],
        description: "I can make simple vector illustrations, though I’m still improving in this area. Each project is a chance to grow my creativity and skills in digital illustration.",
        tags: ["Illustrator", "Figma"]
    },
    {
        name: "Video Editing",
        icons: [BiVideo, BiSolidVideos, LiaPhotoVideoSolid],
        description: "I have basic experience with video editing, producing clean and straightforward edits for small projects. While I’m not highly advanced, I focus on making sure the final result is clear, neat, and serves its purpose.",
        tags: ["CapCut", "Power Director"]
    },
    {
        name: "Photo Editing",
        icons: [SiAdobephotoshop, TbPhotoEdit, TbAdjustmentsHorizontal],
        description: "I know the basics of Photoshop for light editing, touch-ups, and improving image quality. Though it’s not my strongest skill, I can confidently handle small editing tasks.",
        tags: ["Photoshop", "Photopea"]
    },
    {
        name: "Graphic Design for Print",
        icons: [SiCanva, RiDragDropFill, LuLayoutDashboard],
        description: "I create layouts for tarpaulins, event greetings, and photo booth frames—often using Canva. I enjoy designing materials that add a personal and creative touch to special occasions.",
        tags: ["Canva", "Photoshop"]
    },
    {
        name: "3D Modeling",
        icons: [BiLogoBlender, Md3dRotation, DiHtml53dEffects],
        description: "I have basic knowledge of Blender for simple 3D designs. My experience here is mostly experimental, and I’m open to learning more as I explore creative ideas.",
        tags: ["Blender"]
    }
];


export default skills