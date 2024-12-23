export const checkOutContent = {
    name:'checkoutcontent',
    title:'Checkout Content',
    type:'document',
    fields:[
        {
            name:'checkoutheading',
            title:'Checkout Heading',
            type:'string'
        },
        {
            name:'checkoutlist',
            title:'Checkout List',
            type:'array',
            of:[{type:'object'
                ,
                fields:[
                    {
                        name:'itemid',
                        title:'Item ID',
                        type:'number'
                    },
                    {
                        name:'listitem',
                        title:'ListItem',
                        type:'string'
                    },
                ]
            }]
        },
        {
            name:'contactinfo',
            title:'Contact Info',
            type:'string'
        },
        {
            name:'shippingaddress',
            title:'Shipping Address',
            type:'string'
        },
        {
            name:'shippingbutton',
            title:'Shipping Button',
            type:'string',
        },
        {
            name:'emaillabel',
            title:'Email Label',
            type:'string'
        },
        {
            name:'numberlabel',
            title:'Number Label',
            type:'string'
        },
        {
            name:'firstnamelabel',
            title:'First Name Label',
            type:'string'
        },
        {
            name:'lastnamelabel',
            title:'Last Name Label',
            type:'string'
        },
        {
            name:'statelabel',
            title:'State Label',
            type:'string'
        },
        {
            name:"addresslabel",
            title:"Address Label",
            type:'string'
        },
        {
            name:"citylabel",
            title:"City Label",
            type:'string'
        },
        {
            name:"postalcodelabel",
            title:"Postal Code Label",
            type:'string'
        },



    ]
}