import React, { useRef } from 'react';
import ReactWEditor from 'wangeditor-for-react';

function Wangeditor() {
  let editorRef = useRef(null)
  return (
    <ReactWEditor
      ref={editorRef}
      onBlur={(html) => {
        if (editorRef.current) {
          console.log('ref')
        }
      }}
    />
  );
}

export default Wangeditor;