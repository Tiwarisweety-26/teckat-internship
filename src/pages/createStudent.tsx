import React from 'react';
import { useForm } from 'react-hook-form';
import{IStudent} from "../interface/student";

const createStudent : React.FC  = ():any => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm <IStudent >({mode : "all"});
  return 
  (
    <>
    <div className="create_student_section">
        <form>
          <div>
            <label htmlFor="name"></label>
            <input title="name" type="text" id="name" />
          </div>
          <div>
            <label htmlFor="age"></label>
            <input title="age" type="number" id="age" />
          </div>
          <div>
            <label htmlFor="phone"></label>
            <input title="phone" type="number" id="phone" />
          </div>
          <div>
            <label htmlFor="email"></label>
            <input title="email" type="text" id="email" />
          </div>
        </form>
      </div>
</>
  );
};
export default createStudent;