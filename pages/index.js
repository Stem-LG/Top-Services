import NavBar from "../components/navbar";
import ImageSlider from "../components/image_slider";
// import Services from "../components/service";
import MiniGallery from "../components/mini_gallery";
import ContactFooter from "../components/contactfooter";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}

export default function Home(props) {
  const { t } = useTranslation("home");

  return (
    <>
      <NavBar tr={t} />
      <ImageSlider tr={t} />
      {/* <Services margin="2rem 0 2rem 0" /> */}
      <MiniGallery
        margin={{ xs: "6rem 0rem 3rem 0rem", md: "6rem 2rem 3rem 2rem" }}
        padding="1rem"
        tr={t}
      />
      
      <ContactFooter tr={t} />
    </>
  );
}
