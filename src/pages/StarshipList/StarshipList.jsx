import { getAllStarships } from '../../services/sw-api'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'


const StarshipList = () => {
  const [ starshipList, setAllStarships ] = useState([])

  useEffect(() => {
    const fetchAllStarships = async () => {
      const starshipData = await getAllStarships()
      setAllStarships(starshipData.results)
    }
    fetchAllStarships()
  }, [])

  return (
    <>
      <h3 class='head'>Starships</h3>
      {starshipList.length ?
        <div class='starship-container'>
          {starshipList.map(starship =>
              <div class='starship'>
                <Link to='/starships' state={{starship}} key={starship.name}>
                  {starship.name}
                </Link>
              </div>
          )}
        </div>
        :
        <>
          <h3>Incoming from another galaxy...</h3>
        </>
      }
    </>
  )
}

export default StarshipList