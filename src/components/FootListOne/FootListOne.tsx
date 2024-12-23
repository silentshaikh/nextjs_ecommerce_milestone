'use client';
import useClothContext from '@/Hooks/ClothContext/ClothContext'


function FootListOne() {
  const {footerContent} = useClothContext()
  return (
    <div>
        <h5 className='pb-3 text-[#b6b1b1] text-sm font-bold'>{footerContent.infoheading}</h5>
        <ul className='uppercase text-[#b6b1b1]'>
      {footerContent.infolist.map((e) => {
        return <li key={e.itemid}>{e.listitem}</li>
      })}
    </ul>
    </div>
  )
}

export default FootListOne
