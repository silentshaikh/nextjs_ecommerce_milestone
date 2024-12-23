export const footerContent ={
    name:'footercontent',
    title:'Footer Content',
    type:'document',
    fields:[
        {
            title:'Info Heading',
            name:'infoheading',
            type:'string'
        }, 
        {
            name:'infolist',
            title:'Info List',
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
            title:'Language Heading',
            name:'languageheading',
            type:'string'
        },
        {
            name:'languagelist',
            title:'Language List',
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
    ]
}