import MyProfile from "./components/MyProfile";
import Posts from "./components/Posts";

const revalidate = 10;
export default function Home() {
  return (
    <div className="mx-auto">
      <MyProfile/>
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I'm <span className="font-bold">Mark</span>.
        </span>
      </p>
      <Posts />
    </div>
  );
}
