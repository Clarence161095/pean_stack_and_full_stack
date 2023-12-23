import React, { useState, useEffect } from 'react'

import { SVG } from '../../../constants/svg'
import IconButton from '../../ui/icon-button'
import InputWithIcon from '../../ui/input-with-icon'
import classes from './index.module.scss'
import SuggestList from './suggest-list'

const mockListSuggest = [
  {
    src: 'assets/avatar.png',
    alt: 'Tự Tin Nói Tiếng Anh',
    name: 'Tự Tin Nói Tiếng Anh',
    type: 'user',
    notification: '1 thông báo mới',
  },
  {
    src: 'assets/avatar.png',
    alt: 'HIỆP HỘI SẢN SUẤT VÀ CUNG CẤP BỘT ĐÁ ABC, ĐÀ NẴNG, QUẢNG NAM. HỒ CHÍ MINH, HÀ NỘI.',
    name: 'HIỆP HỘI SẢN SUẤT VÀ CUNG CẤP BỘT ĐÁ ABC, ĐÀ NẴNG, QUẢNG NAM. HỒ CHÍ MINH, HÀ NỘI.',
    type: 'group',
    notification: '9+ thông báo mới',
  },
  {
    src: 'assets/avatar.png',
    alt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    name: 'Lorem Ipsum',
    type: 'user',
    notification: '3 thông báo mới',
  },
  {
    src: 'assets/avatar.png',
    alt: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    name: 'Lorem Ipsum Group',
    type: 'group',
    notification: '6 thông báo mới',
  },
  {
    src: 'assets/avatar.png',
    alt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    name: 'Lorem Ipsum Long Name User',
    type: 'user',
    notification: '12 thông báo mới',
  },
  {
    src: 'assets/avatar.png',
    alt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    name: 'Lorem Ipsum Long Name Group',
    type: 'group',
    notification: '15 thông báo mới',
  },
  {
    src: 'assets/avatar.png',
    alt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    name: 'Lorem Ipsum Very Long Name User',
    type: 'user',
    notification: '20 thông báo mới',
  },
  {
    src: 'assets/avatar.png',
    alt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    name: 'Lorem Ipsum Very Long Name Group',
    type: 'group',
    notification: '25 thông báo mới',
  },
  {
    src: 'assets/avatar.png',
    alt: 'Lorem Ipsum',
    name: 'Lorem Ipsum Short User',
    type: 'user',
    notification: '5 thông báo mới',
  },
  {
    src: 'assets/avatar.png',
    alt: 'Lorem Ipsum',
    name: 'Lorem Ipsum Short Group',
    type: 'group',
    notification: '8 thông báo mới',
  },
]

export default function LeftNavigator() {
  const [isVisibleLogo, setIsVisibleLogo] = useState(true)
  const [listSuggest, setListSuggest] = useState([]);

  useEffect(() => {
    // Load data
    setListSuggest(mockListSuggest)
  }, []);

  return (
    <div
      className={`${classes.left} ${!isVisibleLogo ? classes.leftBorder : ''}`}>
      <div className={classes.searchControl}>
        {isVisibleLogo ? (
          <img
            src='assets/facebook_logo_icon.png'
            alt='Facebook Logo'
          />
        ) : (
          <IconButton />
        )}

        <InputWithIcon
          svg={SVG.search}
          placeholder='Tìm kiếm trên Facebook'
          onFocused={() => {
            setIsVisibleLogo(false)
          }}
          onBlurred={() => {
            setIsVisibleLogo(true)
          }}
        />
      </div>
      <SuggestList list={listSuggest} />
    </div>
  )
}


