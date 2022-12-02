import '../index.css'
import image from '../assets/avatar.jpg'


console.log(image)
const Previewed = ({ personalInfo, experience, education, TogglePreview }) => {
  const { firstName, lastName, title, photo, address, phone, email, desc } = personalInfo

  

  
  return (
    <div className="grid mx-auto max-w-[900px] p-4 bg-white">
      <div className="previewed ">
        <header className='bg-green-300 p-4'>
          <h1>Nwalozie Elijah</h1>
          <h1>Web Developer</h1>
        </header>
        <div className="content-grid grid">
        <div className='p-6'>
          <h3>Description</h3>
          <hr />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius iure dignissimos? Voluptatem.</p>
          <h3>Experience</h3>
          <hr />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus nam explicabo autem assumenda dolor accusantium, quos sint iste excepturi!</p>
          <h3>Education</h3>
          <h4></h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere voluptates optio natus explicabo quisquam in odit?</p>
        </div>
        <div className='bg-gray-300 px-6 pt-5'>
          <img src={image} alt="nothing" className='mx-auto' />
          <h3>Personal Details</h3>
        <hr />
        <h4>Address</h4>
        <p>No 3 Sofiyea Close</p>
        <h4>Phone Number</h4>
        <p>08172568956</p>
        <h4>Email</h4>
        <p>nwalozielijah@gmail.com</p>
        </div>
        </div>
      </div>
      <button className="bg-gray-800" onClick={TogglePreview}>
        Return
      </button>
    </div>
  );
};

export default Previewed;
