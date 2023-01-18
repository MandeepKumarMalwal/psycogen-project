import styled from "styled-components";
import theme from "../../../themes/default";

export const NavbarContainer = styled.nav.attrs(()=>({
    className : "navbar navbar-expand-lg sticky-top bg-white m-0 p-0"
}))``

export const Container  = styled.div.attrs(()=>({
    className : "container my-3 p-0"
}))``

export const Col = styled.div.attrs(()=>({
    className : "col d-flex"
}))`
    width: 98%;
`
export const Logo = styled.div.attrs(()=>({
    className : "logo"
}))``

export const Icon = styled.span.attrs(()=>({
    className :"navbar-toggler-icon",
}))``

export const NavbarCollapse = styled.div.attrs(()=>({
    className : "collapse navbar-collapse"
}))`
`

export const NavbarCollapseInner = styled.div.attrs(()=>({
    className : "p-0"
}))`
height: 36px;
margin-left: 5rem!important;
margin-top: 1.5rem!important;
width : 90%;
`

export const Ullist = styled.ul.attrs(()=>({
    className : "d-flex p-0 w-100 items"
}))`
    list-style: none;
    margin-left: 0%;
    height: 28px;
    margin-top: 5px;
`
export const Menu = styled.li`
    margin-left: 2%;
    padding-right: 2%;
     border-right-style: solid;
    border-color: rgba(0, 0, 0, 0.05);
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
`
export const DropdownContent = styled.div.attrs(()=>({
    className : "dropdown-content"
}))`
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 200px;
`
export const Dropdown = styled.div.attrs(()=>({
    className : "dropdown"
}))`
    margin-left: 2%;

    &:hover{
        .dropdown-content{
            display: block;
        }
    }
`

export const MenuLink = styled.a`
    color: black !important;
  font-weight: 600;
  text-decoration: none;
  list-style: none;
`
export const MenuLinkdiv = styled.a`
  color: black !important;
  font-weight: 600;
  text-decoration: none;
  list-style: none;
  margin-right: 10px;
`
export const DropdownLink = styled.a`
  padding: 10px 18px;
  text-decoration: none;
  display: block;
  color: #5f5f5f !important; 
  font-size: 14px !important;
`
export const Search = styled.div.attrs(()=>({
    className : "form-search"
}))``

export const Searchicon = styled.i.attrs(()=>({
    className : "fa fa-search"
}))`
 margin-left: -25%;
`

export const Btn = styled.button.attrs(()=>({
    className : "btnn"
}))`
    color: ${theme.colors.textcolor};
  border: none;
  width: 30%;
  margin-right: 5%;
  margin-top: 1%;
  height: 45px;
  background-color: ${theme.colors.defaultcolor};
`
export const Searchbtn = styled.button.attrs(()=>({
    className : "btn btn-primary"
}))`
   width: 102px;
    height: 44px;
    margin-top: 13px;
    margin-right: 38px;
    background-color: ${theme.colors.defaultcolor};
    border-color: ${theme.colors.defaultcolor};
    padding-top: 10px;

    &:hover{
        background-color: #da605a!important;
        border-color: #da605a!important;
    }
`
export const Searchbar = styled.input.attrs({
    type : 'search',
    placeholder : 'Search'
})`
    width: 98%;
    height: 100%;
    font-size: 23px;
`

export const ModalBody = styled.div.attrs(()=>({
    className : "modal-body"
}))`
height : 80px;


`
// <-------------Side NAvbar --------------------->


export const ToggleButton = styled.button`
display: none;

@media only screen  and (max-width : 1024px){
    display : block;
}
`
export const ToggleUl = styled.ul.attrs(()=>({
    className : "list-group"
}))`
display: none;
position : fixed ;
right : 0 ;
top: 0 ;
width : 200;
height: 100%;
background-color : black !important;
/* transition: width 2s; */
z-index: 1;


 @media only screen and (max-width : 1024px){
    display : block;
 }
`
export const ToggleLi = styled.li.attrs(()=>({
    className : "list-group-item"
}))`
background-color: black;
color : whitesmoke
`

