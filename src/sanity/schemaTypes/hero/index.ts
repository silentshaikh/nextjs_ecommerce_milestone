export const heroContent = {
    name:'herocontent',
    title:'Hero Content',
    type:'document',
    fields:[
        {
            name:'heronavlist',
            title:'Hero Navigation List',
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
            name:'inputplaceholder',
            title:'Input Placeholder',
            type:'string',
        },
        {
            name:'inputimage',
            title:'Input Image',
            type:'image',
        },
        {
            name:'mainheading',
            title:'Main Heading',
            type:'string',
        },
        {
            name:'subheading',
            title:'Sub Heading',
            type:'string',
        },
        {
            name:'heroimglist',
            title:'Hero Image List',
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
                    }
                ]
            }]
        },
        {
            name:'herobutton',
            title:'Hero Button',
            type:'string',
        }
    ]
}