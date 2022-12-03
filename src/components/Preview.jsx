// import '../index.css'
import image from '../assets/avatar.jpg'

const Previewed = ({ personalInfo, experience, education, TogglePreview }) => {
  const { firstName, lastName, title, photo, address, phone, email, desc } = personalInfo
  console.log(experience)
  console.log(education)

  
  return (
    <div className="mx-auto max-w-[900px]">
      <div className="previewed min-h-[calc(70rem-8.25rem)] bg-white flex flex-col ">
        <header className='bg-green-300 p-4 grid gap-2 h-[8.25rem]'>
          <h1 className='text-6xl font-bold'>{firstName} {lastName}</h1>
          <h2 className='text-2xl'>{title}</h2>
        </header>
        <div className="content-grid grid flex-1">
        <div className='px-6 pt-4'>
          <h3>Description</h3>
          <hr />
          <p className='break-words italic'>{desc} </p>
          <h3>Experience</h3>
          <hr />
          {experience.map(obj => <Experience key={obj.id} data={obj} /> )}
          <h3>Education</h3>
          <hr></hr>
          {education.map(obj => <Education key={obj.id} data={obj} />)}
          
          
        </div>
        <div className='bg-gray-300 px-6 pt-5'>
          <img src={photo || image} alt="nothing" className='mx-auto' />
          <h3>Personal Details</h3>
        <hr />
        <h4 className='mt-4'>Address</h4>
        <p className='break-words'>{address}</p>
        <h4 className='mt-4'>Phone Number</h4>
        <p>{phone}</p>
        <h4 className='mt-4'>Email</h4>
        <p>{email}</p>
        </div>
        </div>
        <button className="bg-gray-800" onClick={TogglePreview}>
        Return
      </button>
      </div>
      
    </div>
  );
};


function Experience({ data }) {
  const { position, company, city, startDate, endDate } = data
  return (
    <div className='flex gap-6 mb-4'>
    <div>06/2022 <span> - </span> 08/2022</div>
    <div>
      <h4>{position}</h4>
      <p className='break-words'>{company}, {city}</p>
      </div>
  </div>
    )
}


function Education({ data }){
  const { university, city, degree, subject, startDate, endDate } = data
  return ( 
    <div className='flex gap-6 mb-4'>
            <p className='min-w-fit'>09/2015 <span>-</span> 03/2021</p>
            <div>
              <h4>{university}, {city}</h4>
              <div className='degree'>
                <p>Degree:</p>
                <p className='break-words'>{degree}</p>
              </div>
            <div className='degree'>
              <p>Subject</p>
              <p className='break-words'>{subject}</p>
            </div>
              </div>
          </div>
   );
}
 
 
 










export default Previewed;