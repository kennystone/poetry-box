import localFont from 'next/font/local'
export const BookMania = localFont({
    src: [
        {
            path: './Bookmania-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './Bookmania-Regular.woff',
            weight: '400',
            style: 'normal',
        },
    ],
    fallback: ['Georgia', 'serif']
})