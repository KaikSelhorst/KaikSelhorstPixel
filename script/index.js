import Theme from "./theme.js";
import MenuMobile from "./menuMobile.js";
import GitStatus from "./footergit.js";
import SmoothScroll from "./SmoothScroll.js";
import Tooltip from "./tooltip.js";
import InitSidebar from "./sidebar.js";
import OtherWorks from "./OtherWorks.js";

const theme = new Theme(".btn-theme", "#popup", "body", "white");

theme.init();

const menuMobile = new MenuMobile(
  ".btn-mobile",
  ".navigation",
  "active",
  "#menu a",
  "700"
);
menuMobile.init();

const gitStatus = new GitStatus(
  "#git_stars",
  "#git_fork",
  "KaikSelhorstPixel",
  "https://api.github.com/users/KaikSelhorst/repos"
);
gitStatus.init();

new SmoothScroll('a[href^="#"]');
new InitSidebar(".content > section");

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

new OtherWorks("#other_work ul", "../json/otherWorkApi.json");
