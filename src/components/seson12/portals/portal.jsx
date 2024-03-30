import { createPortal } from "react-dom";
const Portal = () => {
    return createPortal(
        <>
        <h1 className="text-white">this is portal</h1>
        </>
    , document.getElementById ("portal-root"))
}
export default Portal;
// Note 
// پورتال ها به چه دردی میخورند؟؟
// پورتال ها برای ساختن مودال هایی یا تول تیپ هایی و یا .. هایی استفاده میشوند که فرانت اند کار میخواهد ان ها را خودش بسازد و از کامپوننت های اماده استفاده نکند