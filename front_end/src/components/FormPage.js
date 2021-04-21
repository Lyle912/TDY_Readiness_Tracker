import "../styles/FormPage.css";
import MultiStepForm from "./form_tabs/MultiStepForm";


export default function FormPage() {
  function handleSubmit(e){
    const first = e.target.first.value;
    const last = e.target.last.value;
    const mos = e.target.mos.value;
    const age = e.target.age.value;
    console.log(first,last,age,mos);
    e.preventDefault();
  }
  
  
  return (
    <div className="form-page">
      <MultiStepForm />
      {/* <h1>this is the form page</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <h1>this is the form</h1>
        <label for='f_name'>Member first name:</label>
        <input id='f_name' type="text" name="first" required /><br />
        <label for="l_name">Member last name:</label>
        <input id="l_name" type="text" name="last" /><br />
        Rank:<select id='rank'>
          <option value='E1'>E-1</option>
          <option value='E2'>E-2</option>
          <option value='E3'>E-3</option>
          <option value='E4'>E-4</option>
          <option value='E5'>E-5</option>
          <option value='E6'>E-6</option>
          <option value='E7'>E-7</option>
        </select><br />
        <label for='mos'>Member MOS:</label>
        <input id='mos' name='mos' type='text' /><br />
        <label for='age'>Age:</label>
        <input id='age' name='age' type='text' /><br />
        <button id="submit" type="submit">Submit</button>
        
      </form> */}
    </div>
          
  )}




/*

    first_name,
    last_name,
    rank,
    mos,
    age,
    cac_expiration,
    gtc_expiration,
    dl_expiration,


    checkbox for each vaccine

*/