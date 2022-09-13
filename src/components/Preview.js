import React from 'react'
import Prism from 'prismjs'
import { marked } from "marked";

const Preview = (props) => {
    const renderer = new marked.Renderer();
    renderer.link = function (href, title, text) {
      return `<a target="_blank" href="${href}">${text}</a>`;
    };
    marked.setOptions({
        breaks: true,
        highlight: function (code) {
          return Prism.highlight(code, Prism.languages.javascript, 'javascript');
        }
      });
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: marked(props.markdown, { renderer: renderer })
        }}
        id="preview"
      />
    );
  };

  export default Preview