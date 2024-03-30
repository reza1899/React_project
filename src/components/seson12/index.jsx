import Portal from "./portals/portal"
import { Suspense, lazy, useState } from "react";
const LasyComponent = lazy(() => import("./lasyLoading/lasyComponent"))
const Seson12 = () => {
    const [isShow, setIsShow] = useState(false)
    return (
        <>
            <button className="bg-white btn" onClick={() => setIsShow(true)}>
                Lazy Component
            </button>
            {
                isShow && (
                    <Suspense fallback={<div>Loading ...</div>}>
                        <LasyComponent />
                    </Suspense>
                )
            }
            <hr className="text-white" />
            <Portal />
        </>
    )
}
export default Seson12;