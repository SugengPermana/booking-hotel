import HeaderSection from "@/components/header-section"
import Main from "@/components/main"
import { Metadata } from "next"
import { Suspense } from "react"

export const metadata:Metadata = {
  title: "Rooms & Rates",
  description: "Choose Your Best Room Today"
}

const RoomPage = () => {
  return (
    <div>
      <HeaderSection title="Rooms & Rates" subTitle="lorem ipsun dolor sir amet"/>
      <div className="mt-10 px-4">
        <Suspense fallback={<p>loading...</p>}>
          <Main />
        </Suspense>
      </div>
    </div>
  )
}

export default RoomPage
