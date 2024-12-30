
function ProductColor({color}:{color:string}) {
  return (
    <div className={`size-[40px]  max-[620px]:size-[35px] max-[320px]:size-[30px]`} style={{backgroundColor:color}}></div>
  );
};
export default ProductColor;