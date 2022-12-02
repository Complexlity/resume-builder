const Experience = ({ id, deleteExperience }) => {

    const removeComponent = (e) => {
        e.preventDefault()
        deleteExperience(id)
    }

return (
    <>
<input type="text" placeholder="University name" />
        <input type="text" placeholder="Degree" />
        <input type="text" placeholder="Start Date" />
        <input type="text" placeholder="End Date" />
        <button onClick={removeComponent} className="delete rounded-md bg-gray-800 py-2">DELETE</button>
        </>
)
}
export default Experience