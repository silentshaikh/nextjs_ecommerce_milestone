
import { workSans } from "@/utils/Helper/helper";
import WeekHeading from "../WeekHeading/WeekHeading";
import NewWeekList from "../NewWeekList/NewWeekList";
import WeekControl from "../WeekControl/WeekControl";
function NewWeek() {
  return (
    <section className={`${workSans.className} bg-[#f3f3f3] p-10 `}>
      <WeekHeading/>
      <NewWeekList/>
      <WeekControl/>
    </section>
  )
};
export default NewWeek;