import React, { useState,useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image';
import { NavbarContainer,Container,Col,Logo,NavbarCollapse,NavbarCollapseInner,Ullist,MenuLinkdiv,ToggleButton,ToggleUl,ToggleLi,
  Menu,Dropdown,DropdownContent,MenuLink,DropdownLink,Searchbar,Btn,Searchbtn,ModalBody} from "../Navbar/Styles/Navbar.styled";


export default function Navbar() {
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <NavbarContainer>
     <Container>
        <Col>
         <Logo>
            <a href="https://www.psycogen.in/">
              <img src="https://www.psycogen.in/wp-content/uploads/2022/07/captab-logo.png" />
            </a>
            </Logo>
         <ToggleButton
            onClick={() => setToggle(true)}>
           &#9776;
           </ToggleButton> 
      {toggle && (
       <ToggleUl>
          <button onClick={()=>setToggle(false)}>close</button>
          <ToggleLi>Home</ToggleLi>
          <ToggleLi>About</ToggleLi>
          <ToggleLi>Products</ToggleLi>
          <ToggleLi>Services</ToggleLi>
          <ToggleLi>Product Gallary</ToggleLi>
          <ToggleLi>Contact Us</ToggleLi>
          </ToggleUl>
      )}

          <NavbarCollapse>
          <NavbarCollapseInner>
            <Ullist>
              <Menu>
                <MenuLink href="/">Home</MenuLink>
              </Menu>
              <Menu>
                <MenuLink href="/about">About</MenuLink>
              </Menu>
              <Dropdown>
                <Menu>
                <MenuLinkdiv href="/products/products">Products</MenuLinkdiv>
                </Menu>
                <DropdownContent>
                  <DropdownLink href="/products/hardgel">HARDGEL CAPSULES </DropdownLink>
                  <DropdownLink href="/products/hardgel">HARDGEL CAPSULES </DropdownLink>
                  <DropdownLink href="/products/hardgel">HARDGEL CAPSULES </DropdownLink>
                  <DropdownLink href="/products/hardgel">HARDGEL CAPSULES </DropdownLink>
                </DropdownContent>
              </Dropdown>
              <Dropdown>
                <Menu>
                <MenuLinkdiv href="/">Services</MenuLinkdiv>
                </Menu>
                <DropdownContent>
                  <DropdownLink href="/neuropsychiatry">Neuropsychiatry Franchise </DropdownLink>
                </DropdownContent>
              </Dropdown>
              <Menu>
                <MenuLink href="/products/products">Product Gallary</MenuLink>
              </Menu>
              <Menu>
                <MenuLink href="/contact">Contact Us</MenuLink>
              </Menu>
            </Ullist>
          </NavbarCollapseInner>
          <Searchbtn variant="primary" onClick={handleShow}>
          <Image
          src = "/../public/iconsearch.png"
          width={20}
          height={20}
          />
      </Searchbtn>

      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        </Modal.Header>
        <ModalBody>
          <Searchbar/>
        </ModalBody>
      </Modal>
              <Btn>Product List</Btn>
            </NavbarCollapse>
          </Col>
        </Container>
      </NavbarContainer>
      
    </>
  )
}
