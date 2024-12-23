'use client';
import useClothContext from '@/Hooks/ClothContext/ClothContext'


function FootListTwo() {
  const {footerContent} = useClothContext()
  return (
    <div>
    <h5 className='pb-3 text-sm font-bold text-[#b6b1b1]'>{footerContent.languageheading}</h5>
    <ul className='text-[#b6b1b1]'>
  {footerContent.languagelist.map((e) => {
    return <li key={e.itemid}>{e.listitem}</li>
  })}
</ul>
</div>
  )
}

export default FootListTwo
