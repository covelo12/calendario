import{useEffect, useState} from 'react'

import ApppointmentDetails from '../components/ApppointmentDetails'
const Home = () => {
    const [appointments, setappointments] = useState(null) // [state, setState

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/days')
            const json = await response.json()

            if( response.ok){
                setappointments(json);
            }
        }
        fetchData()
    },[])

    return(
        <div className='home'>
            <div className='appointments'> 
                {appointments && appointments.map( (appointments) =>( 
                    <ApppointmentDetails key={appointments._id} appointments={appointments}/>
                ))}
            </div>
        </div>

    )
}
export  default Home;