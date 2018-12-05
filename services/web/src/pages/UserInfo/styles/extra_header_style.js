import styled from 'styled-components'
import { COLOR_MAP, SCREEN_SIZE_MAP } from '../../../global'
import { clearFix } from '../../../utils/clearfix_helper'
import media from 'styled-media-query'

export const ExtraContentDiv = styled.div`
  ${clearFix()}
  float:none;
  margin-top: 5px;
  margin-left: 5px;
  white-space: nowrap;
  .statItem {
    padding: 0 12px;
    position: relative;
    display: inline-block;
    > p:first-child {
      color: ${COLOR_MAP.textColorSecondary};
      font-size: 15px;
      line-height: 22px;
      margin-bottom: 4px;
    }
    > p {
      font-size: 25px;
      line-height: 38px;
      margin: 0;
      > span {
        color: ${COLOR_MAP.textColorSecondary};
        font-size: 20px;
      }
    }
    &:first-child {
      padding-left: 82px;
    }

    &:after {
      position: absolute;
      top: 8px;
      right: 0;
      width: 1px;
      height: 40px;
      content: '';
    }
    &:last-child {
      padding-right: 0;
      &:after {
        display: none;
      }
    }
  }
  ${media.greaterThan(SCREEN_SIZE_MAP.screenXl)`
   float:right;
   .statItem:first-child {
      padding-left:0px;
     }
  `}

  ${media.lessThan(SCREEN_SIZE_MAP.screenXs)`
    margin:auto;
    /* screen width is less than 768px (medium) */
    text-align:center;
     .statItem{
       :first-child {
         padding-left:0px;
       }
      }
       }
     }
  `}
`
