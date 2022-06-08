import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import CustomEditor from 'ckeditor5-custom-build';


export default function Editor({ onChange }) {
    const [value, setValue] = useState('');
    const handleChange = (e, editor) => {
        const data = editor.getData();
        onChange(data);
        setValue(data);
    }
    
    return (
        <CKEditor
            editor={CustomEditor}
            data={value}
            onChange={handleChange}
        />
    )
};
