import CheckOutInput from "../CheckOutInput/CheckOutInput";
import CheckOutLabel from "../CheckOutLabel/CheckOutLabel";
function CheckOutForm() {
  return (
    <form action='' className="flex flex-col">
      <CheckOutLabel labelValue="contact info"/>
      <CheckOutInput place="Enter Your Email" name="email" />
      <CheckOutInput place="Enter Your Phone" name="phone" />
      <CheckOutLabel labelValue="shipping address"/>
      <div className="flex max-[950px]:w-[36vw] max-[700px]:w-[93vw]">
       <CheckOutInput place="First Name" name="firstname"/> 
       <CheckOutInput place="Last Name" name="lastname"/> 
      </div>
      <select name="" id="" className="border mb-5 p-2 outline-none max-[950px]:w-[100%]">
        <option className="max-[950px]:w-[100%]" value="" selected disabled>-- Country --</option>
        <option className="max-[950px]:w-[100%]" value="Pakistan">Pakistan</option>
        <option className="max-[950px]:w-[100%]" value="India">India</option>
        <option className="max-[950px]:w-[100%]" value="USA">USA</option>
        <option className="max-[950px]:w-[100%]" value="UK">UK</option>
      </select>
      <CheckOutInput place="Enter Your State/Region" name="state"/>
      <CheckOutInput place="Enter Your Address" name="address"/>
      <div className="flex max-[950px]:w-[36vw] max-[700px]:w-[93vw]">
       <CheckOutInput place="City" name="city"/> 
       <CheckOutInput place="Postal Code" name="postalcode"/> 
      </div>
      <button className="bg-[#D9D9D9] py-2 w-52">Shipping </button>
    </form>
  )
};
export default CheckOutForm;