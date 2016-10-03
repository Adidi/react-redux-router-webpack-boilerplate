import React, { PropTypes } from 'react';
import AddItem from './add-item';

const Items = ({items, loading, addItem, removeItem}) =>
    <div className="items">
        <h3>Items:</h3>
        <AddItem addItem={addItem} loading={loading} />
        <ul>
            {items.map( ({id, text}, i) =>
                <li key={i}>
                    <b>{i + 1}.</b> {text}&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>id: {id}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={e => {
                        removeItem(id);
                    }}>Remove</button>
                </li>
            )}
        </ul>
    </div>;

Items.propTypes = {
    items: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    addItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired
};

export default Items;