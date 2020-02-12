import Header from '../components/Header';
import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';


// export default function Index() {
//     return (
//         <div>
//             <Header />
//             <Link href="/about" title="About Page">
//                 <a>About Page</a>
//             </Link>
//             <p>Hello Next.js</p>
//         </div>
//     );
// }

// export default function Index() {
//     return (
//         <withLayout>
//             <p>Hello World!</p>
//         </withLayout>
//     );
// }

// const Page = () => <p>Hello Next.js</p>;
//
// export default withLayout(Page);

// const indexPageContent = <p>Hello Next.js</p>
//
// export default function Index() {
//     return <Layout content={indexPageContent}/>
// }

// const PostLink = props => (
//     <li>
//         <Link href={`/post?title=${props.title}`}>
//             <a>{props.title}</a>
//         </Link>
//     </li>
// );

// const PostLink = props => (
//     <li>
//         <Link href="/p/add/[id]" as={`/p/add/${props.id}`}>
//             <a>{props.id}</a>
//         </Link>
//     </li>
// );
//
// export default function Blog() {
//     return (
//         <Layout>
//             <h1>My Blog</h1>
//             <ul>
//                 <PostLink id="hello-nextjs" />
//                 <PostLink id="learn-nextjs" />
//                 <PostLink id="deploy-nextjs" />
//             </ul>
//         </Layout>
//     );
// }

// const Index = props => (
//     <Layout>
//         <h1>Batman TV Shows</h1>
//         <ul>
//             {props.shows.map(show => (
//                 <li key={show.id}>
//                     <Link href="/p/[id]" as={`/p/${show.id}`}>
//                         <a>{show.name}</a>
//                     </Link>
//                 </li>
//             ))}
//         </ul>
//     </Layout>
// )
//
// Index.getInitialProps = async function() {
//     const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//     const data = await res.json()
//
//     console.log(`Show data fetched server. Count: ${data.length}`)
//
//     return {
//         shows: data.map(entry => entry.show)
//     }
// }
//
// export default Index

function getPosts() {
    return [
        { id: 'hello-nextjs', title: 'Hello Next.js' },
        { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
        { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
    ];
}

const PostLink = ({ post }) => (
    <li>
        <Link href="/p/[id]" as={`/p/${post.id}`}>
            <a>{post.title}</a>
        </Link>
        <style jsx>{`
          li {
            list-style: none;
            margin: 5px 0;
          }
    
          a {
            text-decoration: none;
            color: green;
            font-family: 'Avenir';
          }
    
          a:hover {
            opacity: 0.6;
          }
        `}</style>
    </li>
)

export default function Blog() {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                {/*{getPosts().map(post => (*/}
                {/*    <li key={post.id}>*/}
                {/*        <Link href="/p/[id]" as={`/p/${post.id}`}>*/}
                {/*            <a>{post.title}</a>*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*))}*/}
                {getPosts().map(post => (
                    <PostLink key={post.id} post={post} />
                ))}
            </ul>
            <style jsx>{`
                h1,
                a {
                    font-family: "Arial";
                }
                ul {
                    padding: 0;
                }
                li {
                    list-style: none;
                    margin: 5px 0;
                }
                a {
                    text-decoration: none;
                    color: blue;
                }
                a:hover {
                    opacity: 0.6;
                }
            `}</style>
        </Layout>
    )
}

