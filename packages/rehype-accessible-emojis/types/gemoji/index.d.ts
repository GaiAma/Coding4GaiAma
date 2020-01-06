// https://stackoverflow.com/a/42702089/3484824
// http://blog.wolksoftware.com/contributing-to-definitelytyped

declare module 'gemoji' {
  interface Emoji {
    [name: string]: {
      emoji: string
      name: string
    }
  }
  interface Unicode {
    [emoji: string]: {
      emoji: string
      category: string
      description: string
      names: string[]
      tags: string[]
    }
  }
  export default interface gemoji {
    name: Emoji
    unicode: Unicode
  }
}

// [key: string]: {
//   [name: string]: string | string[]
// }

// interface Test {
//   [key: string]: {
//     [name: string]: string | string[]
//   }
// }

// declare module 'gemoji' {
//   export default {
//     // name:
//     unicode: Test,
//   }
// }

// declare const _default: {
//     unicode: {
//         "😀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😃": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😄": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😁": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "😆": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😅": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😂": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🤣": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "☺️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😊": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😇": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🙂": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🙃": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "😉": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😌": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😍": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😘": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😗": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "😙": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "😚": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "😋": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😜": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😝": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😛": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🤑": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🤗": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🤓": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😎": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🤡": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🤠": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "😏": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😒": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😞": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😔": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "😟": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😕": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🙁": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "☹️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "😣": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😖": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "😫": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😩": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😤": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😠": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😡": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😶": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😐": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😑": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "😯": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "😧": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😮": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😲": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😵": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "😳": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "😱": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😨": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😰": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😢": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😥": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🤤": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "😭": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😓": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "😪": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😴": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🙄": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🤔": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🤥": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😬": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🤐": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🤢": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🤧": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😷": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🤒": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🤕": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😈": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👿": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👹": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👺": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💩": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👻": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "💀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "☠️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👽": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👾": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🤖": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎃": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😺": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "😸": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "😹": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "😻": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "😼": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "😽": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🙀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😿": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "😾": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👐": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🙌": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👏": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🙏": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🤝": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👍": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👎": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👊": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "✊": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🤛": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🤜": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🤞": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "✌️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🤘": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👌": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👈": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👉": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👆": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👇": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "☝️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "✋": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🤚": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🖐": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🖖": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👋": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🤙": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💪": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🖕": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "✍️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🤳": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💅": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "💍": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "💄": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "💋": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👄": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👅": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👂": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👃": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👣": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👁": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🗣": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👤": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👥": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👶": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👧": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👨": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👩": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👱‍♀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👱": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👴": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👵": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👲": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👳‍♀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👳": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👮‍♀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👮": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👷‍♀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👷": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "💂‍♀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💂": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🕵️‍♀️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🕵": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👩‍⚕": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👨‍⚕": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👩‍🌾": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👨‍🌾": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👩‍🍳": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👨‍🍳": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👩‍🎓": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👨‍🎓": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👩‍🎤": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👨‍🎤": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👩‍🏫": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👨‍🏫": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👩‍🏭": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👨‍🏭": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👩‍💻": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👨‍💻": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👩‍💼": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👨‍💼": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👩‍🔧": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👨‍🔧": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👩‍🔬": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👨‍🔬": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👩‍🎨": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👨‍🎨": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👩‍🚒": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👨‍🚒": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👩‍✈": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👨‍✈": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👩‍🚀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👨‍🚀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👩‍⚖": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👨‍⚖": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🤶": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🎅": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👸": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🤴": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👰": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🤵": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👼": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🤰": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🙇‍♀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🙇": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "💁": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💁‍♂": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🙅": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🙅‍♂": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🙆": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🙆‍♂": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🙋": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🙋‍♂": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🤦‍♀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🤦‍♂": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🤷‍♀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🤷‍♂": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🙎": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🙎‍♂": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🙍": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🙍‍♂": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💇": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "💇‍♂": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💆": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "💆‍♂": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🕴": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💃": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🕺": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👯": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👯‍♂": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🚶‍♀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚶": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏃‍♀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🏃": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👫": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👭": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👬": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "💑": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👩‍❤️‍👩": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👨‍❤️‍👨": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💏": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👩‍❤️‍💋‍👩": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👨‍❤️‍💋‍👨": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👪": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👨‍👩‍👧": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👨‍👩‍👧‍👦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👨‍👩‍👦‍👦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👨‍👩‍👧‍👧": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👩‍👩‍👦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👩‍👩‍👧": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👩‍👩‍👧‍👦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👩‍👩‍👦‍👦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👩‍👩‍👧‍👧": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👨‍👨‍👦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👨‍👨‍👧": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👨‍👨‍👧‍👦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👨‍👨‍👦‍👦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👨‍👨‍👧‍👧": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👩‍👦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👩‍👧": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👩‍👧‍👦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👩‍👦‍👦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👩‍👧‍👧": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👨‍👦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👨‍👧": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👨‍👧‍👦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👨‍👦‍👦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👨‍👧‍👧": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👚": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👕": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👖": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👔": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👗": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👙": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👘": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👠": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👡": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👢": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👞": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👟": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👒": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎩": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🎓": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👑": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "⛑": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎒": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👝": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👛": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "👜": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "💼": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👓": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🕶": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌂": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "☂️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐶": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🐱": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🐭": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐹": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🐰": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🦊": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐻": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐼": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐨": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐯": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🦁": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐮": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐷": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐽": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐸": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐵": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🙈": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🙉": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🙊": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🐒": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐔": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐧": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐤": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐣": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐥": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🦆": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🦅": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🦉": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🦇": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐺": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐗": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐴": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🦄": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐝": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐛": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🦋": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐌": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🐚": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🐞": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🐜": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🕷": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🕸": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐢": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🐍": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🦎": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🦂": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🦀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🦑": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐙": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🦐": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐠": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐟": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐡": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐬": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🦈": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐳": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🐋": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐊": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐆": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐅": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐃": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐂": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐄": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🦌": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐪": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🐫": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐘": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🦏": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🦍": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐎": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🐖": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐐": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐏": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐑": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐕": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐩": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🐈": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐓": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🦃": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🕊": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🐇": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐁": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐿": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐾": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐉": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🐲": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌵": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎄": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌲": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🌳": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🌴": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌱": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🌿": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "☘️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🎍": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎋": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍃": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🍂": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🍁": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🍄": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌾": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💐": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🌷": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🌹": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🥀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌻": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌼": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌸": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🌺": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌎": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🌍": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🌏": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🌕": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌖": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌗": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌘": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌑": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌒": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌓": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌔": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌚": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌝": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌞": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🌛": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌜": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌙": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "💫": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "⭐️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌟": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "✨": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "⚡️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🔥": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "💥": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "☄": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "☀️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🌤": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⛅️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🌥": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌈": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "☁️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌧": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⛈": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌩": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌨": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "☃️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "⛄️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "❄️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🌬": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💨": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🌪": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌫": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌊": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "💧": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "💦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "☔️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🍏": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🍎": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍐": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍊": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍋": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍌": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🍉": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍇": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍓": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🍈": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍒": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🍑": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍍": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🥝": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🥑": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍅": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍆": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🥒": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🥕": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌽": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌶": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🥔": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍠": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌰": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🥜": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍯": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🥐": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍞": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🥖": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🧀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🥚": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍳": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🥓": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🥞": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍤": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🍗": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🍖": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍕": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌭": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍔": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🍟": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🥙": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌮": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌯": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🥗": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🥘": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🍝": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🍜": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🍲": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍥": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍣": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍱": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍛": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍚": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍙": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍘": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍢": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍡": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍧": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍨": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍰": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🎂": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🍮": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍭": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍬": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🍫": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍿": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍩": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍪": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🥛": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍼": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "☕️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🍵": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🍶": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍺": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🍻": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🥂": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🍷": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🥃": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🍸": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🍹": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🍾": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🥄": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🍴": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🍽": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "⚽️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🏀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🏈": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "⚾️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🎾": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🏐": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏉": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎱": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🏓": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏸": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🥅": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏒": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏑": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏏": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⛳️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏹": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🎣": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🥊": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🥋": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⛸": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🎿": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⛷": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏂": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏋️‍♀️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🏋": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🤺": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🤼‍♀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🤼‍♂": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🤸‍♀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🤸‍♂": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⛹️‍♀️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⛹": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🤾‍♀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🤾‍♂": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏌️‍♀️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏌": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏄‍♀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏄": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏊‍♀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏊": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🤽‍♀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🤽‍♂": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚣‍♀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚣": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏇": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚴‍♀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚴": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚵‍♀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚵": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎽": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🏅": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🎖": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🥇": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🥈": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🥉": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🏆": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🏵": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎗": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎫": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎟": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎪": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🤹‍♀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🤹‍♂": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎭": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🎨": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🎬": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🎤": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🎧": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🎼": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎹": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🥁": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎷": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎺": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎸": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🎻": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎲": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🎯": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🎳": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎮": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🎰": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚗": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚕": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚙": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚌": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚎": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏎": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚓": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚑": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚒": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚐": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚚": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚛": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚜": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🛴": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚲": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🛵": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏍": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚨": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🚔": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚍": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚘": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚖": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚡": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚠": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚟": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚃": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚋": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚞": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚝": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚄": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🚅": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🚈": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚂": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🚆": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚇": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚊": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚉": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚁": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🛩": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "✈️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🛫": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🛬": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🛰": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "💺": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🛶": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⛵️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🛥": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚤": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🛳": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "⛴": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚢": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⚓️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🚧": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "⛽️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚏": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🚥": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🗺": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🗿": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🗽": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⛲️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🗼": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏰": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏯": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏟": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎡": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎢": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎠": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⛱": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🏖": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏝": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⛰": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏔": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🗻": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌋": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏜": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏕": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⛺️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🛤": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🛣": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏗": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏭": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏠": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏡": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏘": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏚": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏢": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏬": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏣": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏤": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏥": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏨": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏪": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏫": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏩": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💒": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🏛": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⛪️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🕌": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🕍": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🕋": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⛩": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🗾": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎑": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏞": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌅": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌄": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌠": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎇": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎆": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🌇": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌆": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏙": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🌃": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌌": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌉": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌁": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "⌚️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "📱": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "📲": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "💻": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "⌨️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🖥": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🖨": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🖱": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🖲": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🕹": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🗜": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💽": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💾": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "💿": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📼": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📷": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "📸": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "📹": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎥": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "📽": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎞": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📞": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "☎️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📟": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📠": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📺": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📻": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🎙": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🎚": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎛": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⏱": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⏲": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⏰": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🕰": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⌛️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "⏳": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "📡": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🔋": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🔌": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💡": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🔦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🕯": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🗑": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🛢": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💸": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "💵": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "💴": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💶": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💷": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💰": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "💳": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "💎": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "⚖️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔧": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🔨": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "⚒": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🛠": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⛏": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔩": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⚙️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⛓": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔫": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "💣": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🔪": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🗡": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⚔️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🛡": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚬": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "⚰️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "⚱️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏺": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔮": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "📿": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💈": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⚗️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔭": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔬": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🕳": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💊": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "💉": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🌡": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚽": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🚰": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚿": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🛁": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🛀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🛎": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔑": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🗝": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚪": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🛋": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🛏": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🛌": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🖼": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🛍": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🛒": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎁": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🎈": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🎏": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎊": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎉": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🎎": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏮": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎐": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "✉️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "📩": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📨": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📧": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💌": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "📥": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📤": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🏷": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "📪": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📫": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📬": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📭": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📮": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📯": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📜": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "📃": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📄": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "📑": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📊": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "📈": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "📉": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🗒": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🗓": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📆": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "📅": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "📇": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🗃": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🗳": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🗄": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📋": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📁": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "📂": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🗂": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🗞": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "📰": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "📓": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📔": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📒": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📕": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📗": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📘": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📙": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📚": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "📖": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔖": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔗": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📎": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🖇": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📐": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📏": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📌": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "📍": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "✂️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🖊": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🖋": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "✒️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🖌": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🖍": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📝": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "✏️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔍": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🔎": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔏": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔐": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🔒": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🔓": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "❤️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "💛": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💚": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💙": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💜": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🖤": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💔": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "❣️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💕": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💞": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💓": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💗": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💖": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💘": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "💝": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "💟": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "☮️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "✝️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "☪️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🕉": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "☸️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "✡️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔯": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🕎": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "☯️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "☦️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🛐": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⛎": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "♈️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "♉️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "♊️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "♋️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "♌️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "♍️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "♎️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "♏️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "♐️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "♑️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "♒️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "♓️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🆔": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⚛️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🉑": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "☢️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "☣️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📴": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "📳": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🈶": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🈚️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🈸": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🈺": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🈷️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "✴️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🆚": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💮": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🉐": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "㊙️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "㊗️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🈴": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🈵": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🈹": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🈲": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🅰️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🅱️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🆎": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🆑": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🅾️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🆘": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "❌": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⭕️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🛑": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⛔️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "📛": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚫": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "💯": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "💢": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "♨️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚷": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚯": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚳": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚱": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔞": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📵": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚭": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "❗️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "❕": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "❓": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "❔": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "‼️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⁉️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔅": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔆": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "〽️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⚠️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🚸": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔱": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⚜️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔰": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "♻️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "✅": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🈯️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💹": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "❇️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "✳️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "❎": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌐": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "💠": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "Ⓜ️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🌀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "💤": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🏧": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚾": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "♿️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🅿️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🈳": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🈂️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🛂": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🛃": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🛄": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🛅": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚹": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚺": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚼": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🚻": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🚮": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "📶": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🈁": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔣": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "ℹ️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔤": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🔡": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔠": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🆖": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🆗": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🆙": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🆒": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🆕": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🆓": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "0️⃣": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "1️⃣": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "2️⃣": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "3️⃣": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "4️⃣": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "5️⃣": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "6️⃣": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "7️⃣": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "8️⃣": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "9️⃣": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔟": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔢": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "#️⃣": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "*️⃣": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "▶️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⏸": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⏯": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⏹": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⏺": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⏭": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⏮": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⏩": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⏪": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⏫": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⏬": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "◀️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔼": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔽": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "➡️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⬅️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⬆️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⬇️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "↗️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "↘️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "↙️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "↖️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "↕️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "↔️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "↪️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "↩️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "⤴️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⤵️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔀": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🔁": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🔂": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔄": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🔃": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎵": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎶": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "➕": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "➖": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "➗": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "✖️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💲": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💱": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "™️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "©️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "®️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "〰️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "➰": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "➿": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔚": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔙": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔛": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔝": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔜": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "✔️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "☑️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔘": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⚪️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⚫️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔴": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔵": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔺": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔻": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔸": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔹": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔶": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔷": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔳": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔲": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "▪️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "▫️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "◾️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "◽️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "◼️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "◻️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⬛️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "⬜️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔈": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🔇": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🔉": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🔊": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🔔": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🔕": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "📣": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "📢": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "👁‍🗨": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "💬": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "💭": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🗯": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "♠️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "♣️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "♥️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "♦️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🃏": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🎴": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🀄️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🕐": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🕑": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🕒": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🕓": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🕔": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🕕": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🕖": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🕗": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🕘": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🕙": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🕚": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🕛": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🕜": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🕝": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🕞": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🕟": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🕠": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🕡": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🕢": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🕣": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🕤": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🕥": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🕦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🕧": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏳️": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏴": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏁": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🚩": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🏳️‍🌈": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🇦🇫": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇦🇽": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇦🇱": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇩🇿": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇦🇸": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇦🇩": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇦🇴": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇦🇮": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇦🇶": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇦🇬": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇦🇷": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇦🇲": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇦🇼": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇦🇺": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇦🇹": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇦🇿": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇧🇸": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇧🇭": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇧🇩": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇧🇧": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇧🇾": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇧🇪": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇧🇿": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇧🇯": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇧🇲": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇧🇹": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇧🇴": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇧🇶": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇧🇦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇧🇼": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇧🇷": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇮🇴": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇻🇬": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇧🇳": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇧🇬": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇧🇫": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇧🇮": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇨🇻": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇰🇭": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇨🇲": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇨🇦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇮🇨": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇰🇾": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇨🇫": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇹🇩": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇨🇱": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇨🇳": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🇨🇽": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇨🇨": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🇨🇴": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇰🇲": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇨🇬": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇨🇩": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇨🇰": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇨🇷": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇨🇮": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🇭🇷": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇨🇺": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇨🇼": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇨🇾": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇨🇿": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇩🇰": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇩🇯": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇩🇲": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇩🇴": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇪🇨": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇪🇬": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇸🇻": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇬🇶": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇪🇷": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇪🇪": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇪🇹": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇪🇺": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇫🇰": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇫🇴": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇫🇯": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇫🇮": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇫🇷": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🇬🇫": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇵🇫": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇹🇫": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇬🇦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇬🇲": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇬🇪": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇩🇪": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🇬🇭": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇬🇮": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇬🇷": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇬🇱": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇬🇩": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇬🇵": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇬🇺": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇬🇹": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇬🇬": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇬🇳": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇬🇼": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇬🇾": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇭🇹": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇭🇳": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇭🇰": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇭🇺": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇮🇸": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇮🇳": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇮🇩": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇮🇷": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇮🇶": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇮🇪": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇮🇲": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇮🇱": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇮🇹": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🇯🇲": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇯🇵": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🎌": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇯🇪": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇯🇴": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇰🇿": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇰🇪": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇰🇮": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇽🇰": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇰🇼": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇰🇬": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇱🇦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇱🇻": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇱🇧": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇱🇸": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇱🇷": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇱🇾": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇱🇮": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇱🇹": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇱🇺": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇲🇴": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇲🇰": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇲🇬": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇲🇼": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇲🇾": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇲🇻": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇲🇱": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇲🇹": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇲🇭": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇲🇶": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇲🇷": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇲🇺": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇾🇹": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇲🇽": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇫🇲": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇲🇩": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇲🇨": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇲🇳": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇲🇪": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇲🇸": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇲🇦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇲🇿": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇲🇲": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🇳🇦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇳🇷": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇳🇵": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇳🇱": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇳🇨": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇳🇿": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇳🇮": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇳🇪": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇳🇬": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇳🇺": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇳🇫": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇲🇵": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇰🇵": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇳🇴": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇴🇲": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇵🇰": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇵🇼": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇵🇸": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇵🇦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇵🇬": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇵🇾": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇵🇪": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇵🇭": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇵🇳": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇵🇱": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇵🇹": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇵🇷": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇶🇦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇷🇪": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇷🇴": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇷🇺": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🇷🇼": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇧🇱": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇸🇭": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇰🇳": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇱🇨": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇵🇲": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇻🇨": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇼🇸": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇸🇲": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇸🇹": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇸🇦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇸🇳": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇷🇸": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇸🇨": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇸🇱": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇸🇬": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇸🇽": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇸🇰": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇸🇮": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇸🇧": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇸🇴": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇿🇦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇬🇸": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇰🇷": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🇸🇸": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇪🇸": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🇱🇰": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇸🇩": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇸🇷": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇸🇿": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇸🇪": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇨🇭": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇸🇾": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇹🇼": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇹🇯": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇹🇿": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇹🇭": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇹🇱": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇹🇬": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇹🇰": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇹🇴": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇹🇹": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇹🇳": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇹🇷": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🇹🇲": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇹🇨": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇹🇻": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇺🇬": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇺🇦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇦🇪": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇬🇧": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🇺🇸": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": string[];
//         };
//         "🇻🇮": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇺🇾": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇺🇿": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇻🇺": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇻🇦": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇻🇪": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇻🇳": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇼🇫": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇪🇭": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇾🇪": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇿🇲": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//         "🇿🇼": {
//             "category": string;
//             "description": string;
//             "names": string[];
//             "tags": any[];
//         };
//     };
//     name: {};
// };
// declare module 'gemoji' {
//   export default _default
// }
