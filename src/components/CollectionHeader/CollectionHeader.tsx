'use client';
import CollectionNav from '../CollectionNav/CollectionNav'
import OtherCollectionData from '../OtherCollectionData/OtherCollectionData'

function CollectionHeader() {
  return (
    <div className='px-14 border-b-2 py-2 flex justify-between max-[670px]:px-1 max-[500px]:gap-10 max-[460px]:gap-5'>
      <CollectionNav/>
      <OtherCollectionData/>
    </div>
  )
};
export default CollectionHeader;