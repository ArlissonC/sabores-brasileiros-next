import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import PopularDishes from "@/components/PopularDishes";
import Services from "@/components/Services";
import Menu from "@/components/Menu";
import TableReservation from "@/components/TableReservation";
import Newsletter from "@/components/Newsletter";
import Location from "@/components/Location";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sabores Brasileiros</title>
      </Head>
      <main>
        <Intro />
        <PopularDishes />
        <Services />
        <Menu />
        <TableReservation />
        <Newsletter />
        <Location />
      </main>
    </>
  );
}
