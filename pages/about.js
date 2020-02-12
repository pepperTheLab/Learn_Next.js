import Header from '../components/Header';
import withLayout from "../components/MyLayout";
import Layout from "../components/MyLayout";

// export default function About() {
//     return (
//         <div>
//             <Header />
//             <p>This is the about page</p>
//         </div>
//     );
// }

// export default function Index() {
//     return (
//         <withLayout>
//             <p>This is the about page</p>
//         </withLayout>
//     );
// }

export default function About() {
    return (
        <Layout>
            <p>This is the about page</p>
        </Layout>
    )
}
