import { type SchemaTypeDefinition } from 'sanity'
import { headerContent } from './header'
import { heroContent } from './hero'
import { newWeekContent } from './newweek'
import { xivCollection } from './xivcollection'
import { fashionDesign } from './fashion'
import { footerContent } from './footer'
import { cartContent } from './cartcontent'
import { checkOutContent } from './checkoutcontent'
import { productCardContent } from './productcard'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [headerContent,heroContent,newWeekContent,xivCollection,fashionDesign,footerContent,cartContent,checkOutContent,productCardContent],
};