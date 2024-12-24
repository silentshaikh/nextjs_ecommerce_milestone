// import { Rule } from "sanity";

export const productCardContent = {
    name:'productcardcontent',
    title:'Product Card Content',
    type:'document',
    fields:[
        {
            name:'productname',
            title:'Product Name',
            type:'string'
        },
        {
            name:'productid',
            title:'Product ID',
            type:'slug',
            options:{
                source:'productname',
                slugify:(slug:string) => slug.toLowerCase().replace(/\s+/g,"-").slice(0,50), 
            }

        },
        {
            name:'productprice',
            title:'Product Price',
            type:'number'
        },
        {
            name:'productquantity',
            title:'Product Quantity',
            type:'number'
        },
        {
            name:'productimage',
            title:'product Image',
            type:'image',
              
        },
        {
            name:'producttype',
            title:'Product Type',
            type:'string',
        },
        {
            name:'productavaiableornot',
            title:'Product Avaiable OR Not',
            type:'boolean'
        },
        {
            name:'productcategory',
            title:'Product Category',
            type:'string',
        },
        {
            name:'productimagelist',
            title:'product Image List',
            type:'array',  
            of:[{type:'object',
                fields:[
                    {
                        name:'imageid',
                        title:'Image ID',
                        type:'number'
                    },
                    {
                        name:'productimage',
                        title:'Product Image',
                        type:'image'
                    },

                ]
            }]
        },
        {
            name:'productcolors',
            title:'Product Colors',
            type:'array',
            of:[{type:'color'}]
        },
        {
            name:'productsizes',
            title:'Product Sizes',
            type:'array',
            of:[{type:'string'}]
        },


    ]
}