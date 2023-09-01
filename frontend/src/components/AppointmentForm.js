import { useState } from "react";

const AppointmentForm = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [error, setError] = useState(null);

    const handleDateChange = (e) => {
        // Convert the date to a string before setting it
        setDate(e.target.value.toString());
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const appointment = { title, date, type, description };

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
            setDate('');
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
                value={date}
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
