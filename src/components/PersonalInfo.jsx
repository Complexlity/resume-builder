const PersonalInfo = ({ data, setInfo, showImage }) => {
  const { firstName, lastName, title, address, phone, email, desc } = data;

  return (
    <>
      <input
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={(e) => setInfo({ ...data, firstName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Last name"
        value={lastName}
        onChange={(e) => setInfo({ ...data, lastName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setInfo({ ...data, title: e.target.value })}
      />
      <label className="rounded-md bg-white px-2 py-2 hover:bg-blue-400">
        Photo
        <input
          className="hidden"
          type="file"
          name="Picture or ID"
          onChange={showImage}
        />
      </label>
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setInfo({ ...data, address: e.target.value })}
      />
      <input
        type="text"
        placeholder="Phone number"
        value={phone}
        onChange={(e) => setInfo({ ...data, phone: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setInfo({ ...data, email: e.target.value })}
      />
      <textarea
        value={desc}
        onChange={(e) => setInfo({ ...data, desc: e.target.value })}
        className="resize-none px-4"
        placeholder="Description"
      ></textarea>
    </>
  );
};

export default PersonalInfo;
