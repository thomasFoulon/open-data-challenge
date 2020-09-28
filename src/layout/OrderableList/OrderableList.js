import React, { Component } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons';

import './OrderableList.css';

const reorder = (list, srcIndex, destIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(srcIndex, 1);
  result.splice(destIndex, 0, removed);

  return result;
};

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
          <div className="OrderableItemRank">{index + 1}</div>
          <p className="OrderableItemText">{ item.content }</p>
          <FontAwesomeIcon className="OrderableItemIcon" icon={faArrowsAlt} size="lg" />
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
      <div className="OrderableList">
        <h3 className="OrderableListTitle">Votre classement des indicateurs</h3>
        <p className="OrderableListDesc">
          Triez ces indicateurs du plus au moins important selon vous pour
          découvrir quels pays offrent les meilleures conditions de vie.
        </p>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {items.map((item, index) => (OrderableItem(item, index)))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
}

export default OrderableList;
