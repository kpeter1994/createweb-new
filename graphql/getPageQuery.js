import gql from 'graphql-tag';


export const getPageQuery  = gql`
query PageQuery($id: ID!) {
  page(id: $id){
    data{
      attributes{
        title
        slug
        seo{
          canonical
          MetaTitle
          MetaDescription
          MetaImege{data{attributes{hash alternativeText}}}
          StructuredData
        }
        blocks{
          ... on ComponentBlockHero{
            id
            title
            text
            link{id label href theme}
            image{data{attributes{url alternativeText}}}
            slider{images{data{attributes{url alternativeText}}}}
          }
          ... on ComponentBlockServices{
            id
            title
            text
            tabs{
              name
              title
              text
              image{data{attributes{url alternativeText}}}
            }
          }
          ... on ComponentBlockCta{
            title
            text
            ctaLink: link { id label href theme }
          }
          ... on ComponentBlockCards{
            title
            text
            card{
              title
              text
              image{data{attributes{url alternativeText}}}
            }
          }
          ... on ComponentBlockContent{
            title
            text
            image{data{attributes{url alternativeText}}}
          }
          ... on ComponentBlockTestimonial{
            title
            text
            card{
              title
              text
              image{data{attributes{alternativeText url}}}
            }
          }
          ... on ComponentBlockFaq{
            title
            text
            accordion{
              id
              title
              text
            }
          }
          ... on ComponentBlockCategory{
            id
            title
            text
            blogs{
              data{
                id 
                attributes{
                  slug
                  title
                  description
                  image{data{attributes{url alternativeText}}}
                }
              }
            }
            blogLink: link{id label href theme}
          }
          ... on ComponentBlockMainBlog{
            blog{data{attributes{
              title
              image{data{attributes{url alternativeText}}}
              description
              slug
            }}}
          }
          ... on ComponentBlockPrice{
            id
            title
            text
            card{
              title
              name
              theme
              text
              price
            }
            
          }
          ... on ComponentBlockFaq{
            id
            title
            text
            accordion{id text text}
          }
          ... on ComponentBlockFormPage{
            form{
              data{
                attributes{
                  title
                  url
                  text
                \tformComponent
                  {
                    ... on ComponentFormInput{
                      id
                      name
                      label
                      type
                    }
                  }
                }
              }
            }
          }
        
        }
        
      }
    }
  }
}

`