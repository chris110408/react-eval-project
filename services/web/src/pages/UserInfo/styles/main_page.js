import styled from 'styled-components'
import media from 'styled-media-query'

export const MainPageDiv = styled.div`
  .repos {
    width:100%
  }
  
  .header-row{
    justify-content: space-between;
    width: 100%;
  
  }
  
  ${media.lessThan('medium')`

    /* screen width is less than 768px (medium) */
 
  `}

  ${media.between('medium', 'large')`
    /* screen width is between 768px (medium) and 1170px (large) */
  
  `}

  ${media.greaterThan('large')`

    /* screen width is greater than 1170px (large) */
  
  `}


  
`
