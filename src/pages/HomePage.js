import React from 'react'
import CountryList from '../components/CountryList'
import Search from '../components/Search'

const HomePage = () => {
  return (
    <div>
        <Search />
        <CountryList />
    </div>
  )
}

export default HomePage