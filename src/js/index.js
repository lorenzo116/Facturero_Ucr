import { ButtonWebComponent } from "./components/button/button.component";
import { TextfieldWebComponent } from "./components/textflied/textfield.component";
import { EmergencyloginWebComponent } from "./modules/emergencylogin/emergencylogin.component";
import { RegistroWebComponent } from "./components/registro/registro.component";
import { LogoWebComponent } from "./components/logo/logo.component";
import { MainlandingviewWebComponent } from "./modules/mainlandingview/mainlandingview.component";
import { LoginViewWebComponent } from "./modules/loginview/loginview.component";

/*import { CreateaccountviewWebComponent } from "./modules/createaccountview/createaccountview.component";*/
import { DropdownWebComponent } from "./components/dropdown/dropdown.component";
import { ResultbillcreationWebComponent } from "./modules/resultbillcreation/resultbillcreation.component";
import { LabelWebComponent } from "./components/label/label.component";
import { HomeviewWebComponent } from "./modules/homeview/homeview.component";
import { CalendarWebComponent } from "./components/caledar/calendar.component";
import { CreatereservationWebComponent } from "./modules/createreservation/createreservation.component";
import { TextareaWebComponent } from "./components/textarea/textarea.component";
import { DrawerWebComponent } from "./components/drawer/drawer.component";

import { TexpayereditWebComponent } from "./modules/taxpayeredit/taxpayeredit.component";
import { RadioWebComponent } from "./components/radio/radio.component";
import { AddUserViewWebComponent } from "./modules/adduserview/adduserview.component";
import { AddClienteViewWebComponent } from "./modules/addclienteview.component/addclienteview.component";
import { PersonAddViewWebComponent } from "./modules/personadd/personadd.component";
import { PersonlInfoViewWebComponent } from "./modules/personalinfoview/personalinfoview.component";

import { DetailedbillinfoWebComponent } from "./modules/detailedbillinfo/detailedbillinfo.component";
import { DetailAddWebComponent } from "./modules/detailadd/detailadd.component";
import "side-drawer";
import { SelectWebComponent } from "./components/select/select.component";
import { OptionWebComponent } from "./components/option/option.component";
import { PersontaxpayeraddWebComponent } from "./modules/persontaxpayeradd/persontaxpayeradd.component";
import { UpdateusersectionWebComponent } from "./modules/updateusersection/updateusersection.component";
import { SuccessregistrationviewWebComponent } from "./modules/successregistrationview/successregistrationview.component";
import { TitleWebComponent } from "./components/title/title.component";
import { ReportingviewWebComponent } from "./modules/reportingview/reportingview.component";
import { LayoutWebComponent } from "./components/layout/layout.component";

import { loadingWebComponent } from "./modules/loading/loading.component";
import { exoneracionviewWebComponent } from "./modules/exoneracionview/exoneracionview.component";
import { customizationviewWebComponent } from "./modules/customizationview/customizationview.component";
import { expensesmenuviewWebComponent } from "./modules/expensesmenuview/expensesmenuview.component";
import { expenseslistviewComponent } from "./modules/expenseslistview/expenseslistview.component";
import { billvoidWebComponent } from "./modules/billvoid/billvoid.component";
import { suscriptionregistrationWebComponent } from "./modules/suscriptionregistration/suscriptionregistration.component";
/**
 *  *Este module se usa para pruebas
 */
import { PruebaWebComponent } from "./modules/prueba/prueba.component";
import { LinkWebComponent } from "./components/link/link.component";
import { CheckitemWebComponent } from "./components/checkItem/checkItem.component";
import { SelectroomWebComponent } from "./modules/selectroomview.component/selectroomview.component";

import "side-drawer";
import './../style/facturero.global.scss';

import page from './services/page.js';
import { createStore } from 'redux';



const reducer = (state = [], action) => {
    console.log("reducer", state, action);
    if (action.type === 'VIEW_CHANGED') {
        document.querySelector("body").innerHTML = `<fa-${action.payload}></fa-${action.payload}>`;
        return [action.payload];
    }
    return state;
}
const store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
})

// store.dispatch({ type: 'VIEW_CHANGED', payload: 'view' })

page('/homeview', () => {
    //document.querySelector("body").innerHTML = "<fa-homeview></fa-homeview>";
    store.dispatch({ type: 'VIEW_CHANGED', payload: 'homeview' });
})
page('/personalinfoview', () => {
    document.querySelector("body").innerHTML = "<fa-personalinfoview></fa-personalinfoview>";
    store.dispatch({ type: 'VIEW_CHANGED', payload: '/personalinfoview' })
})
page('/expenseslistview', () => {
    document.querySelector("body").innerHTML = "<fa-expenseslistview></fa-expenseslistview>";
    store.dispatch({ type: 'VIEW_CHANGED', payload: '/expenseslistview' })
})
page('/persontaxpayeradd', () => {
    document.querySelector("body").innerHTML = "<fa-persontaxpayeradd></fa-persontaxpayeradd>";
    store.dispatch({ type: 'VIEW_CHANGED', payload: '/persontaxpayeradd' })
})
page('/loginview', () => {
    document.querySelector("body").innerHTML = "<fa-loginview></fa-loginview>";
    store.dispatch({ type: 'VIEW_CHANGED', payload: '/loginview' })
})
page('/selectroomview', () => {
    document.querySelector("body").innerHTML = "<fa-selectroomview></fa-selectroomview>";
})
page('/createreservation', () => {
    document.querySelector("body").innerHTML = "<fa-createreservation></fa-createreservation>";
})
<<<<<<< Updated upstream
page('/emergencylogin', () => {
    document.querySelector("body").innerHTML = "<fa-emergencylogin></fa-emergencylogin>";
})
page('/resultbillcreation', () => {
    document.querySelector("body").innerHTML = "<fa-resultbillcreation></fa-resultbillcreation>";
})




=======
>>>>>>> Stashed changes

page('*', notfound)
page()


function notfound(ctx) {
    console.log("not found");
}