import React, { Component, Fragment } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

class Editor extends Component {

    onChange = (newValue) => {
        console.log("change", newValue);
      }

    render() {
        return (
            <Fragment>
                <AceEditor
                    className = "editor-style"
                    mode="java"
                    theme="github"
                    onChange={this.onChange}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{ $blockScrolling: true }}
                />
            </Fragment>
        );
    }
}

export default Editor;