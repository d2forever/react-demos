import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef();
  const textRef = useRef();

  useEffect(() => {
    const onBodyClick = e => {
      if(ref.current.contains(e.target)) return;
      setVisible(false);
    }
    document.body.addEventListener('click', e => () => onBodyClick(e));
    onDropdownItemSelectHandler(selected);

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
        onClick={() => onDropdownItemSelectHandler(option)}
      >
        {option.label}
      </div>
    );
  });

  const onDropdownItemSelectHandler = option => {
    onSelectedChange(option);
    textRef.current.style.color = option.value;
  }

  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <label className="label">Select a Color</label>
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
        <p ref={textRef}>This is a simple text</p>
      </div>
    </div>
  )
}

export default Dropdown;
