import React from 'react';
import PropTypes from 'prop-types';
import Dropper from '@components/dropper';
import './index.less';

const Delete = props => (
  <Dropper
    className="delete"
    onDrop={props.onDrop}
  >
    删除
  </Dropper>
);

Delete.propTypes = {
  onDrop: PropTypes.func,
};

Delete.defaultProps = {
  onDrop: () => {},
};

export default Delete;
