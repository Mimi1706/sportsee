import "./Dashboard.css"

import caloriesIcon from "../../Assets/KeyData/calories-icon.png"
import carbsIcon from "../../Assets/KeyData/carbs-icon.png"
import fatIcon from "../../Assets/KeyData/fat-icon.png"
import proteinIcon from "../../Assets/KeyData/protein-icon.png"

import Header from "../../Components/Header/Header"
import SideBar from "../../Components/SideBar/SideBar"

import KeyData from "../../Components/KeyData/KeyData"
import ChartBar from "../../Components/Charts/ChartBar"
import ChartLine from "../../Components/Charts/ChartLine"
import ChartRadar from "../../Components/Charts/ChartRadar"
import ChartPie from "../../Components/Charts/ChartPie"

import urldatamock from "../../Utils/urldatamock"
import apifetch from "../../Utils/Apifetch"

const Dashboard = () => {
  const dataMain = apifetch(urldatamock.urlMainData("18"))
  const activity = apifetch(urldatamock.urlActivity("18"))
  const sessions = apifetch(urldatamock.urlSessions("18"))
  const performance = apifetch(urldatamock.urlPerformance("18"))

  return dataMain === null ||
    activity === null ||
    sessions === null ||
    performance === null ? (
    console.log("Chargement...")
  ) : (
    <>
      <Header />
      <main className="Dashboard">
        <h1>
          Bonjour <span>{dataMain.data.userInfos.firstName}</span>
        </h1>
        <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
        <section className="Activities">
          <div className="ChartsWrapper">
            <ChartBar data={activity.data.sessions} />
            <ChartLine data={sessions.data.sessions} />
            <ChartRadar data={performance.data.data} />
            <ChartPie />
          </div>
          <div className="KeyDataWrapper">
            <KeyData
              src={caloriesIcon}
              name="Calories"
              number={dataMain.data.keyData.calorieCount + "kCal"}
            />
            <KeyData
              src={proteinIcon}
              name="Proteines"
              number={dataMain.data.keyData.proteinCount + "g"}
            />
            <KeyData
              src={carbsIcon}
              name="Glucides"
              number={dataMain.data.keyData.carbohydrateCount + "g"}
            />
            <KeyData
              src={fatIcon}
              name="Lipides"
              number={dataMain.data.keyData.lipidCount + "g"}
            />
          </div>
        </section>
      </main>
      <SideBar />
    </>
  )
}

export default Dashboard
