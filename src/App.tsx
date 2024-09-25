import "./App.css";

function App() {
  return (
    <>
      <div className="w-screen h-screen bg-[#262626]">
        <div className="flex flex-col items-center justify-center">
          <img
            src={`/assets/ssumap_logo.png`}
            className="h-auto w-[12rem] pt-[1.5rem]"
          />
          <img src={`/assets/app_logo.png`} className="pt-[12rem] w-[10rem]" />
          <div className="flex flex-col items-center justify-center font-semibold text-white text-[1.25rem] text-center pt-[2rem]">
            <div>내가 커스텀하는</div>
            <div>숭실대 스터디 공간 지도</div>
          </div>
          <a
            href="/assets/app_release.apk"
            download
            className="mt-[2rem] bg-[#0085FF] text-white rounded-md font-semibold px-[0.75rem] py-[0.5rem] hover:bg-[#006FCC] active:bg-[#0056A3] transition-colors duration-200 ease-in-out"
          >
            SSUMAP 다운로드
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
