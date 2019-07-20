import React, {Component} from 'react';
import {Router, Stack, Scene, ActionConst} from 'react-native-router-flux';

import Splash from './startup/Splash';
import SignIn from './startup/SignIn'
import ScanProduct from './product/ScanProduct';
import ProductDetailsNormal from './product/ProductDetailsNormal';
import ProductDetailsWarning from './product/ProductDetailsWarning';
import Cart from './cart/Cart';

const RootStack = () => (
    <Router>
        <Stack key="root" hideNavBar={true}>
            <Scene key="splash" component={Splash} hideNavBar={true} type={ActionConst.RESET} />
            <Scene key="signIn" component={SignIn} hideNavBar={true} type={ActionConst.RESET} />

            <Scene key="scanProduct" component={ScanProduct} hideNavBar={true} />
            <Scene key="productNormal" component={ProductDetailsNormal} hideNavBar={true} />
            <Scene key="productWarning" component={ProductDetailsWarning} hideNavBar={true} />
            <Scene key="cart" component={Cart} hideNavBar={true} />
        </Stack>
    </Router>
);

export default class App extends Component{
    render(){
        return(
            // <Splash />
            // <ScanProduct />
            // <ProductDetailsNormal/>
            // <ProductDetailsWarning/>
            // <Cart/>
            <RootStack/>
        )
    }
}