'use client';
import { createContext,useState,useReducer, ChangeEvent, useRef, useEffect, FormEvent } from "react";
import { Action, ClothList, ContextChild, ContextType, ProdAction, ProductInpObj, ProductReducer, SidebrToggl } from "@/utils/Type/type";
import { menProduct } from "@/utils/Helper/helper";

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

// side bar reducer function
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

//action for product filter
export const ACTIONFILTER = {
  INPUTFILTER:'INPUTFILTER',
  BTNFILTER:'BTNFILTER',
  BTNWOMENFILTER:'BTNWOMENFILTER',
  BTNKIDFILTER:'BTNKIDFILTER',
  SIZEMENFILTER:'SIZEMENFILTER',
  SIZEWOMENFILTER:'SIZEWOMENFILTER',
  SIZEKIDFILTER:'SIZEKIDFILTER',
  AVAILABLE:'AVAILABLE',
  WOMENAVAILABLE:'WOMENAVAILABLE',
  KIDAVAILABLE:'KIDAVAILABLE',
  OUTOFSTOCK:'OUTOFSTOCK',
  OUTOFSTOCKWOMEN:'OUTOFSTOCKWOMEN',
  OUTOFSTOCKKID:'OUTOFSTOCKKID',
  PRICEFILTER:'PRICEFILTER',
  PRICEWOMENFILTER:'PRICEWOMENFILTER',
  PRICEKIDFILTER:'PRICEKIDFILTER',
  COLORFILTER:'COLORFILTER',
  COLORWOMENFILTER:'COLORWOMENFILTER',
  COLORKIDFILTER:'COLORKIDFILTER',
  INPUTWOMENFILTER:'INPUTWOMENFILTER',
  INPUTKIDFILTER:'INPUTKIDFILTER',
  LOADMENPROD:'LOADMENPROD',
  LOADWOMENPROD:'LOADWOMENPROD',
  LOADKIDPROD:'LOADKIDPROD',
};

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
  const [productList,setProductList] = useState<ClothList[] >([]);
  //filter type state
  // const [isType,setType] = useState(false);
  //price filter input
  // const [price,setPrice] = useState('80');
  // const [womenPrice,setWomenPrice]= useState('80');
  const [priceInp,setPriceInp] = useState({price:'80',priceWomen:'80',priceKid:'80'});
  //collection filter Product
  const [collection,setCollection] = useState<ClothList[]>([]);
  const [backUpCollection,setBackUpCollection] = useState<ClothList[]>([]);
  const [collectNav,setCollectNav] = useState(false);

 // fetch all product
 const fetchProduct = async (productDetail:string) => {
  try {
    const fetchDetail = await fetch(productDetail, { cache: 'force-cache' });
    const detailIntoJson:ClothList[] = await fetchDetail.json();
    return detailIntoJson;
  }catch (error){
    throw new Error("API Not Found")
  }
}
useEffect( () => {
  callFetchCloth()
},[]);
const callFetchCloth = async () => {
  const clothListForProductDetail:ClothList[] = await fetchProduct('http://localhost:3000/api/clothapi');
  setProductList(clothListForProductDetail);
  const menList:ClothList[]   = clothListForProductDetail.filter((e) => e.category === 'men');
  dispatchs({type:ACTIONFILTER.LOADMENPROD,payload:menList});
  const womenList = clothListForProductDetail.filter((e) => e.category === 'women');
  dispatchs({type:ACTIONFILTER.LOADWOMENPROD,payload:womenList});
  const kidList = clothListForProductDetail.filter((e) => e.category === 'kid');
  dispatchs({type:ACTIONFILTER.LOADKIDPROD,payload:kidList});
}
  let prod = productList.map((e) => {
   return  e.price
  });
  let maxPrice = Math.max(...new Set(prod));
  console.log(maxPrice)
  //Filter Product Reducer
  const initialFiltProd:ProductReducer = {
    product:[],
    backupProduct:[],
    womenProduct:[],
    womenBackupProduct:[],
    kidProduct:[],
    kidBackupProduct:[],
    availableFilter:null,
    availableWomenFilter:null,
    availableKidFilter:null,
  };
  
  const filterByAvailability = (backup:ClothList[], isAvailable:boolean) => {
    return isAvailable === null ? backup : backup.filter((item) => item.isAvailable === isAvailable);
  };
  const filterByOutStock = (backup:ClothList[], outOfStock:boolean) => {
    return outOfStock === null ? backup : backup.filter((item) => item.isAvailable === outOfStock);
  };
  const filterByPrice = (backup:ClothList[], inpValue:string) => {
    const priceFilterProd = backup.filter((e) => {
      return e.price <= +inpValue;
    });
    return priceFilterProd;
  };
  const filterByColor = (backupProduct:ClothList[],color:string) => {
    const filtColor =  backupProduct.filter((e) => {
      return e.color.includes(color)
    });
    return filtColor;
  }

  function filtProductReducer(state:ProductReducer,action:ProdAction):ProductReducer  {
    switch (action.type) {
      case ACTIONFILTER.INPUTFILTER:
        let {payload} = action;
        // If the input value is empty or null, return the full list of products
      if (!payload.trim()) {
        return { ...state, product: state.backupProduct }; // Use a backup of the full product list
      }
        const filtMenInput = state.backupProduct.filter((e) =>{
         return e.name.toLowerCase().split(/\s+/).join("").includes(payload.toLowerCase().split(/\s+/).join(""))
        } );
        return {...state,product:filtMenInput};

      case ACTIONFILTER.LOADMENPROD:
        return {...state, product:action.payload,backupProduct:action.payload};
      
      case ACTIONFILTER.INPUTWOMENFILTER:
          // If the input value is empty or null, return the full list of products
        if (!action.payload.trim()) {
          return { ...state, womenProduct: state.womenBackupProduct}; // Use a backup of the full product list
        }
          const filtWomenInput = state.womenBackupProduct.filter((e) =>{
           return e.name.toLowerCase().split(/\s+/).join("").includes(action.payload.toLowerCase().split(/\s+/).join(""))
          } );
          return {...state,womenProduct:filtWomenInput};
        
      case ACTIONFILTER.LOADWOMENPROD:
        return {...state,womenProduct:action.payload,womenBackupProduct:action.payload};

        case ACTIONFILTER.INPUTKIDFILTER:
          // If the input value is empty or null, return the full list of products
        if (!action.payload.trim()) {
          return { ...state, kidProduct: state.kidBackupProduct}; // Use a backup of the full product list
        }
          const filtKidInput = state.kidBackupProduct.filter((e) =>{
           return e.name.toLowerCase().split(/\s+/).join("").includes(action.payload.toLowerCase().split(/\s+/).join(""))
          } );
          return {...state,kidProduct:filtKidInput};  
        
        case ACTIONFILTER.LOADKIDPROD:
          return {...state,kidProduct:action.payload,kidBackupProduct:action.payload}   
       
      case ACTIONFILTER.BTNFILTER:
          const filtMenBtn = state.backupProduct.filter((e) => {
            return e.type.toLowerCase().split(/\s+/).join("").includes(action.payload.toLowerCase().split(/\s+/).join(""))
          });
          return {...state, product:filtMenBtn};
         
      case ACTIONFILTER.BTNWOMENFILTER:
            const filtWomenBtn = state.womenBackupProduct.filter((e) => {
              return e.type.toLowerCase().split(/\s+/).join("").includes(action.payload.toLowerCase().split(/\s+/).join(""))
            });
            return {...state, womenProduct:filtWomenBtn};    

      case ACTIONFILTER.BTNKIDFILTER:
              const filtKidBtn = state.kidBackupProduct.filter((e) => {
                return e.type.toLowerCase().split(/\s+/).join("").includes(action.payload.toLowerCase().split(/\s+/).join(""))
              });
              return {...state, kidProduct:filtKidBtn};  
              
      case ACTIONFILTER.SIZEMENFILTER:
        const filtSizeMen =  state.backupProduct.filter((e) => {
          return e.size.includes(action.payload)
        });       
        return {...state, product:filtSizeMen};

      case ACTIONFILTER.SIZEWOMENFILTER:
        const filtSizeWomen =  state.womenBackupProduct.filter((e) => {
          return e.size.includes(action.payload)
        });       
        return {...state, womenProduct:filtSizeWomen};

        case ACTIONFILTER.SIZEKIDFILTER:
          const filtSizeKid =  state.kidBackupProduct.filter((e) => {
            return e.size.includes(action.payload)
          });       
          return {...state, kidProduct:filtSizeKid};  

        case ACTIONFILTER.COLORFILTER:
          // const filtColor =  state.backupProduct.filter((e) => {
          //   return e.color.includes(action.payload)
          // });
          // const filtWomenColor =  state.womenBackupProduct.filter((e) => {
          //   return e.color.includes(action.payload)
          // });
          // const filtKIdColor =  state.kidBackupProduct.filter((e) => {
          //   return e.color.includes(action.payload)
          // });
          return {...state, product:filterByColor(state.backupProduct,action.payload),
            };

          case ACTIONFILTER.COLORWOMENFILTER:
            return {...state,womenProduct:filterByColor(state.womenBackupProduct,action.payload),};
            
          case ACTIONFILTER.COLORKIDFILTER:
          return {...state,kidProduct:filterByColor(state.kidBackupProduct,action.payload),};
          case ACTIONFILTER.AVAILABLE:
      const newAvailableState = state.availableFilter === action.payload ? null : action.payload;
      return {
        ...state,
        product: filterByAvailability(state.backupProduct, newAvailableState),
        availableFilter: newAvailableState,
      };

    case ACTIONFILTER.WOMENAVAILABLE:
      const newAvailableWomenState = state.availableWomenFilter === action.payload ? null : action.payload;
      return {
        ...state,
        womenProduct: filterByAvailability(state.womenBackupProduct, newAvailableWomenState),
        availableWomenFilter: newAvailableWomenState,
      };

    case ACTIONFILTER.KIDAVAILABLE:
      const newAvailableKidState = state.availableKidFilter === action.payload ? null : action.payload;
      return {
        ...state,
        kidProduct: filterByAvailability(state.kidBackupProduct, newAvailableKidState),
        availableKidFilter: newAvailableKidState,
      };

          case ACTIONFILTER.OUTOFSTOCK:
             // Toggle between false and null (all products)
      const newOutOfStockState = state.availableFilter === action.payload ? null : action.payload;
          return {...state,product: filterByOutStock(state.backupProduct,newOutOfStockState),
            availableFilter:newOutOfStockState
          };
          case ACTIONFILTER.OUTOFSTOCKWOMEN:
            // Toggle between false and null (all products)
     const newOutOfStockWomen = state.availableWomenFilter === action.payload ? null : action.payload;
        
         return {...state,womenProduct:filterByOutStock(state.womenBackupProduct,newOutOfStockWomen),
           availableWomenFilter:newOutOfStockWomen
         };
         case ACTIONFILTER.OUTOFSTOCKKID:
            // Toggle between false and null (all products)
        const newOutOfStockKid = state.availableKidFilter === action.payload ? null : action.payload;     
         return {...state,kidProduct: filterByOutStock(state.kidBackupProduct,newOutOfStockKid),
           availableKidFilter:newOutOfStockKid
         };
          case ACTIONFILTER.PRICEFILTER:
            return {...state,product:filterByPrice(state.backupProduct,action.payload)};
          case ACTIONFILTER.PRICEWOMENFILTER:
              return {...state,womenProduct:filterByPrice(state.womenBackupProduct,action.payload)};  
              case ACTIONFILTER.PRICEKIDFILTER:
                return {...state,kidProduct:filterByPrice(state.kidBackupProduct,action.payload)};    

      default:
        return state;
}
};
  const [filterProd,dispatchs] = useReducer(filtProductReducer,initialFiltProd);
  const {product,womenProduct,kidProduct} = filterProd;

  //for set the position of sidebar
  const footerRef = useRef<HTMLElement|null>(null);
    const sideBarRef = useRef<HTMLElement|null>(null);

  //Input Handler
  const onInputHandler = (e:ChangeEvent<HTMLInputElement>) => {
    //extract nameand value from input
    let {name,value} = e.target;
    setInputList((prev:ProductInpObj) => ({...prev, [name]:value}));
    dispatchs({type:ACTIONFILTER.INPUTFILTER,payload:value});
    dispatchs({type:ACTIONFILTER.INPUTWOMENFILTER,payload:value});
    dispatchs({type:ACTIONFILTER.INPUTKIDFILTER,payload:value});
  };
  
  //product form
  const onProductSearch = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

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
  };
  //For select a Product Color
  const selectColr = (bgColor:string) => {
    setColr(bgColor);
  };

 
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

 

    // product men
    const productMen = productList.filter((e) => {
      return e.category === 'men';
    });
    const menBtn = [... new Set(productMen.map((e) => {
      return  e.type;
     }))];

    // product women
    const productWomen = productList.filter((e) => {
      return e.category === 'women';
    });
    const womenBtn = [... new Set(productWomen.map((e) => {
      return  e.type;
     }))]
    // product kid
    const productKid = productList.filter((e) => {
      return e.category === 'kid';
    })
    const kidBtn = [... new Set(productKid.map((e) => {
      return e.type;
     }))]

     //product for home collection
     const collectMen = productMen.filter((e,i) => {
      return i>0 && i<4;
     });
     const collectWomen = productWomen.filter((e,i) => {
      return i>5 && i<9;
     });
     const collectKid = productKid.filter((e,i) => {
      return i>0 && i<4;;
     });
     const collectionProd = productList.map((e,i) => {
      return e
     })
    //  console.log(collectionProd)
     const collectionAll:ClothList[] = []
     const findCateg = (categ:string) => {
      const filterProd = productList.filter(e => e.category === categ);
      const findProd = filterProd.find((e,i) => i>2);
      return findProd;
     }
     useEffect(() => {
         // Extract one product from each category
         const menFind = findCateg('men');
         const womenFind = findCateg('women');
         const kidFind = findCateg('kid');
         if(kidFind && womenFind && menFind){
          collectionAll.push(menFind,womenFind,kidFind)
           setBackUpCollection(collectionAll);
           console.log(collectionAll)
         }
     },[productList])
     const onCollectionFilter = (categ:string) => {
      if(categ.toLowerCase() === 'all'){
        setCollection(backUpCollection);
        setCollectNav((prev) => !prev);
      }else if(categ.toLowerCase() === 'men'){
        setCollection(collectMen);
        setCollectNav((prev) => !prev);
      }else if(categ.toLowerCase() === 'women'){
        setCollection(collectWomen);
        setCollectNav((prev) => !prev);
      }else if(categ.toLowerCase() === 'kid'){
        setCollection(collectKid);
        setCollectNav((prev) => !prev);
      }
     }
     //product size
     const productSize= [... new Set(...productList.map((e) => {
      return e.size.map((e) => e);
     }))];

     //productColor
     const productColor = [... new Set(...productList.map((e) => {
      return e.color;
     }))]

      //filter Product through type
  const onHandleFilter = (type:string,categ:string) => {
    dispatchs({type:ACTIONFILTER.BTNFILTER,payload:type});
  };
  const onHandleWomenFilter = (type:string,categ:string) => {
    dispatchs({type:ACTIONFILTER.BTNWOMENFILTER,payload:type});
  };
  const onHandleKidFilter = (type:string,categ:string) => {
    dispatchs({type:ACTIONFILTER.BTNKIDFILTER,payload:type});
  };


  //Size Filter
  const onSizeFilter = (size:string) => {
    dispatchs({type:ACTIONFILTER.SIZEMENFILTER,payload:size})
  }
  const onSizeWomenFilter = (size:string) => {
    dispatchs({type:ACTIONFILTER.SIZEWOMENFILTER,payload:size})
  }
  const onSizeKidFilter = (size:string) => {
    dispatchs({type:ACTIONFILTER.SIZEKIDFILTER,payload:size})
  }


  //Product Available
  const onProductAvailable = () => {
    dispatchs({type:ACTIONFILTER.AVAILABLE,payload:true});
  };

  const onProductWomenAvailable = () => {
    dispatchs({type:ACTIONFILTER.WOMENAVAILABLE,payload:true});
  };
  const onProductKidAvailable = () => {
    dispatchs({type:ACTIONFILTER.KIDAVAILABLE,payload:true});
  };

  //Product Out of Stock
  const onOutOfStock = () => {
    dispatchs({type:ACTIONFILTER.OUTOFSTOCK,payload:false}); 
  }
  const onOutOfStockWomen = () => {
    dispatchs({type:ACTIONFILTER.OUTOFSTOCKWOMEN,payload:false}); 
  }
  const onOutOfStockKid = () => {
    dispatchs({type:ACTIONFILTER.OUTOFSTOCKKID,payload:false}); 
  }

  //Product Color Filter
  const onColrFilter = (color:string) => {
    dispatchs({type:ACTIONFILTER.COLORFILTER,payload:color});
  }
  const onColrWomenFilter = (color:string) => {
    dispatchs({type:ACTIONFILTER.COLORWOMENFILTER,payload:color});
  }
  const onColrKidFilter = (color:string) => {
    dispatchs({type:ACTIONFILTER.COLORKIDFILTER,payload:color});
  }
  
  //Price Filter
  const onPriceFilter = (e:ChangeEvent<HTMLInputElement>) => {
    // setPrice(value);
    const {name,value} = e.target;
    setPriceInp((prev) => ({...prev,[name]:value}));
    dispatchs({type:ACTIONFILTER.PRICEFILTER,payload:value});
  }
  const onPriceFilterWomen = (e:ChangeEvent<HTMLInputElement>) => {
    // setWomenPrice(value);
    const {name,value} = e.target;
    setPriceInp((prev) => ({...prev,[name]:value}));
    dispatchs({type:ACTIONFILTER.PRICEWOMENFILTER,payload:value});
  }
  const onPriceFilterKid = (e:ChangeEvent<HTMLInputElement>) => {
    // setPrice(value);
    const {name,value} = e.target;
    setPriceInp((prev) => ({...prev,[name]:value}));
    dispatchs({type:ACTIONFILTER.PRICEKIDFILTER,payload:value});
  }

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
    collection,
    backUpCollection,
    collectNav,
    collectMen,
    onCollectionFilter,
    menBtn,
    womenBtn,
    kidBtn,
    productSize,
    productColor,
    // menProd,
    // womenProd,
    // kidProd,
    // isType,
    product,
    womenProduct,
    kidProduct,
   
    priceInp,
    onPriceFilter,
    onPriceFilterWomen,
    onPriceFilterKid,
    setHeroSlide,
    onInputHandler,
   sideBarToggle,
   imgChange,
   selectColr,
   toggleAgainSide,
   fetchProductData,
   onHandleFilter,
   onHandleWomenFilter,
   onHandleKidFilter,
   onProductSearch,
   onSizeFilter,
   onSizeWomenFilter,
   onSizeKidFilter,
   onColrFilter,
   onColrWomenFilter,
   onColrKidFilter,
   onProductAvailable,
   onProductWomenAvailable,
   onProductKidAvailable,
   onOutOfStock,
   onOutOfStockWomen,
   onOutOfStockKid
  //  fetchProductDetail,
  };

  return (
    <ClothAppContext.Provider value={clothOperation}>
      {children}
    </ClothAppContext.Provider>
  );
}

export default Context;
