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
import { ButtonLinkWebComponent } from "./components/buttonlink.component/buttonlink.component";

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



/*const routes = [
    { path: "/personalinfoview", view: "<fa-personalinfoview></fa-personalinfoview>" },
    { path: "/expenseslistview", view: "<fa-expenseslistview></fa-expenseslistview>" },
    { path: "/persontaxpayeradd", view: "<fa-persontaxpayeradd></fa-persontaxpayeradd>" },
    { path: "/homeview", view: "<fa-homeview></fa-homeview>" },
    { path: "/loginview", view: "<fa-loginview></fa-loginview>" }
]
const router = (path) => {
    console.log("jkidsnbhjfd");
    let route = routes.find(route => route.path === path);
    document.querySelector("body").innerHTML = route.view;
};

document.addEventListener('message', (e) => {

    console.log("Estoy aqui");

    let obj = routes.find(route => route.path === e.detail.href);

    console.log(obj.view);
    document.querySelector("body").innerHTML = obj.view;
})*/

//page('/', index)

page('/homeview', () => {
    document.querySelector("body").innerHTML = "<fa-homeview></fa-homeview>";
})
page('/personalinfoview', () => {
    document.querySelector("body").innerHTML = "<fa-personalinfoview></fa-personalinfoview>";
})
page('/expenseslistview', () => {
    document.querySelector("body").innerHTML = "<fa-expenseslistview></fa-expenseslistview>";
})
page('/persontaxpayeradd', () => {
    document.querySelector("body").innerHTML = "<fa-persontaxpayeradd></fa-persontaxpayeradd>";
})
page('/loginview', () => {
    document.querySelector("body").innerHTML = "<fa-loginview></fa-loginview>";
})




page('*', notfound)
page()


function notfound(ctx) {
    console.log("not found");
}