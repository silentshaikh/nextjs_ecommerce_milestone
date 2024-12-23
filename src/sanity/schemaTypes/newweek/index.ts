export const newWeekContent = {
    name:'newweekcontent',
    title:'New Week Content',
    type:'document',
    fields:[
     {
        name:'weekheading',
        title:'Week Heading',
        type:'string',
     },
     {
        name:'headincount',
        title:'Heading Nots',
        type:'number',
     },
     {
      name:'weekimglist',
      title:'Week Image List',
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
              {
               name:'producttype',
               title:'Product Type',
               type:'string'
              }
          ]
      }]
  }, 
    ]
};