import React from 'react'

const RegistrantsIcon = ({ width, height, fill }) => {
  const f = (fill || '#C3C3C8')
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={ width || '14' } height={ height || '16' } viewBox="0 0 14 16">
      <g fill={ f } fill-rule="evenodd">
        <path d="M12 14L12 13.2C11.8723643 13.1407674 11.3220919 12.8840298 11.1840867 12.8217166 9.91660886 12.2494152 8.85493605 12 7 12 5.14506395 12 4.08339114 12.2494152 2.81591327 12.8217166 2.67790809 12.8840298 2.12763575 13.1407674 1.98829514 13.2037815 1.9969955 13.1998401 2 14 2 14L12 14zM14 13.2L14 16 0 16 0 13.2C0 12.417.45 11.705 1.163 11.382 2.461 10.795 3.808 10 7 10 10.192 10 11.539 10.795 12.837 11.382 13.55 11.705 14 12.417 14 13.2zM7 2C8.1 2 9 2.9 9 4L9 5C9 6.1 8.1 7 7 7 5.9 7 5 6.1 5 5L5 4C5 2.9 5.9 2 7 2L7 2zM7 0C4.8 0 3 1.8 3 4L3 5C3 7.2 4.8 9 7 9 9.2 9 11 7.2 11 5L11 4C11 1.8 9.2 0 7 0L7 0z"/>
      </g>
    </svg>
  )
}

export default RegistrantsIcon