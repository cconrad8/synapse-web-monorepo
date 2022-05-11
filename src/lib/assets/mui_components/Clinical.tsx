import * as React from 'react'
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon'

const Clinical = (props: SvgIconProps) => {
  const { fill, style } = props
  return (
    <SvgIcon style={style}>
      <path
        d="M17.6562 11.5312C16.5245 11.5312 15.5777 12.3378 15.3599 13.4062H14.7812C13.489 13.4062 12.4375 14.4577 12.4375 15.75V17.6562C12.4375 18.4317 11.8067 19.0625 11.0312 19.0625C10.2558 19.0625 9.625 18.4317 9.625 17.6562V16.1324C10.1694 15.9382 10.5625 15.4228 10.5625 14.8125V13.9843C12.7943 12.8622 14.3125 9.28919 14.3125 7.28125C14.3125 6.16241 14.2104 5.60984 13.3432 5.11287C13.2077 4.47797 12.6435 4 11.9688 4C11.1933 4 10.5625 4.63081 10.5625 5.40625C10.5625 6.18169 11.1933 6.8125 11.9688 6.8125C12.4813 6.8125 12.9261 6.534 13.1719 6.12322C13.3468 6.31166 13.375 6.59113 13.375 7.28125C13.375 9.57328 11.3315 13.4062 9.15625 13.4062C6.98097 13.4062 4.9375 9.57328 4.9375 7.28125C4.9375 6.59113 4.96566 6.31166 5.14062 6.12322C5.38644 6.534 5.83122 6.8125 6.34375 6.8125C7.11919 6.8125 7.75 6.18169 7.75 5.40625C7.75 4.63081 7.11919 4 6.34375 4C5.669 4 5.10475 4.47797 4.96931 5.11287C4.10209 5.60984 4 6.16241 4 7.28125C4 9.28919 5.51819 12.8622 7.75 13.9843V14.8125C7.75 15.4228 8.14306 15.9382 8.6875 16.1324V17.6562C8.6875 18.9485 9.73897 20 11.0312 20C12.3235 20 13.375 18.9485 13.375 17.6562V15.75C13.375 14.9746 14.0058 14.3438 14.7812 14.3438H15.3599C15.5777 15.4122 16.5245 16.2188 17.6562 16.2188C18.9485 16.2188 20 15.1673 20 13.875C20 12.5827 18.9485 11.5312 17.6562 11.5312ZM18.125 14.3438H17.1875V13.4062H18.125V14.3438Z"
        fill={fill}
      />
    </SvgIcon>
  )
}

export default Clinical
