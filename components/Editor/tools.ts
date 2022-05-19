import Header from "@editorjs/header"
import List from "@editorjs/list"
import Paragraph from "@editorjs/paragraph"
import Embed from "@editorjs/embed"
import Table from "@editorjs/table"
import Warning from "@editorjs/warning"
import Code from "@editorjs/code"
import LinkTool from "@editorjs/link"
// import Image from '@editorjs/image'
import Raw from "@editorjs/raw"
import Quote from "@editorjs/quote"
import Marker from "@editorjs/marker"
import CheckList from "@editorjs/checklist"
import Delimiter from "@editorjs/delimiter"
import InlineCode from "@editorjs/inline-code"
import SimpleImage from "@editorjs/simple-image"

export const tools = {
  header: {
    class: Header,
    inlineToolbar: ["link"],
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  // embed: Embed,
  // http://lbs.m2mda.com:5588/public/question/0476906e-d8c6-488c-98b8-d6c09e515e3e.json
  //   <iframe
  //     src="http://lbs.m2mda.com:5588/public/question/0476906e-d8c6-488c-98b8-d6c09e515e3e"
  //     frameborder="0"
  //     width="800"https://www.youtube.com/watch?v=GEL21CrmvV4
  //     height="600"
  //     allowtransparency
  // ></iframe>
  embed: {
    class: Embed,
    config: {
      services: {
        metabase: {
          regex: /https?:\/\/metabase\.m2mda\.com\/(.*)/,
          // embedUrl: 'http://lbs.m2mda.com:5588/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2',
          embedUrl: "https://metabase.m2mda.com/<%= remote_id %>",
          html: "<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",
          height: 300,
          width: 600,
        }
      }
    }
  },
  table: Table,
  warning: Warning,
  code: Code,
  linkTool: LinkTool,
  // image: Image,
  raw: Raw,
  quote: Quote,
  marker: Marker,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
}
