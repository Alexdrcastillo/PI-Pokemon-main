import React from 'react'
import { getName, getPokemons} from '../../../redux/actions'
import {useDispatch, useSelector} from 'react-redux'
import { useState } from 'react'
import Detail from '../../../views/detail/detail'
import Home from '../../../views/Home/Home'
import Cards from '../../cards/cards'

const SearchBar = ({ onShowCards }) => {
  const [name, setName] = useState('')
  const [showDetail, setShowDetail] = useState(false)
  const dispatch = useDispatch()


  const handleChange = (event) => {
    if (event.target.value === '') {
      dispatch(getPokemons)
    }
    setName(event.target.value)
  }

  const handleSearch = () => {
    dispatch(getName(name))
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (name.length !== 0) {
        handleSearch()
        setShowDetail(true)
        onShowCards(false)
      } else {
        dispatch(getPokemons())
      }
    }
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (name.length !== 0) {
      handleSearch();
    }
  };

  return (
    <div style={{display: "flex", backgroundColor: "lightblue", height: "50px",marginTop: "-25px", alignItems:"center", paddingLeft: "500px"}}>
      <form onSubmit={handleOnSubmit}>
        <input style={{paddingLeft: "200px"}}
          onKeyPress={handleKeyPress}
          className="poke-searchbar"
          placeholder="Buscar..."
          value={name}
          onChange={handleChange}
        />
      </form>
        <button type="submit" style={{height: "40px"}}>Buscar</button>
      {showDetail && <Detail name={name} />}
    </div>
  )
}

export default SearchBar