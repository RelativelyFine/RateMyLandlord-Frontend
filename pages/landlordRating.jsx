import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Lordlist from "../components/Lordlist";
import Footer from "../components/Footer";
import { withRouter } from "next/router";

function Home({ router }) {
  return (
    <div>
      <Head>
        <title>Rate My Landlord</title>
        <meta name="The Contender for HT6" content="Created by a Webdev Team" />
        <link rel="icon" href="/assets/photos/logo.png" />
      </Head>
      <Lordlist name={router.query.name} />
      <Navbar />
      <Footer />
    </div>
  );
}

export default withRouter(Home);
