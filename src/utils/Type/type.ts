import { ChangeEvent, MutableRefObject, ReactNode } from "react";
import { Interface } from "readline";

//Navlist
export interface NavList {
  name: string;
  link: string;
}

//All Product
export interface ClothList {
  name: string;
  price: string;
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
  productList: ClothList[] | undefined;
  menBtn: string[];
  womenBtn: string[];
  kidBtn: string[];
  setHeroSlide: (e: boolean) => void;
  onInputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  sideBarToggle: () => void;
  imgChange: (index: number) => void;
  selectColr: (bgColor: string) => void;
  toggleAgainSide: (e: boolean | undefined) => void;
  fetchProductData: (e: string) => Promise<ClothList[] | undefined>;
  // fetchProductDetail:(e:string) => Promise<ClothList|undefined>
}

//reducer data
export interface SidebrToggl {
  sideBar: boolean;
  paddRemove: boolean | undefined;
}

export interface Action {
  type: string;
  payload?: boolean;
}
