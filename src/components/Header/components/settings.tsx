import React from 'react'
import { faBell, faGlobeAmericas, faUser } from '@fortawesome/free-solid-svg-icons'
import { Space } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Settings = (): JSX.Element => {
  return (
    <Space>
      <div className='header__setting__wrapper'>
        <span>
          <FontAwesomeIcon icon={faGlobeAmericas} />
          &nbsp; EN/ENG
        </span>
      </div>
      <span>
        <FontAwesomeIcon icon={faBell} size='lg' />
      </span>
      <span>
        <FontAwesomeIcon icon={faUser} size='lg' />
      </span>
    </Space>
  )
}