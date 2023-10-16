import { Profile } from '../models/Profile'
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as ProfileService from "../services/userInfo";
import { useNavigate } from "react-router-dom";
import InputField from '../components/common/InputField';

const CreateProfile = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();


    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const profileData = new Profile({
                name: data.name,
                mobile: data.mobile,
                address: data.address,
                district: data.district,
                road: data.road,
                bus: data.bus,
            });
            console.log(profileData);
            const response = await ProfileService.createUserInfo(profileData);
            if (response.request.status === 200) {
                navigate("/health");
            }
        } catch (error) {
            if (error.response) {
                const { message } = error.response.data;
                setErrorMessage(message);
            } else {
                console.error('Error:', error.message);
            }
        }
    };


    return (
        <>
            <div>
                Profile Form
            </div>
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
    )
}

export default CreateProfile;