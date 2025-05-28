import {visit} from 'unist-util-visit'

export function remarkMark() {
  return (tree, file) => {
    visit(tree, "paragraph", (node) => {
      console.log(node)
    })
    // visit(tree)
  };
}
