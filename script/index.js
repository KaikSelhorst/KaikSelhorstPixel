import SwitchTheme from "./switchTheme.js";
import MenuMobile from "./menuMobile.js";
import GitStatus from "./footergit.js";
import SmoothScroll from "./SmoothScroll.js";
import InitTooltip from "./tooltip.js";
import InitSidebar from "./sidebar.js";
import OtherWorks from "./OtherWorks.js";

new SwitchTheme(".btn-theme", "#popup");
new MenuMobile(".btn-mobile", ".navigation");
new GitStatus("#git_stars", "#git_fork", "KaikSelhorstPixel");
new SmoothScroll('a[href^="#"]');
new InitSidebar(".content > section");
new InitTooltip("[data-tooltip]");
new OtherWorks("#other_work ul", "../json/otherWorkApi.json");
