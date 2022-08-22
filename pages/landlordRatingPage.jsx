import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Ratemylandlord from "../components/Ratemylandlord";
import Footer from "../components/Footer";
import { withRouter } from "next/router";

function Home({ router }) {
  return (
    <div>
      <Head>
        <title>Rate My Landlord</title>
        <meta name="The Contender for HT6" content="Created by a Webdev Team" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Ratemylandlord name={router.query.name} />
      <Navbar />
      <Footer />
    </div>
  );
}

export default withRouter(Home);
