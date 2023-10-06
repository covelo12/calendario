const ApppointmentDetails = ({appointment}) => {
    if (!appointment) {
        return null; // Return null or some default component when appointment is undefined
    }
    return(
        <div className='appointment-details'>
            <h4>{appointment.title}</h4>
            <p>{appointment.date}</p>
            <p>{appointment.time}</p>
            <p>{appointment.description}</p>
        </div>
    )
}

export default ApppointmentDetails