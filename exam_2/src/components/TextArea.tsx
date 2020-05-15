import React from 'react';

interface PropTypes {
  isInput: boolean,
  value?: string,
}

export default function TextArea(props: PropTypes) {
  return (
    <div className="form-group w-100">
      <label htmlFor="TranslationTextarea">Text to translate</label>
      { props.isInput ?
        <textarea className="form-control" id="TranslationTextarea" style={{resize:"none"}} rows={5}></textarea> :
        <textarea
          className="form-control bg-white text-body"
          id="TranslationTextarea"
          style={{resize:"none"}}
          rows={5}
          readOnly
          disabled
          value={props.value}
        ></textarea>
      }

    </div>
  )
}
