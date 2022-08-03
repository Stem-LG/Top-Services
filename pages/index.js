import NavBar from "../components/navbar";
import ImageSlider from "../components/carouselimage";
import Services from "../components/service";
import MiniGallery from "../components/mini_gallery";
import ContactFooter from "../components/contactfooter";
import companyInfo from "../customizations";

export default function Home() {
  return (
    <>
      <NavBar logo={companyInfo.Logo} phone={companyInfo.Phone} />
      <ImageSlider />
      <Services margin="2rem 0 2rem 0" />
      <MiniGallery margin="6rem 2rem 3rem 2rem" padding="1rem" />
      <ContactFooter
        address={companyInfo.Address}
        phone={companyInfo.Phone}
        phone2={companyInfo.Phone2}
        email={companyInfo.Email}
        facebook={companyInfo.Facebook}
      />
    </>
  );
}
