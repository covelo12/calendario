import { useEffect, useState } from 'react';
import AppointmentForm from '../components/AppointmentForm';
import AppointmentDetails from '../components/AppointmentDetails';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Home = () => {
    const [appointments, setAppointments] = useState(null);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/days');
            const json = await response.json();

            if (response.ok) {
                setAppointments(json);
            }
        };
        fetchData();
    }, []);

    const retrieveAppointments = async (Date) => {
        const response = await fetch(`/api/days/${Date}`);
        const json = await response.json();

        if (response.ok) {
            return json;
        } else {
            setAppointments(null);
        }
    };

    const handleDayChange = (date) => {
        setDate(date);
        const formattedDate = formatDate(date);
        //console.log(formattedDate);
        retrieveAppointments(formattedDate).then((a) => {
            setAppointments(a);
        });
    };

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <div className='home'>
            <Calendar onChange={handleDayChange} value={date} />
            <p> Appointments: </p>
            {appointments && (
                <ul>
                    {appointments.map((appointment) => (
                        <li key={appointment._id}>
                            <AppointmentDetails appointment={appointment} />
                        </li>
                    ))}
                </ul>
            )}
            <AppointmentForm />
        </div>
    );
};

export default Home;
