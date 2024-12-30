// import { title } from "process";

export const  headerContent =  {
    name:'headercontent',
    type:'document',
    title:'Header Content',
    fields:[
        {
            name:'logo',
            title:'Logo',
            type:'image',
        },
        {
            name:'titlelogo',
            title:'Logo Title',
            type:'string'
        },
        {
            name:'navtoggicon',
            title:'NavList Toggle',
            type:'image'
        },
        {
            name:'titletoggicon',
            title:'Title Toggle Icon',
            type:'string'
        },

        {
            name:'navlist',
            title:'Nav List',
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
                    {
                        name:'itemlink',
                        title:'Item Link',
                        type:'string'
                    }
                ]
            }]
        },
        {
            name:'cartname',
            title:'Cart Name',
            type:'string'
        },
        {
            name:'cartimgone',
            title:'Cart Image One',
            type:'image',
        },
        {
            name:'cartimgtwo',
            title:'Cart Image Two',
            type:'image',
        },
       
    ]
}