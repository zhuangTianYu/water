import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './index.less';

const Dragger = props => {
  const {
    className,
    children,
    onDragStart,
    onDrag,
    onDragEnd,
  } = props;

  const [dragging, setDragging] = useState(false);

  const handleDragStart = event => {
    setDragging(true);
    onDragStart(event);
  };

  const handleDrag = event => {
    // prevent default action (open as link for some elements).
    event.preventDefault();
    onDrag(event);
  };

  const handleDragEnd = event => {
    setDragging(false);
    onDragEnd(event);
  };

  return (
    <div
      className={classnames('dragger', className, {
        'dragger--dragging': dragging
      })}
      draggable="true"
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
    >
      {children}
    </div>
  );
};

Dragger.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onDragStart: PropTypes.func,
  onDrag: PropTypes.func,
  onDragEnd: PropTypes.func,
};

Dragger.defaultProps = {
  className: '',
  children: null,
  onDragStart: () => {},
  onDrag: () => {},
  onDragEnd: () => {},
};

export default Dragger;
