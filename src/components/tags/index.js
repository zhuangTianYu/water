import React from 'react';
import PropTypes from 'prop-types';
import Dragger from '@components/dragger';
import './index.less';

const Tags = props => (
  <div className="tags">
    {props.list.map(item => (
      <Dragger
        className="tags__item"
        key={item.tag}
        onDragStart={event => {
          event.dataTransfer.setData('tag', item.tag);
          event.dataTransfer.setData('type', 'pureTag');
          event.dataTransfer.dropEffect = 'copy';
        }}
      >
        <div className="tags__chinese-name">
          {item.name}
        </div>
        <div className="tags__connector" />
        <div className="tags__tag-name">
          {`<${item.tag}>`}
        </div>
      </Dragger>
    ))}
  </div>
);

Tags.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      tag: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};

Tags.defaultProps = {
  list: [],
};

export default Tags;
