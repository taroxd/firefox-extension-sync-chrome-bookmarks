
const {bookmarks} = browser
const toolbar = "toolbar_____"

// uncomment to clean up all favorites
// bookmarks.getChildren("unfiled_____")
// .then((children) => {
//   for (let {id} of children) {
//     bookmarks.removeTree(id)
//   }
// })

if (chromeBookmarks) {
  bookmarks.getChildren(toolbar)
  .then((children) => {
    for (let {id} of children) {
      bookmarks.removeTree(id)
    }
  })
  .then(() => {
    const bookmarkBar = chromeBookmarks.roots.bookmark_bar
    return importNode(bookmarkBar, toolbar, true)
  })
  .catch(console.error.bind(console))
}

function importNode(node, parentId, isTopLevel = false) {
  if (node.type === "folder") {
    let p
    if (isTopLevel) {
      p = Promise.resolve({id: toolbar})
    } else {
      p = bookmarks.create({parentId, index: 0, title: node.name})
    }
    return p.then(({id}) => {
      return Promise.all(
        node.children.reverse().map(child => importNode(child, id)))
    })
  } else {
    return bookmarks.create({parentId, index: 0, title: node.name, url: node.url})
  }
}
