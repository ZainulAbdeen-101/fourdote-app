"use client";
import { Formik } from "formik";



const Contacts =  () => {
  


  return (
    <>
      <div>
        <section className="  shadow-lg">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 min-[320px]:text-[30px] md:text-[50px] tracking-tight font-font text-[#4B33C6] text-center">
              Contact Us{" "}
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center  sm:text-xl">
              Got a technical issue? Want to send feedback about a beta feature?
              Need details about our Business plan? Let us know.
            </p>

<Formik initialValues={{
  email:'',
  subject:'',
  message:'',

}} 
onSubmit={async ( values,{resetForm}) =>{
const res = await fetch("/api/hello",{
  method:"POST",
  cache:"no-store",
  body:JSON.stringify(values)
  
},

) 
const resdata=await res.json()
console.log(resdata)
resetForm();
}}

>
{props => <form  onSubmit={props.handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-lg font-medium"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.email}
               
                  placeholder="name@fourdote.com"
                  className="block p-3 w-full text-sm rounded-lg border border-[#4B33C6] shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2  font-medium text-lg "
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.subject}
                  className="block p-3 w-full text-sm rounded-lg border  border-[#4B33C6] shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-lg font-medium text-gray-900 "
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.message}
                  rows={3}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border  border-[#4B33C6] focus:ring-primary-500 focus:border-primary-500 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-white shadow-lg text-sm bg-[#4B33C6] font-medium text-center  rounded-lg sm:w-fit  focus:ring-4 focus:outline-none focus:ring-primary-300   "
              >
                Submit
              </button>
            </form>}
</Formik>
          
          </div>
        </section>
      </div>
    </>
  );
};
export default Contacts;
