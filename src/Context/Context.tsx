'use client';
import { createContext,useState,useReducer, ChangeEvent, useRef } from "react";
import { Action, ClothList, ContextChild, ContextType, ProductInpObj, SidebrToggl } from "@/utils/Type/type";

export const ClothAppContext = createContext<ContextType | null>(null);
// reducer Action
const ACTION = {
  SIDE_BAR: "SIDE_BAR",
  PADD_REMOVE: "PADD_REMOVE",
  
};

//initial data for state 
const initialData:SidebrToggl ={
  sideBar:false,
  paddRemove:false,
};

// reducer function
const clothReducer = (state:SidebrToggl,action:Action):SidebrToggl => {
  switch (action.type) {
    case ACTION.SIDE_BAR:
      return {...state,sideBar:!state.sideBar};
    case ACTION.PADD_REMOVE:
      return {...state,paddRemove:action.payload};    
    default:
      return state;
  }
}

function Context({ children }: ContextChild) {
  // For Nav List
  const [list, showNavList] = useState<boolean>(false);
  //For Side Bar
  const [state,dispatch] = useReducer(clothReducer,initialData);
  //For Add to Cart
  const [images,setImages] = useState<null|number>(null)
  //For select Color for product
  const [colr,setColr] = useState('');
  //For Handle Product Input
  const [inputList,setInputList] = useState<ProductInpObj>({kidinput:'',meninput:'',womeninput:''});
  //hero slider
  const [heroSlide,setHeroSlide] = useState(false);
  // product api state
  const [productList,setProductList] = useState<ClothList[] | undefined>([]);
  //for set the position of sidebar
  const footerRef = useRef<HTMLElement|null>(null);
    const sideBarRef = useRef<HTMLElement|null>(null);

  //Input Handler
  const onInputHandler = (e:ChangeEvent<HTMLInputElement>) => {
    //extract nameand value from input
    let {name,value} = e.target;
    setInputList((prev:ProductInpObj) => ({...prev, [name]:value}));
  };

  //Toggle Navigation
  const navListToggle = () => {
    showNavList(prev => !prev); 
  };

  //Side Bar Toggle
  const sideBarToggle = () => {
    dispatch({type:ACTION.SIDE_BAR});
  };
  
  const toggleAgainSide = (value:boolean|undefined) => {
    dispatch({type:ACTION.PADD_REMOVE,payload:value});
  };

  //For Select a Product 
  const imgChange = (imgIndex:number) => {
    setImages(imgIndex)
  }

  //For select a Product Color
  const selectColr = (bgColor:string) => {
    setColr(bgColor);
  }

  //fetch product list 
  const fetchProductData = async (productApi:string) => {
    try {
      const fetchProduct = await fetch(productApi, { cache: 'force-cache' });
      const productIntoJson:ClothList[] = await fetchProduct.json();
      return productIntoJson;
    } catch (error) {
      console.log(error);
    }
  }

  // fetch all product
  const fetchProduct = async (productDetail:string) => {
    try {
      const fetchDetail = await fetch(productDetail, { cache: 'force-cache' });
      const detailIntoJson = await fetchDetail.json();
      return detailIntoJson;
    }catch (error){
      console.log(error);
    }
  }
  (async () => {
    const clothListForProductDetail:ClothList[] | undefined = await fetchProduct('http://localhost:3000/api/clothapi');
    setProductList(clothListForProductDetail);
  })();

    // product men
    const productMen = productList?.filter((e) => {
      return e.category === 'men';
    });
    const menBtn = [... new Set(productMen?.map((e) => {
      return  e.type;
     }))];

    // product women
    const productWomen = productList?.filter((e) => {
      return e.category === 'women';
    });
    const womenBtn = [... new Set(productWomen?.map((e) => {
      return  e.type;
     }))]
    // product kid
    const productKid = productList?.filter((e) => {
      return e.category === 'kid';
    })
    const kidBtn = [... new Set(productKid?.map((e) => {
      return  e.type;
     }))]

  // Context value
  const clothOperation:ContextType = { 
    list, 
    navListToggle, 
    sideBar:state.sideBar,
    paddRemove:state.paddRemove,
    images,
    colr,
    inputList,
    heroSlide,
    footerRef,
    sideBarRef,
    productList,
    menBtn,
    womenBtn,
    kidBtn,
    setHeroSlide,
    onInputHandler,
   sideBarToggle,
   imgChange,
   selectColr,
   toggleAgainSide,
   fetchProductData,
  //  fetchProductDetail,
  };

  return (
    <ClothAppContext.Provider value={clothOperation}>
      {children}
    </ClothAppContext.Provider>
  );
}

export default Context;
