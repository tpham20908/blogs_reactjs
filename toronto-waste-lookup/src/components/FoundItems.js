import React from 'react';

const renderAllItems = items => (
  items.map(item => (
    <div>
      {item.title} {item.body}
    </div>
  ))
)

const FoundItems = props => {
  console.log(props.allItems);
  return (
    <div>
      FoundItems component
      {renderAllItems(props.allItems)}
    </div>
  )
}

export default FoundItems;