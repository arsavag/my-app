import React from 'react';

export default function Editor({ data }) {
    return (
        <div className='preview' dangerouslySetInnerHTML={{__html: data}} />
    )
};
