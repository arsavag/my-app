import React, { useState, useRef } from 'react';
import { EditorState } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import './style.css';
import '@draft-js-plugins/static-toolbar/lib/plugin.css';

export default function EditorPreview({ data }) {
    
    const content = data ? EditorState.createWithContent(data.getCurrentContent()) : EditorState.createEmpty();

    return (
        <>
            <Editor readOnly editorState={content} onChange={() => { }} />
        </>
    )
};
