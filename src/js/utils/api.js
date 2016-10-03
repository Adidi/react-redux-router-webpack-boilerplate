import uuid from 'node-uuid';

const items = [
    {id: 'b86cec59-743c-4fc4-91c9-16346e27e213',text: 'Item 1'},
    {id: '05598a1c-7858-4591-8114-cbd604a8c63c',text: 'Item 2'},
    {id: 'a96bc8b1-f559-430e-b054-68a041569e35',text: 'Item 3'}
];

//mock async api data
export default {

    loadItems(){
        return new Promise( (resolve,reject) => {
            setTimeout(() => {
                resolve(items);
            }, 2000);
        });
    },

    addItem(text){
        return new Promise( (resolve,reject) => {
            let item = {
                id: uuid.v4(),
                text
            };
            setTimeout(() => {
                resolve(item);
            }, 1000);
        });
    }

};