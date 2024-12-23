import { ClothList, FasionDesign, HeroList, List } from "../Type/type";
import {Orbitron,Creepster,Poppins} from 'next/font/google';
//export font 
export const workSans = Orbitron({ subsets: ['latin'], weight: ['400'],display: 'swap',  });
export const rubikBuble = Creepster({ subsets: ['latin'], weight: ['400'],display: 'swap',  });
export const poppins = Poppins({
    weight: '400', 
    subsets: ['latin'], 
    display: 'swap', 
});
//Nav List
// export const navList:NavList[] = [
//     {
//         name:"Home",
//         link:"/"
//     },
//     {
//         name:"collection",
//         link:"/collection"
//     },
//     {
//         name:"New",
//         link:"/checkout"
//     },
// ];

//Hero List
// export const heroNav:NavList[] = [
//     {
//         name:"Men",
//         link:"/men"
//     },
//     {
//         name:"Women",
//         link:"/women"
//     },
//     {
//         name:"Kids",
//         link:"/kid"
//     },
// ];
//All Product List
// export const clothList:ClothList[] = [
//     {
//         name:"Off-the-Shoulder Dress",
//         id:1,
//         category:"women",
//         type:'dress',
//         isAvailable:true,
//         img:"aaffd90c3606b70fafd07fb94f8d9bc20466bced.avif",
//         price:"$29.75",
//         size:["XS","S","M","L","XL"],
//         color:["C0A695","FFFFFF","A6D6CA","C4B9B5","D9D9D9"],
//         imgList:["d3dafc1dd76eea39031b73ef3f62342ad19e1301.avif","dd06a4e4f5b83b6a0106c7b0dc391ea95ef88fec.avif","3e8c7cd9ab0a2b37bf5b1bbd68d35876ead484fd.avif","4817ce3ea8b9cd08f7884d1bc7487436cf0e30bf.avif"],
//     },
//     {
//         name:"DryMove™ Pleated Tennis Skirt",
//         id:2,
//         category:"women",
//         isAvailable:true,
//         type:'skirt',
//         img:"b41054bddd13143f82f962cccb22c1368b601bdd.avif",
//         price:"$29.75",
//         size:["XS","S","M","L","XXL"],
//         color:["FFFFFF","A6D6CA","A9A9A9","D9D9D9"],
//         imgList:["b9bc85dfcad312f38ad3e43463c31ded9ac28f7d.avif","7aad9a68b6320a45564e4cf2fe22e039760108c0.avif","998e7a7f67d25a8b6fbb1d1d95b4cc67343df4d5.avif"]
//     },
//     {
//         name:"Flared Mini Skirt",
//         id:3,
//         category:"women",
//         isAvailable:false,
//         type:'skirt',
//         img:"26940fb6ea06cf5a57bb765d2938749d46da6aa8.avif",
//         price:"$17.00",
//         size:["XS","S","L","XL","XXL"],
//         color:["B6AEA9","FFFFFF","1E1E1E","D9D9D9"],
//         imgList:["f5dfdf697ce71a2a5e36b69d73604302fb154e8c.avif","d615e1cb644d770bd554c2b2ae07d5e26fcc320d.avif","5bde2b8c90b5862623af87ac74593813bb5967f3.avif"]
//     },
//     {
//         name:"A-Line Tie-Strap Dress",
//         id:4,
//         category:"women",
//         isAvailable:true,
//         type:'dress',
//         img:"1c6dc846f22d17e0120a6418343d2085fe52049f.avif",
//         price:"$25.50",
//         size:["S","M","L","XL","XXL"],
//         color:["9096A2","FFFFFF","A6D6CA","7D7166","D9D9D9"],
//         imgList:["8053cabebd46548671297ed9c37169d856affd1b.avif","8b4053aa76298673d462a7513f2e9d45f92ddc77.avif","2cad72854346b5623dd1c02b137a31ecfa6294a1.avif","03b37a5c1bbe3876a9c5447094cb6b7b18fd22eb.avif"]
//     },
//     {
//         name:"Mock Turtleneck Jersey Top",
//         id:5,
//         category:"women",
//         isAvailable:true,
//         type:'t-shirt',
//         img:"7b3b01be3fef0f7f92425f49b3d504af98e48b19.avif",
//         price:"$12.75",
//         size:["XS","S","M","L","XL"],
//         color:["B9C1E8","FFFFFF","A6D6CA","D9D9D9"],
//         imgList:["f30f6725786b9eaa7c3554f9fd9adc02680c86c8.avif","d9fe725dc2a0106fae7e5d08079fa221f32751f3.avif","83d5962516c03a0c1d0bca6a042a3ec7d0cd5d2b.avif","3dad98b1b9a00c9c35d77e5eb71a0d6b3aff0733.avif"]
//     },
//     {
//         name:"Button-Front Mini Skirt",
//         id:6,
//         category:"women",
//         isAvailable:false,
//         type:"skirt",
//         img:"65419409a3352f7731ae6843c1d9b1a4bb466837.avif",
//         price:"$34.00",
//         size:["XS","S","L","XL","XXL"],
//         color:["C7C6C3","FFFFFF","DED9C9","D9D9D9"],
//         imgList:["d8310357bc1ea57242e08211cbb343a007d064c0.avif","ce8a7d1fafe7db3b161403166b110d4df916f6dc.avif","c0d75a2b1d1093679378032b2bd4338870089af9.avif","1d7086c0d7761c96e53bb6862fd6b37b98c8685c.avif"]
//     },
//     {
//         name:"Oversized Teddy Fleece Jacket",
//         id:7,
//         category:"women",
//         isAvailable:true,
//         type:"jacket",
//         img:"ce729b4a87d7a24a35e734a85c7dc3f07949fc9f.avif",
//         price:"$68.00",
//         size:["XS","M","L","XL","XXL"],
//         color:["BEB4AA","FFFFFF","1E1E1E","D9D9D9"],
//         imgList:["cc56439fb4f83df64a9becf53d8ee063f849579e.avif","b0a35f925dd1cb0392346f79db631c854a5f3ade.avif","a99961819db85fa91dc9aaa911b38f34516b9971.avif","ce729b4a87d7a24a35e734a85c7dc3f07949fc9f.avif"]
//     },
//     {
//         name:"Curvy Fit Wide Ultra High Jeans",
//         id:8,
//         category:"women",
//         isAvailable:true,
//         type:'jeans',
//         img:"6492a456f52e929f53b3052853a68ea0183844ec.avif",
//         price:"$25.50",
//         size:["S","M","L","XL","XXL"],
//         color:["374041","FFFFFF","A6D6CA","283746"],
//         imgList:["595294580d0b6dfc1ee1c453470bf050a7126709.avif","73792e48691c6c1849eec9e099a4deafecb4fba9.avif","267ec0ec96ce8085a96ca074aec61763589c5292.avif","5d04b187d7f287ced245dca3994db5cda490c279.avif"]
//     },
//     // {
//     //     name:"Curvy Fit Slim High Jeans",
//     //     category:"women",
//     //     img:"474e9d8b6fc0e6ebf14212ecbf16c88f327d126b.avif",
//     //     price:"$29.75",
//     //     size:["XS","S","M","L","XL","XXL"],
//     //     color:["B9C1E8","FFFFFF","A6D6CA","1E1E1E","A9A9A9","D9D9D9"],
//     //     imgList:["c8eb0e30eeecdebb4bf09f75a4b8483ace429184 (1).avif","595294580d0b6dfc1ee1c453470bf050a7126709.avif","0314f8a30c1876b1087bc1eaa0f0d9fe6ffe6def.avif","9d25814160f14f5fb50b8643e64855d8da925585.avif"]
//     // },

//     {
//         name:"Teddy Fleece Jacket",
//         id:9,
//         category:"women",
//         isAvailable:false,
//         type:'jacket',
//         img:"792cd3084f9b62626c40b3dbef6dc40d42137757.avif",
//         price:"$29.75",
//         size:["XS","S","L","XL","XXL"],
//         color:["D8D8CC","FFFFFF","B89986","D9D9D9"],
//         imgList:["1fdccc61cd9c103aa48c7eaba2deceb7f1494522.avif","07b8d061aa2ddc8c31691d7a98a3c3db37ecd5e1.avif","50e58280af101888d2628f608419dfb9b5e39b80.avif","a99961819db85fa91dc9aaa911b38f34516b9971.avif"]
//     },
//     {
//         name:"Knit Dress",
//         id:10,
//         category:"women",
//         isAvailable:true,
//         type:'dress',
//         img:"a8fdd9f748e393ebe2b55e331f1c5adce5e8fde3.avif",
//         price:"$29.75",
//         size:["S","M","L","XL","XXL"],
//         color:["CAC5BD","FFFFFF","876E5D","D9D9D9"],
//         imgList:["f45450491e2a6b522b88dd2e722ec6c2c7bbf822.avif","798cc21cb13cbcb7e63c9a58c8ed1ec7af56305c.avif","1ef9da265f7b499f35d7e837aa5b18428b3f0f5b.avif","d147bc2cb98e5bd22a632426e7305e6fb3ec7c5d.avif"]
//     },
//     {
//         name:"Knit Dress",
//         id:11,
//         category:"women",
//         isAvailable:false,
//         type:'dress',
//         img:"685c222cd58a9ebb0885fccf0fded8a35e634d03.avif",
//         price:"$29.75",
//         size:["XS","S","M","L","XXL"],
//         color:["ABAEB3","FFFFFF","323136","D9D9D9"],
//         imgList:["6967e1ee1a2ec9aee6526dbcae4f4876597a655a.avif","946ccd9b24b362d2758e87326da21a832a85dc44.avif","a98d1cc6a8ddded306d085874fbe86f76034bf00.avif","09d970de027968ed2db61b393fef51bdf8d92993.avif"]
//     },
//     {
//         name:"Creased Pants",
//         id:12,
//         category:"women",
//         isAvailable:true,
//         type:'pants',
//         img:"6f69b2464d19501831d7e7dac2bf6b6872a304a1.avif",
//         price:"$25.50",
//         size:["XS","S","M","L","XL"],
//         color:["B1A09A","FFFFFF","C7BAB0","D0C7BF","D9D9D9"],
//         imgList:["ab967c75acc43777b0a0c2fcc3e123eb07f60848.avif","451a12887b087294dd90c5978ca94ee322d6ff70.avif","086cd4115be772253eccd48fa14236cf497561b4.avif",]
//     },
//     {
//         name:"Fine-Knit Sweater",
//         id:13,
//         category:"women",
//         isAvailable:true,
//         type:"sweater",
//         img:"60488f8e3d38ca91e8b462a3e15f8f44f337d2a4.avif",
//         price:"$25.50",
//         size:["XS","S","M","L","XL"],
//         color:["C4D2D5","FFFFFF","A6D6CA","D9D9D9"],
//         imgList:["cddc4ea2e8dd0af5547c832519d4d8b088304886.avif","b624cc397067515df3cc7173f6a4600a5d26c5f0.avif",
//             "29c09e36113b874dc26020d846f3e6f45851da74.avif" ,"2e6f07943bf3a189c383f2c3c33fb00a7f34e21f.avif"]
//     },
//     {
//         name:"High-waisted joggers",
//         id:14,
//         category:"women",
//         isAvailable:false,
//         type:"joggers",
//         img:"661e175bc0c7b417794e8dc75b509f87971237fe.avif",
//         price:"$25.50",
//         size:["XS","S","L","XL","XXL"],
//         color:["DFDDD0","FFFFFF","A1A7A5","D9D9D9"],
//         imgList:["e28406613d981dfb47339c34d9994443034c62fc.avif","01cf485eafb51b422fafa91a67290d42c8180b93.avif","1264c6cd4b4e289195a0fc9da9492c51177c1883.avif"]
//     },
//     {
//         name:"Flared Tennis Skirt in DryMove",
//         id:15,
//         category:"women",
//         isAvailable:true,
//         type:"skirt",
//         img:"78b63414636105928ac0add9cbabad595b761d96.avif",
//         price:"$25.50",
//         size:["XS","S","L","XL","XXL"],
//         color:["C7C3C0","FFFFFF","E0D1D1","D9D9D9"],
//         imgList:["fa887b3e29157c6b1782486c59c1b043295daa34.avif","b403eaef48192a4a8a038b401e40ef1b751d4248.avif","0f39567d59df813d2a93ac3453a2e9f05e4dab12.avif"]
//     },
//     {
//         name:"Curvy Fit Slim High Jeans",
//         id:16,
//         category:"women",
//         isAvailable:false,
//         type:'jeans',
//         img:"b5a49cfea0ec830ece7ff52b063e869bea0bcefc.avif",
//         price:"$25.50",
//         size:["XS","S","M","L","XL"],
//         color:["FFFFFF","A6D6CA","646F71","D9D9D9"],
//         imgList:["6194a41aa94ccd64cf04fc6f14a7caa824be47e7.avif","536ed4dba3693bd88046e652fceaf037a3431c24.avif","0314f8a30c1876b1087bc1eaa0f0d9fe6ffe6def.avif","7f49895248bd0de4445914d517dc8d263969a457.avif"]
//     },
    
//     {
//         name:"Oversized Printed Sweatshirt",
//         id:17,
//         category:"kid",
//         isAvailable:true,
//         type:'shirt',
//         img:"7aa4407ee34ccda214b7078a1f2451401d157703.avif",
//         price:"$25.50",
//         size:["XS","S","M"],
//         color:["FFFFFF","A6D6CA","A9A9A9","D9D9D9"],
//         imgList:["7aa4407ee34ccda214b7078a1f2451401d157703.avif","5ed9eba3f19c7ad00b59bae325c200766d8c4da0.avif","0ab4c6692a3a7050d072583f333d658bc4dd1e71.avif","7c0726bc477ff533060a89b920dbe754f2a16622.avif"]
//     },
//     {
//         name:"2-piece Printed Sweatsuit",
//         id:18,
//         category:"kid",
//         isAvailable:false,
//         type:'shirt',
//         img:"e7ccb038ae64ed3fd017ab816b9adb51bce94201.avif",
//         price:"$29.75",
//         size:["XS","S","M"],
//         color:["B9C1E8","FFFFFF","1E1E1E","D9D9D9"],
//         imgList:["e7ccb038ae64ed3fd017ab816b9adb51bce94201.avif","42d4a88910c64e90fed6870791f53e7c7edceab1.avif","4c2be93751570f700719ff1594aa135784845ef4.avif"]
//     },
//     {
//         name:"Fleece Sweatshirt",
//         id:19,
//         category:"kid",
//         isAvailable:true,
//         type:'shirt',
//         img:"80b519027105d557485da4f535b1240694ad01cc.avif",
//         price:"$12.75",
//         size:["XS","S","M"],
//         color:["B9C1E8","FFFFFF","A6D6CA","D9D9D9"],
//         imgList:["80b519027105d557485da4f535b1240694ad01cc.avif","835acf145dc2dd113b4fe45de0e2be4c1d89e61f.avif"]
//     },
//     {
//         name:"2-piece Sweatshirt Set with Text Motif",
//         id:20,
//         category:"kid",
//         isAvailable:false,
//         type:'shirt',
//         img:"53f6f5cf7d497c2ffc2c4e862d2c617c4c137961.avif",
//         price:"$42.50",
//         size:["XS","S","M"],
//         color:["A6D6CA","1E1E1E","A9A9A9","D9D9D9"],
//         imgList:["505355ab844fbc81e4f3fd90b53d90240c2361c6.avif","6f4b80cf6814e4093b9e7a9bedf8a07226d35bbe.avif","bb5aeeab80508a77cf1b31c7b27c258afacbc9e8.avif"]
//     },
//     {
//         name:"Printed Hoodie",
//         id:21,
//         category:"kid",
//         isAvailable:true,
//         type:'hoodie',
//         img:"43120c6c28109be793b720179b9b1bfc428d68e8.avif",
//         price:"$21.50",
//         size:["XS","S","M"],
//         color:["B9C1E8","FFFFFF","A6D6CA","1E1E1E","D9D9D9"],
//         imgList:["43120c6c28109be793b720179b9b1bfc428d68e8.avif","14f940a48a0a520dca735d5bb22cb31a632b228c.avif","d63e4d18d50871b20d24a643d886871a666c31fa.avif","8fc948f0cf88ec7ad931e987fafcabce4ca33f08.avif"]
//     },
//     {
//         name:"Waterproof High Tops",
//         id:22,
//         category:"kid",
//         isAvailable:true,
//         type:'shoes',
//         img:"6aaf1c0d73638646c7687b49be6f583feeb1ff57.avif",
//         price:"$21.50",
//         size:["XS","S","M"],
//         color:["B9C1E8","FFFFFF","A6D6CA","D9D9D9"],
//         imgList:["f0bd39272711e04818db1f3d1f4b396aacbd2426.avif","6aaf1c0d73638646c7687b49be6f583feeb1ff57.avif","76078b6b3db54418fb102cf11d715a014d61992f.avif","026db6cd0b3bb67f0f2d5a59de8fcb03cc2a96c2.avif"]
//     },
    
//     {
//         name:"Regular Fit Denim Jacket with Corduroy Collar",
//         id:23,
//         category:"men",
//         isAvailable:false,
//         type:'jacket',
//         img:"96ce8eee96ad94e3e0ddc930e48918119b64a3e2.avif",
//         price:"$63.75",
//         size:["S","M","L","XL","XXL"],
//         color:["53403A","FFFFFF","A9A9A9","D9D9D9"],
//         imgList:["d91031642b9bf851e7254366f7363b96cafe0dff.avif","a6e9976066bdad1ff38c3be3f081e7a6cfe58655.avif","74a28c024bf5f5c00b1276798ce55d6a0b94cb0b.avif","086e4e25c3b195c125fef717b51c708ac6c7f344.avif"]
//     },
//     {
//         name:"Loose Fit Hooded Jacket",
//         id:24,
//         category:"men",
//         isAvailable:true,
//         type:'jacket',
//         img:"f80b7c3f8f72a9a1ab2201e5a2adfdab7d95cbb9.avif",
//         price:"$25.50",
//         size:["M","L","XL","XXL"],
//         color:["FFFFFF",'D1CAC4',"1E1E1E","A9A9A9","D9D9D9"],
//         imgList:["f80b7c3f8f72a9a1ab2201e5a2adfdab7d95cbb9.avif","85c812b7e36328d1736fbf1319627a5b89e244f7.avif","79f9a77eb28ac6334885886c3c7ccfbcecd41af4.avif","9c81b2fddaea3e4c624d1d756aa572f7748a4e3f.avif"]
//     },
//     {
//         name:"Baggy Jeans",
//         id:25,
//         category:"men",
//         isAvailable:true,
//         type:'jeans',
//         img:"6b7cebd8bae3a47b292072891cdd5ec9828a3922.avif",
//         price:"$34.00",
//         size:["XS","M","L","XL",],
//         color:["99ABB7","FFFFFF","A6D6CA","A9A9A9","D9D9D9"],
//         imgList:["2203bb3c23a39f3dd6978e64c84fe4cb5fbc796c.avif","245d18211d413cc48774a48c08fc492f383f9ead.avif","8cb9a7b94baf1abde37d7787b6f9b250ac73130f.avif","6b7cebd8bae3a47b292072891cdd5ec9828a3922.avif"]
//     },
//     {
//         name:"Loose Fit Sweatshirt",
//         id:26,
//         category:"men",
//         isAvailable:true,
//         type:'shirt',
//         img:"d2cf69d152a2dc798bc088fbd3deda45972359d9.avif",
//         price:"$14.00",
//         size:["XS","S","L","XL","XXL"],
//         color:["665C5B","FFFFFF","1E1E1E","A9A9A9","D9D9D9"],
//         imgList:["39ae269e8b9b6d4cd86bc067da09917dfa89ddda.avif","968379bd3498d9d14141dbd04a23f8d0bfd4890c (1).avif","d5ea40d2ebe377ade877c416a263847371a16c82.avif","d2cf69d152a2dc798bc088fbd3deda45972359d9.avif"]
//     },
//     {
//         name:"Loose Fit Vintage-Look Printed T-Shirt",
//         id:27,
//         category:"men",
//         isAvailable:true,
//         type:"t-shirt",
//         img:"f80e19d6e72a4402edde629815740a9943f52434.avif",
//         price:"$18.00",
//         size:["XS","M","L","XL"],
//         color:["B9C1E8","FFFFFF","A6D6CA","1E1E1E","A9A9A9","D9D9D9"],
//         imgList:["eb814a212874325c65dcdf6e1f2b781091e7e27a.avif","f80e19d6e72a4402edde629815740a9943f52434.avif","088f63ed6036df677712a06914d4590d2ebeca89.avif","73bfe4d986eb3c519c1369f987b2dbae44152fe7.avif"]
//     },
//     {
//         name:"Slim Fit Jacket",
//         id:28,
//         category:"men",
//         isAvailable:true,
//         type:'coat',
//         img:"668de27a857b92c76d5e780da1cea9da841be418.avif",
//         price:"$80.00",
//         size:["XS","M","L","XL","XXL"],
//         color:['72676D',"FFFFFF","A9A9A9","D9D9D9"],
//         imgList:["a24c3cad2016e2d702e32a566a1fa4d2b92f1dd5.avif","ad158f54aab00f59e6f3ef1a34a5f58cc8c073d4.avif","668de27a857b92c76d5e780da1cea9da841be418.avif","390bee10c8153d8560a0c4b38f03106845f93709.avif"]
//     },
//     {
//         name:"Basic Slim Fit T-Shirt",
//         id:29,
//         category:"men",
//         isAvailable:false,
//         type:"t-shirt",
//         img:"Rectangle 3.jpg",
//         price:"$10.00",
//         size:["XS","S","L","XL","XXL"],
//         color:["B9C1E8","FFFFFF","A6D6CA","1E1E1E","A9A9A9","D9D9D9"],
//         imgList:["Group 68.jpg","Rectangle 3.jpg","97894b48f38b24954933335875fa6ab07316e751.avif","226c8564dbe8a170df267ff540cd07b906382a54.avif"]
//     },
//     {
//         name:"Basic Heavy Weight T-shirt",
//         id:30,
//         category:"men",
//         isAvailable:false,
//         type:"t-shirt",
//         img:"Rectangle 3 (4).jpg",
//         price:"$11.00",
//         size:["XS","S","M","L","XL"],
//         color:["B9C1E8","FFFFFF","A6D6CA","1E1E1E","A9A9A9","D9D9D9"],
//         imgList:["Group 68.jpg","Group 69.jpg","Rectangle 3 (4).jpg","226c8564dbe8a170df267ff540cd07b906382a54.avif"]
//     },
//     {
//         name:"Full Sleeve Zipper",
//         id:31,
//         category:"men",
//         isAvailable:false,
//         type:"t-shirt",
//         img:"Rectangle 3 (1).jpg",
//         price:"$11.00",
//         size:["XS","S","M","L","XXL"],
//         color:["B9C1E8","FFFFFF","A6D6CA","1E1E1E","A9A9A9","D9D9D9"],
//         imgList:["Group 68.jpg","Group 66.jpg","Rectangle 3 (1).jpg","226c8564dbe8a170df267ff540cd07b906382a54.avif"]
//     },
//     {
//         name:"Full Sleeve Zipper",
//         id:32,
//         category:"men",
//         isAvailable:true,
//         type:"t-shirt",
//         img:"Rectangle 3 (3).jpg",
//         price:"$14.00",
//         size:["S","M","L","XL","XXL"],
//         color:["B9C1E8","FFFFFF","A6D6CA","1E1E1E","A9A9A9","D9D9D9"],
//         imgList:["Group 68.jpg","Group 67.jpg","Rectangle 3 (3).jpg","226c8564dbe8a170df267ff540cd07b906382a54.avif"]
//     },
//     {
//         name:"Full Sleeve Zipper",
//         id:33,
//         category:"men",
//         isAvailable:true,
//         type:"t-shirt",
//         img:"Rectangle 3 (6).jpg",
//         price:"$14.00",
//         size:["XS","S","M","L","XL"],
//         color:["B9C1E8","FFFFFF","A6D6CA","1E1E1E","A9A9A9","D9D9D9"],
//         imgList:["Group 68.jpg","97894b48f38b24954933335875fa6ab07316e751.avif","Rectangle 3 (6).jpg","226c8564dbe8a170df267ff540cd07b906382a54.avif"]
//     },
//     {
//         name:"Full Sleeve Zipper",
//         id:34,
//         category:"men",
//         isAvailable:true,
//         type:'t-shirt',
//         img:"Frame 19.jpg",
//         price:"$13.00",
//         size:["XS","S","L","XL","XXL"],
//         color:["B9C1E8","FFFFFF","A6D6CA","1E1E1E","A9A9A9","D9D9D9"],
//         imgList:["Group 67.jpg","97894b48f38b24954933335875fa6ab07316e751.avif","Frame 19.jpg","226c8564dbe8a170df267ff540cd07b906382a54.avif"]
//     },
//     {
//         name:"Ankle-High Sock Boots",
//         id:35,
//         category:"women",
//         isAvailable:true,
//         type:'shoes',
//         img:"8830ce106eb4f3096ea8ebab776ce7b2ecc67b51.avif",
//         price:"$29.75",
//         size:["M","L","XL"],
//         color:["B9C1E8","FFFFFF",'1A1A1A',"A6D6CA","3F4F5F"],
//         imgList:["778795220a8a4798224f17273c6dbbee4a8f3280.avif","fe3df222964826b826d9b43a3d3d050dc64c59ff.avif","b26c0e64621f4342ebf9a5fe014361b809e820f3.avif","8830ce106eb4f3096ea8ebab776ce7b2ecc67b51.avif"]
//     },
//     {
//         name:"Loose Fit Hoodie",
//         id:36,
//         category:"men",
//         isAvailable:true,
//         type:'hoodie',
//         img:"c4e2c7eec29312aecdb5b0c95f305294c1e00cb8.avif",
//         price:"$34.99",
//         size:["S","M","L","XL","XXL"],
//         color:["FFFFFF","1E1E1E","A9A9A9","D9D9D9"],
//         imgList:["3ba43e47fc89489033679dd07386d65d96813d87.avif","f1c03298fe1c072d1002ef556b1e1d5736434fc3.avif","b02724d33d42c2f49e95ce7bfff2300221ebd094.avif","5e3824c420a0dd843113fa914e33b6ca39a38e76.avif"]
//     },
//     {
//         name:"Loose Fit Printed Hoodie",
//         id:37,
//         category:"men",
//         isAvailable:true,
//         type:'hoodie',
//         img:"3b729fa2607dc02ca88567eba1c7e45febb78093.avif",
//         price:"$49.99",
//         size:["XS","S","M","L","XL"],
//         color:["838383","FFFFFF","A6D6CA","1E1E1E","D9D9D9"],
//         imgList:["8d4e68add933cf58bd5fe6239368626f11c19c96.avif","46194d553dff6dce34941220e6507e1573aea976.avif","3bc162ef152d575317a097d4940e038f6414cd68.avif","3b729fa2607dc02ca88567eba1c7e45febb78093.avif"]
//     },
//     {
//         name:"Loose Fit Printed Hoodie",
//         id:38,
//         category:"men",
//         isAvailable:true,
//         type:'hoodie',
//         img:"c45af73f7ee87f5c5a03aed164a517d91faec108.avif",
//         price:"$34.99",
//         size:["S","M","L","XL","XXL"],
//         color:["FFFFFF","A6D6CA","1E1E1E","A9A9A9","D9D9D9"],
//         imgList:["d70400a271de0b0f006783d644eafe2e5edcde9d.avif","af515436e08098f8f16b2d5574dba0978bcb5872.avif","9d1eccc32d45b02f0a225e7295b90510158c49d8.avif","96209db257574fa8b0d203d8aded69d8c9ffe8cd.avif"]
//     },
//     {
//         name:"Appliquéd Cap",
//         id:39,
//         category:"men",
//         isAvailable:false,
//         type:'caps',
//         img:"fba00c779dd023326a0c35cdda62975f85746c21.avif",
//         price:"$14.99",
//         size:["S","M","L"],
//         color:["FFFFFF","1E1E1E","A9A9A9","D9D9D9"],
//         imgList:["7ac94e271030c82f3134334515a725aded9fc993.avif","fba00c779dd023326a0c35cdda62975f85746c21.avif"]
//     },
//     {
//         name:"Loose Fit Hoodie",
//         id:40,
//         category:"men",
//         isAvailable:true,
//         type:'hoodie',
//         img:"07efee4ec26c00fbc6efddf31d1ec0bb3569ec85.avif",
//         price:"$49.99",
//         size:["S","M","L","XL","XXL"],
//         color:["CBC2B3","FFFFFF","1E1E1E","A9A9A9","D9D9D9"],
//         imgList:["f0d5d7e15e7e29bf37c3f01a0d51e5e6ac1f9073.avif","a976ee3ed442c4d2ab7473c0de462f710b07d4ac.avif","ca0a56fbdb9006f207e7685618fbab479d7d90f4.avif","f90e736fcc06ab118997a5fd63a533717fd3891c.avif"]
//     },
//     {
//         name:"Cotton Cap with Embroidery",
//         id:41,
//         category:"men",
//         isAvailable:true,
//         type:'caps',
//         img:"20cd13e29495d92a346b5cdddb879b0774dc9a1e.avif",
//         price:"$9.99",
//         size:["XS","S","M","L","XL","XXL"],
//         color:["858F99","FFFFFF","A6D6CA","D9D9D9"],
//         imgList:["2fe775dffb08e3347381bee7507e8b9d0968a6f2.avif","20cd13e29495d92a346b5cdddb879b0774dc9a1e.avif"]
//     },
//     {
//         name:"Loose Fit Printed T-shirt",
//         id:42,
//         category:"men",
//         isAvailable:true,
//         type:'t-shirt',
//         img:"c047bd6175c88dc14d18b945dd6cb10e127720b7.avif",
//         price:"$15.99",
//         size:["XS","S","M","L","XL"],
//         color:["FFFFFF","1E1E1E","A9A9A9","D9D9D9"],
//         imgList:["3223e92632170892bd9ae221bf63a9436ab18af7.avif","a3517b1c6838400296821688e004c304374969e4.avif","6340e05308897f1bb8e53272960d08d7112fd8b3.avif","c047bd6175c88dc14d18b945dd6cb10e127720b7.avif"]
//     },
    
//     {
//         name:"Sneakers",
//         id:43,
//         category:"men",
//         isAvailable:true,
//         type:'shoes',
//         img:"379132ebe213a3050e422ce3396da50065a9ea83.avif",
//         price:"$49.99",
//         size:["S","M","L","XL"],
//         color:["B9C1E8","FFFFFF","A9A9A9","D9D9D9"],
//         imgList:["e27b1cac258204fa55c7ca6b97ab8c0e869e2144.avif","42b2fec1944de280706480ad142b9e1c3b771a5a.avif","c9d751981b524f0a728bbe1ab47f4b8162e19214.avif","379132ebe213a3050e422ce3396da50065a9ea83.avif"]
//     },
//     {
//         name:"Loose Fit Printed T-shirt",
//         id:44,
//         category:"men",
//         isAvailable:true,
//         type:'t-shirt',
//         img:"7adcd9342c1009a7d56f32801c47a55ec1b0c867.avif",
//         price:"$10.99",
//         size:["S","M","L","XL","XXL"],
//         color:["B9C1E8","FFFFFF","A6D6CA","A9A9A9","D9D9D9"],
//         imgList:["0309b2177ef3541839fbae5df42b5865e045ba25.avif","c323e0931c9083fc716bc3621fdd7ca01267de91.avif","453149cfd9789def90f392e4e655960ae5bcbe83.avif","3a239549c7bdec6f3fe4fc646566a3a184226f5f.avif"]
//     },
//     {
//         name:"Wool-Blend Jacket",
//         id:45,
//         category:"women",
//         isAvailable:true,
//         type:'jacket',
//         img:"784927f3144964ec5430b5bf4be3e07d51ef3b34.avif",
//         price:"$49.99",
//         size:["XS","S","M","L","XL"],
//         color:["9B908A","FFFFFF","A6D6CA","D9D9D9"],
//         imgList:["5eba5a94ceec73c1345523a210c629a6993c2373.avif","28fec7b61c18fcf655b1039c4594405a4e0e2bae.avif","cfcadeb2dd4b96c6d27e7d9087f299c9fad7af32.avif","d9337edafce3458fcf9d1efd3557c28f8979300a.avif"]
//     },
//     {
//         name:"Twill Blazer",
//         id:46,
//         category:"women",
//         isAvailable:true,
//         type:'coat',
//         img:"98c50360880f7eaf017ef3502ce5ef970761122f.avif",
//         price:"$49.99",
//         size:["S","M","L","XL","XXL"],
//         color:["675E59","FFFFFF","C2B2A3","A9A9A9","D9D9D9"],
//         imgList:["00d147017ee37464077ecfb4f063a31bbc95b52a.avif","3ba148b6ab7a8858acfd3d48ac4ab120801a2432.avif","801bfd7dc4c2d1176c424cdbe95c8a01b684b740.avif","23c06c917e2a1c95e7e7614a0adf0621b66a8a59.avif"]
//     },
//     {
//         name:"Oversized Turtleneck Sweater",
//         id:47,
//         category:"women",
//         isAvailable:true,
//         type:'sweater',
//         img:"4160e1d0fdefece15c37a6f9f21f1ffd1344de55.avif",
//         price:"$34.99",
//         size:["M","L","XL","XXL"],
//         color:["DEE0E0","FFFFFF","A6D6CA","A9A9A9","D9D9D9"],
//         imgList:["9981984d0242e03cd48213fefeed9a2e212cde41.avif","be95bc67c3c191b87e6fc15d5257b4f02a79bef3.avif","8a9fd0b9749a7f3b40c4e07260f248b635e92a65.avif","e833573e3cf25b1c0385caf14e4e6bb53ecc57a6.avif"]
//     },
//     {
//         name:"Knit Sweater",
//         id:48,
//         category:"women",
//         isAvailable:true,
//         type:'sweater',
//         img:"e709eaa87942bc07a4df2cf1579d258c60c7088c.avif",
//         price:"$21.99",
//         size:["XS","S","M","L","XL"],
//         color:["CEBDB1","FFFFFF","898176","D9D9D9"],
//         imgList:["cfa4c362bccc8914cead64be20c3988d68a25d27.avif","eb5388ef9a3214dd71afdb9fb091112722875fa3.avif","b4a5a3fc8350960c2b0be2b20b2e286d691535e5.avif","8ad79350b51da53eadd0a0e9ffa91488d8093f01.avif"]
//     },
//     {
//         name:"Loose-Fit Cardigan",
//         id:49,
//         category:"women",
//         isAvailable:true,
//         type:'cardigan',
//         img:"e41681776e7b23e120e0b205814942746506095f.avif",
//         price:"$24.99",
//         size:["XS","M","L","XL","XXL"],
//         color:["FFFFFF","1E1E1E","A9A9A9","D9D9D9"],
//         imgList:["17366a9c5d6fae42ce74db451ba0130f23b8f2ae.avif","fb5049507418f29bc44ae3425bac7005a4ece08e.avif","b5843338e3530efe265e9b1e7e4d887e839d2552.avif","988d9f428a04073379aa2a4fe06edf81541f1d46.avif"]
//     },
//     {
//         name:"Flared Knit Skirt",
//         id:50,
//         category:"women",
//         isAvailable:true,
//         type:'skirt',
//         img:"9a4df46c828358a39ef39e273207097edcf74963.avif",
//         price:"$49.99",
//         size:["S","M","L","XL","XXL"],
//         color:["AE8D72","FFFFFF","94765E","D9D9D9"],
//         imgList:["28db7e50d2364f1f84c06e8a5065eac418f0ce9e.avif","4c8b45b54be3273dfb282a4a495d9e32bc439666.avif","c40c01563b90bf180bdbc89671591e68c4b6847e.avif","91a6a1d58e230b1345c33dc4b870fbee39887c86.avif"]
//     },


// ];

//Hero List
export const heroList:HeroList[] =[
    {
        id: new Date().getTime()+1,
        img:"Rectangle 12.jpg",
    },
    {
        id:new Date().getTime()+2,
        img:"Rectangle 13.jpg",
    },
    {
        id:new Date().getTime()+3,
        img:"Rectangle 13.jpg",
    },
];

//Home Page List
// export const homeList:ClothList[] = [
    
//         {
//             name:"Embroidered  Shirt",
//             id:new Date().getTime(),
//             category:"Shirt",
//             type:'t-shirt',
//             img:"Group 66.jpg",
//             price:29.7,
//             isAvailable:true,
//             size:["XS","S","M","L","XL","XXL"],
//             color:["B9C1E8","FFFFFF","A6D6CA","1E1E1E","A9A9A9","D9D9D9"],
//             imgList:["Group 67.jpg","Group 66.jpg","226c8564dbe8a170df267ff540cd07b906382a54.avif","97894b48f38b24954933335875fa6ab07316e751.avif"]
//         },
//         {
//             name:"Basic Slim Fit T-Shirt",
//             id:new Date().getTime(),
//             category:"T-Shirt",
//             type:'t-shirt',
//             isAvailable:true,
//             img:"Group 67.jpg",
//             price:29.75,
//             size:["XS","S","M","L","XL","XXL"],
//             color:["B9C1E8","FFFFFF","A6D6CA","1E1E1E","A9A9A9","D9D9D9"],
//             imgList:["Group 67.jpg","Group 68.jpg","226c8564dbe8a170df267ff540cd07b906382a54.avif","97894b48f38b24954933335875fa6ab07316e751.avif"]
//         },
//         {
//             name:"Blurred Print T-Shirt",
//             id:new Date().getTime(),
//             category:"T-Shirt",
//             type:'t-shirt',
//             isAvailable:true,
//             img:"Group 68.jpg",
//             price:29.75,
//             size:["XS","S","M","L","XL","XXL"],
//             color:["B9C1E8","FFFFFF","A6D6CA","1E1E1E","A9A9A9","D9D9D9"],
//             imgList:["Group 67.jpg","Group 68.jpg","226c8564dbe8a170df267ff540cd07b906382a54.avif","97894b48f38b24954933335875fa6ab07316e751.avif"]
//         },
//         {
//             name:"Full Sleeve Zipper",
//             isAvailable:true,
//             id:new Date().getTime(),
//             category:"T-Shirt",
//             type:'t-shirt',
//             img:"Group 69 (1).jpg",
//             price:29.75,
//             size:["XS","S","M","L","XL","XXL"],
//             color:["B9C1E8","FFFFFF","A6D6CA","1E1E1E","A9A9A9","D9D9D9"],
//             imgList:["Group 66.jpg","Group 69.jpg","226c8564dbe8a170df267ff540cd07b906382a54.avif","97894b48f38b24954933335875fa6ab07316e751.avif"]
//         },
    
// ];

//Fashion Design
export const fashionDesign:FasionDesign[] = [
    {
        id: new Date().getTime(),
        img:"Rectangle 16.jpg", 
         alignstyle:"",
    },
    {
        id: new Date().getTime(),
        img:"Rectangle 14.jpg", 
         alignstyle:"",
    },
    {
        id: new Date().getTime(),
        img:"Rectangle 12.jpg", 
         alignstyle:"",
    },
    // {
    //     id: new Date().getTime(),
    //     img:"Rectangle 15.jpg", 
    //      alignstyle:"",
    // },
];

//Collection Nav
export const collectionNav:string[] = ["ALL","Men","Women","KID"];

//Language
export const webLang:string[] = ["ENG","ESP","SVE"];

//Info
export const webInfo:string[] = ["pricing","about","contact"];

//Product Btn List
export const productBtn:string[] = ["new","shirt","jacket","t-shirt","jeans","coat"];

// let clothList:ClothList[] = [];
// const fetchCloth = async () => {
//     try {
//         const fetchProduct = await fetch('http://localhost:3000/api/clothapi');
//         const productData:ClothList[] = await fetchProduct.json();
//         clothList = productData;
//     } catch (error) {
//         throw new Error(`${error}: 'Api not Found'`);
//     }
// };
// // const clothList =  await fetchCloth();
// (() => {
//     fetchCloth();
// })();

//Filter the Men Product
// export  const menProduct = clothList.filter((e) => {
//     return e.productcategory === "men";
// });

// //Map Type in Men Product
// const menProductType = menProduct.map((e) => {
//     return e.producttype
// });
// //Remove Duplicate 
// export const removDuplicateType:string[] = [... new Set(menProductType)];

// //Filter the Women Product
// export  const womenProduct = clothList.filter((e) => {
//     return e.productcategory === "women";
// });
// //Map Type in Women Product
// const womenProductType = womenProduct.map((e) => {
//     return e.producttype;
// });
// //Remove Duplicate 
// export const removDuplicateTypeWomen:string[] = [... new Set(womenProductType)];
// // console.log(removDuplicateType) 

// //Filter the Kids Product
// export  const kidProduct = clothList.filter((e) => {
//     return e.productcategory === "kid";
// });
// //Map Type in Women Product
// const kidProductType = kidProduct.map((e) => {
//     return e.producttype;
// });
// //Remove Duplicate 
// export const removDuplicateTypeKid:string[] = [... new Set(kidProductType)];
// console.log(removDuplicateType) 

//Size For Sidebar
export const sideBarSize:string[] = ["XS","S","M","L","XL","XXL"];

//Header For Checkout
export const headerCheckout:List[] = [
    {
        name:'information',
        link:'/information',
    },
    {
        name:'shipping',
        link:'/shipping',
    },
    {
        name:'payment',
        link:'/payment',
    },
];

export const cart:ClothList = {
    productname:"Loose Fit Vintage-Look Printed T-Shirt",
    productid:"5",
    productcategory:"men",
    producttype:'t-shirt',
    productavaiableornot:true,
    productimage:"f80e19d6e72a4402edde629815740a9943f52434.avif",
    productprice:18.00,
    productsizes:["XS","S","M","L","XL","XXL"],
    productcolors:[{hex:"B9C1E8",_key:'1'},{hex:"FFFFFF",_key:'2'},{hex:"A6D6CA",_key:'3'},{hex:"1E1E1E",_key:'4'},{hex:"A9A9A9",_key:'5'},{hex:"D9D9D9",_key:'6'}],
    productimagelist:[{imageid:1,productimage:"eb814a212874325c65dcdf6e1f2b781091e7e27a.avif"},{imageid:2,productimage:"eb814a212874325c65dcdf6e1f2b781091e7e27a.avif"},{imageid:3,productimage:"eb814a212874325c65dcdf6e1f2b781091e7e27a.avif"},{imageid:4,productimage:"eb814a212874325c65dcdf6e1f2b781091e7e27a.avif"},]
};
