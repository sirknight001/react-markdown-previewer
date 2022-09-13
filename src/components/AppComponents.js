import React from 'react'
import Toolbar from './Toolbar';
import Editor from './Editor';
import Preview from './Preview';

const placeholder = `<h1>Hello World</h1>`;
class AppComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        markdown: placeholder,
        editorMaximized: false,
        previewMaximized: false
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleEditorMaximize = this.handleEditorMaximize.bind(this);
      this.handlePreviewMaximize = this.handlePreviewMaximize.bind(this);
    }
    handleChange(e) {
      this.setState({
        markdown: e.target.value
      });
    }
    handleEditorMaximize() {
      this.setState({
        editorMaximized: !this.state.editorMaximized
      });
    }
    handlePreviewMaximize() {
      this.setState({
        previewMaximized: !this.state.previewMaximized
      });
    }
    render() {
      const classes = this.state.editorMaximized
        ? ['editorWrap maximized', 'previewWrap hide']
        : this.state.previewMaximized
        ? ['editorWrap hide', 'previewWrap maximized', 'fa fa-compress']
        : ['editorWrap', 'previewWrap', 'fa fa-arrows-alt'];
      return (
        <div>
          <h1 id="title">Markdown Previewer</h1>
          <div className={classes[0]}>
            <Toolbar
              icon={classes[2]}
              onClick={this.handleEditorMaximize}
              text="Editor"
            />
            <Editor markdown={this.state.markdown} onChange={this.handleChange} />
          </div>
          <div className="converter" />
          <div className={classes[1]}>
            <Toolbar
              icon={classes[2]}
              onClick={this.handlePreviewMaximize}
              text="Previewer"
            />
            <Preview markdown={this.state.markdown} />
          </div>
        </div>
      );
    }
  }

  export default AppComponent