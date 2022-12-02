import '../index.css'

const Previewed = ({ personalInfo, experience, TogglePreview }) => {
  return (
    <div className="grid mx-auto max-w-[900px] p-4">
      <button className="bg-gray-800" onClick={TogglePreview}>
        Return
      </button>
    </div>
  );
};

export default Previewed;
