import React from 'react'

 function CounterNumber({count}) {
  return (
    <p>
        <span>Count:</span>
        {count}
    </p>
  )
}
export default React.memo(CounterNumber)
