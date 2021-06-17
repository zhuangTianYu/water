import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Dropper from '@components/dropper';
import Delete from '@components/delete';
import Tags from '@components/tags';
import { isMobile } from '@utils';
import { renderLoop, createItem } from '@utils/render';
import { tagMap } from '@utils/constants';
import '@styles/reset.less';
import './index.less';

const App = () => {
  const [data, setData] = useState([]);
  const [tags] = useState(Array.from(tagMap).map(([tag, item]) => ({ tag, ...item })));

  const handlePaperDrop = event => {
    const tag = event.dataTransfer.getData('tag');
    const type = event.dataTransfer.getData('type');

    switch (type) {
      case 'pureTag':
        // TODO: replace next line with deleteItemById.
        setData([...data, createItem(tag)]);
        break;
      case 'itemTag':
        break;
      default:
        console.warn('Error: Unknown dragging type.');
    }
  }

  const handlePaperDelete = event => {
    const type = event.dataTransfer.getData('type');
    const id = +event.dataTransfer.getData('id');

    switch (type) {
      case 'pureTag':
        console.warn('Error: Can not delete pure tag.');
        break;
      case 'itemTag':
        setData(data => data.filter(item => item.id !== id));
        break;
      default:
        console.warn('Error: Unknown dragging type.');
    }
  };

  if (isMobile) {
    alert('请使用 PC 端浏览器访问此页面');

    return null;
  }

  return (
    <div className="app">
      <div className="paper">
        <Dropper
          isEmpty={!data.length}
          onDrop={handlePaperDrop}
        >
          <div className="paper__content">
            {renderLoop(data)}
          </div>
        </Dropper>
      </div>
      <div className="tools">
        <div className="tools__content">
          <Tags list={tags} />
          <Delete onDrop={handlePaperDelete} />
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
