import React from 'react';
import Dragger from '@components/dragger';
import { isNonemptyObject } from '@utils';
import { tagMap } from '@utils/constants';

export const createItem = tag => {
  const id = Date.now();
  const style = {};
  const children = tagMap.get(tag).defaultChildren;

  return { id, tag, style, children };
};

// TODO: complete function.
export const getItemById = (data, id) => {};

// TODO: complete function.
export const getStyleById = id => {
  // getDefaultStyleByTag
  // getStyleById
  // merge style

  return {};
};

// TODO: complete function.
export const deleteItemById = () => {};

export const renderLoop = data => {
  const dataType = typeof data;

  if (['string', 'number'].includes(dataType)) return data;

  if (['boolean', 'undefined'].includes(dataType)) return null;

  if (dataType === 'object') {
    if (data === null) return null;

    if (!Array.isArray(data)) return JSON.stringify(data);

    return data.map(item => {
      if (!isNonemptyObject(item)) return renderLoop(item);

      const { id, style, children } = item;

      return (
        <Dragger
          className="paper__tag-item"
          key={id}
          onDragStart={event => {
            event.dataTransfer.setData('tag', item.tag);
            event.dataTransfer.setData('type', 'itemTag');
            event.dataTransfer.setData('id', id);
          }}
        >
          <item.tag id={id} key={id} style={style}>
            {renderLoop(children)}
          </item.tag>
        </Dragger>
      );
    });
  }

  return null;
};
