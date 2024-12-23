export const xivCollection = {
    name:'xivcollection',
    title:'XIV Collection',
    type:'document',
    fields:[
        {
            name:'collectionheading',
            title:'Collection Heading',
            type:'string'
        },
        {
            name:'collectionnav',
            title:'Collection Nav',
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
            name:'collectfilter',
            title:'Colect Filter',
            type:'string',
        },
        {
            name:'collectsort',
            title:'Colect Sort',
            type:'string',
        },
        {
            name:'lesstomore',
            title:'Less To More',
            type:'string'
        },
        {
            name:'moretoless',
            title:'More To Less',
            type:'string'
        },
        // {
        //     name:'collectionimglist',
        //     title:'Collection Image List',
        //     type:'array',
        //     of:[{type:'object'
        //         ,
        //         fields:[
        //             {
        //                 name:'imageid',
        //                 title:'Image ID',
        //                 type:'number'
        //             },
        //             {
        //                 name:'imagename',
        //                 title:'Image Name',
        //                 type:'image'
        //             },
        //             {
        //                 name:'imagetitle',
        //                 title:'Image Title',
        //                 type:'string'
        //             },
        //             {
        //              name:'producttype',
        //              title:'Product Type',
        //              type:'string'
        //             }
        //         ]
        //     }]
        // }, 
        


    ]
}