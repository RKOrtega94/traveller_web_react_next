export default function RecommendedPlace() {
  return (
    <section className="w-full flex justify-center">
      <aside className="w-full max-w-7xl flex flex-col md:flex-row gap-4">
        <div className="w-1/2">
          <h6>Place name</h6>
          <p>Place description</p>
        </div>
        <section>Images</section>
      </aside>
    </section>
  );
}
