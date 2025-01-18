'use client';

import { useState } from 'react';
import RichTextEditor, { BaseKit } from 'reactjs-tiptap-editor/bundle/full';

// Import CSS
import 'reactjs-tiptap-editor/style.css';

const extensions = [
  BaseKit.configure({
    // Show placeholder
    placeholder: {  
      showOnlyCurrent: true, 
    },  

    // Character count
    characterCount: {  
      limit: 50_000,  
    },  
  }),
  // Import Extensions Here
];

const DEFAULT = '';

const TiptapEditor: React.FC = () => {
  const [content, setContent] = useState(DEFAULT);

  const onChangeContent = (value: any) => {
    setContent(value);
  };

  return (
    <RichTextEditor
      output='html'
      content={content}
      onChangeContent={onChangeContent}
      extensions={extensions}
    />
  );
};

export default TiptapEditor;
