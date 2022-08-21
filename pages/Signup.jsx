import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Signup from "../components/Signup";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rate My Landlord</title>
        <meta name="The Contender for HT6" content="Created by a Webdev Team" />
        <link rel="icon" href="/assets/photos/logo.png" />
      </Head>
      <Signup />
      <Navbar />
      <Footer />
    </div>
  );
}
