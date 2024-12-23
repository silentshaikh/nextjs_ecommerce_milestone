export const fashionDesign = {
    name:'fashiondesign',
    title:'Fashion Design',
    type:'document',
    fields:[
        {
            name:'fashionheading',
            title:'Fashion Heading',
            type:'string',
        },
        {
            name:'fashioncontent',
            title:'Fashion Content',
            type:'text',
        },
        {
            name:'fashionimglist',
            title:'Fashion Image List',
            type:'array',
            of:[{type:'object'
                ,
                fields:[
                    {
                        name:'imageid',
                        title:'Image ID',
                        type:'number'
                    },
                    {
                        name:'imagename',
                        title:'Image Name',
                        type:'image'
                    },
                    {
                        name:'imagetitle',
                        title:'Image Title',
                        type:'string'
                    },
                  
                ]
            }]
        }, 
    ]
}