import styled from "styled-components";

export const Container = styled.div.attrs(()=>({
    className : "container mt-4"
}))``

export const ProductWrapper = styled.div.attrs(()=>({
    className : "product_wrapper"
}))``

export const Col1 = styled.ul.attrs(()=>({
    className : "col d-flex product_cat m-0 p-0"
}))`
  border: none;
  list-style: none;
`

export const ProductType = styled.li.attrs(()=>({
    className : "product_type"
}))``

export const ImgWrap = styled.div.attrs(()=>({
   className : "img_wrap"
}))``

export const Image = styled.img.attrs((props)=>({
    className : "product_img",
    src : props.src
}))`
 width: 274px;
  height: 257px;
  border: 1px solid gray;
  background: rgba(255, 255, 255, 0.4);
`

export const Desc= styled.div.attrs(()=>({
    className : "desc"
}))`
 margin-top: 20px;
  background: #b3211a;
  padding: 15px 20px;
  text-align: center;
`
export const ProductType3 = styled.li.attrs(()=>({
    className : "product_type mx-3"
}))``

export const ProductType1 = styled.li.attrs(()=>({
    className : "product_type mx-1"
}))``

export const ProductType2 = styled.li.attrs(()=>({
    className : "product_type mx-2"
}))``

export const LinkDesc = styled.a`
text-decoration: none;
  color: white;
`
export const H4 = styled.h4`
 font-size: 23px;
`

export const ProductCat = styled.ul.attrs(()=>({
    className : "col d-flex product_cat mt-4 p-0" 
}))`list-style : none;`