import '../index.css'
import image from '../assets/avatar.jpg'


console.log(image)
const Previewed = ({ personalInfo, experience, education, TogglePreview }) => {
  const { firstName, lastName, title, photo, address, phone, email, desc } = personalInfo

  

  
  return (
    <div className="mx-auto max-w-[900px]">
      <div className="previewed min-h-[70rem] bg-white flex flex-col ">
        <header className='bg-green-300 p-4 grid gap-2'>
          <h1 className='text-6xl font-bold'>Nwalozie Elijah</h1>
          <h2 className='text-2xl'>Web Developer</h2>
        </header>
        <div className="content-grid grid flex-1">
        <div className='px-6 pt-4'>
          <h3>Description</h3>
          <hr />
          <p className='break-words'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius iure dignissimos? Voluptatem.</p>
          <h3>Experience</h3>
          <hr />
          <div className='flex gap-6'>
            <p>06/2021 <span>-</span> 06/2022</p>
            <div>
              <h4>Web Developer</h4>
              <p className='break-words'>Pulsar Technologies, Bucharesti</p>
              </div>
          </div>
          <h3>Education</h3>
          <hr></hr>
          <div className='flex gap-6'>
            <p className='min-w-fit'>06/2021 <span>-</span> 06/2022</p>
            <div>
              <h4>Havard university, usa</h4>
              <div className='degree'>
                <p>Degree:</p>
                <p className='break-words'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident deleniti, perferendis velit voluptas in vero quidem suscipit aut officia ipsam!</p>
              </div>
            <div className='degree'>
              <p>Subject</p>
              <p className='break-words'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, labore quasi. Dolore vero atque nulla!</p>
            </div>
              </div>
          </div>
          
        </div>
        <div className='bg-gray-300 px-6 pt-5'>
          <img src={image} alt="nothing" className='mx-auto' />
          <h3>Personal Details</h3>
        <hr />
        <h4 className='mt-4'>Address</h4>
        <p className='break-words'>No 3 Sofiyea Close rumuoelu</p>
        <h4 className='mt-4'>Phone Number</h4>
        <p>08172568956</p>
        <h4 className='mt-4'>Email</h4>
        <p>nwalozielijah@gmail.com</p>
        </div>
        </div>
        <button className="bg-gray-800" onClick={TogglePreview}>
        Return
      </button>
      </div>
      
    </div>
  );
};

export default Previewed;
