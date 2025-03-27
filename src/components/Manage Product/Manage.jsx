import kkImage from "../../assets/imgs/kk.jpg";
import gifVideo from "../../assets/imgs/gif.mov";
export default function Manage() {
  return (
    <div className="w-[100%] flex items-center justify-center">
      <img className="w-[500px]" src={kkImage} alt="Product" />

      <video src={gifVideo} controls autoPlay loop className="w-[570px] h-auto" />
    </div>
  );
}
