import Stepper from "../../ui/Stepper";
import { Icons } from "../../assets/icons/icons"
import AlertUi from "../../ui/Alert";
import Tag from "../../ui/Tag";
import { useTheme } from "@emotion/react";
import Group5 from "../../../public/images/Group5.png"
const HomeContainer = () => {
    const images1 =[
        Group5,
    ] 
    const images2 =[] 

    const theme = useTheme();

    return (
        <>
            <div className="grid grid-rows-2 ">
                {/* SECTION top section */}
                <div>
                    <Stepper images={images1} footerContent={<>
                        <p className="mt-10">هیمشه پای صداقت بار در میونه...</p>
                    </>}  />
                    <div className="mt-5 flex justify-evenly items-center ">
                        <hr className=" w-[40%] border-zinc-300 mx-[7px]" />
                        <p className="w-[20%] font-[Dana-bold] text-zinc-500 min-[350px]:text-[12px] text-center ">دسته بندی</p>
                        <hr className=" w-[40%] border-zinc-300 mx-[7px]" />
                    </div>
                </div>
                {/* SECTION middle section */}
                <div>
                    <div className="flex justify-around mt-5">
                        <span>{Icons.checkStar}</span>
                        <span>{Icons.checkStar}</span>
                        <span>{Icons.checkStar}</span>
                    </div>
                    <div className="">

                        <AlertUi  icon={Icons.armor} content={
                            <>
                                <div className="">
                                    <p className="text-justify text-[12px]">
                                        <b className="ml-1">صداقت بار</b>
                                        تایید هویت رانندگان خود را به پلیس فتا سپرده است و ان را تایید مینماید.در در زمان انجام خدمت هویت رانندگان را برسی فرمایید.
                                        <b className="mx-auto  float-left">بیشتر </b>
                                    </p>

                                </div>
                            </>
                        } color={theme.palette.secondary.light} />

                        <div className="mt-7 flex justify-evenly items-center max-w-[500px] mx-auto">
                            <hr className=" w-[40%] border-zinc-300 mx-[6px]" />
                            <p className="w-[20%] font-[Dana-bold] text-zinc-500 min-[350px]:text-[12px] text-center ">ویژه صداقت</p>
                            <hr className=" w-[40%] border-zinc-300 mx-[6px]" />
                        </div>
                    </div>
                </div>
                {/* SECTION bottom section */}
                <div className="block ">
                    {/* NOTE slide bar section */}
                    <div className="mb-4">
                        <Stepper images={images1} footerContent={<>
                       <div className="">
                        <p className="p-1 bg-white h-[25px] w-[120px] m-auto rounded-lg text-blue font-[Dana-bold] text-[12px]">
                          جمعه های صداقتی
                        </p>
                        <p className="mr-2 mt-1">از اینجا به هرکجا ...</p>
                       </div>
                        </>} />
                    </div>
                    {/* NOTE alert section */}
                    <div className="mb-5">
                        <AlertUi icon={Icons.armor} content={
                            <>
                                <div className="font-[Dana-bold]">
                                    <div className="flex justify-between items-center gap-x-5">
                                        <p className="w-36 text-[13px]">مدت اعتبار این تخفیف</p>
                                        <div className="flex items-center justify-between w-32">
                                        <span><Tag content={"SDB1376"} color={theme.palette.primary.main} /></span>
                                            <span>{Icons.copy}</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-3 text-[13px]">
                                        <span>1 ساعت و 53 دیقه دیگر</span>
                                        <span>درخواست اثاث کشی</span>
                                    </div>
                                </div>
                            </>
                        } color={theme.palette.primary.light} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeContainer;