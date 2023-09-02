import { useState } from "react";

const AppointmentForm = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState(new Date());
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [error, setError] = useState(null);

    const handleDateChange = (e) => {
        // Update the date state as a Date object
        setDate(new Date(e.target.value));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Convert the date to a string before sending it to the server
        const formatDate = date.toISOString().split('T')[0];
        const appointment = { title, date: formatDate, type, description };

        const response = await fetch('/api/days', {
            method: 'POST',
            body: JSON.stringify(appointment),
            headers: { 'Content-Type': 'application/json' }
        });

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        }
        if (response.ok) {
            setDate(new Date()); // Reset date to the current date
            setTitle('');
            setDescription('');
            setType('');
            setError(null);
            console.log('Appointment Added');
        }
    }

    return (
        <form className='create' onSubmit={handleSubmit}>
            <h3>Add a new Appointment</h3>

            <label>Appointment Title:</label>
            <input
                type='text'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label>Appointment Date:</label>
            <input
                type='date'
                onChange={handleDateChange}
                value={date.toISOString().split('T')[0]} // Convert Date to string for input value
            />

            <label>Appointment Type:</label>
            <select
                onChange={(e) => setType(e.target.value)}
                value={type}
            >
                <option value=''>Select Type</option>
                <option value='Appointment'>Appointment</option>
                <option value='Reminder'>Reminder</option>
                <option value='Timed Reminder'>Timed Reminder</option>
                <option value='Routine'>Routine</option>
            </select>

            <label>Appointment Description:</label>
            <input
                type='text'
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />

            <button>Add Appointment</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default AppointmentForm;
