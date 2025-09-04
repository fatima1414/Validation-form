import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function EventRegistrationForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [submittedData, setSubmittedData] = useState([]);

  const onSubmit = (data) => {
    setSubmittedData((prev) => [...prev, data]); 
    reset();
  };

  return (
    <div className="container py-5">
      <div className="card shadow-lg p-4 w-100 mx-auto" style={{ maxWidth: "650px" }}>
        <h2 className="text-center fw-bold mb-4 text-primary">
          Event Registration Form
        </h2>


        <form onSubmit={handleSubmit(onSubmit)}>
  
          <div className="mb-3">
            <label className="form-label fw-semibold">Full Name</label>
            <input
              type="text"
              className="form-control"
              {...register("fullName", {
                required: "Full Name is required",
                minLength: { value: 2, message: "At least 2 characters required" },
              })}
            />
            <p className="text-danger">{errors.fullName?.message}</p>
          </div>

     
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email format" },
              })}
            />
            <p className="text-danger">{errors.email?.message}</p>
          </div>

   
          <div className="mb-3">
            <label className="form-label fw-semibold">Mobile Number</label>
            <input
              type="text"
              className="form-control"
              {...register("mobile", {
                required: "Mobile number is required",
                pattern: { value: /^[0-9]{10}$/, message: "Enter 10 digit number" },
              })}
            />
            <p className="text-danger">{errors.mobile?.message}</p>
          </div>


          <div className="mb-3">
            <label className="form-label fw-semibold">Gender</label><br />
            <div className="form-check form-check-inline">
              <input
                type="radio"
                value="Male"
                {...register("gender", { required: "Select your gender" })}
                className="form-check-input"
              />
              <label className="form-check-label">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                value="Female"
                {...register("gender", { required: "Select your gender" })}
                className="form-check-input"
              />
              <label className="form-check-label">Female</label>
            </div>
            <p className="text-danger">{errors.gender?.message}</p>
          </div>

     
          <div className="mb-3">
            <label className="form-label fw-semibold">Event Type</label><br />
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                value="Workshop"
                {...register("eventType", { required: "Select at least one event type" })}
                className="form-check-input"
              />
              <label className="form-check-label">Workshop</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                value="Seminar"
                {...register("eventType", { required: "Select at least one event type" })}
                className="form-check-input"
              />
              <label className="form-check-label">Seminar</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="checkbox"
                value="Hackathon"
                {...register("eventType", { required: "Select at least one event type" })}
                className="form-check-input"
              />
              <label className="form-check-label">Hackathon</label>
            </div>
            <p className="text-danger">{errors.eventType?.message}</p>
          </div>

   
          <div className="mb-3">
            <label className="form-label fw-semibold">Upload ID Proof</label>
            <input
              type="file"
              className="form-control"
              {...register("idProof", { required: "ID Proof is required" })}
            />
            <p className="text-danger">{errors.idProof?.message}</p>
          </div>


          <div className="mb-3">
            <label className="form-label fw-semibold">Address</label>
            <textarea
              className="form-control"
              rows="2"
              {...register("address", {
                required: "Address is required",
                minLength: { value: 10, message: "At least 10 characters required" },
              })}
            />
            <p className="text-danger">{errors.address?.message}</p>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary fw-bold px-4 py-2 rounded-pill">
     Register Now
            </button>
          </div>
        </form>
      </div>

      {submittedData && (
        <div className="card mt-5 shadow-lg p-4 w-100 mx-auto" style={{ maxWidth: "900px" }}>
          <h3 className="text-center fw-bold text-success mb-3"> Submitted Registrations</h3>
          <div className="table-responsive">
            <table className="table table-bordered table-striped text-center align-middle">
              <thead className="table-dark">
                <tr>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Gender</th>
                  <th>Event Type</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {submittedData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.fullName}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>{item.gender}</td>
                    <td>
                      {Array.isArray(item.eventType)
                        ? item.eventType.join(", ")
                        : item.eventType}
                    </td>
                    <td>{item.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventRegistrationForm;
