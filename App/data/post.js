import { USER } from "./users";

export const POSTS = [
    {
        imageURL:'https://cdn.unenvironment.org/2022-03/field-ge4d2466da_1920.jpg',
        user:USER[0].user,
        likes:7870,
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
        imageURL:'https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg',
        user:USER[1].user,
        likes:78,
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