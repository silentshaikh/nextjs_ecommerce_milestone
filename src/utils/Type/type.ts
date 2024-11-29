import { ChangeEvent, FormEvent, MutableRefObject, ReactNode } from "react";
import { Interface } from "readline";

//Navlist
export interface NavList {
  name: string;
  link: string;
}

//All Product
export interface ClothList {
  name: string;
  price: number;
  img: string;
  size: string[];
  color: string[];
  imgList: string[];
  category: string;
  id: number;
  type: string;
  isAvailable: boolean;
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
  imgList: string[];
  name: string;
}

//Product Card Size Type
export interface ProductCardSizeType {
  productSize: string[];
}
//Product Page Context
export interface ProductContentType {
  price: string;
  name: string;
  size: string[];
  color: string[];
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
  btnFilter:(type:string,categ:string) => void;
}

//Card Type for Cart Page
export interface TypeForCartCard {
  name: string;
  category: string;
  price: string;
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
  price: string;
  img: string;
  color: string;
  size: string;
}

//checkout card detail
export interface CheckOutCardDetail {
  name: string;
  size: string;
  color: string;
  price: string;
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
  onHandleFilter: (type:string,categ:string) => void;
  onHandleWomenFilter: (type:string,categ:string) => void;
  onHandleKidFilter: (type:string,categ:string) => void;
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
}