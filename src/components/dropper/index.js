import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './index.less';

const Dropper = props => {
  const {
    className,
    isEmpty,
    children,
    onDragEnter,
    onDragOver,
    onDragLeave,
    onDrop,
  } = props;

  const [overing, setOvering] = useState(false);

  const handleDragEnter = event => {
    setOvering(true);
    onDragEnter(event);
  };

  const handleDragOver = event => {
    event.preventDefault(); // prevent default to allow drop.
    setOvering(true);
    onDragOver(event);
  };

  const handleDragLeave = event => {
    setOvering(false);
    onDragLeave(event);
  };

  const handleDrop = event => {
    setOvering(false);
    onDrop(event);
  };

  return (
    <div
      className={classnames('dropper', className, {
        'dropper--overing': overing,
        'dropper--empty': isEmpty,
      })}
      droppable="true"
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {children}
    </div>
  );
};

Dropper.propTypes = {
  className: PropTypes.string,
  isEmpty: PropTypes.bool,
  children: PropTypes.node,
  onDragEnter: PropTypes.func,
  onDragOver: PropTypes.func,
  onDragLeave: PropTypes.func,
  onDrop: PropTypes.func,
};

Dropper.defaultProps = {
  className: '',
  isEmpty: false,
  children: null,
  onDragEnter: () => {},
  onDragOver: () => {},
  onDragLeave: () => {},
  onDrop: () => {},
};

export default Dropper;
