import Nav from "./Component/Header/nav";
import Body from "./Component/Body/body";

export default function App() {
  return (
    <div className="font-kubh flex items-center justify-center flex-col md:gap-20 text-base h-10/12">
      <Nav />
      <Body />
    </div>
  );
}
