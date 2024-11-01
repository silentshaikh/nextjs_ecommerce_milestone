import { workSans } from '@/utils/Helper/helper';
import FashionContent from '../FashionContent/FashionContent';
import FashionList from '../FashionList/FashionList';
function Fashion() {
  return (
    <section className={`${workSans.className} p-10 bg-[#f3f3f3] flex flex-col item center`}>
      <FashionContent/>
      <FashionList/>
    </section>
  )
}

export default Fashion
