import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = e => {
      if(ref.current.contains(e.target)) return;
      setVisible(false);
    }
    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    }
  }, []);

  const renderedOptions = options.map(option => {
    if(option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <label className="label">{label}</label>
        <div
          className={`ui selection dropdown ${visible ? 'visible active' : ''}`}
          onClick={() => setVisible(!visible)}
        >
          <i className="dropdown icon"></i>
          <div className="text">{!!selected ? selected.label : 'Select Color'}</div>
          <div className={`menu ${visible ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
        <p>This is a simple text</p>
      </div>
    </div>
  )
}

export default Dropdown;
