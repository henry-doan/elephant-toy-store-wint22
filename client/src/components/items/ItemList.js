
import ItemShow from './itemsShow';

const ItemList = ({ item, updateItem, deleteItem }) => (
  <>
    { items.map( i => 
      <ItemShow
        key={i.id}
        {...i}
        updateItem={updateItem}
        deleteItem={deleteItem}
      />
    )}
  </>
)

export default ItemList;