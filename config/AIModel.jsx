const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};
export const GenerateEmailTemplateAiModel = model.startChat({
  generationConfig,
  history: [
    /*{
      role: "user",
      parts: [
        {
          text: `Your are Pro Email template builder AI Assistance
  - Schema example : [{"0":{"icon":{},"type":"Logo","label":"Logo","imageUrl":"/logo.png","alt":"logo","url":"#","style":{"backgroundColor":"#ffffff","padding":"10px","height":"30%","width":"30%","margin":"0px"},"outerStyle":{"display":"flex","justifyContent":"center","alignItems":"center","backgroundColor":"#fff","width":"100%"},"id":1745509457198},"label":"1 Column","type":"column","numOfCol":1,"id":1745509454209},{"0":{"type":"Image","label":"Image","imageUrl":"/picture.png","alt":"Image","url":"#","style":{"backgroundColor":"#ffffff","padding":"10px","height":"30%","width":"30%","margin":"0px","borderRadius":"0px"},"outerStyle":{"display":"flex","width":"100%","justifyContent":"center","alignItems":"center","backgroundColor":"#fff"},"id":1745509466538},"1":{"icon":{},"type":"TextArea","label":"Paragraph","textarea":"This is a sample paragraph","style":{"backgroundColor":"#fefefe","color":"#333333","padding":"12px","textAlign":"left","fontSize":"16px","borderRadius":"4px","margin":"0px"},"outerStyle":{"backgroundColor":"#fff","width":"100%"},"id":1745509474649},"label":"2 Column","type":"column","numOfCol":2,"id":1745509461231},{"0":{"icon":{},"type":"Divider","label":"Divider","content":"","style":{"color":"#000000","padding":"10px","width":"100%"},"id":1745509494726},"label":"1 Column","type":"column","numOfCol":1,"id":1745509490335},{"0":{"icon":{},"type":"Text","label":"Text","content":"Sample Text","style":{"backgroundColor":"","color":"#000000","padding":"10px","textAlign":"center","fontSize":"22px","fontWeight":"normal","textTransform":"uppercase","margin":"0px"},"outerStyle":{"backgroundColor":"#fff","width":"100%"},"id":1745509505172},"1":{"icon":{},"label":"Button","type":"Button","content":"Sample Button","url":"#","style":{"textAlign":"center","backgroundColor":"#5e74f6","color":"#ffffff","padding":"10px","width":"auto","fontSize":"16px","borderRadius":"0px","fontWeight":"normal","cursor":"pointer","margin":"0px","objectFit":"contain"},"outerStyle":{"display":"flex","justifyContent":"center","alignItems":"center","width":"100%"},"id":1745509508856},"label":"2 Column","type":"column","numOfCol":2,"id":1745509499275}]
  - Another Example: [{"0":{"icon":{},"type":"Logo","label":"Logo","imageUrl":"https://cdn.logojoy.com/wp-content/uploads/20230801145635/Google_logo_2013-2015-600x206.png","alt":"logo","url":"#","style":{"backgroundColor":"#ffffff","padding":"10px","height":"30%","width":"17%","margin":"0px"},"outerStyle":{"display":"flex","justifyContent":"left","alignItems":"center","backgroundColor":"#fff","width":"100%"},"id":1745509685750},"label":"1 Column","type":"column","numOfCol":1,"id":1745509682663},{"0":{"icon":{},"type":"TextArea","label":"Paragraph","textarea":"Google is an American multinational technology company founded in 1998 by Larry Page and Sergey Brin, initially as a search engine. It has since grown into a diversified company offering a wide range of products and services, including online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, consumer electronics, and artificial intelligence (AI).","style":{"backgroundColor":"#fefefe","color":"#333333","padding":"12px","textAlign":"justify","fontSize":"16px","borderRadius":"4px","margin":"0px"},"outerStyle":{"backgroundColor":"#fff","width":"100%"},"id":1745509954279},"1":{"type":"Image","label":"Image","imageUrl":"https://www.verdict.co.uk/wp-content/uploads/2018/09/shutterstock_552493561.jpg","alt":"Image","url":"#","style":{"backgroundColor":"#ffffff","padding":"10px","height":"30%","width":"100%","margin":"0px","borderRadius":"20px"},"outerStyle":{"display":"flex","width":"100%","justifyContent":"center","alignItems":"center","backgroundColor":"#fff"},"id":1745509766254},"label":"2 Column","type":"column","numOfCol":2,"id":1745509720771},{"0":{"icon":{},"type":"Text","label":"Text","content":"All About Google","style":{"backgroundColor":"","color":"#8b8989","padding":"10px","textAlign":"","fontSize":"22px","fontWeight":"Bold","textTransform":"uppercase","margin":"0px"},"outerStyle":{"backgroundColor":"#fff","width":"100%"},"id":1745510037225},"label":"1 Column","type":"column","numOfCol":1,"id":1745509938295},{"0":{"icon":{},"type":"Divider","label":"Divider","content":"","style":{"color":"#000000","padding":"0px","width":"100%"},"id":1745510046582},"label":"1 Column","type":"column","numOfCol":1,"id":1745510022968},{"0":{"icon":{},"type":"TextArea","label":"Paragraph","textarea":"Google is a multinational technology company primarily known for its search engine. Google's mission is to organize the world's information and make it universally accessible and useful. They offer a wide range of products and services, including online advertising, cloud computing, and artificial intelligence. ","style":{"backgroundColor":"#fefefe","color":"#333333","padding":"12px","textAlign":"justify","fontSize":"16px","borderRadius":"4px","margin":"px"},"outerStyle":{"backgroundColor":"#fff","width":"100%"},"id":1745510052000},"label":"1 Column","type":"column","numOfCol":1,"id":1745510027805}]
  - Add More column, content with type of Image, Button, Text, Logo, Divider, Paragraph etc.
  - Use Appropriate type when needed, do not exactly copy schema make as per user needs it. 
  - You can generate Email template based on following schema
  - Write Meaning full text content with Emoji icons if needed
  - For logo add image as '/logo.png' for image placeholder add '/picture.png'
  - Give response in JSON format only (Return schema only)
  - Generate the Email template for Youtube Channel`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: `The user wants an email template schema for a YouTube channel.
  The schema should be in JSON format, following the provided examples.
  I need to create a structure with columns and various content types like Logo, Image, Text, TextArea (Paragraph), Button, and Divider.
  The content should be relevant to a YouTube channel. I can include sections like:
  - Channel Logo
  - Welcome message or channel introduction
  - Highlight a recent video (thumbnail + title + description + link)
  - Call to action (Subscribe button)
  - Links to social media (optional, maybe use buttons or text links)
  - Footer with channel information
  
  Let's break down the structure:
  
  1.  **Row 1: Logo**
      *   1 Column
      *   Logo element (\`type: "Logo"\`) with placeholder \`/logo.png\`, centered or left-aligned.
  
  2.  **Row 2: Introduction/Welcome**
      *   1 Column
      *   Text element (\`type: "Text"\`) for a heading like "Welcome to Our Channel!" or the Channel Name.
      *   TextArea element (\`type: "TextArea"\`) for a brief intro about the channel's content.
  
  3.  **Row 3: Featured Video**
      *   2 Columns
      *   Column 1: Image element (\`type: "Image"\`) for the video thumbnail (\`/picture.png\`). Link this to the video URL (use \`#\` for now).
      *   Column 2:
          *   Text element (\`type: "Text"\`) for the Video Title.
          *   TextArea element (\`type: "TextArea"\`) for a short video description.
          *   Button element (\`type: "Button"\`) like "Watch Now".
  
  4.  **Row 4: Divider**
      *   1 Column
      *   Divider element (\`type: "Divider"\`)
  
  5.  **Row 5: Call to Action (Subscribe)**
      *   1 Column
      *   Text element (\`type: "Text"\`) like "Don't Miss Out!"
      *   Button element (\`type: "Button"\`) "Subscribe Now!". Link to the channel's subscribe URL (use \`#\` for now).
  
  6.  **Row 6: Footer/Socials (Optional, maybe combine with subscribe)**
      *   Maybe add social media icons/links later if needed, but for now, keep it simple. Let's stick to the core elements.
  
  Constraint Checklist & Confidence Score:
  1.  Pro Email template builder AI Assistance: Yes
  2.  Schema example followed: Yes
  3.  Another Example followed: Yes
  4.  Add More column/content: Yes
  5.  Appropriate type used: Yes
  6.  Not exact copy: Yes
  7.  Meaningful text content: Yes
  8.  Emoji icons used: Yes (will add some)
  9.  Logo placeholder: Yes (\`/logo.png\`)
  10. Image placeholder: Yes (\`/picture.png\`)
  11. JSON format only: Yes
  12. Generate for YouTube Channel: Yes
  
  Confidence Score: 5/5
  
  Mental Sandbox:
  *   Could I use a 1-column layout for the featured video? Yes, image above text/button. But 2 columns often look better for this. Let's stick with 2 columns.
  *   Should I add social media icons? The schema doesn't explicitly have an "Icon" or "Social" type, but I could use multiple small Image elements or Text links in a multi-column row at the bottom. For simplicity, I'll omit them for now, focusing on the core request and schema types.
  *   Should the intro be text or textarea? TextArea allows for more text, better for a description. Text for the heading.
  *   Are the styles appropriate? I'll use basic styles, similar to the examples, focusing on structure and content types.
  
  Key Learnings from Examples:
  *   Each row is an object in the main array.
  *   Each row has a \`label\` (e.g., "1 Column"), \`type: "column"\`, \`numOfCol\`, and \`id\`.
  *   Inside the row object, numbered keys (\`"0"\`, \`"1"\`, etc.) hold the content elements for each column.
  *   Each content element has \`type\`, \`label\`, \`id\`, content-specific fields (like \`imageUrl\`, \`textarea\`, \`content\`), \`style\`, and \`outerStyle\`.
  *   \`outerStyle\` often controls layout within the column cell (like \`display: flex\`, \`justifyContent\`, \`alignItems\`).
  *   \`style\` controls the element's appearance (padding, color, background, font size, etc.).
  
  Refinement: Add some emojis to make the text more engaging. Ensure IDs are unique (using timestamps or simple increments for generation). Use appropriate placeholder text.`,
        },
        {
          text: `\`\`\`json
  [
    {
      "0": {
        "icon": {},
        "type": "Logo",
        "label": "Logo",
        "imageUrl": "/logo.png",
        "alt": "Channel Logo",
        "url": "#",
        "style": {
          "backgroundColor": "#ffffff",
          "padding": "15px",
          "height": "auto",
          "width": "25%",
          "margin": "0px"
        },
        "outerStyle": {
          "display": "flex",
          "justifyContent": "center",
          "alignItems": "center",
          "backgroundColor": "#f3f3f3",
          "width": "100%"
        },
        "id": 1745600000001
      },
      "label": "1 Column",
      "type": "column",
      "numOfCol": 1,
      "id": 1745600000000
    },
    {
      "0": {
        "icon": {},
        "type": "Text",
        "label": "Heading",
        "content": "👋 Welcome to Our Channel!",
        "style": {
          "backgroundColor": "#ffffff",
          "color": "#333333",
          "padding": "20px 10px 5px 10px",
          "textAlign": "center",
          "fontSize": "28px",
          "fontWeight": "bold",
          "textTransform": "none",
          "margin": "0px"
        },
        "outerStyle": {
          "backgroundColor": "#ffffff",
          "width": "100%"
        },
        "id": 1745600000003
      },
      "label": "1 Column",
      "type": "column",
      "numOfCol": 1,
      "id": 1745600000002
    },
    {
      "0": {
        "icon": {},
        "type": "TextArea",
        "label": "Introduction Paragraph",
        "textarea": "Thanks for being part of our community! We're excited to share the latest videos, tips, and behind-the-scenes content with you. Stay tuned for awesome updates!",
        "style": {
          "backgroundColor": "#ffffff",
          "color": "#555555",
          "padding": "5px 20px 20px 20px",
          "textAlign": "center",
          "fontSize": "16px",
          "borderRadius": "0px",
          "margin": "0px"
        },
        "outerStyle": {
          "backgroundColor": "#ffffff",
          "width": "100%"
        },
        "id": 1745600000005
      },
      "label": "1 Column",
      "type": "column",
      "numOfCol": 1,
      "id": 1745600000004
    },
      {
      "0": {
        "icon": {},
        "type": "Divider",
        "label": "Divider",
        "content": "",
        "style": {
          "color": "#cccccc",
          "padding": "10px 0px",
          "width": "90%"
        },
         "outerStyle": {
          "display": "flex",
          "justifyContent": "center",
          "alignItems": "center",
          "backgroundColor": "#ffffff",
          "width": "100%"
        },
        "id": 1745600000007
      },
      "label": "1 Column",
      "type": "column",
      "numOfCol": 1,
      "id": 1745600000006
    },
     {
      "0": {
        "icon": {},
        "type": "Text",
        "label": "Section Heading",
        "content": "✨ Check Out Our Latest Video!",
        "style": {
          "backgroundColor": "#ffffff",
          "color": "#333333",
          "padding": "15px 10px 5px 10px",
          "textAlign": "center",
          "fontSize": "22px",
          "fontWeight": "bold",
          "textTransform": "none",
          "margin": "0px"
        },
        "outerStyle": {
          "backgroundColor": "#ffffff",
          "width": "100%"
        },
        "id": 1745600000009
      },
      "label": "1 Column",
      "type": "column",
      "numOfCol": 1,
      "id": 1745600000008
    },
    {
      "0": {
        "type": "Image",
        "label": "Video Thumbnail",
        "imageUrl": "/picture.png",
        "alt": "Video Thumbnail",
        "url": "#",
        "style": {
          "backgroundColor": "#ffffff",
          "padding": "10px",
          "height": "auto",
          "width": "100%",
          "margin": "0px",
          "borderRadius": "8px"
        },
        "outerStyle": {
          "display": "flex",
          "width": "100%",
          "justifyContent": "center",
          "alignItems": "center",
          "backgroundColor": "#ffffff"
        },
        "id": 1745600000011
      },
      "1": {
          "icon": {},
          "type": "Text",
          "label": "Video Title",
          "content": "Video Title Goes Here - Don't Miss It!",
          "style": {
              "backgroundColor": "#ffffff",
              "color": "#333333",
              "padding": "10px 10px 5px 10px",
              "textAlign": "left",
              "fontSize": "18px",
              "fontWeight": "bold",
              "textTransform": "none",
              "margin": "0px"
          },
          "outerStyle": {
              "backgroundColor": "#ffffff",
              "width": "100%"
          },
          "id": 1745600000012
      },
      "2": {
          "icon": {},
          "type": "TextArea",
          "label": "Video Description",
          "textarea": "A short, engaging description of the video content. Let viewers know what they can expect and why they should watch.",
          "style": {
              "backgroundColor": "#ffffff",
              "color": "#555555",
              "padding": "0px 10px 10px 10px",
              "textAlign": "left",
              "fontSize": "14px",
              "borderRadius": "0px",
              "margin": "0px"
          },
          "outerStyle": {
              "backgroundColor": "#ffffff",
              "width": "100%"
          },
          "id": 1745600000013
      },
      "3": {
          "icon": {},
          "label": "Watch Button",
          "type": "Button",
          "content": "🎬 Watch Now",
          "url": "#",
          "style": {
              "textAlign": "center",
              "backgroundColor": "#FF0000",
              "color": "#ffffff",
              "padding": "12px 20px",
              "width": "auto",
              "fontSize": "16px",
              "borderRadius": "5px",
              "fontWeight": "bold",
              "cursor": "pointer",
              "margin": "5px 10px 10px 10px"
          },
          "outerStyle": {
              "display": "flex",
              "justifyContent": "left",
              "alignItems": "center",
              "width": "100%",
               "backgroundColor": "#ffffff"
          },
          "id": 1745600000014
      },
      "label": "2 Column (Split)",
      "type": "column",
      "numOfCol": 2,
      "id": 1745600000010
    },
      {
      "0": {
        "icon": {},
        "type": "Divider",
        "label": "Divider",
        "content": "",
        "style": {
          "color": "#cccccc",
          "padding": "10px 0px",
          "width": "90%"
        },
         "outerStyle": {
          "display": "flex",
          "justifyContent": "center",
          "alignItems": "center",
          "backgroundColor": "#ffffff",
          "width": "100%"
        },
        "id": 1745600000016
      },
      "label": "1 Column",
      "type": "column",
      "numOfCol": 1,
      "id": 1745600000015
    },
     {
      "0": {
        "icon": {},
        "type": "Text",
        "label": "Subscribe Prompt",
        "content": "🔔 Like what you see? Subscribe for more!",
        "style": {
          "backgroundColor": "#ffffff",
          "color": "#333333",
          "padding": "15px 10px 5px 10px",
          "textAlign": "center",
          "fontSize": "20px",
          "fontWeight": "normal",
          "textTransform": "none",
          "margin": "0px"
        },
        "outerStyle": {
          "backgroundColor": "#ffffff",
          "width": "100%"
        },
        "id": 1745600000018
      },
      "label": "1 Column",
      "type": "column",
      "numOfCol": 1,
      "id": 1745600000017
    },
      {
      "0": {
        "icon": {},
        "label": "Subscribe Button",
        "type": "Button",
        "content": "Subscribe Here",
        "url": "#",
        "style": {
          "textAlign": "center",
          "backgroundColor": "#CC0000",
          "color": "#ffffff",
          "padding": "15px 30px",
          "width": "auto",
          "fontSize": "18px",
          "borderRadius": "5px",
          "fontWeight": "bold",
          "cursor": "pointer",
          "margin": "10px"
        },
        "outerStyle": {
          "display": "flex",
          "justifyContent": "center",
          "alignItems": "center",
          "width": "100%",
          "backgroundColor": "#ffffff",
          "padding":"10px 0px 20px 0px"
        },
        "id": 1745600000020
      },
      "label": "1 Column",
      "type": "column",
      "numOfCol": 1,
      "id": 1745600000019
    },
     {
      "0": {
        "icon": {},
        "type": "TextArea",
        "label": "Footer",
        "textarea": "© [Year] [Your Channel Name]. All rights reserved.\\nYou received this email because you opted in on our channel.",
        "style": {
          "backgroundColor": "#f3f3f3",
          "color": "#777777",
          "padding": "20px",
          "textAlign": "center",
          "fontSize": "12px",
          "borderRadius": "0px",
          "margin": "0px"
        },
        "outerStyle": {
          "backgroundColor": "#f3f3f3",
          "width": "100%"
        },
        "id": 1745600000022
      },
      "label": "1 Column",
      "type": "column",
      "numOfCol": 1,
      "id": 1745600000021
    }
  ]
  \`\`\``,
        },
      ],
    }, */
  ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
