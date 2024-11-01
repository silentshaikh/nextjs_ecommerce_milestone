'use client';
import FootListOne from '../FootListOne/FootListOne';
import FootListTwo from '../FootListTwo/FootListTwo';
function FooterList() {
  return (
    <div className='flex flex-col gap-5'>
      <FootListOne/>
      <FootListTwo/>
    </div>
  )
}

export default FooterList
