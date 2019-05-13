/** @jsx jsx */
import {jsx} from '@emotion/core'

// 🐨 get useListItemState from '../context/list-item-context'
import {BookListUL} from './lib'
import BookRow from './book-row'

function ListItemList({filterListItems, noListItems, noFilteredListItems}) {
  // 🐨 get the listItems from useListItemState
  const listItems = []
  const filteredListItems = listItems.filter(filterListItems)

  if (!listItems.length) {
    return <div css={{marginTop: '1em', fontSize: '1.2em'}}>{noListItems}</div>
  }
  if (!filteredListItems.length) {
    return (
      <div css={{marginTop: '1em', fontSize: '1.2em'}}>
        {noFilteredListItems}
      </div>
    )
  }

  return (
    <div css={{marginTop: '1em'}}>
      <BookListUL>
        {filteredListItems.map(listItem => (
          <li key={listItem.id}>
            <BookRow book={listItem.book} />
          </li>
        ))}
      </BookListUL>
    </div>
  )
}

export default ListItemList