import{useEffect, useState} from 'react'
import ApppointmentForm from '../components/AppointmentForm'
import ApppointmentDetails from '../components/AppointmentDetails'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
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
            <Calendar /> 
            <ApppointmentForm/>
        </div>

    )
}
export  default Home;