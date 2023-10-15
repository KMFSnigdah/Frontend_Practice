import React from "react";
import { useState } from "react";
import ModalComponent from "../components/Modal/ModalComponent";

const Health = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Define the handleFormSubmit function
  const handleFormSubmit = (formData) => {
    // Add your form submission logic here
    console.log("Form data submitted:", formData);
    // You can close the modal here if needed
    setIsModalVisible(false);
  };

  return (
    <>
      <div>
        <button onClick={showModal}>Open Modal</button>
        <ModalComponent
          title="Submit Form"
          visible={isModalVisible}
          handleCancel={handleCancel}
        >
          <FormComponent onSubmit={handleFormSubmit} />
        </ModalComponent>
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

export default Health;
