import React from 'react'
import Header from './Header';
import styled from '@emotion/styled';
import Text from './Text';
import Filter from './Filter';
import Cart from './Cart';
import FooterCom from './FooterCom';


const Home = () => {
    const Home=styled.div({
      backgroundColor: "#FCF3E6",
      boxShadow: "110px 134px 210px 0px rgba(0, 0, 0, 0.15)",
      // maxWidth: "1440px",
      // maxHeight: "2239px",
    overflow:"hidden"
   
    })
  return (
    // <SwipeableTemporaryDrawer/>
    <Home>
       <Header/>
       <Text/>
       <Filter/>
       <Cart/>
        <FooterCom/>
        
    </Home>
  )
}

export default Home
