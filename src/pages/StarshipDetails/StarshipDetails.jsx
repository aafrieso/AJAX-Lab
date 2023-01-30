import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getStarshipDetails } from "../../services/sw-api";
import { Link } from "react-router-dom"

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchStarshipDetails = async () => {
      const starshipData = await getStarshipDetails(location.state.starship.url)
      setStarshipDetails(starshipData)
    }
    fetchStarshipDetails()
  }, [location.state.starship.url])

  return (
    <>
      <div class='star-details'>
        {getStarshipDetails.name ?
        <>
        <h3>Starship Details</h3>
        <div class='starship-deets'>
          <h4>Starship: {starshipDetails.name}</h4>
          <p>Starship Model: {starshipDetails.model}</p>
          <Link to='/'>Starship List</Link>
        </div>
        </>
        :
        <>
        <p>Details coming from far far away....</p>
        </>
        }
      </div>
    </>
  )
}

export default StarshipDetails