import styled from "styled-components";

export const Section = styled.div`
 width: 75%;
 margin-left: 11%;
`

export const Row = styled.div.attrs(()=>({
    className : "row m-0 d-sm-flex"
}))`

`

export const Col1 = styled.div.attrs(()=>({
    className : "col-12 col-lg-5"
}))``

export const Image = styled.img.attrs((props)=>({
    src : props.src
}))`
 margin-left: 10%;
  border: 1px solid black !important;
  width: "-webkit-fill-available";
`
export const Col2 = styled.div.attrs(()=>({
    className : "col-12 col-lg-7"
}))``

export const Text = styled.div`
`
export const H6 = styled.h6`
 font-size: 25px;
  line-height: 40px;
  margin-bottom: 10px;
`
export const P = styled.p`
 text-align: justify;
  color: #000;
  font-size: 14px;
  line-height: 25px;
  margin-right: 23px;
`
export const Ul = styled.ul`
  color: #737e86;
  font-size: 14px;
  line-height: 35px;
`