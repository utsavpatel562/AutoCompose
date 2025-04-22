import {
  Columns2,
  Facebook,
  Frame,
  Framer,
  Image,
  Link2,
  PanelTop,
  Projector,
  RectangleEllipsis,
  SquareSplitVertical,
  Text,
  TextSelectionIcon,
  Twitter,
} from "lucide-react";
import { LuTextSelect } from "react-icons/lu";
import { IoImageOutline } from "react-icons/io5";
export default [
  {
    icon: RectangleEllipsis,
    label: "Button",
    type: "Button",
    content: "Sample Button",
    url: "#",
    style: {
      textAlign: "center",
      backgroundColor: "#5e74f6",
      color: "#ffffff",
      padding: "10px",
      width: "auto",
      fontSize: "16px",
      borderRadius: "0px",
      fontWeight: "normal",
      cursor: "pointer",
    },
    outerStyle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  },
  {
    icon: TextSelectionIcon,
    type: "Text",
    label: "Text",
    content: "Sample Text",
    style: {
      backgroundColor: "",
      color: "#000000",
      padding: "10px",
      textAlign: "center",
      fontSize: "22px",
      fontWeight: "normal",
    },
    outerStyle: {
      backgroundColor: "#fff",
      width: "100%",
    },
  },
  {
    icon: LuTextSelect,
    type: "TextArea",
    label: "Text Area",
    textarea: "This is a sample text area",
    style: {
      backgroundColor: "#fefefe",
      color: "#333333",
      padding: "12px",
      textAlign: "left",
      fontSize: "16px",
      borderRadius: "4px",
    },
    outerStyle: {
      backgroundColor: "#fff",
      width: "100%",
    },
  },
  {
    icon: IoImageOutline,
    type: "Image",
    label: "Image",
    content: "/picture.png",
    alt: "Image",
    url: "#",
    style: {
      backgroundColor: "#ffffff",
      padding: "10px",
      height: "30%",
      width: "30%",
      margin: "auto",
      borderRadius: "0px",
    },
    outerStyle: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
    },
  },
  {
    icon: Frame,
    type: "Logo",
    label: "Logo",
    imageUrl: "/logo.png",
    alt: "logo",
    url: "#",
    style: {
      backgroundColor: "#ffffff",
      padding: "10px",
      height: "30%",
      width: "30%",
    },
    outerStyle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      width: "100%",
    },
  },
  /*
  {
    icon: PanelTop,
    type: "LogoHeader",
    label: "Logo Header",
    imageUrl: "/logo.svg",
    alt: "logo",
    url: "#",
    style: {
      backgroundColor: "#ffffff",
      padding: "10px",
      height: "40%",
      width: "40%",
    },
    outerStyle: {
      display: "flex",
      justifyContent: "left",
      alignItems: "center",
      backgroundColor: "#fff",
      width: "100%",
    },
  },*/
  {
    icon: SquareSplitVertical,
    type: "Divider",
    label: "Divider",
    content: "",
    style: {
      color: "#000000",
      padding: "10px",
      width: "100%",
    },
  },
  {
    type: "SocialIcons",
    icon: Twitter,
    label: "Social Icons",
    socialIcons: [
      {
        icon: "/instagram.png",
        url: "",
      },
      {
        icon: "/linkedin.png",
        url: "",
      },
      {
        icon: "/youtube.png",
        url: "",
      },
      {
        icon: "/facebook.png",
        url: "",
      },
      {
        icon: "/twitter.png",
        url: "",
      },
    ],
    options: [
      {
        icon: "https://cdn-icons-png.flaticon.com/128/2111/2111463.png",
        url: "",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/128/5968/5968852.png",
        url: "",
      },
      {
        icon: "https://cdn-icons-png.flaticon.com/128/5968/5968756.png",
        url: "",
      },
    ],
    style: {
      width: 30,
      height: 30,
    },
    outerStyle: {
      display: "flex",
      gap: 15,
    },
  },
];
