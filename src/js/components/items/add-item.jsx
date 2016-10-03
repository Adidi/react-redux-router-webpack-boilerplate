import React, { PropTypes } from 'react';

let input = null;
const AddItem = ({addItem, loading}) => {
    return (
        <div>
            <input disabled={loading} ref={r => input = r} />
            <button disabled={loading} onClick={e => {
                addItem(input.value).then( () => {
                    input.value = '';
                });
            }}>Add Item</button>
        </div>
    )
};

AddItem.propTypes = {
    loading: PropTypes.bool.isRequired,
    addItem: PropTypes.func.isRequired
};

export default AddItem;