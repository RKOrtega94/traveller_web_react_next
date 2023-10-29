import Card from "@components/cards/main-card";

export default function CategoryListDetail() {
  return (
    <Card>
      <div>
        <h4 className="card-title">Activity name</h4>
        <p className="text-gray-600">Activity description</p>
        <div>Images carrousel</div>
        <div>Relates places</div>
      </div>
    </Card>
  );
}
