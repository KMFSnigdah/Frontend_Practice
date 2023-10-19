import { Button } from "antd";
import { useEffect, useState } from "react";
import * as UserInfoService from "../services/userInfo"
import ModalComponent from "../components/Modal/ModalComponent";
import PropTypes from 'prop-types';
import InputField from '../components/common/InputField';
import { Profile } from '../models/Profile'
import { useForm } from "react-hook-form";
import * as ProfileService from "../services/userInfo";
import TimerAlert from '../components/common/TimerAlert';

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

  const handleModal = () => {
    setIsModalVisible(false);
    fetchInfoData();
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
              <FormComponent modalHandle={handleModal} initialData={data} />
            </ModalComponent>
            <ProfileInfo data={data} onEditProfileClick={showModal} initialData={data} />
          </>
        )}
      </div>
    </>
  );
};


const FormComponent = ({ modalHandle, initialData }) => {

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    defaultValues: {
      'name': initialData.name,
      'mobile': initialData.mobile,
      'personal.address': initialData.personal.address,
      'personal.district': initialData.personal.district,
      'personal.additional.road': initialData.personal.additional.road,
      'personal.additional.bus': initialData.personal.additional.bus
    }
  });

  // useEffect(() => {
  //   setValue('name', initialData.name);

  // }, [initialData, setValue]);

  const onSubmit = (data) => {

    const profileData = new Profile({
      ...data,
      name: data.name,
      mobile: data.mobile,
      address: data.address,
      district: data.district,
      road: data.road,
      bus: data.bus,
    });

    ProfileService.updateUserInfo(profileData)
      .then((res) => {
        if (res.request.status === 200) {
          modalHandle();
        }
      })
      .catch((err) => {
        const { message } = err.response.data;
        setErrorMessage(message);
        setIsError(true);

      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {isError && (
        <TimerAlert
          visible={isError}
          setVisible={setIsError}
          message={errorMessage}
          type="error"
          className="mb-3.5 p-2 m-5"
          showIcon
          closable
        />
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          name="name"
          label="Name"
          type="text"
          rules={{ required: true, maxLength: 30, minLength: 5 }}
          placeholder="Name"
          register={register}
          errors={errors}
        />

        <InputField
          name="mobile"
          label="Mobile"
          type="number"
          rules={{ required: true, minLength: 5 }}
          placeholder="Mobile"
          register={register}
          errors={errors}
        />

        <InputField
          name="address"
          label="Address"
          type="text"
          rules={{ required: true }}
          placeholder="Address"
          register={register}
          errors={errors}
        />

        <InputField
          name="district"
          label="District"
          type="text"
          rules={{ required: true }}
          placeholder="District"
          register={register}
          errors={errors}
        />

        <InputField
          name="road"
          label="Road"
          type="text"
          rules={{ required: true }}
          placeholder="Road"
          register={register}
          errors={errors}
        />

        <InputField
          name="bus"
          label="Bus"
          type="text"
          rules={{ required: true }}
          placeholder="Bus"
          register={register}
          errors={errors}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
FormComponent.propTypes = {
  modalHandle: PropTypes.func.isRequired,
  initialData: PropTypes.object,
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
