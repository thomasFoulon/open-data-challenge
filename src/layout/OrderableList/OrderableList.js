import React, { Component } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import './OrderableList.css';

// function OrderableList() {
//   return <div className="OrderableList">Orderable List</div>;
// }

const reorder = (list, srcIndex, destIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(srcIndex, 1);
  result.splice(destIndex, 0, removed);

  return result;
};

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: '5px',
  width: 250
});

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: '10px',
  margin: '0 0 5px 0',

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle
});

function OrderableItem(item, index) {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}

            /* eslint-disable react/jsx-props-no-spreading */
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style
          )}
        >
          { `${index + 1} - ` }
          { item.content }
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
          {(provided, snapshot) => (
            /* eslint-disable react/jsx-props-no-spreading */
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
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
