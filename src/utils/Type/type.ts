import { ChangeEvent, FormEvent, MutableRefObject, ReactNode } from "react";
// import { Interface } from "readline";
export interface List{
  name:string;
  link:string;
}

//Navlist
export interface NavList {
  itemid:number;
  listitem: string;
  itemlink: string;
  _key:string;
}

//Header Content

export interface HeaderSanity{
  logo: string; // URL of the logo
  titlelogo: string; // Title of the logo
  navtoggicon: string; // URL of the navigation toggle icon
  titletoggicon: string; // Title of the toggle icon
  navlist: NavList[]; // Array of navigation items
  cartname: string; // Name of the cart
  cartquantity: number; // Quantity of items in the cart
  cartimgone: string; // URL of the first cart image
  cartimgtwo: string;
}

//Hero Content
export interface HeroImgItem {
  imageid: string; // Unique key for the image item
  imagename: string; // URL of the hero image
  imagetitle: string; // Alt text for the hero image
}
export interface HeroSanity {
  subheading: string; // Subheading text (e.g., "Summer 2024")
  mainheading: string; // Main heading text (e.g., "NEW COLLECTION")
  heroimglist: HeroImgItem[]; // List of hero image items
  heronavlist: NavList[]; // List of hero navigation items
  inputimage: string; // URL for the input image (e.g., a search icon)
  inputplaceholder: string; // Placeholder text for the input (e.g., "Search")
  herobutton: string; // Text for the hero button (e.g., "Go T")
}

//New Week Content
export interface WeekImageItem {
  imageid: number; // Unique identifier for the image
  imagetitle: string; // Title of the image (e.g., "Embroidered Shirt")
  producttype: string; // Type of product (e.g., "Shirt", "T-Shirt")
  imagename: string; // URL of the image
}

export interface WeekSanity {
  headincount: number; // Headline count (e.g., 50)
  weekheading: string; // Heading for the week (e.g., "NEW THIS WEEK")
  weekimglist: WeekImageItem[]; // Array of images for the week
}

//XIV Collection Content
export interface CollectionNavItem {
  itemid: number; // Unique identifier for the navigation item
  listitem: string; // The name of the list item (e.g., "ALL", "MEN", "WOMEN", "KID")
}

export interface CollectionSanity {
  collectsort: string; // Sorting method (e.g., "Sorts")
  moretoless: string; // Sorting option (e.g., "More to less")
  collectionheading: string; // Heading for the collection (e.g., "XIV COLLECTION 24-25")
  lesstomore: string; // Sorting option (e.g., "Less to more")
  collectionnav: CollectionNavItem[]; // Array of navigation items
  collectfilter: string; // Filters label (e.g., "Filters")
}

//Fashion Collection Content
export interface FashionImageItem {
  imageid: number; // Unique identifier for the image
  imagetitle: string; // Title of the image (e.g., "Embroidered Shirt")
  imagename: string;
}

export interface FashionContentSanity {
  fashioncontent: string; // Text content for the fashion description
  fashionheading: string; // Heading for the fashion section (e.g., "OUR APPROACH TO FASHION DESIGN")
  fashionimglist: FashionImageItem[]; // Array of fashion image items
}

//Fotter Content
export interface FooterSanity {
  languageheading: string; // Heading for the language section (e.g., "LANGUAGE")
  infoheading: string; // Heading for the info section (e.g., "INFO")
  infolist: CollectionNavItem[]; // Array of information items
  languagelist: CollectionNavItem[]; // Array of language items
}

//Cart Content
export interface CartSanity {
  total: string; // Total price of items in the cart
  cartbutton: string; // Text for the cart button (e.g., "Proceed to Checkout")
  shipping: string; // Shipping details or cost (e.g., "Free Shipping")
  terms: string; // Terms and conditions text
  subtotal: string; // Subtotal price of items in the cart
  cartheading: string; // Heading for the cart section (e.g., "Your Cart")
}

//Checkout Content
export interface CheckoutSanity {
  citylabel: string; // Label for the city input field (e.g., "City")
  addresslabel: string; // Label for the address input field (e.g., "Enter Your Address")
  postalcodelabel: string; // Label for the postal code input field (e.g., "Postal Code")
  contactinfo: string; // Label or heading for the contact info section (e.g., "contact info")
  firstnamelabel: string; // Label for the first name input field (e.g., "First Name")
  shippingbutton: string; // Text for the shipping button (e.g., "Shipping")
  statelabel: string; // Label for the state/region input field (e.g., "Enter Your State/Region")
  shippingaddress: string; // Label or heading for the shipping address section (e.g., "shipping address")
  checkoutheading: string; // Heading for the checkout section (e.g., "CHECKOUT")
  emaillabel: string; // Label for the email input field (e.g., "Enter Your Email")
  lastnamelabel: string; // Label for the last name input field (e.g., "Last Name")
  numberlabel: string; // Label for the phone number input field (e.g., "Enter your Number")
  checkoutlist: CollectionNavItem[]; // Array of items in the checkout navigation list
}

export interface WebContentReducer {
  headerContent: HeaderSanity;
  heroContent:HeroSanity;
  weekContent:WeekSanity;
  collectionContent:CollectionSanity;
  fashionContent:FashionContentSanity;
  footerContent:FooterSanity;
  cartContent:CartSanity;
  checkoutContent:CheckoutSanity;
};

export interface WebContentAction{
  type:string;
  payload:any;
};

//All Product
// export interface ClothList {
//   name: string;
//   price: number;
//   img: string;
//   size: string[];
//   color: string[];
//   imgList: string[];
//   category: string;
//   id: number;
//   type: string;
//   isAvailable: boolean;
// }
interface ProductImage {
  imageid: number; // Unique identifier for the image
  productimage: string; // URL of the product image
}

export interface ClothList {
  productname: string; // Name of the product (e.g., "Basic Slim Fit T-Shirt")
  productid: string; // Unique identifier or slug for the product (e.g., "basic-slim-fit-t-shirt")
  productsizes: string[]; // Array of available sizes (e.g., ["XS", "S", "L", "XL", "XXL"])
  producttype: string; // Type of the product (e.g., "t-shirt")
  productavaiableornot: boolean | null; // Availability status of the product, null if unknown
  productcolors: {
    _key:string;
    hex:string
  }[]; // Array of available colors for the product
  productprice: number; // Price of the product
  productcategory: string; // Category of the product (e.g., "men")
  productimage: string; // Main product image URL
  productimagelist: ProductImage[]; // Array of additional product images
}


//Hero List
export interface HeroList {
  id: number;
  // price:string;
  img: string;
  // category:string;
}

//Fashion List
export interface FasionDesign {
  id: number;
  img: string;
  alignstyle: string;
}

//Product input type
export interface ProductInputType {
  name: string;
}

//For Product Input Handler
export interface ProductInpObj {
  meninput: string;
  womeninput: string;
  kidinput: string;
}

//Product Page Img
export interface ProductImages {
  img: string;
  imgList: ProductImage[];
  name: string;
}

//Product Card Size Type
export interface ProductCardSizeType {
  productSize: string[];
}
//Product Page Context
export interface ProductContentType {
  price: number;
  name: string;
  size: string[];
  color: {
    _key:string;
    hex:string
  }[];
}

//Product Search Type
export interface ProductSearchType {
  name: string;
  removDuplicateBtn: string[];
  categ:string
}

export interface ProductContType {
  name: string;
  removDuplicateBtn: string[];
  categ:string;
  btnFilter:(type:string) => void;
}

//Card Type for Cart Page
export interface TypeForCartCard {
  name: string;
  category: string;
  price: number;
  img: string;
}

//Cost of Product
export interface TypeFOrCostProduct {
  name: string;
  price: string;
}

//checkout Input
export interface CheckOutInp {
  place: string;
  name: string;
}
//checkout Label
export interface CheckLabel {
  labelValue: string;
}
//checkout card tyoe
export interface CheckOutCard {
  name: string;
  price: number;
  img: string;
  color: string;
  size: string;
}

//checkout card detail
export interface CheckOutCardDetail {
  name: string;
  size: string;
  color: string;
  price: number;
}
//side Bar Available
export interface TypeForAvailable {
  name: string;
  label: string;
  id:string
}

//Product Detail Page
export interface MenDetailProps {
  params: {
    id: string;
  };
}
//context Child
export interface ContextChild {
  children: ReactNode;
}
export interface priceFilter{
  price:string;
  priceWomen:string;
  priceKid:string;
}
//context type
export interface ContextType {
  list: boolean;
  navListToggle: () => void;
  // showSideBar:(e:boolean) => void;
  // setPaddRemove:(e:boolean) => void;
  // state:SidebrToggl
  sideBar: boolean;
  paddRemove: boolean | undefined;
  images: number | null;
  colr: string;
  inputList: ProductInpObj;
  heroSlide: boolean;
  footerRef: MutableRefObject<HTMLElement | null>;
  sideBarRef: MutableRefObject<HTMLElement | null>;
  productList: ClothList[] ;
  menBtn: string[];
  womenBtn: string[];
  kidBtn: string[];
  // menProd:ClothList[];
  // womenProd:ClothList[] ;
  // kidProd:ClothList[] ;
  // isType:boolean;
  product:ClothList[];
  womenProduct:ClothList[];
  kidProduct:ClothList[];
  productSize:string[];
  productColor:string[];
  collection:ClothList[];
  backUpCollection:ClothList[];
  collectNav:boolean;
  collectMen:ClothList[];
  // price:string;
  // womenPrice:string;
  priceInp:priceFilter;
  headerContent: HeaderSanity;
  heroContent:HeroSanity;
  weekContent:WeekSanity;
  collectionContent:CollectionSanity;
  fashionContent:FashionContentSanity;
  footerContent:FooterSanity;
  cartContent:CartSanity;
  checkoutContent:CheckoutSanity;
  onPriceFilter:(e:ChangeEvent<HTMLInputElement>) => void;
  onPriceFilterWomen:(e:ChangeEvent<HTMLInputElement>) => void;
    onPriceFilterKid:(e:ChangeEvent<HTMLInputElement>) => void;
  onCollectionFilter:(categ:string) => void;
  setHeroSlide: (e: boolean) => void;
  onInputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  sideBarToggle: () => void;
  imgChange: (index: number) => void;
  selectColr: (bgColor: string) => void;
  toggleAgainSide: (e: boolean | undefined) => void;
  fetchProductData: (e: string) => Promise<ClothList[] | undefined>;
  onHandleFilter: (type:string) => void;
  onHandleWomenFilter: (type:string) => void;
  onHandleKidFilter: (type:string) => void;
  onProductSearch: (e:FormEvent<HTMLFormElement>) => void;
  onSizeFilter: (size:string) => void;
  onSizeWomenFilter: (size:string) => void;
  onSizeKidFilter: (size:string) => void;
  onColrFilter: (color:string) => void;
  onColrWomenFilter: (color:string) => void;
  onColrKidFilter: (color:string) => void;
  onProductAvailable:() => void;
  onProductWomenAvailable:() => void;
  onProductKidAvailable:() => void;
  onOutOfStock:() => void;
  onOutOfStockWomen:() => void;
  onOutOfStockKid:() => void;
  // fetchProductDetail:(e:string) => Promise<ClothList|undefined>
}

//reducer data
export interface SidebrToggl {
  sideBar: boolean;
  paddRemove: boolean | undefined;
};

export interface Action {
  type: string;
  payload?: boolean;
};

//product reducer
export interface ProductReducer{
  product:ClothList[];
  backupProduct:ClothList[];
  womenProduct:ClothList[];
    womenBackupProduct:ClothList[];
    kidProduct:ClothList[],
    kidBackupProduct:ClothList[],
    availableFilter:null|boolean;
    availableWomenFilter:null | boolean,
    availableKidFilter:null | boolean,
};
export interface ProdAction{
  type:string;
  payload:any;
};