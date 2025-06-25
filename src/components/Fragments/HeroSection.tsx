export default function HeroSection() {
  return (
    <div className="flex items-center">
      <div className="w-1/2">
        <h1 className="text-3xl mb-4 font-bold">Subject Preference Breakdown</h1>
        <p className="text-black/60">
          See how your interests are distributed across different subjects. This
          table shows the percentage and score for each subject area based on
          your quiz results helping you understand where your strengths and
          preferences truly lie.
        </p>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <img src="/tablePersentase.png" alt="Tabel Persentase" className="w-[400px]" />
      </div>
    </div>
  );
}
