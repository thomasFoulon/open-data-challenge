import React, { Component } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import './OrderableList.css';

const reorder = (list, srcIndex, destIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(srcIndex, 1);
  result.splice(destIndex, 0, removed);

  return result;
};

const dragIcon = require('../../assets/dragIcon.png');

function OrderableItem(item, index) {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          className={snapshot.isDragging ? 'Dragging OrderableItem' : 'NotDragging OrderableItem'}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          { `${index + 1} - ` }
          { item.content }
          <img src={dragIcon} alt="draggable icon" />
        </div>
      )}
    </Draggable>
  );
}

class OrderableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    const { items } = this.state;
    const { onChange } = this.props;
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const newItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items: newItems
    });

    onChange(newItems);
  }

  render() {
    const { items } = this.state;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="OrderableList"
            >
              {items.map((item, index) => (OrderableItem(item, index)))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default OrderableList;
