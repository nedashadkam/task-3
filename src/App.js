import "./App.css";
import React,{useState} from "react";
import ProductPage from "./components/axios/productPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Table from "./components/table/table";
// import PostsList from "./components/query/query";
// import GetData from "./components/query/query";
import ProductList from "./components/axios/productList";
import ShoppingBox from "./components/axios/shoppingBox";

function App() {

  // const tHeadData = [
    // {
      // title:'تاریخ ثبت'
    // },
    // {
      // title:' پیام'
    // },
    // {
      // title:' اولویت'
    // },
    // {
      // title:' آخرین وضعیت'
    // },
    // {
      // title:' گزارش دهنده'
    // },
    // {
      // title:' شماره گزارش دهنده'
    // },
    // {
      // title: 'نوع درخواست'
    // },
    // {
      // title:' کد پیگیری'
    // },
    // {
      // title:' زمان باقی مانده'
    // },
    // {
      // title:' خطر ساز'
    // }
  // ]

  // class TableData {
    // constructor(
        // id,
        // registrationDate,
        // message,
        // priority,
        // latestStatus,
        // reporter,
        // reporterPhoneNumber,
        // requestType,
        // trackingCode,
        // timeRemaining,
        // dangerous
        // ) {
        // this.id = id;
        // this.registrationDate = registrationDate;
        // this.message = message;
        // this.priority = priority;
        // this.latestStatus = latestStatus;
        // this.reporter = reporter;
        // this.reporterPhoneNumber = reporterPhoneNumber;
        // this.requestType = requestType;
        // this.trackingCode = trackingCode;
        // this.timeRemaining = timeRemaining;
        // this.dangerous = dangerous
    // }
// }
    
// const [tBodyData,setTBodyData] = useState([
    // new TableData(1,'1403/05/29','تست','آنی','اقدام نشده','ناشناس','09035932474','داشبورد','32412565','تمام شده',false),
    // new TableData(2,'1403/05/29','تست','فوری','اقدام نشده','ناشناس','09035932474','داشبورد','32412565','تمام شده',true),
    // new TableData(3,'1403/05/29','تست','عادی','اقدام نشده','ناشناس','09035932474','داشبورد','32412565','تمام شده',true),
    // new TableData(4,'1403/05/29','تست','عادی',' انجام شده','ناشناس','09035932474','داشبورد','32412565','انجام شده',true),
    // new TableData(5,'1403/05/29','تست','فوری','اقدام نشده','ناشناس','09035932474','داشبورد','32412565','تمام شده',false),
    // new TableData(6,'1403/05/25','تست','عادی','اقدام نشده','ناشناس','09035932474','داشبورد','32412565','تمام شده',true),
    // new TableData(7,'1403/05/22','تست','فوری','اقدام نشده','ناشناس','09035932474','داشبورد','32412565','تمام شده',true),
    // new TableData(8,'1403/05/22','تست','فوری','اقدام نشده','ناشناس','09035932474','داشبورد','32412565','تمام شده',true),
    // new TableData(9,'1403/05/22','تست','فوری','اقدام نشده','ناشناس','09035932474','داشبورد','32412565','تمام شده',true),
    // new TableData(10,'1403/05/22','تست','عادی','اقدام نشده','ناشناس','09035932474','داشبورد','32412565','تمام شده',true),
// ])

// function deletItem(id) {
  // const data = tBodyData.filter((item)=>item.id !== id)
  // setTBodyData(data)
// }

  return (
    <div className="App">
      {/* <h1 className="text-white text-5xl">{process.env.REACT_APP_NAME}</h1> */}
      {/* <Table tHeadData={tHeadData} tBodyData={tBodyData} deletItem={deletItem} /> */}

      <BrowserRouter>
      <Routes>
        <Route index element={<ProductList />} />
        <Route path="/productPage/:id" element={<ProductPage />} />
        <Route path="/shoppingBox" element={<ShoppingBox />} />
      </Routes>
      </BrowserRouter>

      

    </div>
  );
}

export default App;
