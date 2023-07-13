import { FormRow, FormRowSelect } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useSelector, useDispatch, } from 'react-redux';
import { toast } from 'react-toastify';
import { handleChange, clearValues } from '../../features/job/jobSlice';

const AddJob = () => {
  const { 
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job)  
  
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      toast.error('Please Fill Out All Fields');
      return;
    }
  }

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({name, value}))
  }
  
  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? 'Edit Job' : 'Add Job'}</h3>
        <div className="form-center">
          {/* Position Row */}
          <FormRow
            type='text'
            name='position'
            value={position}
            handleChange={handleJobInput}>
          </FormRow>
          {/* Company Row */}
          <FormRow
            type='text'
            name='company'
            value={company}
            handleChange={handleJobInput}>
          </FormRow>
          {/* Job Location Row */}
          <FormRow
            labelText='job location'
            type='text'
            name='jobLocation'
            value={jobLocation}
            handleChange={handleJobInput}>
          </FormRow>

          {/* status status */}
          <FormRowSelect 
            name='status'
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />
            {/* job type status */}
          <FormRowSelect 
            name='jobType'
            labelText='job type'
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />

          <div className="btn-container">
            <button
              type='button'
              className='btn btn-block clear-btn'
              onClick={()=>dispatch(clearValues())}
            >clear</button>
              <button 
                className="btn btn-block submit-btn"
                type='submit'
                onClick={handleSubmit}
                disabled={isLoading}
              >
                submit
              </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default AddJob