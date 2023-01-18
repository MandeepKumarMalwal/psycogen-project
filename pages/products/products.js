import Header from "../../components/Header/index";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/footer/footer";
import Link from "next/link";
import { Container,ProductWrapper,ProductType,ProductType1,ProductType2,ProductType3,Image,ImgWrap, Col1,Desc,LinkDesc,H4, ProductCat} from "../../styles/Product.styled";
import { ContainerHar,Nav,Ol,Li,Span,Li2 } from "../../styles/hardgel.styled";

export default function Products() {
  return (
    <>
      <Header />
      <Navbar />
      <ContainerHar>
        <h3>Product</h3>
        <Nav>
          <Ol>
            <Li>
              <Link href="/">Home</Link>
            </Li>
            <Span>&gt;</Span>
            <Li2>
              Product
            </Li2>
            </Ol>
            </Nav>
        </ContainerHar>

      <Container>
        <ProductWrapper>
          <Col1>
            <ProductType>
              <ImgWrap>
                <a href="https://www.psycogen.in/product/betahistine-16mg/">
                  <Image
                    src="https://www.psycogen.in/wp-content/uploads/2022/07/product-images_0000s_0129_Psycogen_Product_Images_PDF-035-removebg-preview-300x300.jpg"
                  />
                </a>
              </ImgWrap>
              <Desc>
                <H4>
                  <LinkDesc href="https://www.psycogen.in/product/betahistine-16mg/">
                    ACAMPROSATE CALCIUM TABLETS
                  </LinkDesc>
                </H4>
                </Desc>
              </ProductType>
            <ProductType3>
              <ImgWrap>
                <a href="https://www.psycogen.in/product/alprazolam-0-25-mg-fluoxetine-hydrochloride-20mg/">
                  <Image
                    src="https://www.psycogen.in/wp-content/uploads/2022/07/product-images_0000s_0158_Psycogen_Product_Images_PDF-006-removebg-preview-300x300.jpg"
                  />
                </a>
              </ImgWrap>
              <Desc>
                <H4>
                  <LinkDesc href="https://www.psycogen.in/product/alprazolam-0-25-mg-fluoxetine-hydrochloride-20mg/">
                    ALPRAZOLAM AND FLUOXETINE HYDROCHLORIDE TABLETS
                  </LinkDesc>
                </H4>
                </Desc>
              </ProductType3>
            <ProductType1>
              <ImgWrap>
                <a href="https://www.psycogen.in/product/acamprosate-calcium-333mg/">
                  <Image
                    src="https://www.psycogen.in/wp-content/uploads/2022/07/product-images_0000s_0104_Psycogen_Product_Images_PDF-060-removebg-preview-300x300.jpg"
                  />
                </a>
              </ImgWrap>
              <Desc>
                <H4>
                  <LinkDesc href="https://www.psycogen.in/product/alprazolam-0-25mg-propranolol-20mg/">
                    ALPRAZOLAM AND PROPRANOLOL TABLETS
                  </LinkDesc>
                </H4>
                </Desc>
              </ProductType1>
            <ProductType2>
              <ImgWrap>
                <a href="https://www.psycogen.in/product/amisulpride-50mg/">
                  <img
                    src="https://www.psycogen.in/wp-content/uploads/2022/07/product-images_0000s_0030_Psycogen_Product_Images_PDF-124-removebg-preview-1-300x300.jpg"
                  />
                </a>
              </ImgWrap>
              <Desc>
                <H4>
                  <LinkDesc href="https://www.psycogen.in/product/amisulpride-50mg/">
                    AMISULPRIDE TABLETS
                  </LinkDesc>
                </H4>
                </Desc>
              </ProductType2>
            </Col1>
          <ProductCat>
            <ProductType2>
              <ImgWrap>
                <a href="https://www.psycogen.in/product/amitriptyline-hydrochloride-12-5mg-chlordiazepoxide-5mg/">
                  <Image
                    src="https://www.psycogen.in/wp-content/uploads/2022/07/product-images_0000s_0070_Psycogen_Product_Images_PDF-088-removebg-preview-300x300.jpg"
                  />
                </a>
              </ImgWrap>
              <Desc>
                <H4>
                  <LinkDesc href="https://www.psycogen.in/product/amitriptyline-hydrochloride-12-5mg-chlordiazepoxide-5mg/">
                    AMITRIPTYLINE HYDROCHLORIDE AND CHLORDIAZEPOXIDE TABLETS
                  </LinkDesc>
                </H4>
                </Desc>
            </ProductType2>
            <ProductType2>
              <ImgWrap>
                <a href="https://www.psycogen.in/product/amitriptyline-hydrochloride-10mg/">
                  <Image
                    src="https://www.psycogen.in/wp-content/uploads/2022/07/product-images_0000s_0076_Psycogen_Product_Images_PDF-084-removebg-preview-300x300.jpg"
                  />
                </a>
              </ImgWrap>
              <Desc>
                <H4>
                  <LinkDesc href="https://www.psycogen.in/product/amitriptyline-hydrochloride-10mg/">
                    AMITRIPTYLINE HYDROCHLORIDE TABLETS
                  </LinkDesc>
                </H4>
                </Desc>
            </ProductType2>
            <ProductType2>
              <ImgWrap>
                <a href="https://www.psycogen.in/product/sodium-valporate-200mg-5ml/">
                  <Image
                    src="https://www.psycogen.in/wp-content/uploads/2022/07/product-images_0000s_0161_Psycogen_Product_Images_PDF-003-removebg-preview-300x300.jpg"
                  />
                </a>
              </ImgWrap>
              <Desc>
                <H4>
                  <LinkDesc href="https://www.psycogen.in/product/sodium-valporate-200mg-5ml/">
                    AP-CHRONO
                  </LinkDesc>
                </H4>
                </Desc>
            </ProductType2>
            <ProductType2>
              <ImgWrap>
                <a href="https://www.psycogen.in/product/sodium-valporate-200mgvalporic-acid-87mg/">
                  <Image
                    src="https://www.psycogen.in/wp-content/uploads/2022/07/product-images_0000s_0163_Psycogen_Product_Images_PDF-001-removebg-preview-300x300.jpg"
                  />
                </a>
              </ImgWrap>
              <Desc>
                <H4>
                  <LinkDesc href="https://www.psycogen.in/product/sodium-valporate-200mgvalporic-acid-87mg/">
                    AP-CHRONO-300
                  </LinkDesc>
                </H4>
                </Desc>
            </ProductType2>
          </ProductCat>
          <ProductCat>
            <ProductType2>
              <ImgWrap>
                <a href="https://www.psycogen.in/product/sodium-valporate-333mgvalporic-acid-145mg/">
                  <Image
                    src="https://www.psycogen.in/wp-content/uploads/2022/07/product-images_0000s_0159_Psycogen_Product_Images_PDF-005-removebg-preview-300x300.jpg"
                  />
                </a>
              </ImgWrap>
              <Desc>
                <H4>
                  <LinkDesc href="https://www.psycogen.in/product/sodium-valporate-333mgvalporic-acid-145mg/">
                    AP-CHRONO-500
                  </LinkDesc>
                </H4>
                </Desc>
            </ProductType2>
            <ProductType2>
              <ImgWrap>
                <a href="https://www.psycogen.in/product/aripiprazole-10mg/">
                  <Image
                    src="https://www.psycogen.in/wp-content/uploads/2022/07/product-images_0000s_0052_Psycogen_Product_Images_PDF-105-removebg-preview-300x300.jpg"
                  />
                </a>
              </ImgWrap>
              <Desc>
                <H4>
                  <LinkDesc href="https://www.psycogen.in/product/aripiprazole-10mg/">
                    ARIPIPRAZOLE TABLETS
                  </LinkDesc>
                </H4>
                </Desc>
            </ProductType2>
            <ProductType2>
              <ImgWrap>
                <a href="https://www.psycogen.in/product/betahistine-16mg/">
                  <Image
                    src="https://www.psycogen.in/wp-content/uploads/2022/07/product-images_0000s_0156_Psycogen_Product_Images_PDF-008-removebg-preview-300x300.jpg"
                  />
                </a>
              </ImgWrap>
              <Desc>
                <H4>
                  <LinkDesc href="https://www.psycogen.in/product/betahistine-16mg/">
                    BETAHISTINE TABLETS
                  </LinkDesc>
                </H4>
                </Desc>
            </ProductType2>
            <ProductType2>
              <ImgWrap>
                <a href="https://www.psycogen.in/product/amisulpride-50mg/">
                  <Image
                    src="https://www.psycogen.in/wp-content/uploads/2022/07/product-images_0000s_0158_Psycogen_Product_Images_PDF-006-removebg-preview-300x300.jpg"
                  />
                </a>
              </ImgWrap>
              <Desc>
                <H4>
                  <LinkDesc href="https://www.psycogen.in/product/amisulpride-50mg/">
                    AMISULPRIDE TABLETS
                  </LinkDesc>
                </H4>
                </Desc>
            </ProductType2>
          </ProductCat>
          </ProductWrapper>
        </Container>
      <Footer />
    </>
  );
}
