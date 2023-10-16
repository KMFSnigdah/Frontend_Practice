import { Button } from "antd";
import { useEffect, useState } from "react";
import * as UserInfoService from "../services/userInfo"
import ModalComponent from "../components/Modal/ModalComponent";
import PropTypes from 'prop-types';

const Health = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");

  const fetchInfoData = async () => {
    try {
      const response = await UserInfoService.getUserInfo();
      setData(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchInfoData();
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleFormSubmit = (formData) => {
    // latter implement
    console.log("Form data submitted:", formData);
    // latter implement
    setIsModalVisible(false);
  };

  return (
    <>
      <div>
        {loading ? (
          <p className="loading-text">Loading...</p>
        ) : (
          <>
            <ModalComponent
              title="Submit Form"
              visible={isModalVisible}
              handleCancel={handleCancel}
            >
              <FormComponent onSubmit={handleFormSubmit} />
            </ModalComponent>
            <ProfileInfo data={data} onEditProfileClick={showModal} />
          </>
        )}
      </div>
    </>
  );
};


const FormComponent = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
FormComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,

};

const ProfileInfo = ({ data, onEditProfileClick }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Button
        type="default"
        onClick={onEditProfileClick}
        style={{ backgroundColor: 'lightblue' }}
        onMouseOver={(e) => (e.target.style.text = 'blue')}
        onMouseOut={(e) => (e.target.style.backgroundColor = 'lightblue')}
      >
        Edit Profile
      </Button>
      <div>
        <div className="text-2xl font-semibold mb-2">{data.name}</div>
        <div className="text-gray-500 mb-2">
          ID: {data.id} | Mobile: {data.mobile}
        </div>
        {data.personal && (
          <div className="text-lg mb-4">
            Address: {data.personal.address}, {data.personal.district}
          </div>
        )}
        <div className="mb-4">
          <div className="text-lg font-semibold">Personal Information</div>
          <div className="text-gray-500">
            {data.personal && data.personal.additional && (
              <div>Bus: {data.personal.additional.bus}</div>
            )}
            Road: {data.personal ? data.personal.additional?.road : ""}
          </div>
        </div>
        <div className="text-gray-500">User ID: {data.userId}</div>
      </div>
    </div>
  );
};

ProfileInfo.propTypes = {
  data: PropTypes.object.isRequired,
  onEditProfileClick: PropTypes.func.isRequired,
};
export default Health;
