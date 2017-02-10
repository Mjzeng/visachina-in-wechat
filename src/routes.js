import App from './App'
import Home from './views/home/Home'
import VisaIndex from './views/visa/VisaIndex'
import VisaDetail from './views/visa/VisaDetail'
import VisaInformation from './views/visa/VisaInformation'
import VisaOrder from './views/visa/VisaOrder'
import VisaOrderDetail from './views/visa/VisaOrderDetail'
import VisaProgress from './views/visa/VisaProgress'
import ProgressDetail from './views/visa/ProgressDetail'
import VisaSuccess from './views/visa/Success'
import InsuranceIndex from './views/insurance/InsuranceIndex'
import InsuranceList from './views/insurance/InsuranceList'
import InsuranceDetail from './views/insurance/InsuranceDetail'
import InsuranceSpecific from './views/insurance/InsuranceSpecific'
import InsuranceCreateOrder from './views/insurance/InsuranceCreateOrder'
import WifiIndex from './views/wifi/WifiIndex'
import WifiHelp from './views/wifi/WifiHelp'
import WifiList from './views/wifi/WifiList'
import WifiDetail from './views/wifi/WifiDetail'
import WifiCounter from './views/wifi/WifiCounter'
import WifiOrder from './views/wifi/WifiOrder'
import WifiSuccess from './views/wifi/Success'
import HotelList from './views/hotel/HotelList'
import HotelDetail from './views/hotel/HotelDetail'
import HotelIntro from './views/hotel/HotelIntro'
import HotelForm from './views/hotel/HotelForm'
import HotelRoomSelect from './views/hotel/HotelRoomSelect'
import UserCenter from './views/usercenter/UserCenter'
import Collection from './views/usercenter/Collection'
import CommonInformation from './views/usercenter/CommonInformation'
import BindPhone from './views/usercenter/BindPhone'
import OrderList from './views/usercenter/OrderList'

var routes = [{
  path: "/",
  component: Home
},{
  path: "/home",
  component: Home
},{
  path: "/visa",
  component: VisaIndex
},{
  path: "/visaDetail/:id",
  component: VisaDetail
},{
  path: "/visaInformation",
  component: VisaInformation
},{
  path: "/visaOrder/:id",
  component: VisaOrder
},{
  path: "/visaOrderDetail/:id",
  component: VisaOrderDetail
},{
  path: "/visaProgress",
  component: VisaProgress
},{
  path: "/progressDetail",
  component: ProgressDetail
},{
  path: "/visaSuccess",
  component: VisaSuccess
},{
  path: "/insurance",
  component: InsuranceIndex
},{
  path: "/insuranceList/:type",
  component: InsuranceList
},{
  path: "/insuranceDetail/:id",
  component: InsuranceDetail
},{
  path: "/insuranceSpecific/:id",
  component: InsuranceSpecific
},{
  path: "/insuranceCreateOrder/:id",
  component: InsuranceCreateOrder
},{
  path: "/wifi",
  component: WifiIndex
},{
  path: "/wifiHelp",
  component: WifiHelp
},{
  path: "/wifiList",
  component: WifiList
},{
  path: "/wifiDetail/:id",
  component: WifiDetail
},{
  path: "/wifiCounter/:id",
  component: WifiCounter
},{
  path: "/wifiOrder/:id",
  component: WifiOrder
},{
  path: "/wifiSuccess",
  component: WifiSuccess
},{
  path: "/hotel",
  component: HotelList
},{
  path: "/hotelDetail/:id",
  component: HotelDetail
},{
  path: "/hotelIntro/:id",
  component: HotelIntro
},{
  path: "/hotelForm/:id",
  component: HotelForm
},{
  path: "/hotelRoomSelect",
  component: HotelRoomSelect
},{
  path: "/userCenter",
  component: UserCenter
},{
  path: "/collection",
  component: Collection
},{
  path: "/commonInformation",
  component: CommonInformation
},{
  path: "/bindPhone",
  component: BindPhone
},{
  path: "/orderList/:status",
  component: OrderList
},{
  path: "/orderList",
  component: OrderList
}];

export default routes
