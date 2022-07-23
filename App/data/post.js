import { USER } from "./users";
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'


const GET_DATA = gql`
  query{
    cvs {
        name
        content
        caption
        owner {
          id
          username
        }
      }
  }
`;


const [cvs, { data, loading, error }] = useQuery(GET_DATA);


export const POSTS = [
    
    {
        imageURL:data.cvs.content,
        user:USER[0].user,
        likes:1,
        caption:'Checkout my CV',
        profile_picture:USER[0].image,
        comments:[
            {
                user:'Nam',
                comment:'Amazing! Good job'
            },
            {
                user:'Vinh',
                comment:'Amazing!'
            },
        ]
    },
    {
        imageURL:data.cvs.content,
        user:USER[1].user,
        likes:1,
        caption:'Checkout my CV part2',
        profile_picture:USER[1].image,
        comments:[
            {
                user:'An',
                comment:'CV tốt quá em ơi! Liên hệ ngay công ty của chị nhé'
            },
            {
                user:'Bảo',
                comment:'Liên hệ ngay với anh'
            },
        ]
    }
]