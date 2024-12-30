'use client';
import useClothContext from "@/Hooks/ClothContext/ClothContext";
import CheckOutInput from "../CheckOutInput/CheckOutInput";
import CheckOutLabel from "../CheckOutLabel/CheckOutLabel";
function CheckOutForm() {
  const {checkOutInp,onHandleCheckOutInp,onHandleCheckOutForm} = useClothContext();
  return (
    <form action='' className="flex flex-col" onSubmit={(e) => onHandleCheckOutForm(e)}>
      <CheckOutLabel labelValue="contact info"/>
      <CheckOutInput place="Enter Your Email" name="email" value={checkOutInp.email} />
      <CheckOutInput place="Enter Your Phone" name="phone" value={checkOutInp.phone} />
      <CheckOutLabel labelValue="shipping address"/>
      <div className="flex  max-[950px]:w-[36vw] max-[700px]:w-[93vw] max-[350px]:flex-col max-[350px]:w-[100%] ">
       <CheckOutInput place="First Name" name="firstname" value={checkOutInp.firstname}/> 
       <CheckOutInput place="Last Name" name="lastname" value={checkOutInp.lastname}/> 
      </div>
      <select name="country" id="" className="border mb-5 p-2 outline-none max-[950px]:w-[100%]" value={checkOutInp.country} onChange={(e) => onHandleCheckOutInp(e)}>
        <option className="max-[950px]:w-[100%]" value="" selected disabled>-- Country --</option>
        <option className="max-[950px]:w-[100%]" value="Pakistan">Pakistan</option>
        <option className="max-[950px]:w-[100%]" value="India">India</option>
        <option className="max-[950px]:w-[100%]" value="USA">USA</option>
        <option className="max-[950px]:w-[100%]" value="UK">UK</option>
      </select>
      <CheckOutInput place="Enter Your State/Region" name="state" value={checkOutInp.state}/>
      <CheckOutInput place="Enter Your Address" name="address" value={checkOutInp.address}/>
      <div className="flex max-[950px]:w-[36vw] max-[700px]:w-[93vw] max-[350px]:flex-col max-[350px]:w-[100%]">
       <CheckOutInput place="City" name="city" value={checkOutInp.city}/> 
       <CheckOutInput place="Postal Code" name="postalcode" value={checkOutInp.postalcode}/> 
      </div>
      <button className="bg-[#D9D9D9] py-2 w-52">Shipping</button>
    </form>
  )
};
export default CheckOutForm;