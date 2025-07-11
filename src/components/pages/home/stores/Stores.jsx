import { FaChild, FaFilm, FaStore, FaUtensils } from "react-icons/fa";
import CardStore from "../../../partials/CardStore";

const Stores = () => {
  return (
    <>
      {/* Stores Section */}
      <section id="stores" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Stores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CardStore
              image={
                "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              }
              alt={"Fashion Haven store"}
              Icon={FaStore}
              title={"Fashion Haven"}
              description={"Trendy clothing for all ages and styles"}
              location={"Level 2, Section B"}
            />
            <CardStore
              image={
                "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
              }
              alt={"Fashion Haven store"}
              Icon={FaUtensils}
              title={"Gourmet Delights restaurant"}
              description={"International cuisine and local favorites"}
              location={"Food Court, Level 1"}
            />
            <CardStore
              image={
                "https://images.unsplash.com/photo-1590845947676-fa2576f401d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              }
              alt={"Fashion Haven store"}
              Icon={FaFilm}
              title={"CineMax Theaters"}
              description={"Trendy clothing for all ages and styles"}
              location={" Entertainment Zone, Level 3"}
            />
            <CardStore
              image={
                "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              }
              alt={"Toy Wonderland store"}
              Icon={FaChild}
              title={"Toy Wonderland"}
              description={"Toys and games for kids of all ages"}
              location={"Family Zone, Level 2"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Stores;
