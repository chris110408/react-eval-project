import styled from 'styled-components'
import { SCREEN_SIZE_MAP } from '../../../CONSTANTS'

export const PageHeaderDiv = styled.div`
  .content {
    margin: 24px 24px 0;
  }

  @media screen and (max-width: ${SCREEN_SIZE_MAP.screenSm};) {
    .content {
      margin: 24px 0 0;
    }
  }
`
