import styled from 'styled-components'
import {COLOR_MAP, SCREEN_SIZE_MAP} from '../../../global'
import media from 'styled-media-query'

export const HeaderContentDiv = styled.div`
  display: flex;
  margin-bottom: 8px;
  .avatar {
    flex: 0 1 72px;
    margin-bottom: 8px;
    & > span {
      border-radius: 72px;
      display: block;
      width: 72px;
      height: 72px;
    }
  }
  .content {
    position: relative;
    top: 4px;
    margin-left: 24px;
    flex: 1 1 auto;
    color: ${COLOR_MAP.textColorSecondary};
    line-height: 22px;
    .contentTitle {
      font-size: 20px;
      line-height: 28px;
      font-weight: 500;
      color: ${COLOR_MAP.headingColor};
      margin-bottom: 12px;
    }
  }
  
  ${media.lessThan(SCREEN_SIZE_MAP.screenXs)`

    .content {
    
      .contentTitle{
        margin-top:20px;
        span{
          display:none;
        }
      }
      .bioLabel{
         display:none;
      }
    }
  `}
`
