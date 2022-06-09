import React, { useState, useRef } from 'react';
import { RichUtils, EditorState } from 'draft-js';
import Editor from '@draft-js-plugins/editor'
import { stateFromHTML } from 'draft-js-import-html';

import createToolbarPlugin from '@draft-js-plugins/static-toolbar';
import './style.css';
import '@draft-js-plugins/static-toolbar/lib/plugin.css';

import {
    BoldButton,
    ItalicButton,
    UnorderedListButton,
    OrderedListButton,
    BlockquoteButton,
    CodeBlockButton,
    AlignTextLeftButton,
    AlignTextCenterButton,
    AlignTextRightButton,
    HeadlineOneButton,
} from '@draft-js-plugins/buttons';


const staticToolbarPlugin = createToolbarPlugin();
const { Toolbar } = staticToolbarPlugin;
const plugins = [staticToolbarPlugin];

export default function RichEditor({ defaultValue, onChange }) {
    const editor = useRef(null);    
    const [editorState, setEditorState] = useState(() => defaultValue ? 
        EditorState.createWithContent(defaultValue.getCurrentContent()) 
        : EditorState.createEmpty()
    );
    const handleChange = (state) => {
        onChange(state);
        setEditorState(state);
    }
    
    const blockStyleFn = (block) => {
        let alignment = 'left';
        block.findStyleRanges((e) => {
        if (e.hasStyle('center')) {
            alignment = 'center';
        }
        if (e.hasStyle('right')) {
            alignment = 'right';
        }
        });
        return `editor-alignment-${alignment}`;
    };

    return (
        <div className='editor'>
            <Toolbar>
                {
                    (externalProps) => (
                    <div className='icons-toolbar'>
                        <BoldButton {...externalProps} />
                        <ItalicButton {...externalProps} />
                        <UnorderedListButton {...externalProps} />
                        <OrderedListButton {...externalProps} />
                        <BlockquoteButton {...externalProps} />
                        <CodeBlockButton {...externalProps} />
                        <AlignTextLeftButton {...externalProps} />
                        <AlignTextCenterButton {...externalProps} />
                        <AlignTextRightButton {...externalProps} />
                        <HeadlineOneButton {...externalProps} />
                    </div>
                    )
                }
            </Toolbar>
            <Editor
                editorState={editorState}
                onChange={handleChange}
                plugins={plugins}
                blockStyleFn={blockStyleFn}
                ref={editor}
            />
        </div>
    )
};
