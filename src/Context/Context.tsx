"use client";
import {
  createContext,
  useState,
  useReducer,
  ChangeEvent,
  useRef,
  useEffect,
  FormEvent,
} from "react";
import {
  Action,
  CartSanity,
  CheckoutSanity,
  ClothList,
  CollectionSanity,
  ContextChild,
  ContextType,
  FashionContentSanity,
  FooterSanity,
  HeaderSanity,
  HeroSanity,
  // HeaderSanity,
  ProdAction,
  ProductInpObj,
  ProductReducer,
  SidebrToggl,
  WebContentAction,
  WebContentReducer,
  WeekSanity,
} from "@/utils/Type/type";
// import { menProduct } from "@/utils/Helper/helper";
import { client } from "@/sanity/lib/client";

export const ClothAppContext = createContext<ContextType | null>(null);
// reducer Action
const ACTION = {
  SIDE_BAR: "SIDE_BAR",
  PADD_REMOVE: "PADD_REMOVE",
};

//initial data for state
const initialData: SidebrToggl = {
  sideBar: false,
  paddRemove: false,
};

// side bar reducer function
const clothReducer = (state: SidebrToggl, action: Action): SidebrToggl => {
  switch (action.type) {
    case ACTION.SIDE_BAR:
      return { ...state, sideBar: !state.sideBar };
    case ACTION.PADD_REMOVE:
      return { ...state, paddRemove: action.payload };
    default:
      return state;
  }
};

//action for product filter
export const ACTIONFILTER = {
  INPUTFILTER: "INPUTFILTER",
  BTNFILTER: "BTNFILTER",
  BTNWOMENFILTER: "BTNWOMENFILTER",
  BTNKIDFILTER: "BTNKIDFILTER",
  SIZEMENFILTER: "SIZEMENFILTER",
  SIZEWOMENFILTER: "SIZEWOMENFILTER",
  SIZEKIDFILTER: "SIZEKIDFILTER",
  AVAILABLE: "AVAILABLE",
  WOMENAVAILABLE: "WOMENAVAILABLE",
  KIDAVAILABLE: "KIDAVAILABLE",
  OUTOFSTOCK: "OUTOFSTOCK",
  OUTOFSTOCKWOMEN: "OUTOFSTOCKWOMEN",
  OUTOFSTOCKKID: "OUTOFSTOCKKID",
  PRICEFILTER: "PRICEFILTER",
  PRICEWOMENFILTER: "PRICEWOMENFILTER",
  PRICEKIDFILTER: "PRICEKIDFILTER",
  COLORFILTER: "COLORFILTER",
  COLORWOMENFILTER: "COLORWOMENFILTER",
  COLORKIDFILTER: "COLORKIDFILTER",
  INPUTWOMENFILTER: "INPUTWOMENFILTER",
  INPUTKIDFILTER: "INPUTKIDFILTER",
  LOADMENPROD: "LOADMENPROD",
  LOADWOMENPROD: "LOADWOMENPROD",
  LOADKIDPROD: "LOADKIDPROD",
};

//action for Website Content
export const ACTIONCONTENT = {
  HEADERCONTENT: "HEADERCONTENT",
  HEROCONTENT: "HEROCONTENT",
  NEWWEEKCONTENT: "NEWWEEKCONTENT",
  COLLECTIONCONTENT: "COLLECTIONCONTENT",
  FASHIONCONTENT: "FASHIONCONTENT",
  FOTTERCONTENT: "FOTTERCONTENT",
  CARTCONTENT: "CARTCONTENT",
  CHECKOUTCONTENT: "CHECKOUTCONTENT",
};

//
export const initialWebCont: WebContentReducer = {
  headerContent: {
    cartimgone: "",
    cartimgtwo: "",
    cartname: "",
    cartquantity: 0,
    logo: "",
    navlist: [],
    navtoggicon: "",
    titlelogo: "",
    titletoggicon: "",
  },
  heroContent: {
    herobutton: "",
    heroimglist: [],
    heronavlist: [],
    inputimage: "",
    inputplaceholder: "",
    mainheading: "",
    subheading: "",
  },
  weekContent: {
    headincount: 0,
    weekheading: "",
    weekimglist: [],
  },
  collectionContent: {
    collectfilter: "",
    collectionheading: "",
    collectionnav: [],
    collectsort: "",
    lesstomore: "",
    moretoless: "",
  },
  fashionContent: {
    fashioncontent: "",
    fashionheading: "",
    fashionimglist: [],
  },
  footerContent: {
    infoheading: "",
    infolist: [],
    languageheading: "",
    languagelist: [],
  },
  cartContent: {
    cartbutton: "",
    cartheading: "",
    shipping: "",
    subtotal: "",
    terms: "",
    total: "",
  },
  checkoutContent: {
    addresslabel: "",
    checkoutheading: "",
    checkoutlist: [],
    citylabel: "",
    contactinfo: "",
    emaillabel: "",
    firstnamelabel: "",
    lastnamelabel: "",
    numberlabel: "",
    postalcodelabel: "",
    shippingaddress: "",
    shippingbutton: "",
    statelabel: "",
  },
};

function headerContReducer(
  state: WebContentReducer,
  action: WebContentAction
): WebContentReducer {
  switch (action.type) {
    case ACTIONCONTENT.HEADERCONTENT:
      return (state = { ...state, headerContent: action.payload as HeaderSanity });
    case ACTIONCONTENT.HEROCONTENT:
      return (state = { ...state, heroContent: action.payload as HeroSanity });
    case ACTIONCONTENT.NEWWEEKCONTENT:
      return (state = { ...state, weekContent: action.payload as WeekSanity});
    case ACTIONCONTENT.COLLECTIONCONTENT:
      return (state = { ...state, collectionContent: action.payload as CollectionSanity });
    case ACTIONCONTENT.FASHIONCONTENT:
      return (state = { ...state, fashionContent: action.payload as FashionContentSanity });
    case ACTIONCONTENT.FOTTERCONTENT:
      return (state = { ...state, footerContent: action.payload as FooterSanity });
    case ACTIONCONTENT.CARTCONTENT:
      return (state = { ...state, cartContent: action.payload as CartSanity });
    case ACTIONCONTENT.CHECKOUTCONTENT:
      return (state = { ...state, checkoutContent: action.payload  as CheckoutSanity });
    default:
      return state;
  }
}
function Context({ children }: ContextChild) {
  //For Header Content
  const [webContent, dispatchWeb] = useReducer(
    headerContReducer,
    initialWebCont
  );
  // For Nav List
  const [list, showNavList] = useState<boolean>(false);
  //For Side Bar
  const [state, dispatch] = useReducer(clothReducer, initialData);
  //For Add to Cart
  const [images, setImages] = useState<null | number>(null);
  //For select Color for product
  const [colr, setColr] = useState("");
  //For Handle Product Input
  const [inputList, setInputList] = useState<ProductInpObj>({
    kidinput: "",
    meninput: "",
    womeninput: "",
  });
  //hero slider
  const [heroSlide, setHeroSlide] = useState(false);
  // product api state
  const [productList, setProductList] = useState<ClothList[]>([]);
  //filter type state
  // const [isType,setType] = useState(false);
  //price filter input
  // const [price,setPrice] = useState('80');
  // const [womenPrice,setWomenPrice]= useState('80');
  const [priceInp, setPriceInp] = useState({
    price: "80",
    priceWomen: "80",
    priceKid: "80",
  });
  //collection filter Product
  const [collection, setCollection] = useState<ClothList[]>([]);
  const [backUpCollection, setBackUpCollection] = useState<ClothList[]>([]);
  const [collectNav, setCollectNav] = useState(false);

  //Fetch Header Content from Sanity

  useEffect(() => {
    const sanityContent = async () => {
      dispatchWeb({
        type: ACTIONCONTENT.HEADERCONTENT,
        payload: await fetchHeaderContent(`*[_type == "headercontent"][0]{
  "logo":logo.asset->url,
    titlelogo,
    "navtoggicon":navtoggicon.asset->url,
    titletoggicon,
    navlist,
    cartname,
    "cartimgone":cartimgone.asset->url,
    "cartimgtwo":cartimgtwo.asset->url,
    cartquantity
  
}`),
      });
      dispatchWeb({
        type: ACTIONCONTENT.HEROCONTENT,
        payload: await fetchHeaderContent(`*[_type == "herocontent"][0]{
  herobutton,
    subheading,
    mainheading,
    "heroimglist": heroimglist[]{
    "imageid": imageid,
    "imagename": imagename.asset->url, // Fetch nested asset URL
    "imagetitle": imagetitle
  },
    heronavlist,
    "inputimage":inputimage.asset->url,
    inputplaceholder
}`),
      });
      dispatchWeb({
        type: ACTIONCONTENT.NEWWEEKCONTENT,
        payload: await fetchHeaderContent(`*[_type == "newweekcontent"][0]{
  headincount,
    weekheading,
    "weekimglist":weekimglist[]{
    imageid,
    imagetitle,
    producttype,
    "imagename":imagename.asset->url
    }
}`),
      });
      dispatchWeb({
        type: ACTIONCONTENT.COLLECTIONCONTENT,
        payload: await fetchHeaderContent(`*[_type == "xivcollection"][0]{
  collectfilter,
    collectsort,
    moretoless,
    collectionheading,
    lesstomore,
    collectionnav[]{
      itemid,
      listitem
    }
}`),
      });

      dispatchWeb({
        type: ACTIONCONTENT.FASHIONCONTENT,
        payload: await fetchHeaderContent(`*[_type == "fashiondesign"][0]{
  fashioncontent,
    fashionheading,
    fashionimglist[]{
      imagetitle,
      imageid,
      "imagename":imagename.asset->url
    }
}`),
      });

      dispatchWeb({
        type: ACTIONCONTENT.FOTTERCONTENT,
        payload: await fetchHeaderContent(`*[_type == "footercontent"][0]{
  languageheading,
    infoheading,
    infolist[]{
      itemid,
      listitem,
    },
    languagelist[]{
      itemid,
      listitem,
    }
}`),
      });
      dispatchWeb({
        type: ACTIONCONTENT.CARTCONTENT,
        payload: await fetchHeaderContent(`*[_type == "cartcontent"][0]{
  total,
    cartbutton,
    shipping,
    terms,
    subtotal,
    cartheading
}`),
      });
      
//       dispatchWeb({
//         type: ACTIONCONTENT.CHECKOUTCONTENT,
//         payload: await fetchHeaderContent(`
//   *[_type == "checkoutcontent"][0]{
//   citylabel,
//     shippingaddress,
//     checkoutheading,
//     checkoutheading,
//     addresslabel,
//     emaillabel,
//     postalcodelabel,
//     contactinfo,
//     lastnamelabel,
//     numberlabel,
//     firstnamelabel,
//     shippingbutton,
//     statelabel,
//     checkoutlist[]{
//       itemid,
//       listitem
//     }
// }
  
//   `),
//       });
    };
    sanityContent();
    // console.log(webContent);
  },[]);

  async function fetchHeaderContent(query: string) {
    const contentHeader = await client.fetch(query);
    // console.log(contentHeader);
    return contentHeader;
  }

  // fetch all product
  const fetchProduct = async (productDetail: string) => {
    try {
      const fetchDetail = await fetch(productDetail, { cache: "force-cache" });
      const detailIntoJson: ClothList[] = await fetchDetail.json();
      return detailIntoJson;
    } catch (error) {
      throw new Error(`${error}: API Not Found`);
    }
  };
  
  console.log(process.env.NEXT_PUBLIC_CLOTH_API)
  // NEXT_PUBLIC_SANITY_PROJECT_ID
  useEffect(() => {
    const callFetchCloth = async () => {
      const clothListForProductDetail: ClothList[] = await fetchProduct(
        `${process.env.NEXT_PUBLIC_CLOTH_API}/api/clothapi`
      );
      setProductList(clothListForProductDetail);
      const menList: ClothList[] = clothListForProductDetail.filter(
        (e) => e.productcategory === "men"
      );
      dispatchs({ type: ACTIONFILTER.LOADMENPROD, payload: menList });
      const womenList = clothListForProductDetail.filter(
        (e) => e.productcategory === "women"
      );
      dispatchs({ type: ACTIONFILTER.LOADWOMENPROD, payload: womenList });
      const kidList = clothListForProductDetail.filter(
        (e) => e.productcategory === "kid"
      );
      dispatchs({ type: ACTIONFILTER.LOADKIDPROD, payload: kidList });
    };
    callFetchCloth();
  },[]);
  const prod = productList.map((e) => {
    return e.productprice;
  });
  const maxPrice = Math.max(...new Set(prod));
  console.log(maxPrice);
  //Filter Product Reducer
  const initialFiltProd: ProductReducer = {
    product: [],
    backupProduct: [],
    womenProduct: [],
    womenBackupProduct: [],
    kidProduct: [],
    kidBackupProduct: [],
    availableFilter: null,
    availableWomenFilter: null,
    availableKidFilter: null,
  };

  const filterByAvailability = (backup: ClothList[], isAvailable: boolean) => {
    return isAvailable === null
      ? backup
      : backup.filter((item) => item.productavaiableornot === isAvailable);
  };
  const filterByOutStock = (backup: ClothList[], outOfStock: boolean|null) => {
    return outOfStock === null
      ? backup
      : backup.filter((item) => item.productavaiableornot === outOfStock);
  };
  const filterByPrice = (backup: ClothList[], inpValue: string) => {
    const priceFilterProd = backup.filter((e) => {
      return e.productprice <= +inpValue;
    });
    return priceFilterProd;
  };
  const filterByColor = (backupProduct: ClothList[], color: string) => {
    const filtColor = backupProduct.filter((e) => {
      // Check if any color matches the desired hex color
      return e.productcolors.some((colorObj) => colorObj.hex.includes(color));
    });
    console.log(filtColor);
    return filtColor;
  };
  function filtProductReducer(
    state: ProductReducer,
    action: ProdAction,
  ): ProductReducer {
    switch (action.type) {
      case ACTIONFILTER.INPUTFILTER:
        const { payload } = action;
        // If the input value is empty or null, return the full list of products
        if (!(payload as string).trim() ) {
          return { ...state, product: state.backupProduct }; // Use a backup of the full product list
        }
        const filtMenInput = state.backupProduct.filter((e) => {
          return e.productname
            .toLowerCase()
            .split(/\s+/)
            .join("")
            .includes((payload as string).toLowerCase().split(/\s+/).join(""));
        });
        return { ...state, product: filtMenInput };

      case ACTIONFILTER.LOADMENPROD:
        return {
          ...state,
          product: action.payload as ClothList[],
          backupProduct: action.payload as ClothList[],
        };

      case ACTIONFILTER.INPUTWOMENFILTER:
        // If the input value is empty or null, return the full list of products
        if (!(action.payload as string).trim()) {
          return { ...state, womenProduct: state.womenBackupProduct }; // Use a backup of the full product list
        }
        const filtWomenInput = state.womenBackupProduct.filter((e) => {
          return e.productname
            .toLowerCase()
            .split(/\s+/)
            .join("")
            .includes((action.payload as string).toLowerCase().split(/\s+/).join(""));
        });
        return { ...state, womenProduct: filtWomenInput };

      case ACTIONFILTER.LOADWOMENPROD:
        return {
          ...state,
          womenProduct: action.payload as ClothList[],
          womenBackupProduct: action.payload as ClothList[],
        };

      case ACTIONFILTER.INPUTKIDFILTER:
        // If the input value is empty or null, return the full list of products
        if (!(action.payload as string).trim()) {
          return { ...state, kidProduct: state.kidBackupProduct }; // Use a backup of the full product list
        }
        const filtKidInput = state.kidBackupProduct.filter((e) => {
          return e.productname
            .toLowerCase()
            .split(/\s+/)
            .join("")
            .includes((action.payload as string).toLowerCase().split(/\s+/).join(""));
        });
        return { ...state, kidProduct: filtKidInput };

      case ACTIONFILTER.LOADKIDPROD:
        return {
          ...state,
          kidProduct: action.payload as ClothList[],
          kidBackupProduct: action.payload as ClothList[],
        };

      case ACTIONFILTER.BTNFILTER:
        const filtMenBtn = state.backupProduct.filter((e) => {
          return e.producttype
            .toLowerCase()
            .split(/\s+/)
            .join("")
            .includes((action.payload as string).toLowerCase().split(/\s+/).join(""));
        });
        return { ...state, product: filtMenBtn };

      case ACTIONFILTER.BTNWOMENFILTER:
        const filtWomenBtn = state.womenBackupProduct.filter((e) => {
          return e.producttype
            .toLowerCase()
            .split(/\s+/)
            .join("")
            .includes((action.payload as string).toLowerCase().split(/\s+/).join(""));
        });
        return { ...state, womenProduct: filtWomenBtn };

      case ACTIONFILTER.BTNKIDFILTER:
        const filtKidBtn = state.kidBackupProduct.filter((e) => {
          return e.producttype
            .toLowerCase()
            .split(/\s+/)
            .join("")
            .includes((action.payload as string).toLowerCase().split(/\s+/).join(""));
        });
        return { ...state, kidProduct: filtKidBtn };

      case ACTIONFILTER.SIZEMENFILTER:
        const filtSizeMen = state.backupProduct.filter((e) => {
          return e.productsizes.includes((action.payload as string));
        });
        return { ...state, product: filtSizeMen };

      case ACTIONFILTER.SIZEWOMENFILTER:
        const filtSizeWomen = state.womenBackupProduct.filter((e) => {
          return e.productsizes.includes((action.payload as string));
        });
        return { ...state, womenProduct: filtSizeWomen };

      case ACTIONFILTER.SIZEKIDFILTER:
        const filtSizeKid = state.kidBackupProduct.filter((e) => {
          return e.productsizes.includes((action.payload as string));
        });
        return { ...state, kidProduct: filtSizeKid };

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
        return {
          ...state,
          product: filterByColor(state.backupProduct, (action.payload as string)),
        };

      case ACTIONFILTER.COLORWOMENFILTER:
        return {
          ...state,
          womenProduct: filterByColor(state.womenBackupProduct, (action.payload as string)),
        };

      case ACTIONFILTER.COLORKIDFILTER:
        return {
          ...state,
          kidProduct: filterByColor(state.kidBackupProduct, (action.payload as string)),
        };
      case ACTIONFILTER.AVAILABLE:
        const newAvailableState =
          state.availableFilter === action.payload ? null : action.payload;
        return {
          ...state,
          product: filterByAvailability(state.backupProduct, newAvailableState as boolean),
          availableFilter: newAvailableState as boolean,
        };

      case ACTIONFILTER.WOMENAVAILABLE:
        const newAvailableWomenState =
          state.availableWomenFilter === action.payload ? null : action.payload;
        return {
          ...state,
          womenProduct: filterByAvailability(
            state.womenBackupProduct,
            newAvailableWomenState as boolean
          ),
          availableWomenFilter: newAvailableWomenState as boolean,
        };

      case ACTIONFILTER.KIDAVAILABLE:
        const newAvailableKidState =
          state.availableKidFilter === action.payload ? null : action.payload;
        return {
          ...state,
          kidProduct: filterByAvailability(
            state.kidBackupProduct,
            newAvailableKidState as boolean
          ),
          availableKidFilter: newAvailableKidState as boolean,
        };

      case ACTIONFILTER.OUTOFSTOCK:
        // Toggle between false and null (all products)
        const newOutOfStockState =
          state.availableFilter === action.payload ? null : action.payload;
        return {
          ...state,
          product: filterByOutStock(state.backupProduct, newOutOfStockState as boolean|null),
          availableFilter: newOutOfStockState as boolean|null,
        };
      case ACTIONFILTER.OUTOFSTOCKWOMEN:
        // Toggle between false and null (all products)
        const newOutOfStockWomen =
          state.availableWomenFilter === action.payload ? null : action.payload;

        return {
          ...state,
          womenProduct: filterByOutStock(
            state.womenBackupProduct,
            newOutOfStockWomen as boolean | null
          ),
          availableWomenFilter: newOutOfStockWomen as boolean | null,
        };
      case ACTIONFILTER.OUTOFSTOCKKID:
        // Toggle between false and null (all products)
        const newOutOfStockKid =
          state.availableKidFilter === action.payload ? null : action.payload;
        return {
          ...state,
          kidProduct: filterByOutStock(
            state.kidBackupProduct,
            newOutOfStockKid as boolean | null
          ),
          availableKidFilter: newOutOfStockKid as boolean | null,
        };
      case ACTIONFILTER.PRICEFILTER:
        return {
          ...state,
          product: filterByPrice(state.backupProduct, (action.payload as string)),
        };
      case ACTIONFILTER.PRICEWOMENFILTER:
        return {
          ...state,
          womenProduct: filterByPrice(state.womenBackupProduct, (action.payload as string)),
        };
      case ACTIONFILTER.PRICEKIDFILTER:
        return {
          ...state,
          kidProduct: filterByPrice(state.kidBackupProduct, (action.payload as string)),
        };

      default:
        return state;
    }
  }
  const [filterProd, dispatchs] = useReducer(
    filtProductReducer,
    initialFiltProd
  );
  const { product, womenProduct, kidProduct } = filterProd;

  //for set the position of sidebar
  const footerRef = useRef<HTMLElement | null>(null);
  const sideBarRef = useRef<HTMLElement | null>(null);

  //Input Handler
  const onInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //extract nameand value from input
    const { name, value } = e.target;
    setInputList((prev: ProductInpObj) => ({ ...prev, [name]: value }));
    dispatchs({ type: ACTIONFILTER.INPUTFILTER, payload: value });
    dispatchs({ type: ACTIONFILTER.INPUTWOMENFILTER, payload: value });
    dispatchs({ type: ACTIONFILTER.INPUTKIDFILTER, payload: value });
  };

  //product form
  const onProductSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  //Toggle Navigation
  const navListToggle = () => {
    showNavList((prev) => !prev);
  };

  //Side Bar Toggle
  const sideBarToggle = () => {
    dispatch({ type: ACTION.SIDE_BAR });
  };

  const toggleAgainSide = (value: boolean | undefined) => {
    dispatch({ type: ACTION.PADD_REMOVE, payload: value });
  };

  //For Select a Product
  const imgChange = (imgIndex: number) => {
    setImages(imgIndex);
  };
  //For select a Product Color
  const selectColr = (bgColor: string) => {
    setColr(bgColor);
  };

  //fetch product list
  const fetchProductData = async (productApi: string) => {
    try {
      const fetchProduct = await fetch(productApi, { cache: "force-cache" });
      const productIntoJson: ClothList[] = await fetchProduct.json();
      return productIntoJson;
    } catch (error) {
      console.log(error);
    }
  };

  // product men
  const productMen = productList.filter((e) => {
    return e.productcategory === "men";
  });
  const menBtn = [
    ...new Set(
      productMen.map((e) => {
        return e.producttype;
      })
    ),
  ];

  // product women
  const productWomen = productList.filter((e) => {
    return e.productcategory === "women";
  });
  const womenBtn = [
    ...new Set(
      productWomen.map((e) => {
        return e.producttype;
      })
    ),
  ];
  // product kid
  const productKid = productList.filter((e) => {
    return e.productcategory === "kid";
  });
  const kidBtn = [
    ...new Set(
      productKid.map((e) => {
        return e.producttype;
      })
    ),
  ];

  //product for home collection
  const collectMen = productMen.filter((e, i) => {
    return i > 0 && i < 4;
  });
  const collectWomen = productWomen.filter((e, i) => {
    return i > 5 && i < 9;
  });
  const collectKid = productKid.filter((e, i) => {
    return i > 0 && i < 4;
  });
  // const collectionProd = productList.map((e, i) => {
  //   return e;
  // });
  //  console.log(collectionProd)
  
  useEffect(() => {
    const collectionAll: ClothList[] = [];
    const findCateg = (categ: string) => {
      const filterProd = productList.filter((e) => e.productcategory === categ);
      const findProd = filterProd.find((e, i) => i > 2);
      return findProd;
    };
    // Extract one product from each category
    const menFind = findCateg("men");
    const womenFind = findCateg("women");
    const kidFind = findCateg("kid");
    if (kidFind && womenFind && menFind) {
      collectionAll.push(menFind, womenFind, kidFind);
      setBackUpCollection(collectionAll);
      console.log(collectionAll);
    }
  }, [productList]);
  const onCollectionFilter = (categ: string) => {
    if (categ.toLowerCase() === "all") {
      setCollection(backUpCollection);
      setCollectNav((prev) => !prev);
    } else if (categ.toLowerCase() === "men") {
      setCollection(collectMen);
      setCollectNav((prev) => !prev);
    } else if (categ.toLowerCase() === "women") {
      setCollection(collectWomen);
      setCollectNav((prev) => !prev);
    } else if (categ.toLowerCase() === "kid") {
      setCollection(collectKid);
      setCollectNav((prev) => !prev);
    }
  };
  //product size
  const productSize = [
    ...new Set(
      ...productList.map((e) => {
        return e.productsizes.map((e) => e);
      })
    ),
  ];

  //productColor
  const productColor = [
    ...new Set(
      ...productList.map((e) => {
        return e.productcolors.map(e => e.hex);
      })
    ),
  ];
  console.log(productColor)

  //filter Product through type
  const onHandleFilter = (type: string ) => {
    dispatchs({ type: ACTIONFILTER.BTNFILTER, payload: type });
  };
  const onHandleWomenFilter = (type: string ) => {
    dispatchs({ type: ACTIONFILTER.BTNWOMENFILTER, payload: type });
  };
  const onHandleKidFilter = (type: string) => {
    dispatchs({ type: ACTIONFILTER.BTNKIDFILTER, payload: type });
  };

  //Size Filter
  const onSizeFilter = (size: string) => {
    dispatchs({ type: ACTIONFILTER.SIZEMENFILTER, payload: size });
  };
  const onSizeWomenFilter = (size: string) => {
    dispatchs({ type: ACTIONFILTER.SIZEWOMENFILTER, payload: size });
  };
  const onSizeKidFilter = (size: string) => {
    dispatchs({ type: ACTIONFILTER.SIZEKIDFILTER, payload: size });
  };

  //Product Available
  const onProductAvailable = () => {
    dispatchs({ type: ACTIONFILTER.AVAILABLE, payload: true });
  };

  const onProductWomenAvailable = () => {
    dispatchs({ type: ACTIONFILTER.WOMENAVAILABLE, payload: true });
  };
  const onProductKidAvailable = () => {
    dispatchs({ type: ACTIONFILTER.KIDAVAILABLE, payload: true });
  };

  //Product Out of Stock
  const onOutOfStock = () => {
    dispatchs({ type: ACTIONFILTER.OUTOFSTOCK, payload: false });
  };
  const onOutOfStockWomen = () => {
    dispatchs({ type: ACTIONFILTER.OUTOFSTOCKWOMEN, payload: false });
  };
  const onOutOfStockKid = () => {
    dispatchs({ type: ACTIONFILTER.OUTOFSTOCKKID, payload: false });
  };

  //Product Color Filter
  const onColrFilter = (color: string) => {
    dispatchs({ type: ACTIONFILTER.COLORFILTER, payload: color });
  };
  const onColrWomenFilter = (color: string) => {
    dispatchs({ type: ACTIONFILTER.COLORWOMENFILTER, payload: color });
  };
  const onColrKidFilter = (color: string) => {
    dispatchs({ type: ACTIONFILTER.COLORKIDFILTER, payload: color });
  };

  //Price Filter
  const onPriceFilter = (e: ChangeEvent<HTMLInputElement>) => {
    // setPrice(value);
    const { name, value } = e.target;
    setPriceInp((prev) => ({ ...prev, [name]: value }));
    dispatchs({ type: ACTIONFILTER.PRICEFILTER, payload: value });
  };
  const onPriceFilterWomen = (e: ChangeEvent<HTMLInputElement>) => {
    // setWomenPrice(value);
    const { name, value } = e.target;
    setPriceInp((prev) => ({ ...prev, [name]: value }));
    dispatchs({ type: ACTIONFILTER.PRICEWOMENFILTER, payload: value });
  };
  const onPriceFilterKid = (e: ChangeEvent<HTMLInputElement>) => {
    // setPrice(value);
    const { name, value } = e.target;
    setPriceInp((prev) => ({ ...prev, [name]: value }));
    dispatchs({ type: ACTIONFILTER.PRICEKIDFILTER, payload: value });
  };
  const {cartContent,checkoutContent,collectionContent,fashionContent,footerContent,headerContent,heroContent,weekContent} = webContent;
  // Context value
  const clothOperation: ContextType = {
    list,
    navListToggle,
    sideBar: state.sideBar,
    paddRemove: state.paddRemove,
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
    cartContent,checkoutContent,collectionContent,fashionContent,footerContent,headerContent,heroContent,weekContent,
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
    onOutOfStockKid,
    //  fetchProductDetail,
  };

  return (
    <ClothAppContext.Provider value={clothOperation}>
      {children}
    </ClothAppContext.Provider>
  );
}

export default Context;
