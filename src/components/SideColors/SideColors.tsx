
function SideColors() {
  let sideColor:string[] = ["B9C1E8","FFFFFF","A6D6CA","1E1E1E","A9A9A9","D9D9D9"]
  return (
    <div className='flex gap-1'>
      {sideColor.map((e) => {
        return <div style={{backgroundColor:`#${e}`}} className='size-[40px] max-[990px]:size-[35px]'></div>
      })}
    </div>
  )
};
export default SideColors;