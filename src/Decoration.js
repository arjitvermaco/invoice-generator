import React from 'react'

function Decoration() {
    console.log("Decoration Rerendered")
  return (
    <div>Decoration</div>
  )
}

export default React.memo(Decoration)
// export default Decoration

//useState
// How react rerenders