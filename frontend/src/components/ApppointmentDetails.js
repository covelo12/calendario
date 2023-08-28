const ApppointmentDetails = ({appointments}) => {
    return(
        <div className='appointment-details'>
            <h4>{appointments.title}</h4>
            <p>{appointments.date}</p>
            <p>{appointments.time}</p>
            <p>{appointments.description}</p>
        </div>
    )
}

export default ApppointmentDetails